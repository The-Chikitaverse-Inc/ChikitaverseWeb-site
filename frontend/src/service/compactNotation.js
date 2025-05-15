export default function compactNotation(numero, opcoes = {}) {
    const {
      idioma = 'en',
      digitos = 1,
      estilo = 'compact',
      formato = 'short'
    } = opcoes;
  
    return new Intl.NumberFormat(idioma, {
      notation: estilo,
      maximumFractionDigits: digitos,
      compactDisplay: formato
    }).format(numero);
  }
  