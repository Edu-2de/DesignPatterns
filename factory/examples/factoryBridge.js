class ExportadorDados{
    exportar(dados){
        throw `Método abstrato`
    }
}

class ExportadorPDF extends ExportadorDados {
    exportar(dados) {
        return `PDF enviado: ${dados}`;
    }
}
class ExportadorCSV extends ExportadorDados {
    exportar(dados) {
        return `CSV enviado: ${dados}`;
    }
}




class Relatorio {
    constructor(exportador) {
        this.exportador = exportador;
    }
    gerar(dados) {
        throw "Método abstrato!";
    }
}




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

class RelatorioVendasCSVFactory extends RelatorioFactory{
    criarRelatorio(){
        return new RelatorioVendas(new ExportadorCSV());
    }
}