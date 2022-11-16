const somaHorasExtras = (salario, valorHorasExtras) => salario + valorHorasExtras;

const calculaDesconto = (salario, desconto) => salario - desconto;

const teste = (titulo, esperado, retornado) => {
  if (esperado === retornado) {
    return console.log(`${titulo} passou no teste.`);
  }
  return console.log(`${titulo} não passou no teste.`);
};

teste('somaHorasExtras', 500, somaHorasExtras(250, 300));

teste('calculaDesconto', 0, calculaDesconto(250, 250));
