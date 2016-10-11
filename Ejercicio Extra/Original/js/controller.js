angular.module('booksApp')
.controller('BooksCtrl', BooksCtrl);

function BooksCtrl(BooksService) {

	this.allBooks = BooksService.allBooks();

	this.addBook = function(newBook){
		BooksService.addBook(newBook);
	}

}