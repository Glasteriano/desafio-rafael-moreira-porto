import { pagamento } from "../pagamentos/formasAceitas.js";
//===================================================================

function pagamentoAceito(formaDePagamento) {
    if (pagamento.includes(formaDePagamento)) {
        return true;
    };

    return false;
};
//===================================================================

export { pagamentoAceito };