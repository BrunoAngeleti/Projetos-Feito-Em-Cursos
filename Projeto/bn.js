function verificar() { 
var nve = document.getElementById('txtv')
var res = document.getElementById('res')
var vel = Number(nve.value)

res.innerHTML = ` <br><br> Sua velocidade foi de ${vel}km/h` 
    if (vel <= 60) {
        
        res.innerHTML += ' <br><br> Está dentro do regumento!! '
    } else if (vel > 60.5) {
        res.innerHTML += '<br><br> Fora do regulamento [MULTADO!!] <br><br>  '

        res.innerHTML += '<br> Multa por ultrapassar a velocidade de 60km/h. </br></br> Dirija com mais cuidado.'
    }
}
