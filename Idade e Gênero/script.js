function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var fsex = document.getElementsByName('radsex')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Digite o valor e tente novamente.')
    res.innerHTML = '[ERRO]'
    res.style.textAlign = 'center'
    } else {
        var idade = ano - Number(fano.value)
        var gnr = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gnr = 'Homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'menino.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'adolescente-h.png')
            }else if (idade < 50) {
                img.setAttribute('src', 'homem.png')
            } else if (idade < 110){
                img.setAttribute('src', 'velho.png')
            }
        } else if (fsex[1].checked) {
            gnr = 'Mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'menina.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'adolescente-m.png')
            }else if (idade < 50) {
                img.setAttribute('src', 'mulher.png')
            } else if (idade < 110) {
                img.setAttribute('src', 'velha.png')

            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gnr} com ${idade} anos.`
        res.appendChild(img)
    }

}