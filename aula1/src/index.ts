//////////////////////////////////////////////////////////
//// NIVEL 1                                          ////
//////////////////////////////////////////////////////////

// 1) Declare uma variável que receba 42, uma que receba um número de 1 a 10, 
// uma que receba verdadeiro ou falso. E uma que receba verdadeiro e falso.
let w1: 42;
let x1: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
let y1: true | false;
let z1: true & false;

// 2) Use tipos primitivos e reescreva o que for possível no exercício 1.
// Depois mostre que você pode criar variáveis que recebam qualquer número e
// outra para qualquer texto.
let w2: number;
let x2: string;
let y2: boolean;
let z2: never;

// 3) Faça um tipo que receba números de 1 a 10, depois faça outro tipo que
// receba números de 5 a 15. Por fim use os tipos para criar um tipo que receba
// de 5 a 10 e outro de 1 a 15 e crie um variável desses tipos.
type W3 = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type X3 = 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;
type Y3 = W3 & X3;
type Z3 = W3 | X3;
let y3: Y3 = 5;
let z3: Z3 = 15;

// 4) Tente descobrir a diferença de undefined e null. Depois dente descobrir
// a diferença de any, unknown e {}. Dica 1: Tente usar variáveis desses tipos.
// Dica 2: Tenta atribuir os valores null e undefined nessas variáveis.
let w4: null;
let x4: undefined;
let username: string | null | undefined = "joão";

let y4a: any = null;
let y4b: any = undefined;
let y4c: any = "texto";

let y4d: unknown = null;
let y4e: unknown = undefined;
let y4f: unknown = 3;
let y4g: {} = 3;
let y4h: {} = true;

// 5) Teste inferência colocando diversos valores em variáveis.
let w5 = 1;
let x5 = "olá";
let y5 = null;
let z5 = undefined;

// 6) Faça um tipo Pessoa que pode receber CPF e CNH como string sendo que a 
// CNH pode ser nula, mas o CPF não. Crie uma pessoa chamada joao sem cnh e
// com cpf 123, mas sem declarar o tipo da variável, depois tente atribuir
// o objeto a uma variável do tipo Pessoa.
type Pessoa = {
    cpf: string,
    cnh: string | null
}
let joao: Pessoa = {
    cpf: "123",
    cnh: null
}

// 7) Faça um tipo chamado familia que possua uma lista de pessoas dentro e
// o pais de origem em string. Inicialize uma familia brasileira com o joão 
// dentro. Depois crie ana e coloque dentro da familia usando a função push.
type Familia = {
    pais: string,
    pessoas: Pessoa[]
}
let familia: Familia = {
    pais: "Brasil",
    pessoas: [ joao ]
}
let ana: Pessoa = {
    cpf: "456",
    cnh: "789"
}
familia.pessoas.push(ana);

// 8) Declare uma variável que receberá uma lista de pessoas chamada empresa,
// use spread operator para colocar joao e ana dentro dela, crie a pamella para
// ser colocada junto.
let pamella: Pessoa = {
    cpf: "012",
    cnh: "345"
}
let empresa = [ ...familia.pessoas, pamella ]

let x = {
    cpf: "123"
}

let y: Pessoa = {
    ...x,
    cnh: "567"
}

enum Resultado {
    EmDesenvolvimento,
    Apto,
    Inapto
}
let res = Resultado.Apto;

class Pessoa2 {
    cpf: string;
    cnh: string | null;

    constructor(cpf: string) {
        this.cpf = cpf;
        this.cnh = null;
    }
}
let pessoa = new Pessoa2("123");
pessoa.cnh = "456";

// 9) Faça um Enumerador para alguns cursos a sua escolha. Crie uma classe
// aprendiz que tem nome e curso. Crie você mesmo como um objeto e outro como
// com seu melhor amigo no curso.
enum Cursos {
    Mecanica,
    TI,
    Mecatronica,
    Manufatura,
    Standup
}

class Aprendiz {
    constructor(
        public nome: string, 
        public curso: Cursos
    ) { }
}
let trevisan: Aprendiz = new Aprendiz("trevisan", Cursos.TI);
let don: Aprendiz = new Aprendiz("don", Cursos.Mecatronica);

// 10) [DESAFIO] Implemente a função letfpad que coloca espaços a esquerda numa
// string data até que ela tenha um tamanho esperado. Coloque um parâmetro
// opicional para permitir a escolha do caracter.
// [DESAFIO EXTREMO] Se eu tiver o texto "oi" e precisar de 1000 espaços, irá
// demorar um pouco, você tem uma ideia pra deixar mais rápido?
function leftpad(text: string, size: number, char: string = " ") {
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
    console.log("faz algo!")
}

// 11) Faça uma lista que possa receber pessoas e aprendizes e coloque todos
// nela. Implementa a função filtrar que retorna apenas os aprendizes.
let items = [ joao, ana, pamella, trevisan, don ]
function filter(items: (Pessoa | Aprendiz)[]) {
    let result: Aprendiz[] = [];
    items.forEach(item => {
        if (item instanceof Aprendiz) {
            result.push(item);
        }
    })
    return result;
}

