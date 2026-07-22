# Arthion Reformas — Site institucional

Site one-page em HTML5 + CSS3 + JavaScript puro (sem frameworks, sem build). Basta abrir `index.html` no navegador ou servir a pasta com qualquer servidor estático.

## Estrutura de arquivos

```
index.html
css/style.css
js/main.js
assets/logo/       → logo e favicon
assets/img/        → fotografias do site
fonts/quiche-sans/  → fonte de títulos antiga (comercial, fora de uso — ver seção 5)
fonts/calluna/      → fonte de texto corrido antiga (comercial, fora de uso — ver seção 5)
```

## Estrutura da página

Header sticky → Hero (dividido em 2 colunas) → Barra de diferenciais → Sobre → Serviços (6 ofertas) → Processo (linha do tempo, 5 etapas) → Portfólio → Estatísticas → Depoimentos (carrossel) → Localização e Contato → Rodapé (3 colunas).

## 1. Como colocar o logo

Substitua os dois arquivos SVG placeholder por sua arte final, mantendo os mesmos nomes (ou ajuste os caminhos em `index.html` se preferir outro formato, ex. `.png`):

- `assets/logo/logo-arthion.svg` — versão principal, usada no header (fundo claro)
- `assets/logo/logo-arthion-claro.svg` — versão clara, usada no rodapé (fundo escuro)
- `assets/logo/favicon.svg` — ícone da aba do navegador

## 2. Como colocar as imagens

Todas as imagens já têm um `<img>` com `src` apontando para o caminho definitivo dentro de `assets/img/`. Basta salvar o arquivo final com o nome exato abaixo que ele substitui automaticamente o placeholder (marcado com `<!-- SUBSTITUIR -->` no HTML).

| Arquivo | Seção | Proporção recomendada | Dimensão sugerida |
|---|---|---|---|
| `assets/img/hero.jpg` | Hero (coluna direita) | 4:5 ou 1:1 (retrato/quadrado) | 1200×1500px ou maior |
| `assets/img/sobre.jpg` | Sobre | 4:5 (retrato) | 1000×1250px |
| `assets/img/projeto-01.jpg` | Portfólio — Residência Lago Sul | 4:5 | 1000×1250px |
| `assets/img/projeto-02.jpg` | Portfólio — Apartamento Noroeste | 4:5 | 1000×1250px |
| `assets/img/projeto-03.jpg` | Portfólio — Cobertura Sudoeste | 4:5 | 1000×1250px |
| `assets/img/projeto-04.jpg` | Portfólio — Studio Asa Sul | 4:5 | 1000×1250px |
| `assets/img/projeto-05.jpg` | Portfólio — Residência Park Way | 4:5 | 1000×1250px |
| `assets/img/projeto-06.jpg` | Portfólio — Escritório Corporativo | 4:5 | 1000×1250px |
| `assets/img/og-image.jpg` | Compartilhamento (Open Graph) | 1200×630 | fixo |

Enquanto o arquivo real não existir, aparece um bloco na cor da marca com um texto indicando qual imagem deve entrar ali — nada quebra visualmente.

## 3. Como trocar textos

Todo o conteúdo está direto no `index.html`, em português, sem sistema de templates. Principais pontos editáveis:

- **Texto da seção "Sobre"** — dois parágrafos dentro de `<section id="sobre">`.
- **Diferenciais, Processo, Serviços e Estatísticas** — textos escritos para este redesign (não existiam no site anterior); ajuste livremente títulos, descrições e números conforme os dados reais da empresa.
- **Legendas do portfólio** — são fictícias (`Residência Lago Sul`, `Apartamento Noroeste`, etc.), edite o texto dentro de cada `<figcaption>` e do `<span class="portfolio-item__overlay">` correspondente.
- **Depoimentos** — três blocos `<blockquote class="testimonial">`, com nome fictício "Cliente Arthion" para substituir.
- **E-mail** — ainda não existia um e-mail real no site; foi usado `contato@arthionreformas.com.br` como placeholder no rodapé (marcado com `<!-- SUBSTITUIR -->`). Troque pelo e-mail oficial da empresa.
- **Horário de funcionamento** — procure por "Segunda a sexta, a partir das 08:30" (seção Contato) e pelo campo `closes` dentro do JSON-LD no `<head>` (schema.org).
- **Mensagens do WhatsApp** — veja a seção 4 abaixo.

## 4. WhatsApp

O número usado em todo o site é **(61) 99245-6202** (`5561992456202`). Cada botão abre uma conversa com uma mensagem pré-preenchida diferente. Para alterar uma mensagem, edite o texto depois de `?text=` no `href` do link (ele precisa estar URL-encoded — acentos e espaços viram `%XX`).

## 5. Fontes

O sistema tipográfico usa 4 variáveis em `css/style.css` (`--font-title`, `--font-subtitle`, `--font-body`, `--font-detail`), mapeadas para 3 famílias ativas via `@font-face` (arquivos convertidos para `.woff2` a partir do que foi enviado). Desde a troca pedida em 2026-07-22, os papéis são:

