# Oppo Widget – Jupiter Ultra Demo Scaffold

## Overview

A minimal React + Vite + TypeScript scaffold for demonstrating Jupiter-style swap functionality. This project provides a foundational widget component for swap API integration with placeholder endpoints and basic token management.

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Zustand** for state management
- **SWR** for data fetching
- **Solana Web3.js** for blockchain interactions
- **ESLint + Prettier** for code quality

## Getting Started

```bash
npm install
npm run dev
```

The application will be available at `http://localhost:5173`.

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_RPC_URL` | Solana RPC endpoint | `https://api.mainnet-beta.solana.com` |
| `VITE_FEE_WALLET` | Referral fee wallet address | `YourWalletAddressHere` |

Create a `.env.local` file with your values:

```bash
VITE_RPC_URL=https://api.mainnet-beta.solana.com
VITE_FEE_WALLET=YourWalletAddressHere
```

## Project Structure

```
src/
  App.tsx                 # Main application component
  main.tsx               # Application entry point
  global.css             # Global styles
  components/
    JupiterWidget.tsx    # Main swap widget component
  constants/
    tokens.ts           # Supported token definitions
  utils/
    jupiterUltraApi.ts  # API helper functions (placeholder)
  tests/
    setup/
      testSetup.ts      # Test configuration placeholder
```

## Current Limitations

- Uses placeholder API endpoints (not real Jupiter Ultra integration)
- Token mint addresses are placeholders that need real values
- No wallet connection implemented yet
- Basic error handling and loading states
- No slippage controls or advanced swap options

## Roadmap

- [ ] Integrate real Jupiter Ultra API endpoints
- [ ] Add wallet connection (Phantom, Backpack, etc.)
- [ ] Implement proper token mint addresses
- [ ] Add slippage tolerance controls
- [ ] Create route details modal
- [ ] Enhance error handling and UX
- [ ] Add comprehensive test suite (Vitest + React Testing Library)
- [ ] Implement referral fee system
- [ ] Add transaction history
- [ ] Mobile responsive optimizations

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

License to be determined (placeholder - add MIT or appropriate license).