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

## Lisans

İhtiyaca göre lisans ekleyin (MIT vb.).
