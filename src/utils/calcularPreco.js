import { produtos } from "../baseValores/valorDosProdutos.js";
import { pegarProdutos } from "../utils/pegarProdutos.js";
//=============================================================================

function calcularPreco(arrayDeProdutos) {
    const produtosPedidos = pegarProdutos(arrayDeProdutos);
    let valorTotal = 0;

    for (let pedido of produtosPedidos) {
        const item = produtos[pedido.item];
        const quantidade = pedido.quantidade;

        valorTotal += item * quantidade;
    };

    return valorTotal;
};
//=============================================================================

export { calcularPreco };
