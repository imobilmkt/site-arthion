# Arthion Reformas — Site institucional

Site one-page em HTML5 + CSS3 + JavaScript puro (sem frameworks, sem build). Basta abrir `index.html` no navegador ou servir a pasta com qualquer servidor estático.

## Estrutura de arquivos

```
index.html
projetos.html       → página do portfólio completo (ver seção 9)
reforma-de-apartamento.html → landing page de anúncio (ver seção 10)
reforma-de-casa.html        → landing page de anúncio (ver seção 10)
empresa-de-reforma.html     → landing page de anúncio (ver seção 10)
gestao-de-obra.html         → landing page de anúncio (ver seção 10)
reforma-comercial.html      → landing page de anúncio (ver seção 10)
projeto-e-execucao.html     → landing page de anúncio (ver seção 10)
css/style.css
js/main.js
assets/logo/       → logo e favicon
assets/img/        → fotografias do site
assets/img/projetos/ → fotos do portfólio, uma subpasta por projeto (ver seção 9)
fonts/quiche-sans/  → fonte de títulos antiga (comercial, fora de uso — ver seção 5)
fonts/calluna/      → fonte de texto corrido antiga (comercial, fora de uso — ver seção 5)
```

## Estrutura da página

Header sticky → Hero (dividido em 2 colunas) → Barra de diferenciais → Sobre → Serviços (6 ofertas) → Processo (linha do tempo, 5 etapas) → Portfólio → Estatísticas → Depoimentos (carrossel) → Localização e Contato → Rodapé (3 colunas).

## 1. Logo

Arte final da marca recebida em 2026-07-28 (arquivos `[Arthion] logo RGB-*.png` em `img/`, mantidos como fonte original). Cópias com nome mais legível, efetivamente usadas pelo site:

- `img/arthion-icone-crop.png` — só o monograma "AR" (recortado, sem a margem transparente do arquivo original), usado no logo do header (fundo escuro).
- `img/arthion-logo-completo-claro-crop.png` — logotipo completo com letras claras (recortado), usado no rodapé (fundo escuro).
- `img/arthion-icone.png` / `img/arthion-logo-completo-claro.png` — mesmas duas artes acima, mas sem o recorte (bastante margem transparente ao redor); mantidas só de referência, não usadas no site.
- `img/arthion-logo-completo.png` — logotipo completo com letras escuras, para uso em fundo claro.
- `img/arthion-logo-completo-tagline.png` — logotipo completo + tagline, para uso em fundo claro.
- `img/arthion-logo-completo-claro-alt.png` — variação do completo claro com o quadrado do monograma em vinho em vez de cobre; não está em uso, disponível caso precise de mais contraste num fundo específico.
- `assets/logo/favicon.png` — ícone da aba do navegador (cópia do `arthion-icone-crop.png`).

Os placeholders antigos (`assets/logo/logo-arthion.svg`, `assets/logo/logo-arthion-claro.svg`) e os SVGs anteriores (`img/logo quadrada.svg`, `img/logo deitada.svg`) ficaram sem uso após essa troca — não foram apagados, só não são mais referenciados no `index.html`.

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
- **Above the Beyond Script** (`fonts/above-the-beyond-script/`) — `--font-detail`: só detalhes decorativos pontuais (a palavra em destaque dentro de cada título, ex. "Alto Padrão", e a aspa grande dos depoimentos). Não é mais usada em títulos inteiros. Peso único Regular. Substituiu a Beautifully Delicious Script em 2026-07-28; diferente da anterior, tem o glifo acentuado completo (á, ã, ç, é, í, ó, õ, ú, ü), então as palavras que caem nela não precisam mais ser escritas sem acento.

Google Fonts (Cormorant Garamond / Montserrat / Alex Brush) continua carregado no `<head>` só como fallback automático, caso algum `.woff2` não carregue.

**⚠️ Ressalvas conhecidas, publicadas assim por decisão explícita do cliente (2026-07-22) — reveja antes de divulgar o site:**

