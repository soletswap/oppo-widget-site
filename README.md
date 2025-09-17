# Oppo Jupiter Ultra Swap Widget

Modern, mobile-responsive decentralized token swap widget powered by Jupiter Ultra API with integrated referral fee system.

## Features

### 🚀 Jupiter Ultra API Integration
- **Referral Fee System**: 0.2% fee on supported token swaps
- **Fee Distribution**: 80% protocol, 20% Jupiter (as per Jupiter Ultra specification)
- **Real-time Processing**: Automated fee collection and distribution
- **Referral Account**: `9EvV3V9cZ4KktQ4xCnu3ymA2a9qgaBR4HLFhFddZZXSn`

### 💰 Supported Tokens
The widget applies referral fees to these premium Solana tokens:
- **SOL** - Native Solana
- **USDC** - USD Coin
- **USDT** - Tether USD  
- **JUP** - Jupiter
- **RAY** - Raydium
- **mSOL** - Marinade SOL
- **JupSOL** - Jupiter SOL
- **SSOL** - Solana Staked SOL
- **JitoSOL** - Jito SOL
- **ETH** - Ethereum (Wormhole)
- **EURC** - Euro Coin
- **USDG** - USDG Token
- **PUMP** - PUMP Token

### ⚡ Ultra Features
- **Unclaimed Fee Tracking**: Real-time monitoring of accumulated fees
- **Smart Claiming**: $1 minimum threshold with verified/non-verified logic
- **Mobile Optimized**: Responsive design for all screen sizes
- **Oppo Branding**: Custom logo and color scheme
- **Error Handling**: Comprehensive error reporting and user feedback

## Technical Implementation

### Configuration
```javascript
const REFERRAL_CONFIG = {
  feeBps: 20, // 0.2% referral fee (20 basis points)
  feeRecipient: "9EvV3V9cZ4KktQ4xCnu3ymA2a9qgaBR4HLFhFddZZXSn",
  ultraFeeShare: {
    protocol: 80, // 80% to protocol
    jupiter: 20   // 20% to Jupiter
  }
};
```

### Fee Processing Flow
1. User initiates swap on Jupiter widget
2. Transaction completes successfully  
3. System checks if input/output tokens are in supported list
4. If supported, calls `handleUltraReferralFee()` with transaction signature
5. Jupiter Ultra API processes fee distribution automatically
6. Real-time status updates provided to user

### Claim System
- **Automatic Monitoring**: Continuous tracking of unclaimed fees
- **Threshold Logic**: Claims only when accumulated fees ≥ $1 USD
- **Verification Check**: Handles both verified and non-verified accounts
- **Manual Override**: Users can manually check and claim fees

## Setup & Usage

### Quick Start
1. Clone repository
2. Open `index.html` in web browser or serve via HTTP server
3. Connect wallet and start swapping!

### Local Development
```bash
# Start local server
python3 -m http.server 8000

# Or with Node.js
npx http-server .

# Open http://localhost:8000
```

### Integration
The widget can be embedded in any web application:

```html
<!-- Include Jupiter Plugin -->
<script src="https://plugin.jup.ag/plugin-v1.js"></script>

<!-- Widget Container -->
<div id="target-container"></div>

<!-- Initialize with Oppo configuration -->
<script>
window.Jupiter.init({
  displayMode: "integrated",
  integratedTargetId: "target-container",
  feeBps: 20,
  feeRecipient: "9EvV3V9cZ4KktQ4xCnu3ymA2a9qgaBR4HLFhFddZZXSn",
  branding: {
    logoUri: "https://photos.pinksale.finance/file/pinksale-logo-upload/1733923962272-6c08b5b4359a38ef4991bd3d69dc1c3d.png",
    name: "Oppo"
  }
});
</script>
```

## API Reference

### Available Functions
- `handleUltraReferralFee(txSignature)` - Process referral fee for transaction
- `checkUnclaimedFees()` - Check and claim accumulated fees
- `isTokenSupported(mintAddress)` - Verify if token supports referral fees
- `getTokenSymbol(mintAddress)` - Get token symbol from mint address
- `formatFeeAmount(amount, decimals)` - Format fee amounts for display

### Events
- `onSuccess` - Fired when swap completes successfully
- `onError` - Fired when swap encounters error

## Documentation References

- [Jupiter Ultra API Documentation](https://dev.jup.ag/docs/ultra-api/add-fees-to-ultra)
- [Jupiter Widget Integration Guide](https://docs.jup.ag/integrate/widget)
- [Solana Token List](https://github.com/solana-labs/token-list)

## License

MIT License - feel free to use in your projects!

## Support

For technical support or feature requests, please open an issue in this repository.
