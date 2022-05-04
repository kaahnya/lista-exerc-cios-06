class ErroCustomizado extends Error{
  constructor(mensagem, nome, endereço, telefone){
    super(mensagem);
    this.stack = "mensagem";
  }

  att(){
     return this.message;
  }
}
class Pessoa{
  setnome(nome){
    this.nome = nome;
  }

  getnome(){
    return this.nome ;
  }

  setendereco(endereço){
    this.endereco = endereço;
  }

  getnome(){
    return this.endereco;
  }

  settelefone(telefone){
    this.telefone = telefone;
  }

  getnome(){
    return this.telefone;
  }
}

class Fornecedor extends Pessoa{
  constructor(credito, divida, empresa){
    super()
    this.valorCredito = credito;
    this.valorDivida = divida;
    this.empresa = empresa;
  }

  obterSaldo(){
   if ( this.valorCredito > 0 && this.valorDivida > 0){
     return this.valorCredito - this.valorDivida;
   } else {
     throw new ErroCustomizado("Valor Negativo: O valor do atributo não pode ser menor que zero") }
   }

  saldoFinal(){
  try{
    return this.nome + "\n" + this.endereco + "\n" + this.telefone + "\n" + this.obterSaldo() + "\n" + this.empresa;
  } catch (erro) {
    return erro.att();
  }
}   
  
}

let fornecedor = new Fornecedor( -700, 100, 'FINALFANTASY7');
fornecedor.setnome("kaah");
fornecedor.setendereco("pica");
fornecedor.settelefone("99784422");
console.log(fornecedor.saldoFinal())