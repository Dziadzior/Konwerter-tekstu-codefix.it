const piszPole = document.querySelector('textarea'),
	nazwaPlikuPole = document.querySelector('.nazwa-pliku input'),
	wybierzMenu = document.querySelector('.zapisz-jako select'),
	zapiszPrzycisk = document.querySelector('.zapisz-przycisk')

wybierzMenu.addEventListener('change', () => {
	let wybranaOpcja = wybierzMenu.options[wybierzMenu.selectedIndex].text
	zapiszPrzycisk.innerText = `Zapisz jako ${wybranaOpcja.split(' ')[1]} Plik`
})

zapiszPrzycisk.addEventListener('click', () => {
	const blob = new Blob([piszPole.value], { type: wybierzMenu.value })
	// URL.createObjectURL stworzenie url do objektu
	const plikURL = URL.createObjectURL(blob)
	const link = document.createElement('a') // Stworzenie <a> tagu
	link.download = nazwaPlikuPole.value
	link.href = plikURL
	link.click()
})
