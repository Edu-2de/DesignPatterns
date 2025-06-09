// Uma "API antiga" com um método diferente do esperado
class OldApi {
    legacyRequest(data) {
      return `Old API received: ${data}`;
    }
  }
  
  // Adapter Singleton: adapta OldApi para um novo método 'request'
  class AdapterSingleton {
    constructor() {
      if (AdapterSingleton.instance) return AdapterSingleton.instance;
      this.oldApi = new OldApi();
      AdapterSingleton.instance = this;
    }
  
    // Novo método que adapta a chamada ao método antigo
    request(data) {
      // Adapta para legacyRequest
      return this.oldApi.legacyRequest(data);
    }
  }
  
  // Testando o AdapterSingleton
  const adapter1 = new AdapterSingleton();
  const adapter2 = new AdapterSingleton();
  
  console.log(adapter1 === adapter2); // true (mesma instância)
  console.log(adapter1.request("Hello!")); // "Old API received: Hello!"









  
  // Singleton Composite
  class CompositeSingleton {
    constructor() {
      if (CompositeSingleton.instance) return CompositeSingleton.instance;
      this.children = [];
      CompositeSingleton.instance = this;
    }
    add(child) {
      this.children.push(child);
    }
  }








  
  // Singleton Facade que usa Adapter e Composite Singletons
  class FacadeSingleton {
    constructor() {
      if (FacadeSingleton.instance) return FacadeSingleton.instance;
      this.adapter = new AdapterSingleton();
      this.composite = new CompositeSingleton();
      FacadeSingleton.instance = this;
    }
    // ...facade methods
  }






  
  // Proxy Singleton que protege acesso ao Facade
  class ProxySingleton {
    constructor() {
      if (ProxySingleton.instance) return ProxySingleton.instance;
      this.facade = new FacadeSingleton();
      ProxySingleton.instance = this;
    }
    // ...proxy methods
  }
  







  // Decorator Singleton adicionando comportamento extra ao Composite
  class DecoratorSingleton {
    constructor(component) {
      if (DecoratorSingleton.instance) return DecoratorSingleton.instance;
      this.component = component;
      DecoratorSingleton.instance = this;
    }
    // ...decorator methods
  }






  
  
  // Bridge Singleton separando abstração e implementação
  class BridgeSingleton {
    constructor(implementation) {
      if (BridgeSingleton.instance) return BridgeSingleton.instance;
      this.implementation = implementation;
      BridgeSingleton.instance = this;
    }
    // ...bridge methods
  }