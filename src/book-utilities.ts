export interface Author {
	authorId: number;
	firstName: string;
	lastName: string;
}

export function fetchAuthors(): Array<Author> {
	let authors: Array<Author>;
	let authorsData = localStorage.getItem('authors');

	if (authorsData !== null) {
		authors = JSON.parse(authorsData);
	} else {
		authors = [];
	}

	return authors;
}

export function setMessage(message: string, el: Element | string = 'messages') {
	let actualElement: Element;

	if (typeof el === 'string') {
		let tempElement = document.querySelector(`#${el}`);
		if (!tempElement) {
			throw Error(`Could not find ${el}`);
		}

		actualElement = tempElement;
	} else {
		actualElement = el;
	}

	actualElement.textContent = message;
}