# 🚀 Meu Site SPA (Eleventy + Basscss + Netlify)

Site leve (≤250KB), estilo SPA (Single Page Application fake), feito com **Eleventy**, **Basscss** (utilitários CSS) e deploy no **Netlify**.

## ✨ Features

- Estrutura minimalista e estática (Eleventy).
- Navegação SPA-like (scroll suave entre seções).
- CSS minificado via **esbuild**.
- Estilização com utilitários do **Basscss** (sem frameworks pesados).
- Deploy simplificado no **Netlify**.

## 📦 Instalação

```bash
git clone https://github.com/usuario/my-spa.git
cd my-spa
npm install
```

## 🛠️ Desenvolvimento

```bash
npm run start
```

Acesse [http://localhost:8080](http://localhost:8080)

## 🚀 Build para produção

```bash
npm run build
```

Saída estará em `/dist`.

## 🌍 Deploy no Netlify

1. Faça login em [Netlify](https://www.netlify.com/).
2. Crie um novo site a partir do repositório.
3. Configure:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

## 📏 Tamanho esperado

- HTML + CSS + Basscss: ~20KB (sem imagens).
- Total bem abaixo de 250KB.
