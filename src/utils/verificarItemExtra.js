function itemExtra(arrayDeProdutos) {
    const produtos = arrayDeProdutos.join(",");
    //-------------------------------------------------------------------------

    if (produtos.includes("chantily") && !produtos.includes("cafe")) {
        return false;
    };

    if (produtos.includes("queijo") && !produtos.includes("sanduiche")) {
        return false;
    };

    return true;
};
//=============================================================================

export { itemExtra };