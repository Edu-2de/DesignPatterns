// Composite: Component
class MenuComponent {
  constructor(name) {
    this.name = name;
  }
  display(indent = "") {
    throw new Error("Método deve ser implementado");
  }
}

// Composite: Leaf (Item do menu)
class MenuItem extends MenuComponent {
  display(indent = "") {
    console.log(indent + this.name);
  }
}

// Composite: Composite (Seção do menu)
class MenuSection extends MenuComponent {
  constructor(name) {
    super(name);
    this.children = [];
  }
  add(item) {
    this.children.push(item);
  }
  display(indent = "") {
    console.log(indent + this.name);
    this.children.forEach(child => child.display(indent + "  "));
  }
}

// Factory
class MenuFactory {
  static create(type, name) {
    if (type === "item") {
      return new MenuItem(name);
    } else if (type === "section") {
      return new MenuSection(name);
    } else {
      throw new Error("Tipo inválido");
    }
  }
}

// Exemplo de uso:
const entradas = MenuFactory.create("section", "Entradas");
const bebidas = MenuFactory.create("section", "Bebidas");
const prato1 = MenuFactory.create("item", "Bruschetta");
const prato2 = MenuFactory.create("item", "Salada Caprese");
const bebida1 = MenuFactory.create("item", "Suco de Laranja");

entradas.add(prato1);
entradas.add(prato2);
bebidas.add(bebida1);

const menu = MenuFactory.create("section", "Menu Principal");
menu.add(entradas);
menu.add(bebidas);

menu.display();
/*
Saída:
Menu Principal
  Entradas
    Bruschetta
    Salada Caprese
  Bebidas
    Suco de Laranja
*/