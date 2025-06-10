class Mensagem{
    enviar(texto){
        throw "Método abstrato!";
    }
}

class MensagemSMS extends Mensagem {
    enviar(texto) {
        return `SMS enviado com o texto: ${texto}`;
    }
}

class WhatsAppApi {
    sendWhatsAppMessage(text) {
        return `Mensagem enviada via API com o texto: ${texto}`;
    }
}

class MensagemWhatsAppAdapter extends Mensagem{
    constructor() {
        super();
        this.whatsApp = new WhatsAppApi();
    }
    enviar(texto) {
        return this.whatsApp.sendWhatsAppMessage(texto);
    }
}

class MensagemFactory {
    criarMensagem() {
        throw "Método abstrato!";
    }
}


class MensagemSMSFactory extends MensagemFactory {
    criarMensagem() {
        return new MensagemSMS();
    }
}

class MensagemWhatsappFactory extends MensagemFactory {
    criarMensagem() {
        return new MensagemWhatsAppAdapter();
    }
}

