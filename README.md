# Oppo Widget Site

Demo amaçlı hazırlanmış bir (React + Vite + TypeScript) arayüzü. Jupiter benzeri bir swap API entegrasyonu için temel widget bileşeni ve production-ready Jupiter Terminal embed içerir.

## Özellikler

- **Custom Demo Widget**: Basit quote alma ve swap demo arayüzü
  - Desteklenen token listesini `src/constants/tokens.ts` üzerinden yönetme
  - Placeholder API endpoints ile demo fonksiyonalite
  - Komponent: `JupiterWidget`

- **Jupiter Terminal Embed**: Production-ready swap interface
  - Dinamik olarak Jupiter Terminal script yükleme
  - Oppo branding ile yapılandırılmış referrer hesabı
  - Çevresel değişkenler ile yapılandırılabilir
  - Komponent: `JupiterTerminal`

## Kurulum

```bash
npm install   # veya pnpm install / yarn
npm run dev
```

Varsayılan olarak uygulama `http://localhost:5173/oppo-widget-site/` üzerinden çalışır.

## Ortam Değişkenleri

Tüm ortam değişkenleri için `.env.example` dosyasını `.env` olarak kopyalayın:

```bash
cp .env.example .env
```

### Ana Yapılandırma

- `VITE_RPC_ENDPOINT`: Solana RPC endpoint (varsayılan: mainnet-beta)
- `VITE_JUPITER_API_BASE`: Jupiter quote API base URL
- `VITE_JUPITER_API_KEY`: Jupiter API key (opsiyonel, rate limit artışı için)

### Jupiter Terminal Yapılandırması

- `VITE_JUPITER_REFERRER_ACCOUNT`: Referrer hesap adresi (varsayılan: Oppo hesabı)
- `VITE_JUPITER_REFERRER_FEE_BPS`: Referrer fee basis points (varsayılan: 50 = 0.5%)
- `VITE_JUPITER_DEFAULT_INPUT_MINT`: Varsayılan input token (varsayılan: SOL)
- `VITE_JUPITER_DEFAULT_OUTPUT_MINT`: Varsayılan output token (varsayılan: USDC)

### Branding

- `VITE_PLATFORM_NAME`: Platform adı (varsayılan: "Oppo")
- `VITE_PLATFORM_LOGO`: Platform logo URL (opsiyonel)

## Dosya Yapısı

```
src/
  App.tsx                 # Ana uygulama shell
  main.tsx               # Uygulama giriş noktası
  global.css             # Global stil tanımları
  components/
    JupiterWidget.tsx    # Custom demo widget
    JupiterTerminal.tsx  # Jupiter Terminal embed
  constants/
    tokens.ts            # Desteklenen token tanımları
  utils/
    jupiterUltraApi.ts   # Jupiter API entegrasyonu
```

## Geliştirme Notları

### Custom Widget
- `fetchQuote` ve `fetchSwap` fonksiyonları gerçek Jupiter Ultra veya güncel API parametrelerine göre güncellenmeli.
- Token mint adresleri şu an gerçek mainnet adresleri kullanıyor.
- Cüzdan entegrasyonu (Phantom, Backpack vb.) eklenmesi gerekirse ayrı bir `wallet` store / hook yapısı kurulabilir.

### Jupiter Terminal
- Production ortamında external script loading çalışacaktır
- Development ortamında CORS/security policies nedeniyle script yükleme başarısız olabilir
- Terminal yapılandırması tamamen environment variables ile kontrol edilebilir

## Yapılacaklar (Öneri)

- [x] Jupiter Terminal embed entegrasyonu
- [x] Çevresel değişken desteği ve API key entegrasyonu
- [x] Dual widget layout
- [ ] Cüzdan bağlantısı (solana wallet adapter)
- [ ] Slippage ayarı UI (custom widget için)
- [ ] Route detay modalı (custom widget için)
- [ ] Hata ve loading durumlarını tasarımsal iyileştirme
- [ ] Testler (Vitest + React Testing Library)

## Lisans

İhtiyaca göre lisans ekleyin (MIT vb.).