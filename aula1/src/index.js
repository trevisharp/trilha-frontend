"use strict";
//////////////////////////////////////////////////////////
//// NIVEL 1                                          ////
//////////////////////////////////////////////////////////
// 1) Declare uma variável que receba 42, uma que receba um número de 1 a 10, 
// uma que receba verdadeiro ou falso. E uma que receba verdadeiro e falso.
let w1;
let x1;
let y1;
let z1;
// 2) Use tipos primitivos e reescreva o que for possível no exercício 1.
// Depois mostre que você pode criar variáveis que recebam qualquer número e
// outra para qualquer texto.
let w2;
let x2;
let y2;
let z2;
let y3 = 5;
let z3 = 15;
// 4) Tente descobrir a diferença de undefined e null. Depois dente descobrir
// a diferença de any, unknown e {}. Dica 1: Tente usar variáveis desses tipos.
// Dica 2: Tenta atribuir os valores null e undefined nessas variáveis.
let w4;
let x4;
let username = "joão";
let y4a = null;
let y4b = undefined;
let y4c = "texto";
let y4d = null;
let y4e = undefined;
let y4f = 3;
let y4g = 3;
let y4h = true;
// 5) Teste inferência colocando diversos valores em variáveis.
let w5 = 1;
let x5 = "olá";
let y5 = null;
let z5 = undefined;
let joao = {
    cpf: "123",
    cnh: null
};
let familia = {
    pais: "Brasil",
    pessoas: [joao]
};
let ana = {
    cpf: "456",
    cnh: "789"
};
familia.pessoas.push(ana);
// 8) Declare uma variável que receberá uma lista de pessoas chamada empresa,
// use spread operator para colocar joao e ana dentro dela, crie a pamella para
// ser colocada junto.
let pamella = {
    cpf: "012",
    cnh: "345"
};
let empresa = [...familia.pessoas, pamella];
let x = {
    cpf: "123"
};
let y = Object.assign(Object.assign({}, x), { cnh: "567" });
var Resultado;
(function (Resultado) {
    Resultado[Resultado["EmDesenvolvimento"] = 0] = "EmDesenvolvimento";
    Resultado[Resultado["Apto"] = 1] = "Apto";
    Resultado[Resultado["Inapto"] = 2] = "Inapto";
})(Resultado || (Resultado = {}));
let res = Resultado.Apto;
class Pessoa2 {
    constructor(cpf) {
        this.cpf = cpf;
        this.cnh = null;
    }
}
let pessoa = new Pessoa2("123");
pessoa.cnh = "456";
// 9) Faça um Enumerador para alguns cursos a sua escolha. Crie uma classe
// aprendiz que tem nome e curso. Crie você mesmo como um objeto e outro como
// com seu melhor amigo no curso.
var Cursos;
(function (Cursos) {
    Cursos[Cursos["Mecanica"] = 0] = "Mecanica";
    Cursos[Cursos["TI"] = 1] = "TI";
    Cursos[Cursos["Mecatronica"] = 2] = "Mecatronica";
    Cursos[Cursos["Manufatura"] = 3] = "Manufatura";
    Cursos[Cursos["Standup"] = 4] = "Standup";
})(Cursos || (Cursos = {}));
class Aprendiz {
    constructor(nome, curso) {
        this.nome = nome;
        this.curso = curso;
    }
}
let trevisan = new Aprendiz("trevisan", Cursos.TI);
let don = new Aprendiz("don", Cursos.Mecatronica);
// 10) [DESAFIO] Implemente a função letfpad que coloca espaços a esquerda numa
// string data até que ela tenha um tamanho esperado. Coloque um parâmetro
// opicional para permitir a escolha do caracter.
// [DESAFIO EXTREMO] Se eu tiver o texto "oi" e precisar de 1000 espaços, irá
// demorar um pouco, você tem uma ideia pra deixar mais rápido?
function leftpad(text, size, char = " ") {
    let missingChars = size - text.length;
    if (missingChars < 0)
        return text;
    let pad = "";
    while (missingChars > 0) {
        pad += char;
        missingChars--;
        if (missingChars % 2 !== 0)
            continue;
        missingChars /= 2;
        char += char;
    }
    return pad + text;
}
// console.log(leftpad("oi", 8)); // "      oi"
// console.log(leftpad("oi", 6, "-")); // "----oi"
//////////////////////////////////////////////////////////
//// NIVEL 2                                          ////
//////////////////////////////////////////////////////////
if (joao instanceof Aprendiz) {
    console.log("faz algo!");
}
// 11) Faça uma lista que possa receber pessoas e aprendizes e coloque todos
// nela. Implementa a função filtrar que retorna apenas os aprendizes.
let items = [joao, ana, pamella, trevisan, don];
function filter(items) {
    let result = [];
    items.forEach(item => {
        if (item instanceof Aprendiz) {
            result.push(item);
        }
    });
    return result;
}
// 12) Refaça o exercício 11 usando a função filter.
function filter2(items) {
    return items.filter(item => item instanceof Aprendiz);
}
// 13) Faça uma variável do tipo aprendiz e outra variável que copie o mesmo
// tipo da primeira
let w13;
let x13 = {
    nome: "",
    curso: Cursos.Mecanica
};
// 14) Teste a diferença de == e ===.
let w14 = '0';
let x14 = false;
console.log(w14 == x14);
console.log(w14 === x14);
console.log("b" + "a" + +"a" + "a");
