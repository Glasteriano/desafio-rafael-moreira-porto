function pegarProdutos(arrayDeProdutos) {
    const pedidoFinal = [];

    for (let produto of arrayDeProdutos) {
        const itemValor = produto.split(",");

        const pedido = {
            item: itemValor[0],
            valor: Number(itemValor[1])
        };

        pedidoFinal.push(pedido);
    };

    return pedidoFinal;
};
//=============================================================================

export { pegarProdutos };