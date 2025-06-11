// Subsistemas
class Pedido {
  constructor() {
    this.descricao = "Pedido simples";
  }
  getDescricao() {
    return this.descricao;
  }
}
class Carrinho {
  add() { console.log("Produto adicionado ao carrinho"); }
  remover() { console.log("Produto removido do carrinho"); }
}
class Pagamento {
  processar() { console.log("Pagamento processado"); }
}
class Entrega {
  agendar() { console.log("Entrega agendada"); }
  cancelar() { console.log("Entrega cancelada"); }
}

// Facade
class CompraFacade {
  constructor({ carrinho, pagamento, entrega }) {
    this.carrinho = carrinho;
    this.pagamento = pagamento;
    this.entrega = entrega;
    this.noCarrinho = false;
    this.pago = false;
  }

  adicionarAoCarrinho() {
    this.carrinho.add();
    this.noCarrinho = true;
  }
  removerDoCarrinho() {
    this.carrinho.remover();
    this.noCarrinho = false;
  }
  pagar() {
    if (this.noCarrinho) {
      this.pagamento.processar();
      this.pago = true;
    } else {
      console.log("Adicione ao carrinho antes de pagar.");
    }
  }
  agendarEntrega() {
    if (this.pago) {
      this.entrega.agendar();
    } else {
      console.log("Pague antes de agendar a entrega.");
    }
  }
  cancelar() {
    if (!this.pago) {
      this.removerDoCarrinho();
      console.log("Compra cancelada antes do pagamento.");
    } else {
      this.entrega.cancelar();
      console.log("Entrega cancelada após pagamento.");
    }
  }
}

// Factory
class CompraFactory {
  static create(choices = []) {
    const carrinho = choices.includes("carrinho") ? new Carrinho() : null;
    const pagamento = choices.includes("pagamento") ? new Pagamento() : null;
    const entrega = choices.includes("entrega") ? new Entrega() : null;
    return new CompraFacade({ carrinho, pagamento, entrega });
  }
}

// Exemplo de uso:
const compra = CompraFactory.create(["carrinho", "pagamento", "entrega"]);
compra.adicionarAoCarrinho();
compra.pagar();
compra.agendarEntrega();
// compra.cancelar(); // pode cancelar antes ou depois do pagamento