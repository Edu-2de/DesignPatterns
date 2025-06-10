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

class MensagemApi extends Mensagem {
    sendWhatsAppMessage(text) {
        return `Mensagem enviada via API com o texto: ${texto}`;
    }
}