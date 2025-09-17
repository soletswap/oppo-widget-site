# Oppo Jupiter Ultra API Widget

A comprehensive Jupiter Ultra API integration for referral fee collection and token swapping with mobile/desktop responsive design.

## 🚀 Features

### Jupiter Ultra API Integration
- **Referral Account**: `9EvV3V9cZ4KktQ4xCnu3ymA2a9qgaBR4HLFhFddZZXSn`
- **Fee Structure**: 0.5% (50 basis points) total fee
  - 80% (40 basis points) goes to Protocol
  - 20% (10 basis points) goes to Jupiter
- **Ultra API**: Fully integrated with Jupiter's Ultra API for fee collection

### Supported Tokens
The widget supports swapping between the following tokens:
- **USDG** - USD Gold: `USDGxpxd33w3xqPjKfHH97bEHhk4WqDkMj4j2FwsHTJ`
- **PUMP** - PUMP: `PUMPKdfYRjyHy4u1MJaQ4LxfRALRNBBJ7YcCjdtF9dp`
- **SOL** - Solana: `So11111111111111111111111111111111111111112`
- **JupSOL** - Jupiter Staked SOL: `7Q2afV64in6N6SeZsAAB81TJzwDoD6zpqmHkzi9Dcavn`
- **mSOL** - Marinade Staked SOL: `mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So`
- **RAY** - Raydium: `4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R`
- **JUP** - Jupiter: `JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN`
- **EURC** - Euro Coin: `HhJpBhRRn4g56VsyLuT8DL5Bv31HkXqsrahTTUCZeZg4`
- **USDC** - USD Coin: `EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v`
- **USDT** - Tether: `Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB`
- **SSOL** - Sanctum Staked SOL: `5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm`
- **JitoSOL** - Jito Staked SOL: `J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn`
- **ETH** - Ethereum (Portal): `2FPyTwcZLUg1MDrwsyoP4D6s1tM7hAkHYRjkNb5w6Pxk`

### Referral Fee System
- **Minimum Claim**: $1.00 USD equivalent
- **Automatic Tracking**: All swap transactions are tracked for referral fees
- **Real-time Updates**: Unclaimed and total earned amounts update in real-time
- **Verified Claims**: Support for verified/non-verified wallet claim logic

### Mobile & Desktop Compatibility
- **Responsive Design**: Fully responsive layout for all screen sizes
- **Mobile First**: Optimized for mobile devices with touch-friendly interface
- **Desktop Enhanced**: Enhanced experience on larger screens
- **Cross Browser**: Compatible with all modern browsers

## 🛠 Technical Implementation

### Architecture
```
├── index.html                 # Main application file
├── README.md                 # Documentation (this file)
└── Configuration:
    ├── Jupiter Ultra API     # Referral fee integration
    ├── Token Management      # Supported token mints
    ├── Fee Tracking         # Unclaimed fee logic
    └── UI Components        # Responsive design
```

### Key Components

#### 1. Jupiter Ultra API Integration
```javascript
// Fee configuration with 80/20 split
platformFeeAndAccounts: {
  feeBps: 50, // 0.5% total fee
  feeAccounts: [
    {
      pubkey: "9EvV3V9cZ4KktQ4xCnu3ymA2a9qgaBR4HLFhFddZZXSn",
      feeBps: 40, // 80% of total (40 basis points)
      isReferral: true
    }
    // Jupiter automatically gets remaining 20%
  ]
}
```

#### 2. Fee Calculation
```javascript
function calculateReferralFee(inputAmount, outputAmount) {
  const swapVolume = Math.min(inputAmount || 0, outputAmount || 0);
  const feeRate = CONFIG.feeBps / 10000; // 0.5%
  const protocolShare = 0.8; // 80% to protocol
  return swapVolume * feeRate * protocolShare;
}
```

#### 3. Claim Logic
```javascript
async function claimReferralFees() {
  // Minimum $1 check
  if (unclaimedFees < CONFIG.minClaimAmount) {
    showNotification(`Minimum claim amount is $${CONFIG.minClaimAmount}`, 'warning');
    return;
  }
  
  // Process claim through Ultra API
  // Implementation integrates with Jupiter's fee distribution system
}
```

## 📱 Responsive Design

