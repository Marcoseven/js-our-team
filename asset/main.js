/* 
Descizione:
Il nostro compito é quello di rappresentare, utilizzando la struttura dati piú appropriata, una lista di membri di un team.
Ciascun membro del team avrá come caratteristica name, role, image.
Per le immagini potete mettere il percorso di un immagine presa da internet, provate con lorem pixum (https://picsum.photos/images)

Todo:
Stampare in console tutti gli elementi del team e le loro proprieta.
*/

// Array di oggetti
const membersOfTeam = [
	{
		nome: "Luca",
		role: "CEO",
		image: "https://picsum.photos/id/1025/300/300",
	},
	{
		nome: "Marco",
		role: "Game Developer",
		image: "https://picsum.photos/id/1025/300/300",
	},
	{
		nome: "Matteo",
		role: "Designer",
		image: "https://picsum.photos/id/1025/300/300",
	},
	{
		nome: "Simone",
		role: "Full Stack Developer",
		image: "https://picsum.photos/id/1025/300/300",
	},
	{
		nome: "Aldo",
		role: "Data Analyst",
		image: "https://picsum.photos/id/1025/300/300",
	},
	{
		nome: "Stefano",
		role: "Web Developer",
		image: "https://picsum.photos/id/1025/300/300",
	},
];

for (let key in membersOfTeam) {
	console.log(membersOfTeam[key]);
}
