import { itemExtra } from "./utils/verificarItemExtra.js";
import { itemZerado } from "./utils/verificarItemZerado.js";
import { pagamentoAceito } from "./utils/verificarPagamento.js";
//=============================================================================

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        const pagamentoValido = pagamentoAceito(metodoDePagamento);
        const itemExtraValido = itemExtra(itens);
        const zeroItens = itemZerado(itens);
        //----------------------------------------------------------------

        if (!pagamentoValido) {
            return "Forma de pagamento inválida!";
        };

        if (itens.length === 0) {
            return "Não há itens no carrinho de compra!"
        };

        if (!itemExtraValido) {
            return "Item extra não pode ser pedido sem o principal"
        };

        if (zeroItens) {
            return "Quantidade inválida!"
        };
        //----------------------------------------------------------------

        return "";
    }

};
//=============================================================================

export { CaixaDaLanchonete };

