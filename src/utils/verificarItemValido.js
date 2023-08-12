import { produtos } from "../baseValores/valorDosProdutos.js";
import { pegarProdutos } from "./pegarProdutos.js";
//=============================================================================

function itemValido(arrayDoPedido) {
    const itensNoCardapio = Object.keys(produtos);
    const arrayDeProdutos = pegarProdutos(arrayDoPedido);
    //----------------------------------------------------------------

    for (let itemPedido of arrayDeProdutos) {
        if (!itensNoCardapio.includes(itemPedido.item)) {
            return false;
        };
    };

    return true;
};
//=============================================================================

export { itemValido };