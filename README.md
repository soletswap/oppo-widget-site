# Oppo Widget Site

Demo amaçlı hazırlanmış bir (React + Vite + TypeScript) arayüzü. Jupiter benzeri bir swap API entegrasyonu için temel widget bileşeni içerir.

## Özellikler

- Desteklenen token listesini `src/constants/tokens.ts` üzerinden yönetme
- Basit quote alma (placeholder endpoint)
- Swap için örnek POST isteği (demo / placeholder)
- Komponent: `JupiterWidget`

## Kurulum

```bash
pnpm install   # veya npm install / yarn
pnpm dev
```

Varsayılan olarak uygulama `http://localhost:5173` üzerinden çalışır.

## Ortam Değişkenleri

`VITE_JUPITER_BASE_URL` ayarlanarak varsayılan endpoint değiştirilebilir:

```bash
echo "VITE_JUPITER_BASE_URL=https://quote-api.jup.ag" > .env.local
```

## Dosya Yapısı (Önerilen)

```
src/
  App.tsx
  main.tsx
  components/
    JupiterWidget.tsx
  constants/
    tokens.ts
  utils/
    jupiterUltraApi.ts
```

## Geliştirme Notları

- `fetchQuote` ve `fetchSwap` fonksiyonları gerçek Jupiter Ultra veya güncel API parametrelerine göre güncellenmeli.
- Token mint adresleri şu an placeholder olanlar için doldurulmalı.
- Cüzdan entegrasyonu (Phantom, Backpack vb.) eklenmesi gerekirse ayrı bir `wallet` store / hook yapısı kurulabilir.

## Yapılacaklar (Öneri)

- [ ] Gerçek mint adreslerini ekle
- [ ] Gerçek Jupiter endpoint & parametre senkronizasyonu
- [ ] Cüzdan bağlantısı (solana wallet adapter)
- [ ] Slippage ayarı UI
- [ ] Route detay modalı
- [ ] Hata ve loading durumlarını tasarımsal iyileştirme
- [ ] Testler (Vitest + React Testing Library)

## Deployment

This application is configured for deployment on multiple platforms:

### Vercel

Deploy with automatic Git integration:
1. Connect your repository to Vercel
2. Set environment variables:
   - `VITE_JUPITER_API_BASE`: Jupiter API endpoint
3. Deploy automatically on push to main

Manual deployment:
```bash
npm install -g vercel
vercel --prod
```

### Render

Deploy using the included `render.yaml`:
1. Connect your repository to Render
2. Set environment variables in the Render dashboard
3. Deploy automatically on push to main

### Fly.io

Deploy using the included `fly.toml` and `Dockerfile`:
```bash
# Install flyctl
curl -L https://fly.io/install.sh | sh

# Login and deploy
flyctl auth login
flyctl launch
flyctl deploy
```

### Local Docker

Build and run with Docker:
```bash
docker build -t oppo-widget-site .
docker run -p 3000:3000 oppo-widget-site
```

### CI/CD

GitHub Actions workflows are configured for:
- **CI**: Type checking, building, and testing on Node.js 18.x and 20.x
- **Deployment**: Automatic deployment to configured platforms on push to main

## Lisans

İhtiyaca göre lisans ekleyin (MIT vb.).