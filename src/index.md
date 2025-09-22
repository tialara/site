---
layout: layout.liquid
title: Meu Site SPA
description: 'Consultoria, desenvolvimento web e suporte técnico com foco em performance, acessibilidade e SEO.'
---

<section id="inicio" class="hero py4 center">
  <h1 class="mt0 mb2">Bem-vindo</h1>
  <p class="lead mb3">Este é um site leve, rápido e minimalista, agora com um visual mais caprichado.</p>
  <a href="#contato" class="btn">Fale comigo</a>
</section>

<section id="servicos" class="py4">
  <h2 class="mt0">Serviços</h2>
  <div class="grid grid-3 mt2">
    <div class="card">
      <h3 class="mt0 mb1">Consultoria</h3>
      <p class="m0">Diagnóstico, estratégia e planejamento para o seu projeto.</p>
    </div>
    <div class="card">
      <h3 class="mt0 mb1">Desenvolvimento Web</h3>
      <p class="m0">Sites rápidos, acessíveis e responsivos usando padrões modernos.</p>
    </div>
    <div class="card">
      <h3 class="mt0 mb1">Suporte Técnico</h3>
      <p class="m0">Acompanhamento contínuo e melhorias incrementais.</p>
    </div>
  </div>
</section>

<section id="depoimentos" class="py4">
  <h2 class="mt0">Depoimentos</h2>
  <blockquote class="card italic">
    <p class="m0">"Ótimo serviço, recomendo!"</p>
    <footer class="mt1">— Cliente Feliz</footer>
  </blockquote>
</section>

<section id="cobertura" class="py4">
  <h2 class="mt0">Área de Cobertura</h2>
  <p class="m0">Atendemos todo o Brasil remotamente.</p>
</section>

<section id="contato" class="py4">
  <h2 class="mt0">Contato</h2>
<form class="mt2" aria-label="Formulário de contato">
    <div class="mb2">
      <label class="sr-only" for="nome">Nome</label>
      <input id="nome" name="nome" class="form-control" type="text" placeholder="Seu nome" required autocomplete="name">
    </div>
    <div class="mb2">
      <label class="sr-only" for="email">E-mail</label>
      <input id="email" name="email" class="form-control" type="email" placeholder="Seu email" required autocomplete="email">
    </div>
    <div class="mb2">
      <label class="sr-only" for="mensagem">Mensagem</label>
      <textarea id="mensagem" name="mensagem" class="form-control" placeholder="Sua mensagem" rows="5" required></textarea>
    </div>
    <button class="btn" type="submit">Enviar</button>
  </form>
</section>
