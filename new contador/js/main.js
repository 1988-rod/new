function iniciarVotacion() {
    let votosAFavor = 0;
    let votosEnContra = 0;
    let continuar = true;

    while (continuar) {
        let voto = prompt("Votación sobre la Ley de Protección Ambiental y Desarrollo Sostenible.\n Ingresa tu voto :\n1- Voto a Favor.\n2- Voto en Contra.\n'ESC' para terminar.");
      

        if (voto === null || voto.toLowerCase() === 'esc') {
            continuar = false;
        } else if (voto === '1') {
            votosAFavor++;
        } else if (voto === '2') {
            votosEnContra++;
        } else {
            alert("Entrada no válida. Por favor, ingresa '1', '2' o 'ESC'.");
        }
    }

    console.log(`Votos a favor: ${votosAFavor}`);
    console.log(`Votos en contra: ${votosEnContra}`);
}
//