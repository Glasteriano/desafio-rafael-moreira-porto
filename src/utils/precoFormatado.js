function precoFormatado(valorFinal) {
    const valorFormatado = String(valorFinal).replace(".", ",");

    return `R$ ${valorFormatado}`;
};
//=============================================================================

export { precoFormatado };
