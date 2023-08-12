import { itemExtra } from "./utils/verificarItemExtra.js";
import { pagamentoAceito } from "./utils/verificarPagamento.js";
//=============================================================================

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        const pagamentoValido = pagamentoAceito(metodoDePagamento);
        const itemExtraValido = itemExtra(itens)
        //----------------------------------------------------------------

        if (!pagamentoValido) {
            return "Forma de pagamento inválida!";
        };

        if (itens.length === 0) {
            return "Não há itens no carrinho de compra!"
        };

        if (!itemExtraValido) {
            return "Item extra não pode ser pedido sem o principal"
        }
        //----------------------------------------------------------------

        return "";
    }

};
//=============================================================================

export { CaixaDaLanchonete };

