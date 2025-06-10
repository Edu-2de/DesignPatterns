class Pizza {
      preparar(){
            throw "Método abstrato!";
      }
}

class PizzaCalabresa extends Pizza {
      preparar() {
            return "Pizza Calabresa preparada";
      }
}

class PizzaMarguerita extends Pizza {
      preparar() {
            return "Pizza Marguerita preparada";
      }
}

class Pizzaria {
      criarPizza(){
            const sabor = this.criarSabor();
            return sabor.preparar();
      }

      criarSabor(){
            throw "Método abstrato!";
      }
}

class PizzariaCalabresa extends Pizzaria {
      criarSabor() {
            return new PizzaCalabresa();
      }
}

class PizzariaMarguerita extends Pizzaria {
      criarSabor() {
            return new PizzaMarguerita();
      }
}