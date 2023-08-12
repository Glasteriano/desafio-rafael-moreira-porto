function itemZerado(arrayDeProdutos) {

    for (let produto of arrayDeProdutos) {
        const itemQuantidade = produto.split(",")

        if (Number(itemQuantidade[1].trim()) === 0) {
            return true;
        };
    };

    return false;
};
//=============================================================================

export { itemZerado };