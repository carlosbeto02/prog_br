# Formulários

A tag `<form>` é utilizada para coletar e enviar dados do usuário para um servidor.

## Estrutura Básica

```html
<form method="" action="">

    <input type="text" name="email">
    <input type="text" name="nome">
    <input type="submit">

</form>
```

---

# Atributos da Tag `<form>`

## `method`

Define como os dados serão enviados.

### `GET`
- Envia os dados pela URL.
- Utilizado principalmente para pesquisas e filtros.
- Os dados ficam visíveis na barra de endereço.

### `POST`
- Envia os dados no corpo da requisição.
- Mais utilizado para cadastros, login e envio de informações.

---

## `action`

Define para onde os dados serão enviados.

```html
<form action="/cadastro">
```

Normalmente recebe:
- uma URL;
- um endpoint da API;
- uma rota do servidor.

---

# Atributos da Tag `<input>`

## `type`

Define o tipo de dado que será recebido.

### Exemplos

```html
<input type="text">
<input type="email">
<input type="password">
<input type="number">
<input type="submit">
```

---

## `name`

Identifica o campo enviado ao servidor.

Exemplo:

```html
<input type="text" name="email">
```

Quando o formulário for enviado:

```text
email=usuario@email.com
```

O servidor utiliza o valor de `name` para identificar os dados recebidos.

---

## `submit`

Cria um botão para enviar o formulário.

```html
<input type="submit">
```

Também pode ser escrito como:

```html
<button type="submit">
    Enviar
</button>
```

---

# Exemplo Prático - Busca no YouTube

```html
<form method="GET" action="https://www.youtube.com/results">

    <input
        type="text"
        name="search_query"
        placeholder="Pesquisar..."
    >

    <input type="submit" value="Buscar">

</form>
```

## Como Funciona

Se o usuário digitar:

```text
CSS Flexbox
```

A URL gerada será:

```text
https://www.youtube.com/results?search_query=CSS+Flexbox
```

O YouTube recebe o valor de `search_query` e realiza a pesquisa.