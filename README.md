# Oppo Widget – Jupiter Ultra Demo Scaffold

## Overview

A minimal demo scaffold for the Oppo widget integrating Jupiter Ultra routing – WIP.

## Tech Stack

- Vite
- React
- TypeScript
- Tailwind (if present)
- Jupiter Ultra (planned)
- Solana Wallet Adapter (planned)
- Vitest (planned)

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`
4. Build for production: `npm run build` (if script exists)

## Environment Variables

| Name | Description | Example | Required |
|------|-------------|---------|----------|
| VITE_RPC_URL | RPC endpoint for Solana | `https://api.mainnet-beta.solana.com` | Depends |
| VITE_FEE_WALLET | Fee wallet address | `11111111111111111111111111111112` | Depends |

## Project Structure

```
src/
├── components/
│   └── (placeholder)
└── tests/
    └── setup/
        └── testSetup.ts
```

## Current Limitations

- No wallet integration yet
- No swap execution
- No dynamic token list
- No fee/referral logic
- Limited error states
- No tests yet

## Roadmap

- [ ] Add wallet integration
- [ ] Add swap execution
- [ ] Add dynamic token list
- [ ] Add fee/referral logic
- [ ] Improve error states
- [ ] Add unit tests
- [ ] Add integration tests
- [ ] Improve loading UX

## Contributing

Simple contribution guideline placeholder.

## License

License to be determined. (No LICENSE file present yet.)