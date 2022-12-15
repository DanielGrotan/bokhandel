import books from "./books.json";
import { addBookToCart } from "./shoppingCart";
import "./styles/books.css";

const booksDiv = document.querySelector(".books") as HTMLDivElement;

export const renderBooks = () => {
  booksDiv.innerHTML = "";

  if (books.length === 0) return;

  const booksHeader = document.createElement("h2");
  booksHeader.className = "books--header";
  booksHeader.innerHTML = "Bøker:";
  booksDiv.appendChild(booksHeader);

  const booksContent = document.createElement("div");
  booksContent.className = "books--content";
  booksDiv.appendChild(booksContent);

  for (const book of books) {
    const bookDiv = document.createElement("div");
    bookDiv.className = "book";

    const nameText = document.createElement("h3");
    nameText.className = "book--name";
    nameText.innerHTML = book.name;
    bookDiv.appendChild(nameText);

    const coverImage = document.createElement("img");
    coverImage.className = "book--cover";
    coverImage.src = book.coverFilePath;
    bookDiv.appendChild(coverImage);

    const authorText = document.createElement("p");
    authorText.className = "book--author";
    authorText.innerHTML = book.author;
    bookDiv.appendChild(authorText);

    const purchaseDiv = document.createElement("div");
    purchaseDiv.className = "book--purchase";

    const addToCartButton = document.createElement("button");
    addToCartButton.className = "book--add-to-cart-button";
    addToCartButton.innerHTML = "Legg til i handlevogn";
    addToCartButton.onclick = () => addBookToCart(book);
    purchaseDiv.appendChild(addToCartButton);

    const priceText = document.createElement("p");
    priceText.className = "book--price";
    priceText.innerHTML = book.priceNOK + " kr";
    purchaseDiv.appendChild(priceText);

    bookDiv.appendChild(purchaseDiv);

    booksContent.appendChild(bookDiv);
  }
};