1. **Licença do Cocomat Pro:** os arquivos são versões *trial* da Zetafonts. O EULA embutido no arquivo restringe o uso a pessoa física, sem fins comerciais, e proíbe explicitamente uso por empresa/estúdio — "this licence is reserved to individuals and doesn't apply to corporate/studio entities". Para publicar oficialmente, é preciso comprar a licença comercial em zetafonts.com antes.
2. **Acentos ausentes:** os arquivos de **The Seasons** não têm nenhum glifo acentuado (á, ã, ç, é, í, ó, õ, ú, ü e maiúsculas correspondentes). Qualquer palavra com acento cai para a fonte de fallback só naquele caractere — por exemplo "padrão" mostra o "ã" numa fonte diferente do resto da palavra.
   - **The Seasons (`--font-title`/`--font-body`)** ainda tem esse problema em aberto e **não** foi reescrita sem acento, porque é usada em textos correntes/títulos inteiros (ex. "Localização", "Transparência", "Excelência") — remover acentos ali mudaria o texto visível do site inteiro, não só um detalhe pontual. Se quiser o mesmo tratamento (reescrever sem acento) nos títulos, é só pedir.
   - **Above the Beyond Script (`--font-detail`)** — trocou a Beautifully Delicious Script em 2026-07-28. A fonte antiga não tinha glifo acentuado e por isso as palavras que caíam nela eram escritas sem acento no HTML (ex. `<em>Alto Padrao</em>`, `<em>servicos</em>`); a nova tem o acento completo, então isso foi revertido para `<em>Alto Padrão</em>` e `<em>serviços</em>`.

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

Domínio final definido (2026-10-16): `https://arthionreformas.com.br` (sem `www`). Todas as 8 páginas do site (`index.html`, `projetos.html` e as 6 landing pages — ver seção 10) usam esse domínio no `og:url`, `twitter:image`, `canonical` e nos blocos JSON-LD do schema.org, sem mais placeholder `SUBSTITUIR`. `robots.txt`, `sitemap.xml` (lista as 8 páginas) e `llms.txt` (lista as 8 páginas, seção "Páginas") também usam o mesmo domínio.

Se o domínio trocar de novo (ex. passar a usar `www`), repita a busca por `arthionreformas.com.br` nos arquivos acima e ajuste todas as ocorrências de uma vez — propositalmente não há mais nenhum placeholder para facilitar essa busca.

## 8. Otimizações para campanha Google Ads (2026-08-20)

Landing page ajustada para campanha paga com foco em conversão via WhatsApp:

- **Bug de rastreamento de conversão corrigido.** O `gtag_report_conversion` antigo usava `event_callback` + `window.location` dentro do callback e `onclick="return ...false"`, o que podia travar o clique esperando resposta do Google e nunca abrir o WhatsApp. Agora o link navega nativamente pelo próprio `href` (não há mais `return` no `onclick`) e o evento dispara em paralelo com `transport_type: 'beacon'`, sem bloquear nada. O ID de conversão (`AW-18241751082/SMw0CIzwotwcEKqQrPpD`) já estava configurado no arquivo — só o padrão de disparo foi corrigido; troque o ID (comentário `SUBSTITUIR` ao lado) se este não for o definitivo.
- **FAQ adicionada** (`#faq`, entre Depoimentos e Contato) com `<details>/<summary>` nativo (sem JS) e schema `FAQPage` espelhando o mesmo conteúdo — ajude a IA/Google a responder perguntas sobre a Arthion diretamente.
- **`llms.txt`, `robots.txt` e `sitemap.xml`** criados na raiz para SEO técnico e GEO (Generative Engine Optimization).
- **Schema.org LocalBusiness reforçado**: tipo mais específico (`HomeAndConstructionBusiness`/`GeneralContractor`), `geo` (lat/long do pino do Google Maps já usado no iframe), `priceRange` e `sameAs` (placeholders de Instagram/Facebook — substitua pelos links reais).
- **Canonical e Twitter Card** adicionados no `<head>`.
- **`assets/img/hero.png` renomeado para `assets/img/hero.jpg`** — o arquivo já era um JPEG por dentro, só com extensão errada (o que pode confundir o `Content-Type` servido e otimizações de imagem). Se for gerar um novo `og-image.jpg`, lembre que a proporção ideal é 1200×630 (o arquivo atual está quadrado, reaproveitado da logomarca).
- **Atributos `width`/`height` e `fetchpriority="high"`** adicionados nas imagens principais (evita layout shift e prioriza o carregamento da imagem do hero, candidata a LCP).
- **CSS e JS minificados**: `css/style.min.css` e `js/main.min.js` são os arquivos que o `index.html` carrega em produção, gerados a partir de `css/style.css` e `js/main.js` com `npx clean-css-cli` e `npx terser`. **Sempre edite os arquivos-fonte** (`style.css`/`main.js`) e rode os dois comandos abaixo antes de publicar, para os `.min` ficarem em dia:
  ```
  npx clean-css-cli -o css/style.min.css css/style.css
  npx terser js/main.js -o js/main.min.js -c -m
  ```

