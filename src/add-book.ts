import { fetchAuthors } from "./book-utilities";

function renderAuthors(selectElement: HTMLSelectElement) {
	let authors = fetchAuthors();
	let authorOptions: Array<HTMLOptionElement> = [];

	for(let author of authors) {
		let optionElement = document.createElement('option');
		optionElement.textContent = `${author.firstName} ${author.lastName}`;
		optionElement.value = author.authorId + '';
		authorOptions.push(optionElement);
	}

	selectElement.append(...authorOptions);
}

renderAuthors(document.querySelector('#author')!);