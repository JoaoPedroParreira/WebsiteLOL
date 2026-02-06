# LoL Insights

Website moderno inspirado em Lolalytics.com e Blitz.gg, com frontend React + Tailwind e backend Node.js + Express.

## 📁 Estrutura
```
/frontend
/backend
README.md
```

## ⚙️ Requisitos
- Node.js 18+
- NPM ou Yarn

## 🔒 Configuração da Riot API
1. Cria o ficheiro `.env` dentro de `/backend`.
2. Adiciona a tua key:
```
RIOT_API_KEY=coloca_aqui_a_tua_key
```
3. O ficheiro `.env` já está no `.gitignore` para garantir segurança.

## 🚀 Como correr localmente
### Backend
```
cd backend
npm install
npm run dev
```
Backend disponível em `http://localhost:4000`.

### Frontend
```
cd frontend
npm install
npm run dev
```
Frontend disponível em `http://localhost:5173`.

O frontend usa proxy para `/api` apontando ao backend.

## ✅ Rotas de exemplo
- `GET /api/champions/rotation`
  - Faz request à Riot API usando `X-Riot-Token` com a key protegida no backend.

## 📊 Extras incluídos
- Recharts para gráficos (Champion Page)
- Skeleton loaders
- SEO básico em `index.html`
- Layout dark mode estilo esports

## ☁️ Deploy (Vercel + Render)
### Frontend (Vercel)
- Root directory: `frontend`
- Build command: `npm run build`
- Output directory: `dist`
- Variáveis de ambiente:
  - `VITE_BASE_PATH=/` (para Vercel)

### Backend (Render)
- Root directory: `backend`
- Build command: `npm install`
- Start command: `npm start`
- Variável: `RIOT_API_KEY`

## 🌐 Deploy no GitHub Pages (apenas frontend)
> O GitHub Pages serve apenas o frontend estático. O backend deve ficar num serviço como Render, Railway ou Fly.io.

1. Garante que o `base` no `frontend/vite.config.js` está com o nome do repo:
```
VITE_BASE_PATH=/WebsiteLOL/
```
2. Faz build e deploy:
```
cd frontend
npm install
npm run build
npm run deploy
```
3. No GitHub: Settings → Pages → Source: `gh-pages` / root.

### Nota sobre rotas
O frontend usa `HashRouter` para funcionar no GitHub Pages sem 404 em refresh.

---

Feito para rápido setup e pronto para evoluir com dados reais da Riot API.
