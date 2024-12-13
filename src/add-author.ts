import { Author, fetchAuthors, setMessage } from "./book-utilities";

let authorForm = document.querySelector('#add-author-form');

// What if the author form can't be found?
if (authorForm === null) {
	throw Error('Could not find Author form!');
}

authorForm.addEventListener('submit', handleSubmit);

function handleSubmit(event: Event): void {
	event.preventDefault();
	let form = event.target as HTMLFormElement;
	let formData = new FormData(form);
	// let mapAuthor = new Map<keyof Author, string>();

	// for..of iterates over anything that implements Iterable in JS
	// FormData returns a tuple of [key, value]
	// We destructure the array for readability
	// for (let [fieldName, fieldValue] of formData) {
		// let fieldName = entry[0];
		// let fieldValue = entry[1];

		// console.log(fieldName + ':' + fieldValue);
		// console.log(`Saving ${fieldName}: ${fieldValue}...`);

		// We know these types are correct, but TypeScript can't validate them
		// mapAuthor.set(fieldName as keyof Author, fieldValue as string)
	// }

	let authors = fetchAuthors();
	let nextId = Math.max(...authors.map(a => a.authorId)) + 1;

	let addedAuthor: Author = {
		// ?? is the nullish coalescing operator
		// if the left value is null || undefined, use the right value
		authorId: nextId,
		firstName: formData.get('firstName') as string ?? '',
		lastName: formData.get('lastName') as string ?? ''
	}

	saveAuthor(addedAuthor);
	setMessage(`${addedAuthor.firstName} ${addedAuthor.lastName} saved.`)
}

function saveAuthor(authorToBeSaved: Author): void {
	let authors = fetchAuthors();
	authors.push(authorToBeSaved);
	let updatedAuthors = JSON.stringify(authors);
	localStorage.setItem('authors', updatedAuthors);
}
