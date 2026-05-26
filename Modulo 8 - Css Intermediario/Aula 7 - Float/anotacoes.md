# Float

- Atualmente caiu em desuso para criação de layouts.
- Foi substituído principalmente por `Flexbox` e `Grid`.
- Ainda pode ser utilizado em casos específicos, como fazer o texto contornar uma imagem.

## Exemplo

```css
img {
    float: left;
}
```

---

# Clear

A propriedade `clear` impede que elementos fiquem ao lado de elementos com `float`.

## Valores

### `clear: left`
- Remove elementos flutuando à esquerda.

### `clear: right`
- Remove elementos flutuando à direita.

### `clear: both`
- Remove elementos flutuando dos dois lados.

## Exemplo

```css
p {
    clear: both;
}
```

---

# Overflow

A propriedade `overflow` controla o comportamento do conteúdo quando ele ultrapassa o tamanho da `div`.

## `overflow: auto`

- Adiciona scroll automaticamente quando necessário.
- Também pode fazer a `div` reconhecer corretamente a altura dos elementos internos com `float`.

## Exemplo

```css
.container {
    overflow: auto;
}
```