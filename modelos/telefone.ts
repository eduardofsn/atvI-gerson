import Prototipo from "../interfaces/prototipo"

export default class Telefone implements Prototipo {
    public ddd: string
    public numero: string


    // Implementação do clone no telefone, assim como foi feito no endereço, como a atividade requisitou.

    public clonar(): Prototipo {
        let telefone = new Telefone()
        telefone.ddd = this.ddd
        telefone.numero = this.numero
        return telefone
    }
}

