class UI {
	addUIelement(elementname, classname = '', textcontent = '', atributes = {}) {
		const element = document.createElement(elementname);
		element.className = classname;
		element.appendChild(document.createTextNode(textcontent));
		if (Object.keys(atributes).length > 0) {
			for (let key in atributes) {
				element.setAttribute(key, atributes[key]);
			}
		}
		return element;
	}

	addBook(book) {
		const title = this.addUIelement('td', 'book-title', book.title);
		const author = this.addUIelement('td', 'book-author', book.author);
		const isbn = this.addUIelement('td', 'book-isbn', book.isbn);
		// create X
		const link = this.addUIelement('a', 'secondary-content', 'X', {'href':'#'});
		const delBtn = this.addUIelement('td', 'book-del');
		delBtn.appendChild(link);
		const row = document.createElement('tr');
		row.appendChild(title);
		row.appendChild(author);
		row.appendChild(isbn);
		row.appendChild(delBtn);
		const tableBody = document.querySelector('tbody');
		tableBody.appendChild(row);
		const inputTitle = document.querySelector('#title');
		inputTitle.value = '';
		const inputAuthor = document.querySelector('#author');
		inputAuthor.value = '';
		const inputISBN = document.querySelector('#isbn');
		inputISBN.value = '';
		book.addedToUI();
	}

	delBook(book) {
		const delIcon = book;
		if (delIcon.lastChild.textContent == "X") {
			if (confirm('Do you want to delete this book?')) {
				delIcon.remove();
			}
		}
	}

	getBooks(books) {
		for (let i = 0; i < books.length; i++) {
		const title = this.addUIelement('td', 'book-title', books[i].title);
		const author = this.addUIelement('td', 'book-author', books[i].author);
		const isbn = this.addUIelement('td', 'book-isbn', books[i].isbn);
		const link = this.addUIelement('a', 'secondary-content', 'X', {'href':'#'});
		const delBtn = this.addUIelement('td', 'book-del');
		delBtn.appendChild(link);
		const row = document.createElement('tr');
		row.appendChild(title);
		row.appendChild(author);
		row.appendChild(isbn);
		row.appendChild(delBtn);
		const tableBody = document.querySelector('tbody');
		tableBody.appendChild(row);
		}
	}
}