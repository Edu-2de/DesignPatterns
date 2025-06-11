class ArquivoReal{
    lerArquivo(){
        return `Conteúdo do arquivo secreto`
    }
}

class ArquivoProxySingleton{
    constructor(usuario) {
        if (ArquivoProxySingleton.instance) return ArquivoProxySingleton.instance;
        this.usuario = usuario;
        this.service = new ArquivoReal();
        ArquivoProxySingleton.instance = this;
    }

    lerArquivo() {
        if (this.usuario === "admin") {
            return this.service.lerArquivo();
        } else {
            return "Acesso negado: usuário sem permissão!";
        }
    }
}