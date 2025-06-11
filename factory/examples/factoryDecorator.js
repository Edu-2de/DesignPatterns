// Componente base
class Sanduiche {
  custo() {
    return 20;
  }
  descricao() {
    return "Sanduíche";
  }
}

// Decorator base (opcional, para organização)
class SanduicheDecorator {
  constructor(sanduiche) {
    this.sanduiche = sanduiche;
  }
  custo() {
    return this.sanduiche.custo();
  }
  descricao() {
    return this.sanduiche.descricao();
  }
}

// Decorator concreto: adiciona queijo
class ComQueijo extends SanduicheDecorator {
  custo() {
    return super.custo() + 20;
  }
  descricao() {
    return super.descricao() + " com queijo";
  }
}

// Decorator concreto: adiciona bacon
class ComBacon extends SanduicheDecorator {
  custo() {
    return super.custo() + 30;
  }
  descricao() {
    return super.descricao() + " com bacon";
  }
}
class SanduicheFactory {
  static create(choices = []) {
    let pedido = new Sanduiche();
    for (const choice of choices) {
      if (choice === "queijo") {
        pedido = new ComQueijo(pedido);
      } else if (choice === "bacon") {
        pedido = new ComBacon(pedido);
      } else {
        throw new Error("Tipo inválido");
      } 
    } 
    return pedido; 
  } 
}


let pedido = SanduicheFactory.create(["queijo", "bacon"]);
console.log(pedido.descricao()); // Sanduíche com queijo com bacon
console.log(pedido.custo());    