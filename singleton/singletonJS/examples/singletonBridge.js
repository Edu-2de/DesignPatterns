// Implementação: Canal de Notificação
class CanalNotificacao {
    enviar(mensagem) {
        throw "Método abstrato!";
    }
}

class CanalEmail extends CanalNotificacao {
    enviar(mensagem) {
        return `Email enviado com a mensagem: ${mensagem}`;
    }
}

class CanalSMS extends CanalNotificacao {
    enviar(mensagem) {
        return `SMS enviado com a mensagem: ${mensagem}`;
    }
}

// Abstração: Notificação
class Notificacao {
    constructor(canalNotificacao) {
        this.canalNotificacao = canalNotificacao;
    }
    enviar(mensagem) {
        throw "Método abstrato!";
    }
}

class NotificacaoAlerta extends Notificacao {
    enviar(mensagem) {
        return `Enviando notificação de alerta: ${this.canalNotificacao.enviar(mensagem)}`;
    }
}
class NotificacaoPromocao extends Notificacao {
    enviar(mensagem) {
        return `Enviando notificação de promoção: ${this.canalNotificacao.enviar(mensagem)}`;
    }
}

// Exemplo de uso:
const alertaEmail = new NotificacaoAlerta(new CanalEmail());
console.log(alertaEmail.enviar("Servidor caiu!"));
// Saída: Enviando notificação de alerta: Email enviado com a mensagem: Servidor caiu!

const promocaoSMS = new NotificacaoPromocao(new CanalSMS());
console.log(promocaoSMS.enviar("Promoção imperdível!"));
// Saída: Enviando notificação de promoção: SMS enviado com a mensagem: Promoção imperdível!