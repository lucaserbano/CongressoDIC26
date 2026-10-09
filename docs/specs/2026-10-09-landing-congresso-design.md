# Landing congresso.enxerga.net — Design

**Data:** 2026-10-09
**Prazo:** no ar até 2026-10-11 (congresso: 15–17 out 2026, Curitiba-PR)

## Objetivo
Vender cobertura audiovisual (foto e vídeo) para **palestrantes** do 15º Congresso do Departamento de Imagem Cardiovascular. Única conversão: botão de WhatsApp com mensagem pronta.

## Restrições
- Enxerga é **independente**: não usar logo, cores ou marca do evento/SBC. O nome do congresso aparece apenas como contexto, junto com uma nota de independência no rodapé.
- Não atende expositores; não mencionar estande.
- Sem selo de "recomendado" nos pacotes.
- Sem CTA final.

## Identidade visual (herdada de enxerga.net)
- Fundo `#000` com grade de 56px (`rgba(255,255,255,0.07)`), brilhos radiais coloridos.
- Títulos: Arial 900, caixa alta, `letter-spacing:-0.02em`. Subtítulos/labels: Helvetica Neue fina, caixa alta, espaçada.
- Paleta: ciano `#00FFFF`, magenta `#FF00FF`, amarelo `#FFFF00`; texto secundário `#999`.
- Brand bar de 3px; botão primário amarelo com texto preto.
- Cores por oferta: Fotos = ciano, Fotos + Reels = magenta, Carrossel = amarelo.
- Mobile first.

## Estrutura
1. **Topo fixo:** logo Enxerga + botão "WhatsApp".
2. **Hero:** label "Para palestrantes · Imagem Cardiovascular · Curitiba, 15–17 out"; título "SUA PALESTRA NO FEED NO MESMO DIA"; texto de apoio; botão "Ver pacotes" (âncora).
3. **Como funciona:** 3 passos: reserve pelo WhatsApp (dia/horário) → registro da participação → entrega no mesmo dia.
4. **Pacotes:** subtítulo "Cobertura do evento por participante · 3 dias".
   - **Fotos: R$ 290.** Cerca de 15–20 fotos profissionais editadas e prontas para publicação.
   - **Fotos + Reels: R$ 480.** Fotos + vídeo curto de cerca de 30s na vertical para Reels, pronto para publicação.
   - **Adicional: + R$ 90.** Carrossel para Instagram criado com as suas fotos (válido para ambos).
   - Tudo entregue no mesmo dia.
   - Nota: "Reserva por ordem de contato, conforme o horário da sua palestra."
5. **Quem faz:** médico, fotógrafo e videógrafo; 2–3 fotos de portfólio do site principal.
6. **Rodapé:** link enxerga.net, Instagram, nota "A Enxerga é independente e não possui vínculo com a organização do evento."

## WhatsApp
Número `5541999837301`. Links `https://wa.me/5541999837301?text=<mensagem codificada>`:
- Topo: mensagem genérica de interesse.
- Cada pacote: nome + preço do pacote, pedido de dia/horário da palestra, pergunta sobre o carrossel (+R$ 90).

## Implementação
- `index.html` + `assets/css/style.css`, sem build e sem dependências.
- Assets copiados de WebsiteEnxerga: logo, favicon, fotos de portfólio.
- `og:image` e meta tags para a pré-visualização no WhatsApp.
- `CNAME` com `congresso.enxerga.net`; GitHub Pages pela branch `main`.
- DNS Hostinger: CNAME `congresso` → `lucaserbano.github.io`.

## Verificação
Screenshots em 390px e 1440px; conferir cada link do WhatsApp (texto decodificado); sem rolagem horizontal no mobile.
