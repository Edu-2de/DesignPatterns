class Sanduiche {
  constructor(builder) {
    this.pao = builder.pao;
    this.carne = builder.carne;
    this.queijo = builder.queijo;
    this.saladas = builder.saladas;
    this.molhos = builder.molhos;
  }

  descricao() {
    return `Sanduíche: Pão ${this.pao}, Carne ${this.carne}, Queijo ${this.queijo}, Saladas ${this.saladas.join(', ')}, Molhos ${this.molhos.join(', ')}`;
  }
}

class SanduicheBuilder {
  constructor() {
    this.pao = "francês";
    this.carne = "frango";
    this.queijo = "prato";
    this.saladas = [];
    this.molhos = [];
  }

  setPao(pao) {
    this.pao = pao;
    return this;
  }

  setCarne(carne) {
    this.carne = carne;
    return this;
  }

  setQueijo(queijo) {
    this.queijo = queijo;
    return this;
  }

  addSalada(salada) {
    this.saladas.push(salada);
    return this;
  }

  addMolho(molho) {
    this.molhos.push(molho);
    return this;
  }

  build() {
    return new Sanduiche(this);
  }
}

// Uso:
const sanduiche = new SanduicheBuilder()
  .setPao("integral")
  .setCarne("carne bovina")
  .setQueijo("cheddar")
  .addSalada("alface")
  .addSalada("tomate")
  .addMolho("maionese")
  .build();

console.log(sanduiche.descricao());
// Saída: Sanduíche: Pão integral, Carne carne bovina, Queijo cheddar, Saladas alface, tomate, Molhos maionese