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
  static create(type, format) {
    const relatorio = RelatorioFactory.createRelatorio(type);
    if (type === "vendas") {
      if (format === "pdf") {
        return new ExportadorPDF(relatorio);
      } else if (format === "excel") {
        return new ExportadorExcel(relatorio);
      } else if (format === "word") {
        return new ExportadorWord(relatorio);
      } else {
        throw new Error("Formato inválido");
      }
      
    } else if (type === "financeiro") {
      if (format === "pdf") {
        return new ExportadorPDF(relatorio);
      } else if (format === "excel") {
        return new ExportadorExcel(relatorio);
      } else if (format === "word") {
        return new ExportadorWord(relatorio);
      } else {
        throw new Error("Formato inválido");
      }
    } else if (type === "rh") {
      if (format === "pdf") {
        return new ExportadorPDF(relatorio);
      } else if (format === "excel") {
        return new ExportadorExcel(relatorio);
      } else if (format === "word") {
        return new ExportadorWord(relatorio);
      } else {
        throw new Error("Formato inválido");
      }
    } else {
      throw new Error("Tipo inválido");
    }
  }
}