// --- Builder ---
class Relatorio {
  constructor(builder) {
    this.titulo = builder.titulo;
    this.dados = builder.dados;
  }
  resumo() {
    return `Relatório: ${this.titulo} (${this.dados.length} itens)`;
  }
}

class RelatorioBuilder {
  constructor() {
    this.titulo = "Sem título";
    this.dados = [];
  }
  setTitulo(titulo) {
    this.titulo = titulo;
    return this;
  }
  addDado(dado) {
    this.dados.push(dado);
    return this;
  }
  build() {
    return new Relatorio(this);
  }
}

// --- Adapters de exportação (simulando bibliotecas externas) ---
class ExportadorPDF {
  exportarComoPDF(data) {
    return `PDF gerado: ${JSON.stringify(data)}`;
  }
}
class ExportadorCSV {
  exportarComoCSV(data) {
    return `CSV gerado: ${JSON.stringify(data)}`;
  }
}

// Adapter para interface comum "exportar"
class PDFAdapter {
  constructor(exportadorPDF) {
    this.exportadorPDF = exportadorPDF;
  }
  exportar(relatorio) {
    return this.exportadorPDF.exportarComoPDF({
      titulo: relatorio.titulo,
      dados: relatorio.dados,
    });
  }
}

class CSVAdapter {
  constructor(exportadorCSV) {
    this.exportadorCSV = exportadorCSV;
  }
  exportar(relatorio) {
    return this.exportadorCSV.exportarComoCSV({
      titulo: relatorio.titulo,
      dados: relatorio.dados,
    });
  }
}

// --- Uso ---
const relatorio = new RelatorioBuilder()
  .setTitulo("Relatório de Vendas")
  .addDado({ produto: "Camiseta", qtd: 10 })
  .addDado({ produto: "Calça", qtd: 5 })
  .build();

console.log(relatorio.resumo()); // Relatório: Relatório de Vendas (2 itens)

const pdfAdapter = new PDFAdapter(new ExportadorPDF());
const csvAdapter = new CSVAdapter(new ExportadorCSV());

console.log(pdfAdapter.exportar(relatorio)); // PDF gerado: ...
console.log(csvAdapter.exportar(relatorio)); // CSV gerado: ...