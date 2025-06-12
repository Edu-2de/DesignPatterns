// --- Bridge ---
// Implementação base
class FormatoSalvamento {
  salvar(dados) {
    throw new Error("Método abstrato!");
  }
}

// Implementações concretas
class FormatoPDF extends FormatoSalvamento {
  salvar(dados) {
    return `[PDF] Titulo: ${dados.titulo} - Conteudo: ${dados.conteudo} - Autor: ${dados.autor}`;
  }
}

class FormatoTXT extends FormatoSalvamento {
  salvar(dados) {
    return `[TXT] Titulo: ${dados.titulo} - Conteudo: ${dados.conteudo} - Autor: ${dados.autor}`;
  }
}

class FormatoDOCX extends FormatoSalvamento {
  salvar(dados) {
    return `[DOCX] Titulo: ${dados.titulo} - Conteudo: ${dados.conteudo} - Autor: ${dados.autor}`;
  }
}

// --- Abstração ---
class Dados {
  constructor(builder, formatoSalvamento) {
    this.titulo = builder.titulo;
    this.conteudo = builder.conteudo;
    this.autor = builder.autor;
    this.formatoSalvamento = formatoSalvamento;
  }
  salvar() {
    return this.formatoSalvamento.salvar(this);
  }
}

// --- Builder ---
class DadosBuilder {
  constructor() {
    this.titulo = "Sem título";
    this.conteudo = "";
    this.autor = "";
  }
  setTitulo(titulo) {
    this.titulo = titulo;
    return this;
  }
  setConteudo(conteudo) {
    this.conteudo = conteudo;
    return this;
  }
  setAutor(autor) {
    this.autor = autor;
    return this;
  }
  build(formatoSalvamento) {
    return new Dados(this, formatoSalvamento);
  }
}

// --- Uso ---
const pdf = new FormatoPDF();
const txt = new FormatoTXT();
const docx = new FormatoDOCX();

const dados1 = new DadosBuilder()
  .setTitulo("Olá")
  .setConteudo("Bem-vindo ao sistema.")
  .setAutor("João")
  .build(pdf);

const dados2 = new DadosBuilder()
  .setConteudo("Seu código é 1234.")
  .setAutor("+551199999999")
  .build(txt);

console.log(dados1.salvar());
// [PDF] Titulo: Olá - Conteudo: Bem-vindo ao sistema. - Autor: João

console.log(dados2.salvar());
// [TXT] Titulo: Sem título - Conteudo: Seu código é 1234. - Autor: +551199999999