- **The Seasons** (`fonts/the-seasons/`) — `--font-title` e `--font-body`: títulos (H1/H2), números de destaque (estatísticas) e texto corrido — ou seja, tudo que precisa "chamar atenção" além do corpo do texto. Pesos instalados: Light, Regular, Bold (+ itálicos).
- **Cocomat Pro** (`fonts/cocomat-pro/`) — `--font-subtitle`: labels de seção, menu, botões (caixa alta). Sem alteração nessa troca. Pesos instalados: UltraLight e Light.
- **Beautifully Delicious Script** (`fonts/beautifully-delicious-script/`) — `--font-detail`: só detalhes decorativos pontuais (a palavra em destaque dentro de cada título, ex. "Alto Padrao", e a aspa grande dos depoimentos). Não é mais usada em títulos inteiros. Peso único Regular.

Google Fonts (Cormorant Garamond / Montserrat / Alex Brush) continua carregado no `<head>` só como fallback automático, caso algum `.woff2` não carregue.

**⚠️ Ressalvas conhecidas, publicadas assim por decisão explícita do cliente (2026-07-22) — reveja antes de divulgar o site:**

1. **Licença do Cocomat Pro:** os arquivos são versões *trial* da Zetafonts. O EULA embutido no arquivo restringe o uso a pessoa física, sem fins comerciais, e proíbe explicitamente uso por empresa/estúdio — "this licence is reserved to individuals and doesn't apply to corporate/studio entities". Para publicar oficialmente, é preciso comprar a licença comercial em zetafonts.com antes.
2. **Acentos ausentes:** os arquivos de **The Seasons** e **Beautifully Delicious Script** não têm nenhum glifo acentuado (á, ã, ç, é, í, ó, õ, ú, ü e maiúsculas correspondentes). Qualquer palavra com acento cai para a fonte de fallback só naquele caractere — por exemplo "padrão" mostra o "ã" numa fonte diferente do resto da palavra.
   - **Beautifully Delicious Script (`--font-detail`)** — por decisão do cliente (2026-07-22), as palavras que caem nessa fonte são escritas sem acentos/cedilha no próprio HTML, já que só aparecem ali (ex. `<em>Alto Padrao</em>` no hero, `<em>servicos</em>` na seção Serviços). Não é erro de digitação — é proposital, pra evitar a quebra visual. Se substituir por uma versão completa da fonte, pode devolver o acento normalmente.
   - **The Seasons (`--font-title`/`--font-body`)** ainda tem esse problema em aberto e **não** foi reescrita sem acento, porque é usada em textos correntes/títulos inteiros (ex. "Localização", "Transparência", "Excelência") — remover acentos ali mudaria o texto visível do site inteiro, não só um detalhe pontual. Se quiser o mesmo tratamento (reescrever sem acento) nos títulos, é só pedir.

Como o Cocomat Pro só veio em UltraLight/Light (sem Regular nem Bold), onde o CSS pede peso 600/700 o navegador vai aplicar negrito sintético a partir do Light — funciona, mas o traço fica menos fiel ao desenho original da fonte. Foi por isso que os números das estatísticas (`.stat__number`) saíram do Cocomat Pro e foram para o The Seasons Bold, que tem um peso Bold de verdade — evita o negrito sintético que estava deixando os números com aparência estranha.

3. **Símbolos e algarismos duplicados (arquivos trial, confirmado glifo a glifo):** o **The Seasons** reaproveita o desenho do algarismo "4" nos símbolos `%`, `+`, `#`, `$`, `&`, `*`, `/`, `-`, `=`, `(`, `)`, `@`, `!`, `"`, `'` — todos saem com o contorno idêntico ao "4", travados de propósito na versão demo. Já o **Cocomat Pro** tem o problema oposto: os 10 algarismos (`0`-`9`) compartilham o mesmo desenho duplicado entre si.

   Correções pontuais já aplicadas:
   - `.stat__number .num-symbol` — isola só o `%`/`+` dos números de estatística (`+150`, `+10`, `100%`) em Cormorant Garamond, mantendo os algarismos em The Seasons.
   - `.process-step__number` (os "01, 02, 03..." da seção Processo) — trocado de Cocomat Pro para The Seasons, cujos algarismos são corretos.
   - `.contact__list span` e `.footer__contact-list li span` — o telefone `(61) 99245-6202` e o CEP `70719-900` quebravam no parêntese/hífen do The Seasons; e o `@` do e-mail no rodapé também. Ambos os elementos foram trocados por inteiro para Cormorant Garamond.
   - `.footer__desc` — as aspas retas do texto `"Criando novas formas..."` também caem nesse bug; trocado para Cormorant Garamond.
   - `.footer__copy` — o "2026" do copyright quebrava nos algarismos duplicados do Cocomat Pro; trocado para Montserrat.

   Se comprar as licenças completas dessas fontes no futuro, provavelmente dá pra remover esses contornos (reverter os `font-family` acima para `var(--font-body)`/`var(--font-subtitle)`) — mas teste os glifos de novo antes, com o método usado aqui (`fontTools`, comparando bounding box de cada caractere).

As fontes de marca anteriores (**Quiche Sans** e **Calluna**) continuam instaladas em `fonts/quiche-sans/` e `fonts/calluna/`, com os blocos `@font-face` comentados em `css/style.css`, caso o projeto precise reverter para elas.

## 6. Mapa

O mapa embutido na seção de contato usa o embed do Google Maps apontando diretamente para o pino "Arthion Arquitetura". Se precisar trocar, gere um novo link em [Google Maps → Compartilhar → Incorporar um mapa] e substitua o `src` do `<iframe>` em `index.html`.

## 7. Domínio

Antes de publicar, atualize as URLs marcadas como placeholder no `<head>` do `index.html` (`og:url` e a URL dentro do JSON-LD do schema.org) para o domínio final do site.
