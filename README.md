# 👩‍👧 Tia Lara

Site leve (≤250KB), estilo SPA (Single Page Application fake), feito com **Eleventy** e templates em **Liquid**. Deploy no **Netlify**.  

Website profissional para **divulgação e contato** do serviço de **cuidado infantil domiciliar** em **Uruana de Minas**.  
A Tia Lara oferece atenção, carinho e segurança para crianças enquanto os pais trabalham ou precisam de apoio.

## ✨ Features

- Estrutura minimalista e estática (Eleventy v3).
- Templates com **Liquid** (layouts/includes reutilizáveis).
- Navegação SPA-like (scroll suave entre seções).
- CSS simples em `src/assets/style.css` (sem frameworks) e minificado via **esbuild**.
- Deploy simplificado no **Netlify**.

## 📦 Instalação

```bash
git clone https://github.com/tialara/site.git
cd site
pnpm install
```

## 🛠️ Desenvolvimento

```bash
pnpm dev
```

Acesse [http://localhost:8080](http://localhost:8080)

## 🚀 Build para produção

```bash
pnpm build
```

Saída estará em `dist/`.

## 🧩 Liquid (templates)

- Layout principal em `src/_includes/layout.liquid`.
- Páginas usam front matter para apontar o layout e variáveis globais vêm de `src/_data/site.json`.
- Sintaxe Liquid: tags, filtros e includes para compor HTML de forma simples e reutilizável.

## 🌍 Deploy no Netlify

1. Faça login em [Netlify](https://www.netlify.com/).
2. Crie um novo site a partir do repositório.
3. Configure:
   - **Build command:** `pnpm build`
   - **Publish directory:** `dist`

## 📏 Tamanho esperado

- HTML + CSS: ~20KB (sem imagens).
- Total bem abaixo de 250KB.
