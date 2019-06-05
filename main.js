((window) => {
	const elems = document.querySelectorAll('input');
	if (elems && elems.length) {
		[...elems].forEach((elem) => {
			elem.addEventListener('input', (e) => {
				const name = e.target.getAttribute('name');
				const type = e.target.getAttribute('type');
				const value = e.target.value;
				console.warn(`The value of the ${name} field is: ${value}`);
			});
		});
	}
})(window);
