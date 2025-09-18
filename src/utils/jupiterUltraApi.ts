import { TOKENS } from "../constants/tokens";

const API_BASE =
  (import.meta as any).env?.VITE_JUPITER_API_BASE || "https://quote-api.jup.ag/v6";

function getDecimals(mint: string): number {
  const t = Object.values(TOKENS).find((x) => x.mint === mint);
  return t?.decimals ?? 9;
}

// Convert UI string to atomic string using decimals
function toAtomic(amountUi: string, decimals: number): string {
  const [wRaw, fRaw = ""] = amountUi.trim().split(".");
  const whole = (wRaw || "0").replace(/^0+/, "") || "0";
  const fracPadded = (fRaw || "").padEnd(decimals, "0").slice(0, decimals);
  const base = BigInt(10) ** BigInt(decimals);
  return (BigInt(whole) * base + BigInt(fracPadded || "0")).toString();
}

// Convert atomic string to UI string using decimals
function fromAtomic(atomicStr: string, decimals: number): string {
  const n = BigInt(atomicStr);
  const base = BigInt(10) ** BigInt(decimals);
  const whole = n / base;
  const frac = n % base;
  const fracStr = frac.toString().padStart(decimals, "0").replace(/0+$/, "");
  return fracStr ? `${whole.toString()}.${fracStr}` : whole.toString();
}

interface QuoteParams {
  inputMint: string;
  outputMint: string;
  amount: string; // UI units
  slippageBps?: number;
}

export async function getQuote(params: QuoteParams): Promise<{
  inAmount: string; // UI
  outAmount: string; // UI
  priceImpactPct?: number;
  route: any;
}> {
  const { inputMint, outputMint, amount, slippageBps = 50 } = params;

  const inDec = getDecimals(inputMint);
  const outDec = getDecimals(outputMint);
  const amountAtomic = toAtomic(amount, inDec);

  const url = new URL(`${API_BASE}/quote`);
  url.searchParams.set("inputMint", inputMint);
  url.searchParams.set("outputMint", outputMint);
  url.searchParams.set("amount", amountAtomic);
  url.searchParams.set("slippageBps", String(slippageBps));

  const res = await fetch(url.toString(), { method: "GET" });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Quote request failed: ${res.status} ${text}`);
  }

  const data = await res.json();
  const route = data?.data?.[0];
  if (!route) throw new Error("No route found for given parameters");

  return {
    inAmount: fromAtomic(String(route.inAmount), inDec),
    outAmount: fromAtomic(String(route.outAmount), outDec),
    priceImpactPct: route.priceImpactPct,
    route,
  };
}

interface SwapParams {
  route: any;
  userPublicKey: string;
}

export async function swap(_params: SwapParams): Promise<string> {
  // Demo-only fake signature so the UI can show a tx id
  await new Promise((r) => setTimeout(r, 500));
  return `DEMO_SIGNATURE_${Math.random().toString(36).slice(2)}_${Date.now()}`;
}
