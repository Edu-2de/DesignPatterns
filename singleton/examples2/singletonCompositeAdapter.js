class NotificacaoManager{
      enviar(mensagem) {
            throw new Error("Método Abstrato!");
      }
}

class NotificacaoEmail extends NotificacaoManager {
      enviarEmail(mensagem) {
            return `Notificação por Email: ${mensagem}`;
      }
}

class NotificacaoSMS extends NotificacaoManager {
      enviarSMS(mensagem) {
            return `Notificação por SMS: ${mensagem}`;
      }
}
class NotificacaoPush extends NotificacaoManager {
      enviarPush(mensagem) {
            return `Notificação Push: ${mensagem}`;
      }
}

class NotificacaoManagerComposite {
      constructor() {
            if (NotificacaoManagerComposite.instance) return NotificacaoManagerComposite.instance;
            this.notificacoes = [];
            NotificacaoManagerComposite.instance = this;
      }

      add(notificacao) {
            this.notificacoes.push(notificacao);
      }

      enviarTodas(mensagem) {
            return this.notificacoes.map(n => n.enviar(mensagem)).join("\n");
      }
}

class NotificacaoEmailAdapter extends NotificacaoManager {
      constructor() {
            super();
            this.notificacaoEmail = new NotificacaoEmail();
      }

      enviar(mensagem) {
            return this.notificacaoEmail.enviarEmail(mensagem);
      }
}

class NotificacaoSMSAdapter extends NotificacaoManager {
      constructor() {
            super();
            this.notificacaoSMS = new NotificacaoSMS();
      }

      enviar(mensagem) {
            return this.notificacaoSMS.enviarSMS(mensagem);
      }
}

class NotificacaoPushAdapter extends NotificacaoManager {
      constructor() {
            super();
            this.notificacaoPush = new NotificacaoPush();
      }

      enviar(mensagem) {
            return this.notificacaoPush.enviarPush(mensagem);
      }
}

// Criando os adaptadores
const emailAdapter = new NotificacaoEmailAdapter();
const smsAdapter = new NotificacaoSMSAdapter();
const pushAdapter = new NotificacaoPushAdapter();

// Gerenciador central (singleton)
const manager1 = new NotificacaoManagerComposite();
const manager2 = new NotificacaoManagerComposite();
console.log(manager1 === manager2); // true

manager1.add(emailAdapter);
manager1.add(smsAdapter);
manager1.add(pushAdapter);

console.log(manager1.enviarTodas("Olá, usuário!"));
/*
Saída:
Notificação por Email: Olá, usuário!
Notificação por SMS: Olá, usuário!
Notif*/