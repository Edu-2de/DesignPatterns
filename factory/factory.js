class Pizza {
      perparar(){
            throw "Método abstrato!";
      }
}

class PizzaCalabresa extends Pizza {
      perparar() {
            return "Pizza Calabresa preparada";
      }
}

class PizzaMarguerita extends Pizza {
      perparar() {
            return "Pizza Marguerita preparada";
      }
}