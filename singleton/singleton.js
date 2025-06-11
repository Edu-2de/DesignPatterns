class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    this.value = 42;
    Singleton.instance = this;
    return this;
  }
}

const s1 = new Singleton();
const s2 = new Singleton();

console.log(s1 === s2); // true
console.log(s1.value);  // 42
s2.value = 99;
console.log(s1.value);  // 99