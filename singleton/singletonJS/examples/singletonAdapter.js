class EmailSender {
    sendEmail(address, content){
        return `Voce do endereco ${address} recebeu o email com conteúdo: ${content} `
    }
}

class SmsSender{
    sendSms(phone, text){
        return `Voce do telefone ${phone} recebeu o sms com conteúdo: ${text} `
    }
}

class EmailAdapterSingleton {
    constructor() {
      if (EmailAdapterSingleton.instance) return EmailAdapterSingleton.instance;
      this.EmailSender = new EmailSender();
      EmailAdapterSingleton.instance = this;
    }

    sendMessage(to, message){
        return this.EmailSender.sendEmail(to, message);
    }
}


class SmsAdapterSingleton {
    constructor() {
      if (SmsAdapterSingleton.instance) return SmsAdapterSingleton.instance;
      this.SmsSender = new SmsSender();
      SmsAdapterSingleton.instance = this;
    }

    sendMessage(to, message){
        return this.SmsSender.sendSms(to, message);
    }
}

const emailAdapter1 = new EmailAdapterSingleton();
const emailAdapter2 = new EmailAdapterSingleton();
console.log(emailAdapter1 === emailAdapter2); // true

const smsAdapter1 = new SmsAdapterSingleton();
const smsAdapter2 = new SmsAdapterSingleton();
console.log(smsAdapter1 === smsAdapter2); // true

console.log(emailAdapter1.sendMessage('ana@email.com', 'Olá Ana!'));
// Voce do endereco ana@email.com recebeu o email com conteúdo: Olá Ana!

console.log(smsAdapter1.sendMessage('11999999999', 'Oi SMS!'));
// Voce do telefone 11999999999 recebeu o sms com conteúdo: Oi SMS!