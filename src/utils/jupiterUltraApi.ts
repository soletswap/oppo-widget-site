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
  signal?: AbortSignal;
}

export async function getQuote(params: QuoteParams): Promise<{
  inAmount: string; // UI
  outAmount: string; // UI
  priceImpactPct?: number;
  route: any;
}> {
  const { inputMint, outputMint, amount, slippageBps = 50, signal } = params;

  const inDec = getDecimals(inputMint);
  const outDec = getDecimals(outputMint);
  const amountAtomic = toAtomic(amount, inDec);

  // For demo purposes, use longer delay and mock data instead of real API
  await new Promise((resolve, reject) => {
    const timeoutId = setTimeout(resolve, 1500); // 1.5 second delay for demo
    
    if (signal) {
      signal.addEventListener('abort', () => {
        clearTimeout(timeoutId);
        reject(new Error('Operation was cancelled'));
      });
    }
  });

  // Mock response data for demo
  const mockOutAmount = (parseFloat(amount) * 150).toString(); // Mock conversion rate
  
  return {
    inAmount: amount,
    outAmount: fromAtomic(toAtomic(mockOutAmount, outDec), outDec),
    priceImpactPct: 0.1,
    route: { mockRoute: true, inAmount: amountAtomic, outAmount: toAtomic(mockOutAmount, outDec) },
  };
}

interface SwapParams {
  route: any;
  userPublicKey: string;
  signal?: AbortSignal;
}

export async function swap(params: SwapParams): Promise<string> {
  const { signal } = params;
  
  // Demo-only fake signature with longer delay
  await new Promise((resolve, reject) => {
    const timeoutId = setTimeout(resolve, 2000); // 2 second delay for demo
    
    if (signal) {
      signal.addEventListener('abort', () => {
        clearTimeout(timeoutId);
        reject(new Error('Operation was cancelled'));
      });
    }
  });
  
  return `DEMO_SIGNATURE_${Math.random().toString(36).slice(2)}_${Date.now()}`;
}
