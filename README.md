# Portfolio

Modern, responsive kişisel portfolyo sitesi. React + TypeScript + Tailwind + Framer Motion ile yazıldı. GitHub Pages üzerinde yayınlanır.

**Canlı site:** https://azizisayev.github.io/Portfolio/

## Kurulum

```bash
npm install
npm run dev
```

## Yayınlama

1. Repo Settings → Pages → Source: **GitHub Actions**
2. `main` branch'e push et — otomatik deploy olur

Manuel deploy:

```bash
npm run deploy
```

## Projelerini ekleme

1. Screenshot'ları `public/screenshots/` klasörüne koy (PNG/JPG/WebP)
2. `src/data/projects.ts` dosyasına proje bilgilerini ekle
3. `src/data/profile.ts` içinden isim, bio, e-posta ve sosyal linkleri güncelle

## Tech

- Vite + React 19 + TypeScript
- Tailwind CSS v4
- Framer Motion
- Zod
- GitHub Pages
