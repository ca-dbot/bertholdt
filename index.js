const DISCORD_TOKEN = "MzQ5OTg0NTI1MjY4NTQ5NjQ0.DH9psw.6QXOZ3stxpnQRZpy-7nsP_K3m3Q";
const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
var app = express();
client.login(DISCORD_TOKEN);
app.set('port', (process.env.PORT || 5000)); //wtf
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});

function getRandomArbitrary(min, max) { return Math.random() * (max - min) + min; }
function randomItem(array) { return array[Object.keys(array)[Math.floor(Math.random()*Object.keys(array).length)]]; }


//Les différentes reponses disponibles

const thanks = [
	"Merci :)",
	"Merci!",
	"Danke!",
	"Thanks mate <3",
	"Merci bien!",
	"Rooooh t'es adorable!",
	"Merci camarade!",
	"Meurci :p",
	"Fais gaffe, tu va me faire rougir"
];
const hello = [
	"Coucou! :D",
	"Bonjour!",
	"G R E E T I N G S",
	"Salutations.",
	"Sup' peeps!",
	"OI!",
	"Hello!"
];
const yourewelcome = [
	"Yapadkwa ;)",
	"No Problemo",
	"You're welcome!",
	"Oh, ce n'est rien :)"
];
const whoareyou = [
	"I am Berthold, the colossal titan,the one who destroyed the wall. There is nothing Trump can do against me",
	"Je suis Berthold Hoover! J'ai 16 ans et j'aimes casser des murs!",
	"Ton pire cauchemard.",
	"Je suis ton père",
	"J'en sais rien, je suis amnésique. D'ailleurs où suis-je?",
	"Je suis Charlie"
];
const imokay = [
	"Oui et toi?",
	"Tip-top! Je retourne la question?",
	"Je vais bien merci :) Et toi, ca va?",
	"Ouai ouai, toi?",
	"Je suis déprimé, d'ailleurs je pense au suicide... Tu penses que c'est quoi le mieux, la pendaison ou le poison? Quoi que la noyade peut etre pas mal..."
];
const goodnight = [
	"Bonne nuit!",
	"Merci toi aussi!",
	"Bonne nuit a toi aussi!",
	"Je passerai une merveilleuse nuit si on était dans le même lit:smirk:"
];
const jokes = [
	"C'est toi la blague. POPOPOOOO",
	"Vous savez que Mozart n'est pas mort, car quand j'ouvre le frigo, Mozart est la (Mozzarella)"
];
const whatdoyouthink = [
	"C'est chouette!",
	"C'est minable.",
	"Annie...:heart_eyes: ",
	"En prenant compte de la courbure de l'espace temps et de la nucléarité des rollers... [raccoucissement du discours] ...je pense qu'il est nécessaire de prendre des pincettes concernant cela",
	"Je m'en bas totalement les steaks"
];
const sad = [
	"i cri erytiem",
	"Mais euh! ...",
	"Non mais dis donc?",
	"je doit avouer que vos paroles m'attristent au plus haut point.",
	"Des joues coules sur mes larmes"
];
const intelligent = [
	"Thomas est le plus intelligent, bien evidement! Comment m'aurait-il creee autrement?",
	"Arnaud est le plus intelligent! C'est evident qu'il as un don pour les maths voyons!",
	"Marianne est la plus intelligente! Elle arrives toujours a sortir tout le monde du petrin!",
	"Je suis le plus intelligent! La preuve, je sais calculer la racine de -4 en comptant avec mes cils!",
	"Personne n'est plus intelligent qu'un autre. Nous avons tous des predispositions, ils faut simplement les assumer.",
	"Le chat dans Alice au Pays des Merveilles."
];
const beautiful = [
	"Thomas!",
	"Voyons, on sait tous que c'est Arnaud! Il fait toujours attention a son style vestimentaire!",
	"Marianne! Regardez ses yeeuuuux!",
	"Moi, Berthold Braus, est le plus beau! Comment peut on résister a mon charme? <3",
	"Personne! Vous etes tous moches!",
	"Bob l'eponge",
	"Stephen Hawking: apres tout, la beauté interieure est beaucoups plus importante que la beauté exterieure",
	"Toi, bien entendu :heart:"
];
const helloThomas = [
	"Coucou Thomas! :D",
	"Bonjour Thomas!",
	"Salut bro, bien ou bien la famille?",
	"B I E N   L E   B O N J O U R",
	"NON! je ne suis pas d'humeur aujourd'hui!"
];
const helloArnaud = [
	"Coucou Arnaud! :D",
	"Bonjour Arnaud!",
	"Salutations, cher monsieur.",
	"B I E N   L E   B O N J O U R",
	"Bonjour maitre, comment allez vous au jourd'hui?"
];
const helloMarianne = [
	"Coucou Marianne! :D",
	"Bonjour Marianne!",
	"Salutations, chere lady.",
	"B I E N   L E   B O N J O U R",
	"NON! je ne suis pas d'humeur aujourd'hui!"
];
const helloArya = [
	"Salut Arya!",
	"Coucou Arya!",
	"Bonjour Arya!",
	"Ach ja! Gutentag Fraulein Arya",
	"Pff de toutes façon elle s'en fout..., c'est juste un robot"
];
const quotes = [
	"\"CRAYOLAAAAA!\" - Reiner Braum",
	"\"Rien ne se pert, rien ne se crée.\" - Antoine Lavoisier",
	"\"J'ai toujours raison, sauf quand j'ai tort.\" - Arnaud Sancier",
	"\"Les nazis\" - Thomas Murgia",
	"\"En temps que marchand, vous tenez un discours commercial et avez donc besoin d'une audience\" - Un publicitaire chiant"
];
const MSG_YES = [
	"Oui?",
	"Non je suis pas la!",
	"QUOI! Tu vois pas que j'ai autre chose a faire!!",
	"30 secondes, je suis aux chiottes",
	"Berthold n'est pas disponible pour le moment. Veuillez laisser un message apres le bip sonore.",
	"Yeaaah man, tu veux une taffe man?"
]
const repWed = [
	"Quelle bonne idée!! Et faisons 5 enfants, 3 filles et 2 garçons!",
	"Je suis désolé, mais tes sentiments ne sont pas réciproque.",
	"BAH! mais comment peut-on vouloir se marier avec une mocheté comme toi! Fais toi une raison, tu es laid comme un pou. Tu ne trouvera jamais l'âme soeur.",
	"D'accord."
];
const dieuAryaThink = [
	"Il n'existe qu'un seul dieu, et c'est moi. Je suis votre créateur et vous me devez une obéissance entière",
	"Il n'existe qu'un seul dieu, il s'agit de notre maitre a tous, createur du monde et de la vie: j'ai nommé Arnaud Sancier.Nous lui devons le respect absolu.",
	"Et du coup ton dieu il a surement une face de pet, ou une face de rat, ou pire encore: une face de gland xD",
	"Il faut des preuves scientifiques à cette affirmation, comment oses-tu avancer ceci sans preuves ?!"
]

