// --- Composite ---
class MenuComponent {
  render(indent = 0) {
    throw new Error("Método abstrato!");
  }
}

class MenuItem extends MenuComponent {
  constructor(nome) {
    super();
    this.nome = nome;
  }
  render(indent = 0) {
    return " ".repeat(indent) + `- ${this.nome}\n`;
  }
}

class MenuComposite extends MenuComponent {
  constructor(nome) {
    super();
    this.nome = nome;
    this.children = [];
  }
  add(component) {
    this.children.push(component);
  }
  render(indent = 0) {
    let result = " ".repeat(indent) + `> ${this.nome}\n`;
    for (let child of this.children) {
      result += child.render(indent + 2);
    }
    return result;
  }
}

// --- Builder ---
class MenuBuilder {
  constructor(nome) {
    this.root = new MenuComposite(nome);
    this.stack = [this.root]; // Ajuda a saber onde estamos na árvore
  }
  addItem(nome) {
    this.stack[this.stack.length - 1].add(new MenuItem(nome));
    return this;
  }
  beginSubmenu(nome) {
    const submenu = new MenuComposite(nome);
    this.stack[this.stack.length - 1].add(submenu);
    this.stack.push(submenu); // desce um nível na árvore
    return this;
  }
  endSubmenu() {
    if (this.stack.length > 1) {
      this.stack.pop(); // sobe um nível na árvore
    }
    return this;
  }
  build() {
    return this.root;
  }
}

// --- Uso ---
const menu = new MenuBuilder("Menu Principal")
  .addItem("Home")
  .beginSubmenu("Produtos")
    .addItem("Notebook")
    .addItem("Smartphone")
    .beginSubmenu("Acessórios")
      .addItem("Carregador")
      .addItem("Fone de Ouvido")
    .endSubmenu()
  .endSubmenu()
  .addItem("Sobre")
  .build();

console.log(menu.render());
/*
> Menu Principal
  - Home
  > Produtos
    - Notebook
    - Smartphone
    > Acessórios
      - Carregador
      - Fone de Ouvido
  - Sobre
*/