const Books = [
  {
    title: "",
    author: "",
  },
];

console.log(Books);
const form = document.querySelector(".add-book-form");
const bookTitle = document.querySelector("#book-title");
const bookAuthor = document.querySelector("#book-author");
const addbtn = document.querySelector("#add-button");

const booksContainer = document.querySelector(".books-container");

const addBook = (e) => {
  e.preventDefault();
  booksContainer.innerHTML += `
    <div class="book">
                <p class="title-text">${bookTitle.value}</p>
                <p class="author-text">${bookAuthor.value}</p>
                <button class="remove-book">Remove</button>
                <hr>
            </div>
    `;

  console.log(booksContainer);
  removeBtn.booksContainer.innerHTML;
};

form.addEventListener("submit", addBook);

const removeBtn = document.querySelectorAll(".remove-book");

// const removeBook = () => {
//   removeBtn.forEach(btn, () => {
//     alert("hi");
//     // btn.parentElement
//     console.log(btn);
//   });
// };
// removeBtn.addEventListener("click", removeBook);
