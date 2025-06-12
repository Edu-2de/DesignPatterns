// --- Builder ---
class Pedido {
  constructor(builder) {
    this.nome = builder.nome;
    this.items = builder.items;
  }
  resumo() {
    return `Pedido: ${this.nome} (${this.items.length} itens)`;
  }
}

class PedidoBuilder {
  constructor() {
    this.nome = "Sem título";
    this.items = [];
  }
  setNome(nome) {
    this.nome = nome;
    return this;
  }
  addItem(item) {
    this.items.push(item);
    return this;
  }
  build() {
    return new Pedido(this);
  }
}

// --- Adapters de exportação (simulando bibliotecas externas) ---
class SistemaERP {
  exportarComoERP(data) {
    return `Usado o sistema ERP: ${JSON.stringify(data)}`;
  }
}
class SistemaLogistica {
  exportarComoLogistica(data) {
    return `Usado o sistema de Logística: ${JSON.stringify(data)}`;
  }
}

// Adapter para interface comum "exportar"
class ERPAdapter {
  constructor(exportador) {
    this.exportador = exportador;
  }
  exportar(pedido) {
    return this.exportador.exportarComoERP({
      nome: pedido.nome,
      items: pedido.items,
    });
  }
}

class LogisticaAdapter {
  constructor(exportador) {
    this.exportador = exportador;
  }
  exportar(pedido) {
    return this.exportador.exportarComoLogistica({
      nome: pedido.nome,
      items: pedido.items,
    });
  }
}

// --- Uso ---
const pedido = new PedidoBuilder()
  .setNome("Pedido do João")
  .addItem({ produto: "Bola", qtd: 3 })
  .addItem({ produto: "Chuteira", qtd: 1 })
  .build();

console.log(pedido.resumo()); // Pedido: Pedido do João (2 itens)

const erpAdapter = new ERPAdapter(new SistemaERP());
const logisticaAdapter = new LogisticaAdapter(new SistemaLogistica());

console.log(erpAdapter.exportar(pedido));      // Usado o sistema ERP: ...
console.log(logisticaAdapter.exportar(pedido)); // Usado o sistema de Logística: ...