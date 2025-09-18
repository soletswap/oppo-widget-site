import React, { useEffect, useState } from 'react';
import { getQuote, swap } from '../utils/jupiterUltraApi';
import { TOKENS } from '../constants/tokens';

interface Quote {
  inAmount: string;
  outAmount: string;
  priceImpactPct?: number;
  route?: any;
  error?: string;
}

export const JupiterWidget: React.FC = () => {
  const [inputMint, setInputMint] = useState(TOKENS.SOL.mint);
  const [outputMint, setOutputMint] = useState(TOKENS.USDC.mint);
  const [amount, setAmount] = useState('0.1');
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState<Quote | null>(null);
  const [swapTx, setSwapTx] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [abortController, setAbortController] = useState<AbortController | null>(null);

  const fetchQuote = async () => {
    setLoading(true);
    setError(null);
    setQuote(null);
    
    const controller = new AbortController();
    setAbortController(controller);
    
    try {
      const q = await getQuote({
        inputMint,
        outputMint,
        amount, // expected in SOL units style string; util could convert to lamports inside
        slippageBps: 50,
        signal: controller.signal
      });
      setQuote(q as Quote);
    } catch (e:any) {
      if (e.name === 'AbortError' || e.message === 'Operation cancelled') {
        setError('Operation cancelled');
      } else {
        setError(e.message || 'Quote error');
      }
    } finally {
      setLoading(false);
      setAbortController(null);
    }
  };

  const doSwap = async () => {
    if (!quote) return;
    setLoading(true);
    setError(null);
    
    const controller = new AbortController();
    setAbortController(controller);
    
    try {
      // Placeholder: you would pass user wallet + route
      const sig = await swap({ 
        route: quote.route, 
        userPublicKey: '<WALLET_PUBKEY_PLACEHOLDER>',
        signal: controller.signal
      });
      setSwapTx(sig);
    } catch (e:any) {
      if (e.name === 'AbortError' || e.message === 'Operation cancelled') {
        setError('Operation cancelled');
      } else {
        setError(e.message || 'Swap error');
      }
    } finally {
      setLoading(false);
      setAbortController(null);
    }
  };

  const cancelOperation = () => {
    if (abortController) {
      abortController.abort();
    }
  };

  const clearState = () => {
    setQuote(null);
    setSwapTx(null);
    setError(null);
    if (abortController) {
      abortController.abort();
    }
  };

  useEffect(() => {
    fetchQuote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="widget">
      <div className="form-row">
        <label>
          From
          <select value={inputMint} onChange={e => setInputMint(e.target.value)}>
            {Object.values(TOKENS).map(t => (
              <option key={t.mint} value={t.mint}>{t.symbol}</option>
            ))}
          </select>
        </label>
        <label>
          To
          <select value={outputMint} onChange={e => setOutputMint(e.target.value)}>
            {Object.values(TOKENS).map(t => (
              <option key={t.mint} value={t.mint}>{t.symbol}</option>
            ))}
          </select>
        </label>
        <label>
          Amount
          <input value={amount} onChange={e => setAmount(e.target.value)} />
        </label>
        <button disabled={loading} onClick={fetchQuote}>Get Quote</button>
        {loading && (
          <button onClick={cancelOperation} className="cancel-btn">Cancel</button>
        )}
        {(quote || swapTx || error) && !loading && (
          <button onClick={clearState} className="clear-btn">Clear</button>
        )}
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="error">Error: {error}</p>}
      {quote && !error && (
        <div className="quote-box">
          <p>In: {quote.inAmount}</p>
            <p>Out: {quote.outAmount}</p>
          {quote.priceImpactPct !== undefined && (
            <p>Price Impact: {(quote.priceImpactPct * 100).toFixed(2)}%</p>
          )}
          <button disabled={loading} onClick={doSwap}>Swap</button>
          {loading && (
            <button onClick={cancelOperation} className="cancel-btn">Cancel</button>
          )}
        </div>
      )}
      {swapTx && (
        <p className="tx">
          Swap Signature: {swapTx}
        </p>
      )}
    </section>
  );
};
