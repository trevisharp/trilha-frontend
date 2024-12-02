import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

const cors = require('cors');
app.use(cors());

function rand(max: number): number {
    let res =  Math.floor(Math.random() * max);
    return res
}

type Book = {
    id: number,
    title: string,
    author: string,
    pages: number,
    quantity: number,
    price: number,
    year: number,
    avaliation: number,
    genres: string[]
}

let books: Book[] = []
const adjetivos: string[] = [
    "grande", "triste", "alegre", "feliz", "forte",
    "fracX", "rápidX", "devagar", "inteligente", "sábiX",
    "corajosX", "tímidX", "bonitX", "feiX", "encantador",
    "doce", "preguiçosX", "trabalhadorX", "calmX", "ansiosX",
    "ricX", "pobre", "bravX", "sensível"
  ];

const conceitos: string[] = [
    "viagem", "luta", "conquista", "aventura", "desafio",
    "exploração", "superação", "vitória", "busca", "crescimento",
    "transformação", "emoção", "descoberta", "ambição", "progresso",
    "poder"
];

const profissao: string[] = [
    "de um vagabundo preguiçoso", "de uma enfermeira dedicada",
    "de um guerreiro corajoso", "de um advogado persuasivo",
    "de um professor paciente", "de um cientista brilhante",
    "de um médico atento", "de um chefe autoritário",
    "de um artista criativo", "de um escritor inspirador",
    "de um jogador habilidoso", "de um policial vigilante",
    "de um músico talentoso", "de um programador focado",
    "de um mecânico habilidoso", "de um arquiteto visionário",
    "de um cozinheiro inovador", "de um empresário ambicioso",
    "de um engenheiro preciso", "de um atleta disciplinado"
];

const autores: string[] = [
    "Aeliana Stormrider", "Balthor Ironclad",
    "Celestria Nightshade", "Dorian Blackthorn",
    "Elowen Moonshadow", "Fenix Wildheart",
    "Gorath the Mighty", "Halina Ravenscar",
    "Itharion Brightflame", "Jarek Stonefist",
    "Kaelith Shadowblade", "Lirael Dawnwhisper",
    "Marek Ashwalker", "Nerissa Duskveil",
    "Orin Fireforge", "Pharros Silverwind"
]

const generos: string[] = [
    "Terror", "Romance", "Ficcção Científica", "Fantasia",
    "Mistério", "Policial", "Aventura", "Drama", "Histórico",
    "Distopia", "Comédia"
]
const getStart = (concept:string) => {
    let lastChar = concept[concept.length - 1];
    let preLastChar = concept[concept.length - 2];

    if (lastChar === 'o' && preLastChar !== 'ã')
        return "O"

    if (lastChar === 'r' && preLastChar === 'e')
        return "O"

    return "A"
};

for (let i = 0; i < 1000; i++) {
    let con = conceitos[rand(conceitos.length)];
    let pro = profissao[rand(profissao.length)];
    let sta = getStart(con);
    let adj = adjetivos[rand(adjetivos.length)];
    adj = adj.replace("X", sta.toLowerCase());

    let genIndex1 = rand(generos.length)
    let genIndex2 = (genIndex1 + rand(generos.length - 1)) % generos.length
    books.push({
        id: i + 1,
        title: sta + " " + adj + " " + con + " " + pro,
        author: autores[rand(autores.length)],
        pages: 40 + rand(200),
        quantity: rand(10),
        price: 20 + rand(500) / 10.0,
        year: 1970 + rand(50),
        avaliation: 1 + rand(5),
        genres: [ generos[genIndex1], generos[genIndex2] ]
    })
}

app.get('/book', (req: Request, res: Response) => {
    const query = typeof req.query.query === "string" ? req.query.query : undefined;
    const page = typeof req.query.page === "string" ? parseInt(req.query.page) : 1;
    const limit = typeof req.query.limit === "string" ? parseInt(req.query.limit) : 50;

    let findedBooks = books
        .filter(b => query === undefined || b.title.includes(query) || b.author.includes(query));
    let pageBooks = findedBooks.splice(limit * (page - 1), limit)
        .map(b => { 
            return { 
                id: b.id, 
                title: b.title, 
                author: b.author,
                avaliation: b.avaliation,
                price: b.price
            }
        })

    res.send({
        books: pageBooks,
        total: findedBooks.length
    });
});

app.get('/book/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    let finded = books.filter(b => b.id.toString() === id);
    if (finded.length == 0) {
        res.status(404).send("Livro não encontrado");
        return;
    }

    res.send(finded[0]);
});

app.listen(port);
