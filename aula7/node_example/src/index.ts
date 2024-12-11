import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

const cors = require('cors');
app.use(cors());

function rand(max: number): number {
    let res =  Math.floor(Math.random() * max);
    return res
}

type User = {
    id: number,
    username: string,
    name: string,
    photo: string,
    friendsCount: number,
    friends: any[]
}

let users: User[] = []
const nomes: string[] = [
    "Sabrina", "Wallace", "Mari", "Queila", "Don", "Murilo",
    "Vitória", "Melissa", "Fábio", "Gabriela", "Fernando",
    "Juliana", "Hemerson", "Thiago", "Bruno", "Felipe",
    "João", "Nicoli", "Nycollas", "Ruiz", "Maria", "Sarah",
    "Luiz", "Giovanna", "Pedro", "Patrick"
  ];

const sobrenomes: string[] = [
    "da Silva", "Marques", "Ramalho", "Lima", "Gonçalves",
    "de Souza", "Silveira", "Betman", "Catalão", "Cruz",
    "Fernanda", "Goulart", "Moll", "Sobolevski", "Wendi",
    "Bernardeli"
];

const userkeys: string[] = [
    "pipoca", "frauda", "grande", "apenas", "flamengo",
    "vasco", "corintia", "velhinho", "kkkkk", "bts",
    "foradecontexto", "pc", "aaaaaaaa", "sujinho",
    "naosei", "yasuo", "banguei", "pain_", "loud_",
    "furia_", "red_", "mibr_", "desisto", "esquec",
    "parmera", "batman", "comv", "perdi", "arroba",
    "underline"
];

const fotos: string[] = [
    "https://i.pinimg.com/originals/b0/f3/4d/b0f34dc65f71b248fe9feb3e03f10df5.jpg",
    "https://i.pinimg.com/736x/cd/c7/d8/cdc7d85e3b0165956277ab872d3685f9.jpg",
    "https://i.pinimg.com/736x/bd/83/4e/bd834e3273bab098d506384825c04333.jpg",
    "https://i.pinimg.com/236x/e8/d6/73/e8d6733516da0d872d1ba9cf8fa271bc.jpg",
    "https://i.pinimg.com/474x/fd/7d/e4/fd7de495df10e8e9f38ff8f91b48dbe2.jpg",
    "https://i.pinimg.com/236x/10/34/5a/10345a9781c293461eb51293a4d0887b.jpg",
    "https://i.pinimg.com/236x/ee/8f/09/ee8f09b4520e59c58eef30aeabe06c67.jpg",
    "https://i.pinimg.com/736x/37/b3/46/37b346155ddaf96a9ab4b4d43f4c1c46.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRZiC-fMVg4Mwb9muPJjBl36vjyvL8LNWIGw&s",
    "https://i.pinimg.com/236x/1b/1a/c0/1b1ac0fedb173d28be691a98e2db8ee0.jpg",
    "https://i.pinimg.com/564x/50/ac/a7/50aca7b3f6947486b0314c34e9702ae5.jpg",
    "https://i.pinimg.com/550x/5c/46/2d/5c462d91f248aaa8188e0d610665ffbb.jpg",
    "https://omeudiadia.com.br/wp-content/uploads/2022/04/frio-1024x811.jpg",
    "https://cdn.dicionariopopular.com/imagens/fotoengracada-de-perfil-micao-jackson2.jpg",
    "https://i.pinimg.com/236x/e0/01/b4/e001b4b0ac12c9ecfbbfb8ada8afb267.jpg",
    "https://i.pinimg.com/564x/0e/81/af/0e81af0219d5ba34c32d0607744faed7.jpg"
]

for (let i = 0; i < 1000; i++) {
    let nome = nomes[rand(nomes.length)];
    let sobrenome = sobrenomes[rand(sobrenomes.length)];
    let foto = fotos[rand(fotos.length)];
    let user1 = userkeys[rand(userkeys.length)];
    let user2 = userkeys[rand(userkeys.length)];

    let username = '@';
    if (rand(10) < 3)
    {
        username += nome.toLowerCase();
        
        if (rand(10) < 5)
            username += sobrenome.toLowerCase();
    }
    
    if (rand(10) < 7 || username === '@')
        username += user1;

    if ((rand(10) < 7 || username.length < 8) && username.length < 16)
        username += user2;

    if (rand(10) < 5 && user1.length < 16)
        username += rand(100);
    
    users.push({
        id: i + 1,
        username: username,
        name: nome + ' ' + sobrenome,
        photo: foto,
        friendsCount: 0,
        friends: []
    })
}

for (let i = 0; i < 1000; i++) {
    
    let user = users[i];
    let friendsCount = rand(20);
    user.friendsCount = friendsCount;
    for (let i = 0; i < friendsCount; i++) {
        let friend = users[rand(1000)]
        user.friends.push({
            id: friend.id,
            username: friend.username,
            name: friend.name,
            photo: friend.photo,
        });
    }
}

app.get('/user', (req: Request, res: Response) => {
    const query = typeof req.query.query === "string" ? req.query.query : undefined;
    const page = typeof req.query.page === "string" ? parseInt(req.query.page) : 1;
    const limit = typeof req.query.limit === "string" ? parseInt(req.query.limit) : 50;

    let findedUsers = users
        .filter(b => query === undefined || b.username.includes(query) || b.name.includes(query));
    let pageUsers = findedUsers
        .splice(limit * (page - 1), limit)
        .map(u => { 
            return {
                name: u.name,
                username: u.username,
                photo: u.photo,
                friends: u.friendsCount
            }
        })

    res.send({
        users: pageUsers,
        total: findedUsers.length
    });
});

app.get('/user/:username', (req: Request, res: Response) => {
    const { username } = req.params;
    let finded = users.filter(u => u.username.toString() === username);
    if (finded.length == 0) {
        res.status(404).send("Usuário não encontrado");
        return;
    }

    res.send(finded[0]);
});

app.listen(port);