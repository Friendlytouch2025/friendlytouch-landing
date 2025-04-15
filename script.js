const users = ["Luca23", "Anna11", "Ryan34", "Marco77", "Vale88", "Dany19", "Simo44"];

function trovaAmico() {
  const randomIndex = Math.floor(Math.random() * users.length);
  const amico = users[randomIndex];
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `<h3>Il tuo nuovo amico è: <span style="color:green">${amico}</span></h3>`;
}
