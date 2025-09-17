# Oppo Widget – Jupiter Ultra Demo Scaffold

## Overview

This is a demo scaffold for building Jupiter Ultra swap widgets with React, Vite, and TypeScript. The project provides a foundational structure for implementing decentralized exchange functionality on Solana, with placeholder components and utilities that can be incrementally enhanced toward production-ready swap features.

The scaffold follows an incremental roadmap approach, allowing developers to progressively add real wallet integration, Jupiter Ultra routing, dynamic token metadata, and enhanced UX features while maintaining a clean, extensible codebase.

## Tech Stack

### Current Implementation
- **React 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe development with strict mode enabled
- **ESLint** - Flat config setup for code quality and consistency
- **Prettier** - Code formatting

### Planned Integrations
- **Solana Wallet Adapter** - Multi-wallet connection support
- **Jupiter Ultra API** - Real swap routing and execution
- **Dynamic Token Metadata** - Live token lists and accurate decimals
- **Enhanced UX** - Loading states, error handling, and responsive design

## Getting Started

### Prerequisites
- Node.js 18 or later
- npm, yarn, or pnpm

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Build
```bash
npm run build
```

### Linting
```bash
npm run lint
```

### Formatting
```bash
npm run format
```

## Environment Variables

The application supports the following environment variables. Copy `.env.example` to `.env.local` and customize as needed:

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `VITE_RPC_URL` | Solana RPC endpoint | `https://api.mainnet-beta.solana.com` | No |
| `VITE_FEE_WALLET` | Wallet address for referral fees | None | No |
| `VITE_JUPITER_API_BASE` | Jupiter API base URL | `https://quote-api.jup.ag/v6` | No |

## Project Structure

```
src/
├── App.tsx                    # Main application component
├── main.tsx                   # Application entry point
├── global.css                 # Global styles and design system
├── components/
│   └── JupiterWidget.tsx      # Main swap widget component
├── constants/
│   └── tokens.ts              # Supported token definitions
├── utils/
│   └── jupiterUltraApi.ts     # API integration helpers
└── tests/                     # Test setup and utilities (planned)
    └── setup/
        └── testSetup.ts       # Vitest + RTL configuration (placeholder)

# Configuration
├── vite.config.ts             # Vite configuration
├── tsconfig.json              # TypeScript configuration
├── eslint.config.js           # ESLint flat config
├── .env.example               # Environment variables template
└── .gitignore                 # Git ignore patterns
```

### Planned Additions
```
src/
├── hooks/                     # Custom React hooks for wallet, quotes
├── store/                     # State management (Zustand)
├── types/                     # TypeScript type definitions
└── utils/
    ├── wallet.ts              # Wallet connection utilities
    ├── tokens.ts              # Token metadata fetching
    └── logger.ts              # Logging and metrics
```

## Current Limitations

This is a demo scaffold with several intentional limitations that serve as integration points for production features:

- **No Real Swaps** - Swap function returns placeholder transaction signatures
- **No Wallet Integration** - Hardcoded placeholder wallet addresses
- **Static Token List** - Limited token selection with placeholder mint addresses
- **Minimal UX** - Basic error states and loading indicators
- **No Tests** - Test infrastructure planned but not implemented
- **No Referral Logic** - Fee tracking and distribution not implemented
- **Hardcoded Endpoints** - API endpoints are placeholders, not production Jupiter Ultra

## Roadmap

### Phase 1: Core Functionality
- [ ] Integrate Solana Wallet Adapter for multi-wallet support
- [ ] Implement real Jupiter Ultra quote fetching with live routes
- [ ] Add dynamic token list with accurate mint addresses and decimals
- [ ] Implement referral fee calculation and tracking

### Phase 2: Enhanced UX
- [ ] Add comprehensive loading states and error handling
- [ ] Implement slippage tolerance settings
- [ ] Add transaction confirmation and tracking
- [ ] Responsive design improvements

### Phase 3: Quality & Monitoring
- [ ] Complete CI/CD pipeline with automated testing
- [ ] Add unit and integration tests with Vitest + React Testing Library
- [ ] Implement logging and metrics collection
- [ ] Add performance monitoring and optimization

### Phase 4: Advanced Features
- [ ] Route optimization preferences
- [ ] Transaction history and analytics
- [ ] Multi-hop swap support
- [ ] Advanced order types (limit orders, DCA)

## Contributing

### Development Workflow
1. Create a feature branch from `main`
2. Make your changes with descriptive commit messages
3. Ensure all tests pass and linting is clean
4. Submit a pull request with a clear description

### Commit Convention
We encourage semantic commit messages:
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation updates
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Test additions or modifications
- `chore:` - Build process or auxiliary tool changes

## License

MIT License - see LICENSE file for details