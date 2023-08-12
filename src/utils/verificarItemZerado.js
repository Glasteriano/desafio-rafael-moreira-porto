function itemZerado(arrayDeProdutos) {

    for (let produto of arrayDeProdutos) {
        const itemQuantidade = produto.split(",");

        if ((Number(itemQuantidade[1]) === 0) || (itemQuantidade[1] === undefined)) {
            return true;
        };
    };

    return false;
};
//=============================================================================

export { itemZerado };
