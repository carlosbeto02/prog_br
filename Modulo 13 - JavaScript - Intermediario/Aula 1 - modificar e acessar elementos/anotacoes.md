# Seleção de Elementos no DOM

| Método | Quando Usar | Exemplo |
|----------|----------|----------|
| `getElementById()` | Quando o elemento possui um ID | `document.getElementById("menu")` |
| `querySelector()` | Selecionar um único elemento usando seletores CSS | `document.querySelector(".card")` |
| `querySelectorAll()` | Selecionar vários elementos | `document.querySelectorAll(".card")` |
| `getElementsByClassName()` | Método antigo para classes | `document.getElementsByClassName("card")` |
| `getElementsByTagName()` | Método antigo para tags | `document.getElementsByTagName("p")` |

---

## Mais Utilizados Atualmente

### Selecionar por ID

```js
const botao = document.getElementById("btnEnviar");
```

### Selecionar um elemento

```js
const card = document.querySelector(".card");
```

### Selecionar vários elementos

```js
const cards = document.querySelectorAll(".card");
```

---

# Manipulação de Atributos

| Ação | Método |
|--------|--------|
| Adicionar atributo | `setAttribute()` |
| Remover atributo | `removeAttribute()` |
| Ler atributo | `getAttribute()` |
| Verificar atributo | `hasAttribute()` |

---

## Adicionar Atributo

```js
input.setAttribute("placeholder", "Digite seu nome");
```

Resultado:

```html
<input placeholder="Digite seu nome">
```

---

## Remover Atributo

```js
input.removeAttribute("placeholder");
```

---

## Ler Atributo

```js
const valor = input.getAttribute("placeholder");
```

---

## Verificar Atributo

```js
input.hasAttribute("placeholder");
```

---

# Manipulação de Classes (Mais Utilizado)

| Ação | Método |
|--------|--------|
| Adicionar classe | `classList.add()` |
| Remover classe | `classList.remove()` |
| Alternar classe | `classList.toggle()` |
| Verificar classe | `classList.contains()` |

---

## Exemplos

Adicionar:

```js
elemento.classList.add("ativo");
```

Remover:

```js
elemento.classList.remove("ativo");
```

Alternar:

```js
elemento.classList.toggle("ativo");
```

Verificar:

```js
elemento.classList.contains("ativo");
```

---

# Forma Moderna (Mais Comum)

Em muitos casos, não usamos `setAttribute()`.

### Placeholder

```js
input.placeholder = "Digite seu nome";
```

### Imagem

```js
img.src = "foto.jpg";
```

### Input Desabilitado

```js
input.disabled = true;
```

---

# O que Decorar para Projetos Reais

## Seleção

```js
document.getElementById()
document.querySelector()
document.querySelectorAll()
```

## Classes

```js
elemento.classList.add()
elemento.classList.remove()
elemento.classList.toggle()
```

## Atributos

```js
elemento.setAttribute()
elemento.removeAttribute()
```

## Propriedades

```js
input.value
input.placeholder
input.disabled

img.src

elemento.textContent
```