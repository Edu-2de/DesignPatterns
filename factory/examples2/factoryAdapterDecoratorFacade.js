class Relatorio{
      area(){
        throw "Método abstrato!";
    }
}

class RelatorioVendas extends Relatorio{
    area(){
        return "Relatório de Vendas";
    }
}
class RelatorioFinanceiro extends Relatorio{
    area(){
        return "Relatório Financeiro";
    }
}
class RelatorioRH extends Relatorio{
    area(){
        return "Relatório de Recursos Humanos";
    }
}



class Exportador {
  constructor(relatorio) {
    this.relatorio = relatorio;
  }

  exportar() {
    throw new Error("Método deve ser implementado");
  }
}

class ExportadorPDF extends Exportador {
  exportar() {
    return `Exportando ${this.relatorio.area()} como PDF`;
  }
}

class ExportadorExcel extends Exportador {
  exportar() {
    return `Exportando ${this.relatorio.area()} como Excel`;
  }
}

class ExportadorWord extends Exportador {
  exportar() {
    return `Exportando ${this.relatorio.area()} como Word`;
  }
}



class ExportadorDecorator {
  constructor(exportador) {
    this.exportador = exportador;
  }

  exportar() {
    throw new Error("Método deve ser implementado");
  }

  criptografia() {
    return "Criptografando dados antes da exportação";
  }
  logging() {
    return "Loggin antes da exportaçãoo";
  }
}


class Criptografia extends ExportadorDecorator {
   exportar() {
    return this.criptografia() + "\n" + this.exportador.exportar();
  }

  criptografia() {
    return "Criptografando dados antes da exportação";
  }
}

class Logging extends ExportadorDecorator {
  exportar() {
    return this.logging() + "\n" + this.exportador.exportar();
  }

  logging() {
    return "Logando antes da exportação";
  }
}

class RelatorioFactory {
  static createRelatorio(type) {
    if (type === "vendas") return new RelatorioVendas();
    if (type === "financeiro") return new RelatorioFinanceiro();
    if (type === "rh") return new RelatorioRH();
    throw new Error("Tipo inválido");
  }

  static create(type, format) {
    const relatorio = RelatorioFactory.createRelatorio(type);

    const exportadores = {
      pdf: ExportadorPDF,
      excel: ExportadorExcel,
      word: ExportadorWord
    };

    const ExportadorClass = exportadores[format];
    if (!ExportadorClass) throw new Error("Formato inválido");

    return new ExportadorClass(relatorio);
  }

  static createWithDecorator(type, format, decorators = []) {
    let exportador = RelatorioFactory.create(type, format);

    for (const decorator of decorators) {
      if (decorator === "criptografia") {
        exportador = new Criptografia(exportador);
      } else if (decorator === "logging") {
        exportador = new Logging(exportador);
      } else {
        throw new Error("Decorator inválido");
      }
    }

    return exportador;
  }
}