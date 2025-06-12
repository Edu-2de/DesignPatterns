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

class FormatoDOCX

// --- Abstração ---
class Mensagem {
  constructor(builder, canalEnvio) {
    this.assunto = builder.assunto;
    this.corpo = builder.corpo;
    this.destinatario = builder.destinatario;
    this.canalEnvio = canalEnvio;
  }
  enviar() {
    return this.canalEnvio.enviar(this);
  }
}

// --- Builder ---
class MensagemBuilder {
  constructor() {
    this.assunto = "Sem assunto";
    this.corpo = "";
    this.destinatario = "";
  }
  setAssunto(assunto) {
    this.assunto = assunto;
    return this;
  }
  setCorpo(corpo) {
    this.corpo = corpo;
    return this;
  }
  setDestinatario(dest) {
    this.destinatario = dest;
    return this;
  }
  build(canalEnvio) {
    return new Mensagem(this, canalEnvio);
  }
}

// --- Uso ---
const email = new CanalEmail();
const sms = new CanalSMS();

const mensagem1 = new MensagemBuilder()
  .setAssunto("Olá")
  .setCorpo("Bem-vindo ao sistema.")
  .setDestinatario("joao@email.com")
  .build(email);

const mensagem2 = new MensagemBuilder()
  .setCorpo("Seu código é 1234.")
  .setDestinatario("+551199999999")
  .build(sms);

console.log(mensagem1.enviar());
// [Email] Para: joao@email.com - Assunto: Olá - Corpo: Bem-vindo ao sistema.

console.log(mensagem2.enviar());
// [SMS] Para: +551199999999 - Mensagem: Seu código é 1234.