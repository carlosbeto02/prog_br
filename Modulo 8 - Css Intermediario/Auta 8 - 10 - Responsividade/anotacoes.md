# Viewport

A tag `viewport` é utilizada dentro da tag `<head>` do HTML.

## Exemplo

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## Função

- Responsável por adaptar o site ao tamanho da tela do dispositivo.
- Fundamental para responsividade em celulares e tablets.

### `width=device-width`
- Define a largura da página com base na largura do dispositivo.

### `initial-scale=1.0`
- Define o nível inicial de zoom da página.

---

# Responsividade

Responsividade é a capacidade do site se adaptar a diferentes tamanhos de tela.

## Boas práticas

- Evitar medidas fixas como `px` em muitos casos.
- Preferir medidas flexíveis.

## Medidas responsivas

| Unidade | Função |
|---|---|
| `%` | Valor relativo ao elemento pai |
| `vw` | Relative à largura da tela (`viewport width`) |
| `vh` | Relative à altura da tela (`viewport height`) |
| `rem` | Relative ao tamanho da fonte do `:root` |

---

# Media Queries

Media Queries permitem aplicar CSS para tamanhos específicos de tela.

---

## `max-width`

Aplica o CSS quando a tela tiver NO MÁXIMO o valor definido.

## Exemplo

```css
@media screen and (max-width: 400px) {

}
```

### Funcionamento
- Se a tela tiver `400px` ou menos, o CSS será aplicado.

### Importante
As Media Queries seguem a ordem do CSS.

Exemplo incorreto:

```css
@media screen and (max-width: 300px) {

}

@media screen and (max-width: 400px) {

}
```

Nesse caso:
- o CSS de `400px` pode sobrescrever o de `300px`.

---

## `min-width`

Aplica o CSS quando a tela tiver NO MÍNIMO o valor definido.

## Exemplo

```css
@media screen and (min-width: 400px) {

}
```

### Funcionamento
- Se a tela tiver `400px` ou mais, o CSS será aplicado.

### Importante
Também respeita a ordem do CSS.

Exemplo incorreto:

```css
@media screen and (min-width: 400px) {

}

@media screen and (min-width: 300px) {

}
```

Nesse caso:
- o CSS de `300px` pode sobrescrever o de `400px`.