// 12) Refaça o exercício 11 usando a função filter.
function filter2(items: (Pessoa | Aprendiz)[]) {
    return items.filter(item => item instanceof Aprendiz);
}

// 13) Faça uma variável do tipo aprendiz e outra variável que copie o mesmo
// tipo da primeira
let w13: Aprendiz;
let x13: typeof w13 = {
    nome: "",
    curso: Cursos.Mecanica
}

// 14) Teste a diferença de == e ===.
let w14: any = '0';
let x14: any = false;
console.log(w14 == x14);
console.log(w14 === x14);

// 15) Faça uma variável que só possa receber os valores 'cpf' ou 'cnh' usando
// keyof.
type X15 = keyof Pessoa;
let y15: X15 = "cnh";
let z15: X15 = "cpf";

// 16) Compare a estrutura de Pessoa & Aprendiz e Pessoa | Aprendiz. É o que 
// você esperava? Discuta.
let w16: Pessoa & Aprendiz = {
    cnh: "1",
    cpf: "2",
    curso: Cursos.Manufatura,
    nome: "a"
}

// 18) Faça uma interface com o nome Copiavel que possua uma função copiar e
// um variavel que diga quantas vezes aquele objeto ja foi copiado.
interface Copyable {
    copies: number,
    copy(): Copyable
}

// 19)
class Message implements Copyable {
    constructor(private message: string) {}
    
    copies: number = 0;
    copy(): Copyable {
        this.copies++;
        return new Message(this.message);
    }
}

let message = new Message("Olá, esqueci de bater o ponto. Socorro.");
let copy = message.copy();

// 20) [DESAFIO]
function copiar(obj: Copyable, numCopies: number): Copyable[] {
    let result: Copyable[] = [];

    for (let i = 0; i < numCopies; i++) {
        let copy = obj.copy();
        result.push(copy);
    }

    return result;
}
let copies = copiar(message, 100);

//////////////////////////////////////////////////////////
//// NIVEL 3                                          ////
//////////////////////////////////////////////////////////

// Genéricos
// ArrayList<String> list = new ArrayList<String>();
class Lista<T>
{
    primeiro: ListaItem<T> | null = null;
    ultimo: ListaItem<T> | null = null;

    add(valor: T): void {
        if (this.primeiro == null) {
            this.primeiro = this.ultimo = new ListaItem(valor);
            return;
        }

        this.ultimo = new ListaItem<T>(valor);
        // ...
    }
}

class ListaItem<T>
{
    proximo: ListaItem<T> | null = null;
    constructor(public valor: T) {}
}

let minhaLista = new Lista<string>();
minhaLista.add("Olá, mundo!");

// 21) Faça uma classe caixa que armazena um objeto do tipo T. A caixa pode ser
// aberta e retornará o valor dentro dela e depois apenas undefined até ter um
// novo valor dentro dela.

// Box Genérica
// open() -> Caixa (pode ser undefined)
// store(valor) (guarda algo dentro da caixa)
class Box<T> {
    private value: T | undefined;

    store(value: T) {
        this.value = value;
    }

    open(): T | undefined {
        let current = this.value;
        this.value = undefined;
        return current;
    }
}
let box = new Box<string>();
box.store("valor");
console.log(box.open()); // valor
console.log(box.open()); // undefined

// 25) [DESAFIO] Implemente a função map, semelhante ao map do javascript.
function map<T, R>(list: T[], func: (arg: T) => R): R[] {
    let result: R[] = [];

    for (let i = 0; i < list.length; i++) {
        let item = list[i];
        let mapResult = func(item);
        result.push(mapResult);
    }

    return result;
}

let nums = [ 1, 2, 3, 4, 5 ];
let output = map(nums, num => num * num);

// 26) Implemente a Lista do JavaScript (usando genéricos).
// String[] meuArray = new String[len];
function createArray<T>(len: number): (T | null)[] { 
    let result: (T | null)[] = [];
    for (let i = 0; i < len; i++)
        result.push(null);
    return result;
}

class ArrayList<T> {
    
    private count = 0;
    private array: (T | null)[] = createArray<T>(10);

    public get(index: number): T {
        if (index >= this.count) 
            throw new Error("index out of range.");
            
        let value = this.array[index];
        if (value === null)
            throw new Error("index out of range.");
            
        return value;
    }

    public add(value: T) {

        if (this.count == this.array.length) {
            this.expand();
        }

        this.array[this.count] = value;
        this.count++;
    }

    public size(): number {
        return this.count;
    }

    private expand() {
        let newArray: (T | null)[] = createArray(2 * this.array.length);
        for (let i = 0; i < this.array.length; i++) {
            newArray[i] = this.array[i];
        }
        this.array = newArray;
    }

}

/* Java
  String[] array = new String[10]; (createArray(10))
  array[0] = valor1; // add
  array[1] = valor2; // add
  ...
  array[9] = valor9; // add

  String[] outroArray = new String[2 * array.length];
  for (int i = 0; i < array.length; i++) {
    outroArray[i] = array[i];
  }

  array = outroArray;
 */