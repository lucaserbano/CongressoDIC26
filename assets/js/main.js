// Links de WhatsApp com mensagem pronta. Sem JS, o href padrão abre o chat sem texto.
(function () {
  var WA = 'https://wa.me/5541999837301';
  var CONTEXTO = 'Olá! Sou palestrante no Congresso de Imagem Cardiovascular em Curitiba';
  var DETALHES = '\n\nMinha participação é no dia __ às __h.\nIncluir carrossel para Instagram (+R$ 90): Sim / Não';

  var MENSAGENS = {
    geral: CONTEXTO + ' e gostaria de saber mais sobre a cobertura de fotos e vídeo.',
    fotos: CONTEXTO + ' e quero reservar o pacote Fotos (R$ 290).' + DETALHES,
    reels: CONTEXTO + ' e quero reservar o pacote Fotos + Reels (R$ 480).' + DETALHES
  };

  document.querySelectorAll('[data-wa]').forEach(function (link) {
    var msg = MENSAGENS[link.getAttribute('data-wa')];
    if (msg) link.href = WA + '?text=' + encodeURIComponent(msg);
  });
})();
