// Componente base
class Cafe {
  custo() {
    return 5;
  }
  descricao() {
    return "Café";
  }
}

// Decorator base (opcional, para organização)
class CafeDecorator {
  constructor(cafe) {
    this.cafe = cafe;
  }
  custo() {
    return this.cafe.custo();
  }
  descricao() {
    return this.cafe.descricao();
  }
}

// Decorator concreto: adiciona leite
class ComLeite extends CafeDecorator {
  custo() {
    return super.custo() + 2;
  }
  descricao() {
    return super.descricao() + " com leite";
  }
}

// Decorator concreto: adiciona chocolate
class ComChocolate extends CafeDecorator {
  custo() {
    return super.custo() + 3;
  }
  descricao() {
    return super.descricao() + " com chocolate";
  }
}

// Uso:
let pedido = new Cafe();
pedido = new ComLeite(pedido);
pedido = new ComChocolate(pedido);

console.log(pedido.descricao()); // Café com leite com chocolate
console.log(pedido.custo());     // 5 + 2 + 3 = 10