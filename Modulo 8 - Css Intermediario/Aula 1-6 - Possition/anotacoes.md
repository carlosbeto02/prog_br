## Static
- Posição padrão dos elementos.
- Não responde a `top`, `left`, `right` ou `bottom`.

---

## Relative
- Move o elemento em relação à posição original dele.
- O espaço original continua reservado.
- Pode usar `top`, `left`, `right` e `bottom`.

---

## Absolute
- O elemento sai do fluxo normal da página.
- Outros elementos ocupam o espaço dele.
- Se posiciona em relação ao primeiro elemento pai com `position` diferente de `static`.
- Se não existir, usa o `body`/`viewport` como referência.

---

## Fixed
- Fica fixo na tela (`viewport`).
- Não se move junto com a página.
- Pode se sobrepor aos outros