const form = document.querySelector('.add-book-form');
const bookTitle = document.querySelector('#book-title');
const bookAuthor = document.querySelector('#book-author');
const booksContainer = document.querySelector('.books-container');

let Books = [];

if (localStorage.getItem('Books')) {
  Books = JSON.parse(localStorage.getItem('Books'));
}

const addBook = (e) => {
  e.preventDefault();
  booksContainer.innerHTML += ` 
    <div class="Books">
                <p class="title-text">${bookTitle.value}</p>
                <p class="author-text">${bookAuthor.value}</p>
                <button class="remove-book">Remove</button>
                <hr>
            </div>
            
    `;
  Books.push({
    title: bookTitle.value,
    author: bookAuthor.value,
  });

  localStorage.setItem('Books', JSON.stringify(Books));


  const removeBtn = document.querySelectorAll('.remove-book');
  removeBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      if (e.target.classList.contains('remove-book')) {
        const index = Array.from(
          e.target.parentElement.parentElement.children,
        ).indexOf(e.target.parentElement);
        Books.splice(index, 1);
        e.target.parentElement.remove();
      }
    });
  });
};

form.addEventListener('submit', addBook);
