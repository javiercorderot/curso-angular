const equipos = ['R.Madrid', 'Barcelona', 'Betis', 'Sevilla', 'Valencia'];
getEnfrentamientos(equipos);
function getEnfrentamientos(equ) {
    const equipos = shuffle(equ);
    const [equipo1, equipo2, equipo3, equipo4, equipo5] = equipos;
    console.log(equipo1 + ' vs ' + equipo2);
    console.log(equipo3 + ' vs ' + equipo4);
    console.log(equipo5 + ' Pasa directo ');
}
function shuffle(equipos) {
    equipos.sort(function () { return Math.random() - 0.5; });
    return equipos;
}
