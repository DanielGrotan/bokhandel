export {};

const shoppingCartContainer = document.querySelector(
  ".shopping-cart"
) as HTMLDivElement;

const shoppingCartHeader = document.createElement("h2");
shoppingCartHeader.className = "shopping-cart--header";
shoppingCartHeader.innerHTML = "Handleliste:";
shoppingCartContainer.appendChild(shoppingCartHeader);

const shoppingCartContent = document.createElement("div");
shoppingCartContent.className = "shopping-cart--content";
shoppingCartContainer.appendChild(shoppingCartContent);
