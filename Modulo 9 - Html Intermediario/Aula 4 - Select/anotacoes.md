## Select

Cria uma lista de opções para o usuário escolher.

### Atributos

- `selected` → deixa a opção selecionada por padrão.
- `size` → define quantas opções ficam visíveis ao mesmo tempo.
- `multiple` → permite selecionar mais de uma opção.

### Exemplo

```html
<form method="GET">

    <select name="estado" size="5" multiple>

        <option value="RJ">Rio de Janeiro</option>

        <option value="SP" selected>
            São Paulo
        </option>

    </select>

    <input type="submit" value="Enviar">

</form>
```

### Resultado

Sem `multiple`:
- Apenas uma opção pode ser selecionada.

Com `multiple`:
- É possível selecionar várias opções utilizando:
  - `Ctrl + Clique` (Windows/Linux)
  - `Cmd + Clique` (Mac)

### Dados enviados

Se o usuário selecionar:

- Rio de Janeiro
- São Paulo

A URL poderá ficar parecida com:

```text
?estado=RJ&estado=SP
```