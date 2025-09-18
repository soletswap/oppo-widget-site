# Oppo Widget – Jupiter Ultra Demo Scaffold

## Overview

This is a React + Vite + TypeScript application that serves as a demo scaffold for Jupiter Ultra swap integration. It provides a foundational widget component for token swapping functionality, designed to be easily integrated into larger applications or used as a starting point for developing Solana-based trading interfaces.

The application demonstrates core swap functionality with placeholder endpoints and provides a clean, modular architecture for future expansion into a full-featured DEX interface.

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: CSS with custom properties and modern layout techniques  
- **Blockchain**: Solana Web3.js for blockchain interactions
- **State Management**: Zustand for lightweight state management
- **Data Fetching**: SWR for efficient API data fetching
- **Development**: ESLint + Prettier for code quality

## Getting Started

### Prerequisites
- Node.js 18 or higher
- npm, yarn, or pnpm package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/soletswap/oppo-widget-site.git
cd oppo-widget-site

# Install dependencies
npm install
# or
pnpm install
# or  
yarn install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## Environment Variables

Configure the following environment variables in a `.env` file:

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `VITE_RPC_URL` | Solana RPC endpoint URL | - | No |
| `VITE_FEE_WALLET` | Wallet address for referral fees | - | No |

Example `.env.local`:
```bash
VITE_RPC_URL=https://api.mainnet-beta.solana.com
VITE_FEE_WALLET=YourFeeWalletAddressHere
```

## Project Structure

### Current Structure
```
src/
  App.tsx                    # Main application component
  main.tsx                   # Application entry point
  global.css                 # Global styles and CSS variables
  components/
    JupiterWidget.tsx        # Main widget component for swaps
  constants/
    tokens.ts                # Supported token definitions
  utils/
    jupiterUltraApi.ts       # API utilities for Jupiter integration
```

### Planned Structure
```
src/
  components/
    JupiterWidget.tsx        # ✅ Current swap widget
    WalletConnect/           # 🔄 Wallet connection components
    TokenSelector/           # 🔄 Token selection interface  
    SlippageSettings/        # 🔄 Slippage configuration
    RouteDetails/            # 🔄 Route information display
  hooks/
    useWallet.ts            # 🔄 Wallet state management
    useSwap.ts              # 🔄 Swap transaction handling
    useTokens.ts            # 🔄 Token data management
  stores/
    walletStore.ts          # 🔄 Zustand wallet store
    swapStore.ts            # 🔄 Zustand swap state store
  tests/
    setup/
      testSetup.ts          # ✅ Test configuration placeholder
    components/             # 🔄 Component test suites
    utils/                  # 🔄 Utility function tests
```

## Current Limitations

- **Placeholder API Endpoints**: Uses mock Jupiter API calls for demonstration
- **No Wallet Integration**: Wallet connection and transaction signing not implemented
- **Static Token List**: Limited token support with placeholder mint addresses
- **No Error Boundaries**: Basic error handling without comprehensive error boundaries
- **No Persistence**: Settings and preferences not persisted between sessions
- **Limited Responsive Design**: Basic responsive layout needs enhancement
- **No Transaction History**: No tracking or display of past transactions

## Roadmap

- [ ] **Wallet Integration**
  - [ ] Phantom wallet support
  - [ ] Backpack wallet support
  - [ ] WalletConnect integration
  - [ ] Transaction signing and confirmation

- [ ] **Real Swap Logic**  
  - [ ] Jupiter Ultra API integration
  - [ ] Real-time routing and quotes
  - [ ] Transaction simulation and validation
  - [ ] Slippage protection

- [ ] **Dynamic Token Support**
  - [ ] Token registry integration
  - [ ] Dynamic token discovery
  - [ ] Token metadata and pricing
  - [ ] Custom token addition

- [ ] **Referral Fee System**
  - [ ] Configurable fee structure
  - [ ] Fee calculation and display
  - [ ] Revenue tracking dashboard

- [ ] **UX Improvements**
  - [ ] Loading states and animations
  - [ ] Transaction progress tracking
  - [ ] Error handling and recovery
  - [ ] Mobile-optimized interface
  - [ ] Accessibility enhancements

- [ ] **CI/CD & Testing**
  - [ ] Comprehensive test suite
  - [ ] E2E testing with Playwright
  - [ ] Automated deployment pipeline
  - [ ] Performance monitoring

## Contributing

We welcome contributions! Please follow these guidelines:

1. **Fork the repository** and create a feature branch
2. **Follow TypeScript best practices** and existing code style
3. **Write tests** for new functionality when possible
4. **Update documentation** for any API or interface changes
5. **Submit a pull request** with a clear description of changes

### Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production  
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
```

### Code Style

This project uses ESLint and Prettier for consistent code formatting. Run `npm run format` before committing changes.

## License

MIT License - see LICENSE file for details.