class Pizza{
    custo() { throw "Método abstrato!"; }
    descricao() { throw "Método abstrato!"; }
}

class PizzaSimples extends Pizza{
    custo() {return 10}
    descricao() {return `Pizza Simples`}
}

class PizzaDecorator extends Pizza {
    constructor(pizza) {
        super();
        this.pizza = pizza;
    }
    custo() { return this.pizza.custo(); }
    descricao() { return this.pizza.descricao(); }
}

class QueijoExtra extends PizzaDecorator {
    custo() { return this.pizza.custo() + 2; }
    descricao() { return this.pizza.descricao() + " com queijo extra"; }
}


class BordaRecheada extends PizzaDecorator {
    custo() { return this.pizza.custo() + 20; }
    descricao() { return this.pizza.descricao() + " com borda recheada"; }
}

let pedido = new PizzaSimples();
console.log(pedido.descricao(), pedido.custo()); // Pizza Simples 10

pedido = new QueijoExtra(pedido);
console.log(pedido.descricao(), pedido.custo()); // Pizza Simples com queijo extra 12

pedido = new BordaRecheada(pedido);
console.log(pedido.descricao(), pedido.custo()); // Pizza Simples com queijo extra com borda recheada 32