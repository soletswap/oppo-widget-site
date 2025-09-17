# Oppo Widget – Jupiter Ultra Demo Scaffold

## Overview
This repo scaffolds a Solana/Jupiter Ultra swap widget app with React+Vite+TypeScript and basic tooling for iterative expansion.

## Tech Stack
- React + TS + Vite
- ESLint (flat), Prettier
- Planned: Wallet Adapter, Jupiter Ultra, dynamic tokens

## Getting Started
```bash
npm install && npm run dev
```

## Environment Variables
| Name | Description | Required | Default |
|---|---|---|---|
| VITE_RPC_URL | RPC endpoint | No | clusterApiUrl(devnet) |
| VITE_FEE_WALLET | Referral fee address | No | Planned |

## Project Structure
```
src/
  components/JupiterWidget.tsx
  utils/jupiterUltraApi.ts
  constants/tokens.ts
  tests/setup/testSetup.ts
.github/workflows/ci.yml
```

## Current Limitations
No wallet, no real swap, static tokens, minimal error/loading, no tests, no referral logic.

## Roadmap
- [ ] Wallet adapter
- [ ] Real swap flow
- [ ] Dynamic tokens
- [ ] Referral fee logic
- [ ] Improved UX
- [ ] CI+tests

## Contributing
Branch from main, semantic commits

## License
MIT