const series = [
    {titulo: 'Serie 1', vista: true},
    {titulo: 'Serie 2', vista: true},
    {titulo: 'Serie 3', vista: false},
    {titulo: 'Serie 4', vista: false},
    {titulo: 'Serie 5', vista: true},
    {titulo: 'Serie 6', vista: false},
    {titulo: 'Serie 7', vista: true}
]

const seriesVistas = series.filter((serie) =>serie.vista)

const titulosSeriesVista = seriesVistas.map((serie) => serie.titulo).join(', ')

console.log(titulosSeriesVista)