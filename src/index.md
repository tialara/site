---
layout: layout.liquid
title: Meu Site SPA
description: 'Consultoria, desenvolvimento web e suporte técnico com foco em performance, acessibilidade e SEO.'
---

<section id="inicio" class="py4 center border-bottom">
  <h1 class="mt0 mb2">Bem-vindo</h1>
  <p class="lead mb3">Este é um site leve, rápido e minimalista, agora com um visual mais caprichado.</p>
  <a href="#contato" class="inline-block px3 py2 border rounded">Fale comigo</a>
</section>

<section id="servicos" class="py4">
  <h2 class="mt0">Serviços</h2>
  <div class="flex flex-wrap mxn2 mt2">
    <div class="col-12 sm-col-6 md-col-4 px2 mb2">
      <div class="border rounded p2">
        <h3 class="mt0 mb1">Consultoria</h3>
        <p class="m0">Diagnóstico, estratégia e planejamento para o seu projeto.</p>
      </div>
    </div>
    <div class="col-12 sm-col-6 md-col-4 px2 mb2">
      <div class="border rounded p2">
        <h3 class="mt0 mb1">Desenvolvimento Web</h3>
        <p class="m0">Sites rápidos, acessíveis e responsivos usando padrões modernos.</p>
      </div>
    </div>
    <div class="col-12 sm-col-6 md-col-4 px2 mb2">
      <div class="border rounded p2">
        <h3 class="mt0 mb1">Suporte Técnico</h3>
        <p class="m0">Acompanhamento contínuo e melhorias incrementais.</p>
      </div>
    </div>
  </div>
</section>

<section id="depoimentos" class="py4">
  <h2 class="mt0">Depoimentos</h2>
<blockquote class="border rounded p2 italic">
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
      <label for="nome">Nome</label>
      <input id="nome" name="nome" class="block col-12 p2 border rounded" type="text" placeholder="Seu nome" required autocomplete="name">
    </div>
    <div class="mb2">
      <label for="email">E-mail</label>
      <input id="email" name="email" class="block col-12 p2 border rounded" type="email" placeholder="Seu email" required autocomplete="email">
    </div>
    <div class="mb2">
      <label for="mensagem">Mensagem</label>
      <textarea id="mensagem" name="mensagem" class="block col-12 p2 border rounded" placeholder="Sua mensagem" rows="5" required></textarea>
    </div>
    <button class="inline-block px3 py2 border rounded" type="submit">Enviar</button>
  </form>
</section>
