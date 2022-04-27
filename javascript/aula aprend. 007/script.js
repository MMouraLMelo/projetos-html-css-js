function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var saudacao = window.document.getElementById('saudacao')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são <strong>${hora}:${min}</strong> horas.`
    if (hora >= 0 && hora < 12){
        img.src = 'imagens/manha-redonda.png'
        document.body.style.background = '#e2cd9f'
        saudacao.innerHTML = `Tenha uma ótima manhã!`
    } else if (hora >= 12 && hora <= 18){
        img.src = 'imagens/tarde-redonda.png'
        document.body.style.background = '#b9846f'
        saudacao.innerHTML = `Tenha uma ótima tarde!`
    } else {
        img.src = 'imagens/noite-redonda.png'
        document.body.style.background = '#515154'
        saudacao.innerHTML = `Tenha uma ótima noite!`
    }
}