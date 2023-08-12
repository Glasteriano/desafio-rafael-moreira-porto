function pegarProdutos(arrayDeProdutos) {
    const pedidoFinal = [];
    //------------------------------------------------

    for (let produto of arrayDeProdutos) {
        const itemValor = produto.split(",");

        const pedido = {
            item: itemValor[0].trim(),
            quantidade: Number(itemValor[1])
        };

        pedidoFinal.push(pedido);
    };

    return pedidoFinal;
};
//=========================================================

export { pegarProdutos };