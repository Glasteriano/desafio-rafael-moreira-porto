function descontoOuTaxa(formaDePagamento, valorTotal) {
    const precoFinal = (formaDePagamento === "credito") ? valorTotal * 1.03 :
        (formaDePagamento === "dinheiro") ? valorTotal * 0.95 : valorTotal;

    return precoFinal;
};
//=============================================================================

export { descontoOuTaxa };