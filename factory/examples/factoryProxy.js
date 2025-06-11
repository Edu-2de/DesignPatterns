// Objeto real
class ImagemReal {
  constructor(nomeArquivo) {
    this.nomeArquivo = nomeArquivo;
    this.carregarImagem();
  }

  carregarImagem() {
    console.log(`Carregando imagem: ${this.nomeArquivo}`);
  }

  exibir() {
    console.log(`Exibindo imagem: ${this.nomeArquivo}`);
  }
}

// Proxy
class ProxyImagem {
  constructor(nomeArquivo) {
    this.nomeArquivo = nomeArquivo;
    this.imagemReal = null;
  }

  exibir() {
    if (!this.imagemReal) {
      this.imagemReal = new ImagemReal(this.nomeArquivo);
    }
    this.imagemReal.exibir();
  }
}

// Factory
class ImagemFactory {
  static create(tipo, nomeArquivo) {
    if (tipo === "proxy") {
      return new ProxyImagem(nomeArquivo);
    } else if (tipo === "real") {
      return new ImagemReal(nomeArquivo);
    } else {
      throw new Error("Tipo de imagem inválido");
    }
  }
}

// Uso:
const imagemProxy = ImagemFactory.create("proxy", "foto-grande.png");
console.log("Imagem criada, mas ainda não carregada...");
imagemProxy.exibir(); // Carrega e exibe
imagemProxy.exibir(); // Só exibe, não carrega de novo

const imagemReal = ImagemFactory.create("real", "foto-pequena.png");
// Aqui já carrega imediatamente
imagemReal.exibir();