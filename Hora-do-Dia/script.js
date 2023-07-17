function carregar() {
    var fundo = document.getElementById('fundo')
    var img = document.getElementById('img')
    var text = document.getElementById('hora')
    var data = new Date()
    var hora = data.getHours()
    if (hora >= 6 && hora <= 12) {
        text.innerText = `Agora são ${hora} horas (manhã!)`
        img.src = 'paisagem-dia.png'
        fundo.href = 'style-dia.css'
    } else if (hora >= 13 && hora <= 18) {
        text.innerText = `Agora são ${hora} horas (tarde!)`
        img.src = 'paisagem-tarde.png'
        fundo.href = 'style-tarde.css'
    } else if (hora >= 19 && hora <= 23) {
        text.innerText = `Agora são ${hora} horas (noite!)`
        img.src = 'paisagem-noite.png'
        fundo.href = 'style-noite.css'
    } else if(hora >= 0 && hora <= 5) {
        text.innerText = `Agora são ${hora} horas (madrugada!)`
       img.src = 'paisagem-madrugada.png'
       fundo.href = 'style-madrugada.css'
    } else {
        text.innerText = 'ERRO!'
        img.src = 'paisagem-erro.png'
        fundo.href = 'style-erro.css'
        alert('ERRO!')
    }
}
