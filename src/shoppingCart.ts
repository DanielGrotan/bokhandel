import "./styles/shoppingcart.css";

type Book = {
  name: string;
  author: string;
  priceNOK: number;
  coverFilePath: string;
};

const shoppingCartDiv = document.querySelector(
  ".shopping-cart"
) as HTMLDivElement;

const shoppingCart = new Map<Book, number>();

export const addBookToCart = (book: Book) => {
  const previousQuantity = shoppingCart.get(book) ?? 0;
  shoppingCart.set(book, previousQuantity + 1);

  renderShoppingCart();
};

export const renderShoppingCart = () => {
  shoppingCartDiv.innerHTML = "";

  const shoppingCartHeader = document.createElement("h2");
  shoppingCartHeader.className = "shopping-cart--header";
  shoppingCartHeader.innerHTML = "Handleliste:";
  shoppingCartDiv.appendChild(shoppingCartHeader);

  const shoppingCartContent = document.createElement("div");
  shoppingCartContent.className = "shopping-cart--content";
  shoppingCartDiv.appendChild(shoppingCartContent);

  let priceSumNOK = 0;

  for (const [book, quantity] of shoppingCart.entries()) {
    priceSumNOK += book.priceNOK * quantity;

    const bookDiv = document.createElement("div");
    bookDiv.className = "shopping-cart-book";

    const nameText = document.createElement("h3");
    nameText.className = "shopping-cart-book--name";
    nameText.innerHTML = book.name;
    bookDiv.appendChild(nameText);

    const authorText = document.createElement("p");
    authorText.className = "shopping-cart-book--author";
    authorText.innerHTML = book.author;
    bookDiv.appendChild(authorText);

    const priceText = document.createElement("p");
    priceText.className = "shopping-cart-book--price";
    priceText.innerHTML = `-${book.priceNOK} kr <span class="shopping-cart-book--mul-symbol">*</span> <span class="shopping-cart-book--quantity">${quantity}</span>`;
    bookDiv.appendChild(priceText);

    const removeBookButton = document.createElement("button");
    removeBookButton.className = "shopping-cart-book--remove-book-button";
    removeBookButton.innerHTML = "Fjern";
    removeBookButton.onclick = () => {
      if (quantity === 1) {
        shoppingCart.delete(book);
      } else {
        shoppingCart.set(book, quantity - 1);
      }

      renderShoppingCart();
    };
    bookDiv.appendChild(removeBookButton);

    shoppingCartContent.appendChild(bookDiv);
  }

  if (priceSumNOK === 0) return;

  const priceSumText = document.createElement("p");
  priceSumText.className = "shopping-cart--price-sum";
  priceSumText.innerHTML = `Bøkene koster: ${priceSumNOK} kr totalt`;
  shoppingCartContent.appendChild(priceSumText);
};
