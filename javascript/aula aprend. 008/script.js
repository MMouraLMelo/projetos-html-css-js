function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.lenght == 0 || fano.value > ano) {
        window.alert('ERRO - Data Inválida. Verifique a data.')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gen = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/menino.png')
            }else if (idade < 21){
                img.setAttribute('src', 'imagens/jovem-homem.png')
            }else if (idade < 50){
                img.setAttribute('src', 'imagens/adulto.png')
            }else {
                img.setAttribute('src', 'imagens/idoso.png')
            }
        }else {
            gen = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/menina.png')
            }else if (idade < 21){
                img.setAttribute('src', 'imagens/jovem-mulher.png')
            }else if (idade < 50){
                img.setAttribute('src', 'imagens/adulta.png')
            }else {
                img.setAttribute('src', 'imagens/idosa.png')
            }
        }
        res.innerHTML = `Gênero: ${gen} Idade: ${idade} anos.`
        res.appendChild(img)
    }
}