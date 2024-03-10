// Book object template
class Book {
    constructor(title, author, pages, genre) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.genre = genre;
    }
  }
  
  // Array to store books
  let library = [];
  
  // Function to add a book to the library
  function addBook(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = parseInt(document.getElementById('pages').value);
    const genre = document.getElementById('genre').value;
  
    const book = new Book(title, author, pages, genre);
    library.push(book);
  
    displayBooks(library);
  }
  
  // Function to search for books by title
  function searchBooks() {
    const searchTitle = document.getElementById('searchInput').value.toLowerCase();
    const filteredBooks = library.filter(book => book.title.toLowerCase().includes(searchTitle));
  
    if (filteredBooks.length === 0) {
      document.getElementById('noResults').style.display = 'block';
    } else {
      document.getElementById('noResults').style.display = 'none';
    }
  
    displayBooks(filteredBooks);
  }
  

  function displayBooks(books) {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';
  
    books.forEach(book => {
      const bookDiv = document.createElement('div');
      bookDiv.innerHTML = `
        <p><strong>Title:</strong> ${book.title}</p>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Pages:</strong> ${book.pages}</p>
        <p><strong>Genre:</strong> ${book.genre}</p>
      `;
      bookList.appendChild(bookDiv);
    });
  }
  
  // Event listener for adding a book
  document.getElementById('addBookForm').addEventListener('submit', addBook);
  