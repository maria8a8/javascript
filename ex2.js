let Moyenne;
Moyenne = Number(prompt("Entrez votre Moyenne :"));

if (Moyenne < 10) {
  console.log("Ajourné");
}

else if (Moyenne >= 10 && Moyenne < 12) {
  console.log("Réussi - Moyen");
}

else if (Moyenne >= 12 && Moyenne < 14) {
  console.log("Réussi - Bien");
}

else if (Moyenne >= 14 && Moyenne < 16) {
  console.log("Réussi - Très bien");
}

else if (Moyenne >= 16 ) {
  console.log("Réussi - Excellent");
}
