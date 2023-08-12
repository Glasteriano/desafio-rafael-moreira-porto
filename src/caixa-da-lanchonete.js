import { descontoOuTaxa } from "./utils/calcularDescontoOuTaxa.js";
import { calcularPreco } from "./utils/calcularPreco.js";
import { precoFormatado } from "./utils/precoFormatado.js";
import { valorEmReais } from "./utils/valorEmReais.js";
import { itemExtra } from "./utils/verificarItemExtra.js";
import { itemValido } from "./utils/verificarItemValido.js";
import { itemZerado } from "./utils/verificarItemZerado.js";
import { pagamentoAceito } from "./utils/verificarPagamento.js";
//=============================================================================

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        const pagamentoValido = pagamentoAceito(metodoDePagamento);
        const itemExtraValido = itemExtra(itens);
        const zeroItens = itemZerado(itens);
        const itemNoCardapio = itemValido(itens);

        const valorTotal = calcularPreco(itens);
        const valorFinal = descontoOuTaxa(metodoDePagamento, valorTotal);
        const precoEmReais = valorEmReais(valorFinal);
        const valorFormatado = precoFormatado(precoEmReais);
        //----------------------------------------------------------------

        if (!pagamentoValido) {
            return "Forma de pagamento inválida!";
        };

        if (itens.length === 0) {
            return "Não há itens no carrinho de compra!";
        };

        if (!itemNoCardapio) {
            return "Item inválido!";
        };

        if (zeroItens) {
            return "Quantidade inválida!";
        };

        if (!itemExtraValido) {
            return "Item extra não pode ser pedido sem o principal";
        };
        //----------------------------------------------------------------

        return valorFormatado;
    };

};
//=============================================================================

export { CaixaDaLanchonete };
