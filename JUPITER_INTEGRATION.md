# Jupiter Ultra API Integration Guide

## Overview
This guide explains how the Oppo widget integrates with Jupiter Ultra API for referral fee processing and token account management.

## Configuration Parameters

### Referral Fee Settings
```javascript
const REFERRAL_CONFIG = {
  feeBps: 20, // 0.2% referral fee (20 basis points)
  feeRecipient: "9EvV3V9cZ4KktQ4xCnu3ymA2a9qgaBR4HLFhFddZZXSn", // Specified referral account
  ultraFeeShare: {
    protocol: 80, // 80% to protocol
    jupiter: 20   // 20% to Jupiter
  }
};
```

### Supported Token Addresses
```javascript
const SUPPORTED_TOKENS = {
  SOL: "So11111111111111111111111111111111111111112",      // Native SOL (Wrapped)
  USDC: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",    // USD Coin
  USDT: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",    // Tether USD
  JUP: "JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN",     // Jupiter
  RAY: "4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R",     // Raydium
  mSOL: "mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So",    // Marinade SOL
  JupSOL: "jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v", // Jupiter SOL
  SSOL: "7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj",    // Solana Staked SOL
  JitoSOL: "J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn", // Jito SOL
  ETH: "7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs",     // Ethereum (Wormhole)
  EURC: "HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr",   // Euro Coin
  USDG: "USDBo9U2rnTBJBwEkQKKPkBjW7w24vfVQzQqW1RV4iAu",    // USDG Token
  PUMP: "PUMPXrGkYu7HQUqw9FgGqHHqENDQ2FtjNNgJf6qWqum"     // PUMP Token
};
```

## API Integration Functions

### Fee Processing
```javascript
async function handleUltraReferralFee(transactionSignature) {
  // Processes referral fees for completed swaps
  // Automatically handles demo mode and network restrictions
  // Applies fees only to supported tokens
}
```

### Fee Claiming
```javascript
async function checkUnclaimedFees() {
  // Checks accumulated fees for referral account
  // Implements $1 minimum threshold logic
  // Handles verified/non-verified account claims
}
```

## Jupiter Widget Integration

### Initialization
```javascript
window.Jupiter.init({
  displayMode: "integrated",
  integratedTargetId: "target-container",
  feeBps: REFERRAL_CONFIG.feeBps,
  feeRecipient: REFERRAL_CONFIG.feeRecipient,
  branding: {
    logoUri: "https://photos.pinksale.finance/file/pinksale-logo-upload/1733923962272-6c08b5b4359a38ef4991bd3d69dc1c3d.png",
    name: "Oppo"
  },
  onSuccess: ({ txSignature, inputMint, outputMint }) => {
    // Automatically process referral fees for supported tokens
    handleUltraReferralFee(txSignature);
  }
});
```

## Fee Distribution Logic

### Distribution Model
- **Total Fee**: 0.2% (20 basis points) on supported token swaps
- **Protocol Share**: 80% of fees go to protocol
- **Jupiter Share**: 20% of fees go to Jupiter platform

### Claim Threshold Logic
- **Minimum Amount**: $1 USD equivalent
- **Verification**: Handles both verified and non-verified accounts
- **Auto-claim**: Automatically claims when threshold is met and account is verified

## Demo Mode Features

### Offline Testing
When running on localhost, the widget operates in demo mode:
- Simulates API calls with realistic delays
- Shows demo fee amounts and status messages
- Provides realistic user experience without external dependencies

### Network Error Handling
- Gracefully handles blocked CDN resources
- Falls back to demo mode when network is restricted
- Provides clear status messages for all operations

## Implementation Notes

### Error Handling
```javascript
try {
  // Jupiter Ultra API call
} catch (error) {
  if (error.message.includes('Failed to fetch')) {
    // Handle network restrictions gracefully
    showStatusMessage('Demo mode: Network restricted', 'info');
  }
}
```

### Token Support Validation
```javascript
function isTokenSupported(mintAddress) {
  return Object.values(SUPPORTED_TOKENS).includes(mintAddress);
}
```

## Deployment Considerations

### Production Environment
- Ensure CDN access to Jupiter plugins and Ultra API
- Configure proper CORS settings
- Monitor fee processing and claiming operations

### Security
- Validate all token mint addresses
- Implement proper rate limiting
- Monitor referral account for suspicious activity

## References
- [Jupiter Ultra API Documentation](https://dev.jup.ag/docs/ultra-api/add-fees-to-ultra)
- [Jupiter Widget Documentation](https://docs.jup.ag/integrate/widget)
- [Solana Token Registry](https://github.com/solana-labs/token-list)