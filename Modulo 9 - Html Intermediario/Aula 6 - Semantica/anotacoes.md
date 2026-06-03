# Textarea

Utilizada para receber textos maiores, como mensagens, comentários ou descrições.

## Exemplo

```html
<textarea name="mensagem"></textarea>
```

## Importante

- O atributo `name` identifica o campo enviado ao servidor.
- Sem o atributo `name`, o valor digitado não será enviado no formulário.

### Exemplo

```html
<textarea name="mensagem"></textarea>
```

Resultado:

```text
mensagem=Olá mundo
```

Se o campo não possuir `name`:

```html
<textarea></textarea>
```

O conteúdo digitado será ignorado no envio do formulário.