## 9. Portfólio (2026-10-14)

Seção "Portfólio" na home (`#portfolio`, entre Processo e Estatísticas) + página nova `projetos.html` com a galeria completa de cada projeto, uma seção por cliente (`#eilinia`, `#escritorio-cj`, `#fabio-e-bernardo`, `#joana`, `#luciana`, `#natalia-e-isabele`, `#raquel-e-gustavo`, `#regina`).

- **Origem das imagens:** pasta do Google Drive do cliente ("Projetos Marketing"), 8 subpastas (uma por projeto/cliente), ~103 imagens no total. Foram selecionadas as 48 melhores (4 a 8 por projeto, a 1ª de cada lista é a usada como destaque na home), evitando duplicatas e variações de uma mesma composição.
- **São renders 3D/IA, não fotos da obra concluída.** A maioria trazia uma marca d'água discreta no canto inferior direito (um brilho/estrela, ou o texto "ChatGPT" nas imagens do Escritório CJ). Por decisão do cliente (2026-10-14), o site apresenta essas imagens como resultado final do projeto, sem mencionar que são renders — o texto visível na página não faz essa distinção.
- **Nomes dos projetos:** usado o primeiro nome do(s) cliente(s) como aparecem nas pastas do Drive (decisão do cliente, 2026-10-14) — avalie no futuro se algum desses nomes precisa ser anonimizado por pedido do cliente.
- **Processamento das imagens:** cada arquivo foi baixado em resolução original, recortado (mantidos os 86% superiores/esquerdos da imagem, removendo a faixa inferior-direita onde ficava a marca d'água) e redimensionado para no máximo 1600px no maior lado, salvo como `.jpg` qualidade 84 em `assets/img/projetos/<slug>/NN.jpg`.
- **Galeria da página nova** usa `columns` (CSS multi-coluna, tipo masonry) para manter a proporção original de cada foto, em vez do grid 4:5 cortado usado na prévia da home (classe `.portfolio-item` + `.img-placeholder`, seção 12 do CSS).
- **Seção "Portfólio" movida para logo após o Hero** (2026-10-15), antes da Barra de diferenciais — deixou de ficar entre Processo e Estatísticas.
- **`assets/img/hero.jpg` substituído** (2026-10-15) pela foto do banheiro do projeto Regina (`assets/img/projetos/regina/06.jpg`), no lugar da foto do Fernando usada antes.

## 10. Landing pages da campanha do Google Ads (2026-10-15)

Seis páginas dedicadas, uma por grupo de anúncios da campanha "Arthion | Pesquisa | Reformas Alto Padrão | Conversão" (export do Google Ads Editor fornecido pelo cliente em 2026-10-15). Antes dessa mudança, todos os grupos de anúncios apontavam para a home genérica (`https://site-arthion.vercel.app/`) — o texto do anúncio prometia algo específico (ex. "Reforma de Casa no Lago Sul") mas a página de destino não tinha relação direta com a busca, o que pesa negativamente no Índice de Qualidade (componente "Experiência da página de destino" e "Relevância do anúncio").

| Grupo de anúncios | Página de destino | Palavras-chave de exemplo |
|---|---|---|
| Reforma de Apartamento | `reforma-de-apartamento.html` | reforma de apartamento brasilia, asa norte/sul, noroeste, sudoeste, cobertura |
| Reforma de Casa | `reforma-de-casa.html` | reforma de casa brasilia, lago sul, lago norte, park way, jardim botânico, ampliação |
| Empresa de Reforma | `empresa-de-reforma.html` | empresa de reforma brasilia, chave na mão, alto padrão, de luxo, perto de mim |
| Gestão e Acompanhamento de Obra | `gestao-de-obra.html` | gestão de obra, acompanhamento de obra, fiscalização, gerenciamento, engenheiro |
| Reforma Comercial | `reforma-comercial.html` | reforma comercial, escritório, clínica, consultório, loja, sala comercial |
| Projeto e Execução | `projeto-e-execucao.html` | arquiteto para reforma, compatibilização de projetos, projeto e execução |

Cada página reaproveita o cabeçalho, rodapé e as seções de confiança do site (Diferenciais, Processo, Estatísticas, Depoimentos, Contato — idênticas ao `index.html`) e troca só o que precisa bater com a busca:

- **Hero próprio** — título (H1), subtítulo e foto de capa específicos do grupo de anúncios, com o botão do WhatsApp já preenchido com uma mensagem mencionando a página de origem (ajuda a identificar de qual anúncio veio o lead).
- **Bloco "Serviços específicos"** — lista numerada reaproveitando o layout de `#servicos` da home, mas com os 6 itens cobrindo as variações de palavra-chave do grupo (bairros, tipos de imóvel, etc.) e uma foto quadrada própria.
- **Galeria de projetos relacionados** — 4 a 6 fotos reais do portfólio (`assets/img/projetos/`) relevantes ao tema da página, no mesmo layout em colunas (masonry) de `projetos.html`, com link para a página de portfólio completa.
- **FAQ próprio** — 4 perguntas específicas do grupo (preço, bairros atendidos, escopo do serviço) com o schema `FAQPage` correspondente no `<head>`.

Fotos usadas: a maioria vem do portfólio de projetos (`assets/img/projetos/`, ver seção 9) — ex. `gestao-de-obra.html` foge à regra e usa as fotos reais da equipe e do escritório (`img/FOTO EQUIPE.jpg`, `img/FOTO ESCRITORIO.jpg`) em vez de renders, por ser uma página sobre o serviço de gestão (não um ambiente específico).

**Pendente — atualizar o Final URL no Google Ads.** Eu não tenho acesso à conta de Google Ads do cliente, então a troca da URL de destino de cada grupo de anúncios precisa ser feita manualmente (no Google Ads Editor ou na interface web), apontando para `https://arthionreformas.com.br/<arquivo>.html` (domínio próprio, ver seção 7) em vez do domínio de staging `site-arthion.vercel.app` usado antes — confirme antes que o domínio já está publicado e servindo este mesmo site. Essas 6 páginas ainda não foram adicionadas ao menu principal do site (ficam fora do `<nav>` do `index.html`) por serem páginas de aterrissagem de anúncio, não conteúdo de navegação orgânica — mas cada uma tem um bloco "Outros serviços da Arthion" linkando para as outras 5 (logo antes do rodapé) e todas estão no `sitemap.xml`, então nenhuma fica órfã e todas continuam indexáveis.

### Pendente — aguardando print do Google Meu Negócio

Ainda não recebi o print do Google Meu Negócio da Arthion. Quando chegar, atualizar:
- Nota e número real de avaliações (adicionar `aggregateRating` no JSON-LD — hoje está de fora de propósito, para não simular dado que não temos).
- Confirmar se o nome/categoria exibidos no Google Meu Negócio batem com "Arthion Reformas" / "Arthion Arquitetura" usados no site.
- Depoimentos reais (hoje os três da seção `#depoimentos` estão assinados só como "Cliente Arthion" — texto de exemplo, não depoimento fictício inventado do zero, mas sem nome real).
- Fotos reais do Google Meu Negócio para substituir os placeholders de `assets/img/` (hero, sobre, serviços).
- Links reais de Instagram/Facebook (hoje `#` no rodapé e `SUBSTITUIR` no `sameAs` do schema.org).
