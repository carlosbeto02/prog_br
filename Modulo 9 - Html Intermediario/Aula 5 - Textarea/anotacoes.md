# Tags Semânticas HTML

Tags semânticas descrevem o significado do conteúdo, facilitando:
- Leitura do código;
- SEO;
- Acessibilidade;
- Manutenção do projeto.

---

# `body`

Contém todo o conteúdo visível da página.

```html
<body>
    Conteúdo da página
</body>
```

---

# `header`

Cabeçalho da página ou de uma seção.

Normalmente contém:
- Logo;
- Título;
- Menu de navegação.

```html
<header>
    <h1>Meu Site</h1>
</header>
```

---

# `nav`

Representa uma área de navegação.

```html
<nav>
    <a href="#">Home</a>
    <a href="#">Sobre</a>
</nav>
```

---

# `main`

Conteúdo principal da página.

Deve existir apenas um por página.

```html
<main>
    Conteúdo principal
</main>
```

---

# `section`

Agrupa conteúdos relacionados.

```html
<section>
    <h2>Produtos</h2>
</section>
```

---

# `article`

Conteúdo independente que faz sentido sozinho.

Exemplos:
- Post de blog;
- Notícia;
- Artigo.

```html
<article>
    <h2>Título do Artigo</h2>
</article>
```

---

# `aside`

Conteúdo complementar ao conteúdo principal.

Exemplos:
- Barra lateral;
- Propagandas;
- Links relacionados.

```html
<aside>
    Conteúdo secundário
</aside>
```

---

# `footer`

Rodapé da página ou seção.

Normalmente contém:
- Direitos autorais;
- Contatos;
- Redes sociais.

```html
<footer>
    © 2026
</footer>
```

---

# `figure`

Agrupa conteúdos visuais.

```html
<figure>
    <img src="imagem.jpg">
</figure>
```

---

# `figcaption`

Legenda de uma imagem dentro da tag `figure`.

```html
<figure>
    <img src="imagem.jpg">

    <figcaption>
        Descrição da imagem
    </figcaption>
</figure>
```

---

# Estrutura Semântica Básica

```html
<body>

    <header>
        <nav></nav>
    </header>

    <main>

        <section>

            <article></article>

        </section>

        <aside></aside>

    </main>

    <footer></footer>

</body>
```