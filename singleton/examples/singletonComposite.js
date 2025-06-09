class Listar{
    show(indent = "") {
        throw new Error("Método abstrato!");
    }
}

class Arquivo extends Listar{
    constructor(name){
        super();
        this.name = name;
    }
    show(indent = "") {
        return `${indent}- ${this.name}`;
    }
}

class PastaCompositeSingleton extends Listar{
    constructor() {
        super();
        if (PastaCompositeSingleton.instance) return PastaCompositeSingleton.instance;
        this.children = [];
        PastaCompositeSingleton.instance = this;
    }
    add(filho) {
        this.children.push(filho);
    }
    show(indent = "") {
        return this.children.map(child => child.show(indent + "  ")).join("\n");
    }
}

const raiz = new PastaCompositeSingleton();
raiz.add(new Arquivo("arquivo1.txt"));
raiz.add(new Arquivo("arquivo2.txt"));

const subpasta = new PastaCompositeSingleton(); // mesma instância da raiz
subpasta.add(new Arquivo("sub-arquivo.txt"));
raiz.add(subpasta);

console.log(raiz.listar());
// Saída esperada:
// - arquivo1.txt
// - arquivo2.txt
//   - sub-arquivo.txt