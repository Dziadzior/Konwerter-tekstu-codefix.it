const piszPole = document.querySelector("textarea"),
    nazwaPlikuPole = document.querySelector('.nazwa-pliku input'),
    wybierzMenu = document.querySelector('.zapisz-jako select'),
    zapiszPrzycisk = document.querySelector('.zapisz-przycisk');

    zapiszPrzycisk.addEventListener('click', () => {
        const blob = new Blob([piszPole.value], {type: wybierzMenu.value});
        console.log(blob);
    })