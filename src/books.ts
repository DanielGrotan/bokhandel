export {};

const booksContainer = document.querySelector(".books") as HTMLDivElement;

const booksHeader = document.createElement("h2");
booksHeader.className = "books--header";
booksHeader.innerHTML = "Bøker:";
booksContainer.appendChild(booksHeader);

const booksContent = document.createElement("div");
booksContent.className = "books--content";
booksContainer.appendChild(booksContent);
