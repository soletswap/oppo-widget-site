import React, { useEffect, useRef, useState } from 'react';

interface JupiterTerminalProps {
  className?: string;
}

declare global {
  interface Window {
    Jupiter: {
      init: (config: any) => Promise<void>;
    };
  }
}

export const JupiterTerminal: React.FC<JupiterTerminalProps> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isComponentMounted = true;

    const loadJupiterTerminal = async () => {
      try {
        // Check if Jupiter is already loaded
        if (window.Jupiter) {
          await initializeTerminal();
          return;
        }

        // Dynamically load the Jupiter Terminal script
        const script = document.createElement('script');
        script.src = 'https://terminal.jup.ag/main-v2.js';
        script.async = true;
        
        script.onload = async () => {
          if (isComponentMounted) {
            await initializeTerminal();
          }
        };

        script.onerror = () => {
          if (isComponentMounted) {
            setError('Failed to load Jupiter Terminal');
            setIsLoading(false);
          }
        };

        document.head.appendChild(script);

        // Cleanup script on unmount
        return () => {
          if (document.head.contains(script)) {
            document.head.removeChild(script);
          }
        };
      } catch (err) {
        if (isComponentMounted) {
          setError(err instanceof Error ? err.message : 'Unknown error loading Jupiter Terminal');
          setIsLoading(false);
        }
      }
    };

    const initializeTerminal = async () => {
      if (!containerRef.current || !window.Jupiter) return;

      try {
        // Get environment variables with defaults
        const referrerAccount = (import.meta as any).env?.VITE_JUPITER_REFERRER_ACCOUNT || 
                               '9EvV3V3cZ4KktQ4xCnu3ymA2a9qgaBR4HLFhFddZZXSn';
        const referrerFeeBps = parseInt((import.meta as any).env?.VITE_JUPITER_REFERRER_FEE_BPS || '50');
        const platformName = (import.meta as any).env?.VITE_PLATFORM_NAME || 'Oppo';
        const platformLogo = (import.meta as any).env?.VITE_PLATFORM_LOGO || '';
        const defaultInputMint = (import.meta as any).env?.VITE_JUPITER_DEFAULT_INPUT_MINT || 
                                'So11111111111111111111111111111111111111112'; // SOL
        const defaultOutputMint = (import.meta as any).env?.VITE_JUPITER_DEFAULT_OUTPUT_MINT || 
                                 'EPjFWdd5AufqSSqeM2qZ8c6sNR1s6UXp9eGkZwyTDt1v'; // USDC

        const config = {
          displayMode: 'integrated',
          integratedTargetId: containerRef.current.id,
          endpoint: (import.meta as any).env?.VITE_RPC_ENDPOINT || 'https://api.mainnet-beta.solana.com',
          referrer: {
            account: referrerAccount,
            feeBps: referrerFeeBps,
          },
          platformFeeAndAccounts: {
            feeBps: referrerFeeBps,
            feeAccounts: [referrerAccount],
          },
          formProps: {
            initialInputMint: defaultInputMint,
            initialOutputMint: defaultOutputMint,
          },
          ...(platformName && {
            platformName,
          }),
          ...(platformLogo && {
            platformLogo,
          }),
        };

        await window.Jupiter.init(config);
        
        if (isComponentMounted) {
          setIsLoading(false);
        }
      } catch (err) {
        if (isComponentMounted) {
          setError(err instanceof Error ? err.message : 'Failed to initialize Jupiter Terminal');
          setIsLoading(false);
        }
      }
    };

    loadJupiterTerminal();

    return () => {
      isComponentMounted = false;
    };
  }, []);

  return (
    <div className={`jupiter-terminal-wrapper ${className || ''}`}>
      <div className="jupiter-terminal-header">
        <h3>Jupiter Terminal</h3>
        <small>Production-ready swap interface</small>
      </div>
      
      {isLoading && (
        <div className="jupiter-terminal-loading">
          <p>Loading Jupiter Terminal...</p>
        </div>
      )}
      
      {error && (
        <div className="jupiter-terminal-error">
          <p>Error: {error}</p>
        </div>
      )}
      
      <div
        ref={containerRef}
        id={`jupiter-terminal-${Math.random().toString(36).slice(2)}`}
        className="jupiter-terminal-container"
        style={{ 
          minHeight: isLoading || error ? '200px' : '400px',
          display: isLoading || error ? 'flex' : 'block',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      />
    </div>
  );
};