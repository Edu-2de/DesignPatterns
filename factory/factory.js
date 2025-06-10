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
      criarPizza({
            const sabor = this.criarSabor();
            return sabor.preparar();
      })
}