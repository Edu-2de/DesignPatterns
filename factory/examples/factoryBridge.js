<<<<<<< HEAD
// Implementação do Exportador (Bridge)
class ExportadorDados {
    exportar(dados) {
        throw "Método abstrato!";
=======
class ExportadorDados{
    exportar(dados){
        throw `Método abstrato`
>>>>>>> 76c036252f45aa0f14917771de734840e68b7717
    }
}

class ExportadorPDF extends ExportadorDados {
    exportar(dados) {
        return `PDF enviado: ${dados}`;
    }
}
<<<<<<< HEAD

=======
>>>>>>> 76c036252f45aa0f14917771de734840e68b7717
class ExportadorCSV extends ExportadorDados {
    exportar(dados) {
        return `CSV enviado: ${dados}`;
    }
}

<<<<<<< HEAD
// Abstração do Relatório (Bridge)
=======



>>>>>>> 76c036252f45aa0f14917771de734840e68b7717
class Relatorio {
    constructor(exportador) {
        this.exportador = exportador;
    }
    gerar(dados) {
        throw "Método abstrato!";
    }
}

<<<<<<< HEAD
class RelatorioFinanceiro extends Relatorio {
    gerar(dados) {
        return `Alerta: ${this.exportador.exportar(dados)}`;
    }
}

class RelatorioVendas extends Relatorio {
    gerar(dados) {
        return `Promoção: ${this.exportador.exportar(dados)}`;
    }
}

// Factory Method
=======



class RelatorioFinanceiro extends Relatorio  {
    gerar(dados) {
        return `Alerta: ${this.exportador.enviar(dados)}`;
    }
}

class RelatorioVendas extends Relatorio  {
    gerar(dados) {
        return `Promoção: ${this.exportador.enviar(dados)}`;
    }
}

>>>>>>> 76c036252f45aa0f14917771de734840e68b7717
class RelatorioFactory {
    criarRelatorio() {
        throw "Método abstrato!";
    }
}

class RelatorioFinanceiroPDFFactory extends RelatorioFactory {
    criarRelatorio() {
        return new RelatorioFinanceiro(new ExportadorPDF());
    }
}

<<<<<<< HEAD
class RelatorioFinanceiroCSVFactory extends RelatorioFactory {
    criarRelatorio() {
        return new RelatorioFinanceiro(new ExportadorCSV());
    }
}

class RelatorioVendasPDFFactory extends RelatorioFactory {
    criarRelatorio() {
        return new RelatorioVendas(new ExportadorPDF());
    }
}

class RelatorioVendasCSVFactory extends RelatorioFactory {
    criarRelatorio() {
        return new RelatorioVendas(new ExportadorCSV());
    }
}

// Exemplos de uso:
const factory1 = new RelatorioFinanceiroPDFFactory();
const relatorio1 = factory1.criarRelatorio();
console.log(relatorio1.gerar("Balanço 2025")); // Alerta: PDF enviado: Balanço 2025

const factory2 = new RelatorioVendasCSVFactory();
const relatorio2 = factory2.criarRelatorio();
console.log(relatorio2.gerar("Vendas Q1")); // Promoção: CSV enviado: Vendas Q1
=======
class RelatorioVendasCSVFactory extends RelatorioFactory{
    criarRelatorio(){
        return new RelatorioVendas(new ExportadorCSV());
    }
}
>>>>>>> 76c036252f45aa0f14917771de734840e68b7717
