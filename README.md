# Oppo Widget – Jupiter Ultra Demo Scaffold

A React + Vite + TypeScript scaffold demonstrating Jupiter-like swap functionality for the Oppo platform. This is a demo implementation featuring a basic widget component for token swaps with placeholder API integration.

## Overview

This project serves as a foundational scaffold for building a Jupiter Ultra-style token swap interface. It provides a clean, modern foundation with React 18, TypeScript, and Vite, ready for integration with Solana's ecosystem and Jupiter's swap infrastructure.

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Vanilla CSS with custom properties
- **State Management**: React hooks (Zustand ready for complex state)
- **Blockchain**: Solana Web3.js + SPL Token
- **Linting**: ESLint (flat config) + Prettier
- **Package Manager**: npm/pnpm compatible

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd oppo-widget-site

# Install dependencies
npm install
# or
pnpm install

# Start development server
npm run dev
# or
pnpm dev
```

The application will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
npm run preview
```

## Environment Variables

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `VITE_JUPITER_BASE_URL` | Jupiter API base URL | `https://quote-api.jup.ag/v6` | No |

Create a `.env.local` file for local development:

```bash
echo "VITE_JUPITER_BASE_URL=https://quote-api.jup.ag/v6" > .env.local
```

## Project Structure

```
src/
├── components/
│   └── JupiterWidget.tsx    # Main swap widget component
├── constants/
│   └── tokens.ts           # Supported token definitions
├── utils/
│   └── jupiterUltraApi.ts  # API integration helpers
├── tests/
│   └── setup/
│       └── testSetup.ts    # Test configuration (placeholder)
├── App.tsx                 # Main application component
├── main.tsx               # Application entry point
└── global.css             # Global styles

.github/
└── workflows/
    └── ci.yml             # Continuous integration

public/                    # Static assets
dist/                     # Production build output (generated)
```

## Current Limitations

- **Mock API**: Currently uses placeholder/demo API responses
- **No Wallet Integration**: Wallet connection not implemented yet
- **Limited Token Support**: Only SOL, USDC, and USDT tokens configured
- **No Real Swaps**: Swap functionality is simulated for demo purposes
- **Basic Error Handling**: Error states need enhancement
- **No Tests**: Test infrastructure is placeholder-only

## Roadmap

- [ ] Integrate Solana Wallet Adapter (Phantom, Backpack, etc.)
- [ ] Connect to real Jupiter Ultra API endpoints
- [ ] Add comprehensive token list with real mint addresses
- [ ] Implement transaction signing and submission
- [ ] Add slippage tolerance configuration
- [ ] Create route details modal/display
- [ ] Enhance loading and error states with better UX
- [ ] Add comprehensive test suite (Vitest + React Testing Library)
- [ ] Implement price impact warnings
- [ ] Add transaction history tracking
- [ ] Create responsive mobile design
- [ ] Add dark/light theme toggle
- [ ] Implement advanced trading features

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes following the established patterns
4. Run linting and build checks (`npm run lint && npm run build`)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Development Guidelines

- Follow the existing code structure and naming conventions
- Ensure TypeScript strict mode compliance
- Add appropriate error handling
- Update documentation for significant changes
- Test your changes locally before submitting

## License

MIT License - see the [LICENSE](LICENSE) file for details.