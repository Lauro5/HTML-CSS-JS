const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Anniversary",
    price: 80,
  },
  {
    id: 2,
    title: "Birthday",
    price: 70,
  },
  {
    id: 3,
    title: "New Baby",
    price: 90,
  },
  {
    id: 4,
    title: "Sympathy",
    price: 75,
  },
  {
    id: 5,
    title: "Wedding",
    price: 120,
  },
];


let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {

    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    choosenProduct = products[index];

    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});