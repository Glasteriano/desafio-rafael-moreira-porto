import { pagamentoAceito } from "./utils/verificarPagamento.js";

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        const pagamentoValido = pagamentoAceito(metodoDePagamento);
        //----------------------------------------------------------------

        if (!pagamentoValido) {
            return "Forma de pagamento inválida!";
        };

        if (itens.length === 0) {
            return "Não há itens no carrinho de compra!"
        };
        //----------------------------------------------------------------

        return "";
    }

};

export { CaixaDaLanchonete };

