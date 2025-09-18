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
1. Clone: `git clone https://github.com/soletswap/oppo-widget-site.git`
2. Install deps: `npm install`
3. Dev server: `npm run dev`
4. Build (if script exists): `npm run build`

## Environment Variables
| Name            | Description                             | Example                              | Required |
|-----------------|-----------------------------------------|--------------------------------------|----------|
| VITE_RPC_URL    | RPC endpoint for Solana connections     | https://api.mainnet-beta.solana.com  | Depends  |
| VITE_FEE_WALLET | Public key for fee/referral collection  | 11111111111111111111111111111111     | Depends  |

## Project Structure
```
src/
  components/        (placeholder for future UI components)
  tests/
    setup/
      testSetup.ts   (Vitest + RTL future setup)
```

## Current Limitations
- No wallet integration yet
- No swap execution
- No dynamic token list
- No fee/referral logic
- Limited error states
- No tests yet

## Roadmap
- [ ] Add wallet integration (Solana Wallet Adapter)
- [ ] Implement Jupiter Ultra routing integration
- [ ] Add swap execution flow
- [ ] Add dynamic token list handling
- [ ] Add fee/referral logic
- [ ] Improve error state handling
- [ ] Add unit tests
- [ ] Add integration tests
- [ ] Improve loading UX

## Contributing
PRs welcome. Keep changes small and focused; prefer adding tests once the test harness is in place.

## License
License to be determined. (No LICENSE file present yet.)