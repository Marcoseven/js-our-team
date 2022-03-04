/* 
Traccia esercizio.

Il nostro compito é quello di rappresentare, utilizzando la struttura dati piú appropriata, una lista di membri di un team.
Ciascun membro del team avrá come caratteristica name, role, image.
Per le immagini potete mettere il percorso di un immagine presa da internet, provate con lorem pixum (https://picsum.photos/images)

Todo:
Stampare in console tutti gli elementi del team e le loro proprieta.
*/

// Array di oggetti
const membersOfTeam = [
	{
		name: "Luca",
		role: "CEO",
		image: "https://picsum.photos/id/1025/300/300",
	},
	{
		name: "Marco",
		role: "Game Developer",
		image: "https://picsum.photos/id/1025/300/300",
	},
	{
		name: "Matteo",
		role: "Designer",
		image: "https://picsum.photos/id/1025/300/300",
	},
	{
		name: "Simone",
		role: "Full Stack Developer",
		image: "https://picsum.photos/id/1025/300/300",
	},
	{
		name: "Aldo",
		role: "Data Analyst",
		image: "https://picsum.photos/id/1025/300/300",
	},
	{
		name: "Stefano",
		role: "Web Developer",
		image: "https://picsum.photos/id/1025/300/300",
	},
	{
		name: "Fabio",
		role: "Web Designer",
		image: "https://picsum.photos/id/1025/300/300",
	},
	{
		name: "Martina",
		role: "Cyber Security Expert",
		image: "https://picsum.photos/id/1025/300/300",
	},
];

members_team(membersOfTeam);
function renderTeamMember(member) {
	return `
	<div class="col-3 g-3">
		<div class="card">
			<img src="${member.image}" class="" alt="immagine random">
		</div>
		<div class="card_body">
			<h3>${member.name}</h3>
			<p>${member.role}</p>
		</div>
	</div>`;
}

//show_members();
function members_team(members) {
	for (let i = 0; i < members.length; i++) {
		const element = members[i];
		document
			.querySelector(".row")
			.insertAdjacentHTML("beforeend", renderTeamMember(element));
	}
}

document.getElementById("add").addEventListener("click", function () {
	const name = document.getElementById("name").value;
	const role = document.getElementById("role").value;
	const image = document.getElementById("image").value;

	const member = {
		name,
		role,
		image,
	};

	console.log(member);
	document
		.querySelector(".row")
		.insertAdjacentHTML("beforeend", renderTeamMember(member));
});