### Mobile (< 480px)
- Compact layout with single-column fee display
- Touch-optimized buttons and interactions
- Reduced Jupiter Terminal height (500px)
- Optimized spacing and typography

### Tablet (480px - 768px)
- Balanced two-column layout for fee information
- Standard Jupiter Terminal height (600px)
- Enhanced visual hierarchy

### Desktop (> 768px)
- Full-featured layout with enhanced spacing
- Maximum container width (500px)
- Largest Jupiter Terminal height (650px)
- Advanced visual effects and animations

## 🎨 Branding

### Oppo Brand Integration
- **Logo**: Custom Oppo logo integrated into Jupiter Terminal
- **Colors**: Purple gradient theme matching Oppo branding
- **Typography**: Modern, clean font stack
- **Visual Elements**: Glassmorphism design with backdrop blur effects

### Brand Assets
- **Logo URI**: `https://photos.pinksale.finance/file/pinksale-logo-upload/1733923962272-6c08b5b4359a38ef4991bd3d69dc1c3d.png`
- **Brand Name**: "Oppo"
- **Theme**: Purple gradient with glass morphism effects

## 🔧 Configuration

### Environment Variables
```javascript
const CONFIG = {
  referralAccount: "9EvV3V9cZ4KktQ4xCnu3ymA2a9qgaBR4HLFhFddZZXSn",
  feeBps: 50,           // 0.5% total fee
  protocolFeeBps: 40,   // 80% to protocol
  jupiterFeeBps: 10,    // 20% to Jupiter
  minClaimAmount: 1.00  // $1 minimum claim
};
```

### Supported Networks
- **Mainnet**: Primary network for production use
- **Endpoint**: `https://api.mainnet-beta.solana.com`

## 🚀 Deployment

### Quick Start
1. Clone the repository
2. Open `index.html` in a modern web browser
3. Connect your Solana wallet
4. Start swapping with automatic referral fee collection

### Production Deployment
1. Upload `index.html` to your web server
2. Ensure HTTPS is enabled for wallet connections
3. Configure any additional security headers
4. Monitor referral fee collection through Ultra API

### Local Development
```bash
# Start local development server
python3 -m http.server 8000

# Open browser
open http://localhost:8000
```

## 📊 Fee Distribution

### Transaction Flow
1. User initiates swap through Jupiter Terminal
2. Jupiter Ultra API automatically deducts 0.5% fee
3. Fee is split: 80% to Protocol (Oppo), 20% to Jupiter
4. Protocol fees accumulate in referral account
5. Users can claim fees when minimum threshold is met

### Claiming Process
1. **Minimum Check**: Must have at least $1.00 in unclaimed fees
2. **Verification**: Supports verified/non-verified wallet logic
3. **Distribution**: Fees distributed according to Ultra API rules
4. **Tracking**: All claims tracked for transparency

## 🛡 Security

### Best Practices
- No private keys stored in browser
- All transactions signed by user wallet
- Referral fees handled by Jupiter's secure Ultra API
- Real-time validation of all fee calculations

### Wallet Integration
- Supports all major Solana wallets
- Secure connection through Jupiter Terminal
- No custom wallet handling required

## 📖 Jupiter Ultra API Documentation

This implementation follows the official Jupiter Ultra API documentation:
**Reference**: https://dev.jup.ag/docs/ultra-api/add-fees-to-ultra

### Key Features Implemented
- ✅ Referral fee integration
- ✅ Platform fee configuration
- ✅ Fee account management
- ✅ Transaction tracking
- ✅ Claim functionality
- ✅ Minimum claim logic
- ✅ Fee distribution (80/20 split)

## 🎯 Future Enhancements

### Planned Features
- Backend integration for persistent fee tracking
- Advanced analytics dashboard
- Multi-language support
- Enhanced verification system
- Custom token list management

### API Integrations
- Real-time price feeds
- Enhanced transaction monitoring
- Automated fee distribution
- Advanced claiming mechanisms

## 📞 Support

For technical support or questions about the Oppo Jupiter Ultra API integration:

1. Check the Jupiter documentation: https://dev.jup.ag/docs/ultra-api/add-fees-to-ultra
2. Review the implementation code comments
3. Test functionality in development environment
4. Contact the development team for advanced features

---

**Built with Jupiter Ultra API | Powered by Solana | Designed for Oppo**
