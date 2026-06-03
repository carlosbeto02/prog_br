# Tipos de Input

## `text`

Campo de texto simples.

```html
<input type="text">
```

---

## `email`

Campo específico para e-mails.

```html
<input type="email">
```

O navegador pode validar automaticamente se o formato do e-mail é válido.

---

## `password`

Campo para senhas.

```html
<input type="password">
```

- Os caracteres digitados ficam ocultos.
- O navegador exibe uma máscara (`●` ou `*`) no lugar do texto.

---

## `number`

Campo para números.

```html
<input type="number">
```

Permite apenas valores numéricos.

---

## `submit`

Botão para enviar o formulário.

```html
<input type="submit">
```

---

# Checkbox

Permite selecionar uma ou mais opções.

## Exemplo

```html
<input type="checkbox" name="curso1" value="React"> React

<input type="checkbox" name="curso2" value="Node"> Node
```

### Características

- É possível marcar várias opções ao mesmo tempo.
- O atributo `value` define o valor enviado para o servidor.

---

# Radio

Permite selecionar apenas uma opção de um grupo.

## Exemplo

```html
<input type="radio" name="sexo" value="m" checked> Masculino

<input type="radio" name="sexo" value="f"> Feminino
```

### Características

- Todos os radios do mesmo grupo devem possuir o mesmo `name`.
- Apenas uma opção pode ser selecionada.
- O atributo `checked` define a opção marcada por padrão.

---

# Reset

Botão que limpa os valores do formulário.

## Exemplo

```html
<input type="reset" value="Limpar">
```

### Características

- Restaura os campos para os valores iniciais.
- O atributo `value` define o texto exibido no botão.

---

# Atributo `value`

Define o valor associado ao campo.

## Exemplo

```html
<input type="text" value="Carlos">
```

O campo já será exibido preenchido com:

```text
Carlos
```

Também é utilizado em botões:

```html
<input type="submit" value="Enviar">

<input type="reset" value="Limpar">
```

Nesse caso, o texto do botão será exibido conforme o valor definido.