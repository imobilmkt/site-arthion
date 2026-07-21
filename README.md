# Arthion Reformas — Site institucional

Site one-page em HTML5 + CSS3 + JavaScript puro (sem frameworks, sem build). Basta abrir `index.html` no navegador ou servir a pasta com qualquer servidor estático.

## Estrutura de arquivos

```
index.html
css/style.css
js/main.js
assets/logo/       → logo e favicon
assets/img/        → fotografias do site
fonts/quiche-sans/  → fonte de títulos (comercial)
fonts/calluna/      → fonte de texto corrido (comercial)
```

## 1. Como colocar o logo

Substitua os dois arquivos SVG placeholder por sua arte final, mantendo os mesmos nomes (ou ajuste os caminhos em `index.html` se preferir outro formato, ex. `.png`):

- `assets/logo/logo-arthion.svg` — versão principal, usada no header (fundo claro)
- `assets/logo/logo-arthion-claro.svg` — versão clara, usada no footer (fundo escuro)
- `assets/logo/favicon.svg` — ícone da aba do navegador

## 2. Como colocar as imagens

Todas as imagens já têm um `<img>` com `src` apontando para o caminho definitivo dentro de `assets/img/`. Basta salvar o arquivo final com o nome exato abaixo que ele substitui automaticamente o placeholder (marcado com `<!-- SUBSTITUIR -->` no HTML).

| Arquivo | Seção | Proporção recomendada | Dimensão sugerida |
|---|---|---|---|
| `assets/img/hero.jpg` | Hero (topo) | 16:9 (paisagem) | 1920×1080px ou maior |
| `assets/img/sobre.jpg` | Sobre | 4:5 (retrato) | 1000×1250px |
| `assets/img/projeto-01.jpg` | Projetos — Residência Lago Sul | 4:5 | 1000×1250px |
| `assets/img/projeto-02.jpg` | Projetos — Apartamento Noroeste | 4:5 | 1000×1250px |
| `assets/img/projeto-03.jpg` | Projetos — Cobertura Sudoeste | 4:5 | 1000×1250px |
| `assets/img/projeto-04.jpg` | Projetos — Studio Asa Sul | 4:5 | 1000×1250px |
| `assets/img/projeto-05.jpg` | Projetos — Residência Park Way | 4:5 | 1000×1250px |
| `assets/img/projeto-06.jpg` | Projetos — Escritório Corporativo | 4:5 | 1000×1250px |
| `assets/img/og-image.jpg` | Compartilhamento (Open Graph) | 1200×630 | fixo |

Enquanto o arquivo real não existir, aparece um bloco na cor da marca com um texto indicando qual imagem deve entrar ali — nada quebra visualmente.

## 3. Como trocar textos

Todo o conteúdo está direto no `index.html`, em português, sem sistema de templates. Principais pontos editáveis:

- **Texto da seção "Sobre"** — dois parágrafos dentro de `<section id="sobre">`.
- **Legendas do portfólio** — são fictícias (`Residência Lago Sul`, `Apartamento Noroeste`, etc.), edite o texto dentro de cada `<figcaption>` e do `<span class="portfolio-item__overlay">` correspondente.
- **Depoimentos** — três blocos `<blockquote class="testimonial">`, com nome fictício "Cliente Arthion" para substituir.
- **Horário de funcionamento** — procure por "Segunda a sexta, a partir das 08:30" (seção Contato) e pelo campo `closes` dentro do JSON-LD no `<head>` (schema.org).
- **Mensagens do WhatsApp** — veja a seção 4 abaixo.

## 4. WhatsApp

O número usado em todo o site é **(61) 99245-6202** (`5561992456202`). Cada botão abre uma conversa com uma mensagem pré-preenchida diferente:

- Header / Hero / Contato → orçamento geral
- Cada card de serviço → mensagem específica daquele serviço
- Botão flutuante → mesma mensagem geral do hero

Para alterar uma mensagem, edite o texto depois de `?text=` no `href` do link (ele precisa estar URL-encoded — acentos e espaços viram `%XX`). Ferramentas online de "URL encode" resolvem isso rapidamente caso troque o texto.

## 5. Como instalar as fontes oficiais (Quiche Sans e Calluna)

O site já está pronto para receber as fontes comerciais da marca. Enquanto os arquivos não chegam, ele usa **Marcellus** (títulos) e **Lora** (texto) via Google Fonts como fallback visualmente equivalente.

Quando você tiver os arquivos `.woff2`:

1. Coloque-os em `fonts/quiche-sans/` e `fonts/calluna/` (veja os nomes esperados nos arquivos `COLOQUE_AQUI_OS_ARQUIVOS.txt` dentro de cada pasta).
2. Abra `css/style.css` e descomente o bloco `@font-face` no topo do arquivo (seção 1).
3. Pronto — a pilha de fontes (`font-family: 'Quiche Sans', 'Marcellus', serif;`) já prioriza a fonte oficial automaticamente assim que ela existir.

## 6. Mapa

O mapa embutido na seção de contato usa o embed padrão do Google Maps (sem necessidade de chave de API), apontando para o endereço da Arthion na Asa Norte. Se o endereço mudar, basta gerar um novo link em [Google Maps → Compartilhar → Incorporar um mapa] e trocar o `src` do `<iframe>` em `index.html`.

## 7. Domínio

Antes de publicar, atualize as URLs marcadas como placeholder no `<head>` do `index.html` (`og:url` e a URL dentro do JSON-LD do schema.org) para o domínio final do site.
