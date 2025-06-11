class CartaoService{
    pagarComCartao(valor){
        return `o pagamento foi feito no cartão no valor de: ${valor}`
    }
}

class PixService{
    pagarComPix(valor){
        return `o pagamento foi feito no pix no valor de: ${valor}`
    }
}

class PagamentoFacadeSingleton {
    constructor() {
        if (PagamentoFacadeSingleton .instance) return PagamentoFacadeSingleton .instance;
        this.cartaoService = new CartaoService();
        this.pixService = new PixService();
        PagamentoFacadeSingleton.instance = this;
    }

    pagar(tipo, valor) {
        if (tipo === "cartao") {
            return this.cartaoService.pagarComCartao(valor);
        } else if (tipo === "pix") {
            return this.pixService.pagarComPix(valor);
        } else {
            throw new Error("Tipo de pagamento inválido!");
        }
    }
}