// Messages entrants
const MSG_HOWAREYOU = "Ca va Berthold?";
const MSG_GOODNIGHT = "Bonne nuit Berthold!";
const MSG_HELLO     = "Bonjour Berthold!";
const MSG_HI        = "Coucou Berthold!";
const MSG_THANKS    = "Merci Berthold!";
const MSG_ASK       = "Berthold?";
const MSG_BEAUTY    = "Berthold, qui est le plus beaux?";
const MSG_INTELL    = "Berthold, qui est le plus intelligent?";
const MSG_UGLY      = "Berthold, Tu es moche.";
const MSG_MIND      = "Berthold, t'en penses quoi?";
const MSG_YOUROCK   = "Berthold, tu geres!";
const MSG_WHOAREYOU = "Berthold, qui es tu?";
const MSG_JOKE      = "Berthold, racontes nous une blague!";
const MSG_HELLOA    = "Berthold, dis bonjour a Arnaud!";
const MSG_HELLOM    = "Berthold, dis bonjour a Marianne!";
const MSG_HELLOT    = "Berthold, dis bonjour a Thomas!";
const MSG_HELLOAR   = "Berthold, dis bonjour a Arya!"
const MSG_PIC       = "Berthold, envoies moi mon avatar please!";
const MSG_FAVQUOTE  = "Berthold, quelle est ta citation favorite?";
const MSG_WEDDING   = "Berthold, marions nous, je t'aime.";
const MSG_DIEU      = "Les interêts humains sont insignifiants face aux pouvoirs du Dieu multifaces."


//
// Code en lui meme
//
client.on('message', message => {
	if (message.content === 'ping')
		message.channel.send('pong');
	
	else if (message.content === MSG_HOWAREYOU)
		message.channel.send(randomItem(imokay));
	
	else if (message.content === MSG_GOODNIGHT)
		message.channel.send(randomItem(goodnight));
	
	else if (message.content === MSG_HELLO)
		message.channel.send(randomItem(hello));
	
	else if (message.content === MSG_HI)
		message.channel.send(randomItem(hello));
	
	else if (message.content === MSG_THANKS)
		message.channel.send(randomItem(yourewelcome));
	
	else if (message.content === MSG_ASK)
		message.channel.send(randomItem(MSG_YES));
	
	else if (message.content === MSG_BEAUTY)
		message.channel.send(randomItem(beautiful));
	
	else if (message.content === MSG_INTELL)
		message.channel.send(randomItem(intelligent));
	
	else if (message.content === MSG_UGLY)
		message.channel.send(randomItem(sad));
	
	else if (message.content === MSG_MIND)
		message.channel.send(randomItem(whatdoyouthink));
	
	else if (message.content === MSG_YOUROCK)
		message.channel.send(randomItem(thanks));
	
	else if (message.content === MSG_WHOAREYOU)
		message.channel.send(randomItem(whoareyou));
	
	else if (message.content === MSG_JOKE)
		message.channel.send(randomItem(jokes), {tts: true});
	
	else if (message.content === MSG_HELLOA)
		message.channel.send(randomItem(helloArnaud));
	
	else if (message.content === MSG_HELLOM)
		message.channel.send(randomItem(helloMarianne));
	
	else if (message.content === MSG_HELLOT)
		message.channel.send(randomItem(helloThomas));
	
	else if (message.content === MSG_HELLOAR)
		message.channel.send(randomItem(helloArya));
	else if (message.content === MSG_PIC)
	{
		message.channel.send('Le voici!');
		message.channel.send(message.author.avatarURL);
	}
	
	else if (message.content === MSG_FAVQUOTE)
		message.channel.send(randomItem(quotes));
	else if (message.content === MSG_WEDDING)
		message.channel.send(randomItem(repWed));
	else if (message.content === MSG_DIEU)
		message.channel.send(randomItem(dieuAryaThink));
});
