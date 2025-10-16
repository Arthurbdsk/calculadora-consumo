const veiculo = {
    modelo: "argo",
    consumoMedio: 8,
    
};

const combustivel = {
    tipo: '',
    precoEtanol: 3.899,
    precoGasolina: 5.999,
}

const viagem = {
    duracao: "",
    velocidadeMedia: "",
    percurso: "",
    consumoLitros: "",
    custoEmReais: "",
};

viagem.duracao = 9;
viagem.velocidadeMedia = 120;
viagem.percurso = viagem.duracao * viagem.velocidadeMedia
viagem.consumoLitros = viagem.percurso / veiculo.consumoMedio

combustivel.tipo = 0;
if(combustivel.tipo === 0){
    viagem.custoEmReais = (viagem.consumoLitros * combustivel.precoEtanol).toLocaleString('pt-BR',{style: 'currency', currency: "BRL"});

} else
     {
    
     viagem.custoEmReais = (viagem.consumoLitros * combustivel.precoEtanol).toLocaleString('pt-BR',{style: 'currency', currency: "BRL"});
    
        viagem.custoEmReais = viagem.consumoLitros * combustivel.precoGasolina;
}

document.getElementById('calcular').addEventListener('click', () => {
  const tipo = document.querySelector('input[name="combustivel"]:checked').value;
  const consumo = parseFloat(document.getElementById('consumo').value);
  const velocidade = parseFloat(document.getElementById('velocidade').value);
  const tempo = parseFloat(document.getElementById('tempo').value);

  if (isNaN(consumo) || isNaN(velocidade) || isNaN(tempo)) {
    alert("Preencha todos os campos corretamente!");
    return;
  }

  const precoEtanol = 3.899;
  const precoGasolina = 5.999;

  const percurso = velocidade * tempo;
  const litros = percurso / consumo;

  let custo = 0;
  if (tipo === "etanol") {
    custo = litros * precoEtanol;
  } else {
    custo = litros * precoGasolina;
  }

  document.getElementById('resultado').innerHTML = `
    <p><strong>Distância percorrida:</strong> ${percurso.toFixed(1)} Km</p>
    <p><strong>Combustível gasto:</strong> ${litros.toFixed(1)} L</p>
    <p><strong>Custo total:</strong> ${custo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
  `;
});
