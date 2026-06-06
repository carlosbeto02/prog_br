# Modos de Vincular o JavaScript

## 1. Script Interno

O código JavaScript é escrito diretamente dentro do arquivo HTML.

```html
<script>
    alert("Olá Mundo!");
</script>
```

---

## 2. Script Externo

O JavaScript fica em um arquivo separado e é importado no HTML.

```html
<script src="script.js"></script>
```

### Exemplo de Estrutura

```text
projeto/
│
├── index.html
└── script.js
```

---

# Onde Colocar a Tag `<script>`?

## No Final do `<body>` (Mais Comum)

```html
<body>

    <h1>Olá Mundo</h1>

    <script src="script.js"></script>
</body>
```

### Vantagens

- O HTML é carregado primeiro.
- O JavaScript é executado após os elementos serem criados.
- Evita erros ao manipular elementos da página.
- Foi a forma mais utilizada durante muitos anos.

---

## No `<head>`

```html
<head>
    <script src="script.js"></script>
</head>
```

### Problema

O navegador tenta executar o JavaScript antes de carregar o HTML.

Exemplo:

```javascript
document.querySelector("h1");
```

O elemento pode ainda não existir, gerando erros.

---

## No `<head>` com `defer` (Recomendado Atualmente)

```html
<head>
    <script src="script.js" defer></script>
</head>
```

### Funcionamento

- O arquivo JavaScript é baixado enquanto o HTML é carregado.
- A execução acontece somente após o HTML ser processado.

### Vantagens

- Melhor performance.
- Código organizado no `<head>`.
- Evita problemas de carregamento.

---

# Resumo

| Forma | Utilização |
|---------|---------|
| `<script> código </script>` | JavaScript dentro do HTML |
| `<script src="script.js"></script>` | Arquivo externo |
| `<script src="script.js"></script>` no final do `body` | Método clássico |
| `<script src="script.js" defer></script>` no `head` | Método moderno e recomendado |