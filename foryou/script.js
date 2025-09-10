function carregar() {
    const msg = document.getElementById("box1");
    const img = document.getElementById("img");
    const audio = document.getElementById("audio");
    const audioSrc = document.getElementById("audioSrc");
    const frase = document.getElementById("frase");

    const data = new Date();
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();

    msg.innerHTML = `Hoje é ${dia}/${mes}/${ano}.`;

    const fundos = [
        'img/f1.jpg',
        'img/f2.jpg',
        'img/f3.jpg',
        'img/f4.jpg',
        'img/f5.jpg',
        'img/f6.jpg',
        'img/f7.jpg'
    ];

    const gifs = [
        'img/g1.gif',
        'img/g2.gif',
        'img/g3.gif',
        'img/g4.gif',
        'img/g5.gif',
        'img/g6.gif',
        'img/g7.gif'
    ];

    const musicas = [
        'img/m1.m4a',
        'img/m2.m4a',
        'img/m3.m4a',
        'img/m4.m4a',
        'img/m5.m4a',
        'img/m6.m4a',
        'img/m7.m4a'
    ];

    const frases = [
        'Você foi um dos meus momentos que queria fossem pra sempre.',
        'Você foi um dos meus momentos que queria fossem pra sempre.',
        'Você foi um dos meus momentos que queria fossem pra sempre.',
        'Você foi um dos meus momentos que queria fossem pra sempre.',
        'Você foi um dos meus momentos que queria fossem pra sempre.',
       'Você foi um dos meus momentos que queria fossem pra sempre.',
        'Você foi um dos meus momentos que queria fossem pra sempre.'
    ];

    const indice = (dia + mes + ano) % gifs.length;
    img.src = gifs[indice];
    document.body.style.backgroundImage = `url(${fundos[indice]})`;
    audioSrc.src = musicas[indice];
    audio.load();
    frase.innerText = frases[indice];
}
