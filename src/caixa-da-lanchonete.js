import { pagamentoAceito } from "./utils/verificarPagamento.js";

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        const pagamentoValido = pagamentoAceito(metodoDePagamento);

        if (!pagamentoValido) {
            return "Forma de pagamento inválida!";
        };

        return "";
    }

};

export { CaixaDaLanchonete };

