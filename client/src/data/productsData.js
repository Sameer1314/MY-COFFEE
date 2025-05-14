// src/data/productsData.js

//best seller data
import javachipImg from "../assets/homepageimg/javachip.jpg";
import doublechocoImg from "../assets/menupageimg/doublechoco.jpg";
import cafeamericanoImg from "../assets/menupageimg/Café americano.jpg";
import coldcoffeeImg from "../assets/menupageimg/cold-Coffee.jpg";
import cappucinnoImg from "../assets/menupageimg/cappu.jpg";
import icedlatteImg from "../assets/menupageimg/icedlatte.jpg";
import latteImg from "../assets/menupageimg/latte.jpg";

//coffee at home data
import arabicabeanImg from "../assets/menupageimg/arabica-beans.jpg";
import italianImg from "../assets/menupageimg/italian.jpg";
import blonderoastImg from "../assets/menupageimg/blonde-roast.jpg";
import kenyaImg from "../assets/menupageimg/kenya.jpg";
import sumantraImg from "../assets/menupageimg/sumantra.jpg";
import espressoImg from "../assets/menupageimg/espresso.jpg";

//drinks data
import coldbrewImg from "../assets/menupageimg/coldbrew.jpg";
import cmacchitoImg from "../assets/menupageimg/c-macchito.jpg";
import vlatteImg from "../assets/menupageimg/vanillaLatte.jpg";
import chotcoffeeImg from "../assets/menupageimg/chotcoffee.jpg";
import cmochaImg from "../assets/menupageimg/cmocha.jpg";
import choccapImg from "../assets/menupageimg/choc-cap.jpg";
import blackteaImg from "../assets/menupageimg/blacktea.jpg";
import greenlatteImg from "../assets/menupageimg/greenlatte.jpg";
import smilkshakeImg from "../assets/menupageimg/smilkshake.jpg";
import mfapImg from "../assets/menupageimg/mfap.jpg";
import shotchocImg from "../assets/menupageimg/shotchoc.jpg";

//food data
import buttercroImg from "../assets/menupageimg/butter-croissant.jpg";
import tdchipsImg from "../assets/menupageimg/tdchips.jpg";
import ctpastryImg from "../assets/menupageimg/ctpastry.jpg";
import almonddImg from "../assets/menupageimg/almondb-cookie.jpg";
import ccakeImg from "../assets/menupageimg/ccake.jpg";
import bmuffinImg from "../assets/menupageimg/bmuffin.jpg";
import dcchipcookieImg from "../assets/menupageimg/dchocochip-cookie.jpg";
import lloafImg from "../assets/menupageimg/lloafcake.jpg";
import sandwichImg from "../assets/menupageimg/sandwich.jpg";

//merchandise data
import campmugImg from "../assets/menupageimg/mug.jpg";
import hydroImg from "../assets/menupageimg/hydroflask.jpg";
import bagImg from "../assets/menupageimg/bag.jpg";
import keychainImg from "../assets/menupageimg/keychain.jpg";
import penImg from "../assets/menupageimg/pens.jpg";
import badgeImg from "../assets/menupageimg/badge.jpg";

//ready to eat data
import cashewImg from "../assets/menupageimg/cashews.jpg";
import fudgeImg from "../assets/menupageimg/fudge.jpg";
import coffeechocoImg from "../assets/menupageimg/coffee-choco-barks.jpg";

export const productsData = [
  {
    id: 1,
    name: "Java Chip Frappuccino",
    description:
      "Mocha sauce and Frappuccino® chips blended with coffee and ice.",
    price: "₹298.00",
    image: javachipImg,
  },
  {
    id: 2,
    name: "Choco-Chip Frappuccino",
    description: "Rich mocha-flavored sauce with chocolaty chips.",
    price: "₹441.00",
    image: doublechocoImg,
  },
  {
    id: 3,
    name: "Caffe Americano",
    description:
      "Rich in flavour, full-bodied espresso with hot water in true...",
    price: "₹299.25",
    image: cafeamericanoImg,
  },
  {
    id: 4,
    name: "Cold Coffee",
    description:
      "Our signature rich in flavour espresso blended with delicate...",
    price: "₹299.25",
    image: coldcoffeeImg,
  },
  {
    id: 5,
    name: "Cappuccino",
    description:
      "Dark, Rich in flavour espresso lies in wait under a smoothed...",
    price: "₹357.25",
    image: cappucinnoImg,
  },
  {
    id: 6,
    name: "Iced Caffè Latte",
    description: "Our dark, Rich in flavour espresso is combined with milk",
    price: "₹299.25",
    image: icedlatteImg,
  },
  {
    id: 7,
    name: "Latte",
    description:
      "Our dark, Rich in flavour espresso balanced with steamed mil....",
    price: "₹299.25",
    image: latteImg,
  },
  {
    id: 8,
    name: "Arabica Beans",
    description: "Premium Arabica beans for a rich, smooth flavor.",
    price: "₹600.00",
    image: arabicabeanImg,
  },
  {
    id: 9,
    name: "Blonde Roast",
    description: "Bold French Roast for those who love deep, robust coffee.",
    price: "₹2550.00",
    image: blonderoastImg,
  },
  {
    id: 10,
    name: "Espresso Roast",
    description: "A rich, dark roast with a smooth, creamy finish.",
    price: "₹1450.00",
    image: espressoImg,
  },
  {
    id: 11,
    name: "Italian Roast",
    description:
      "A dark roast with a rich, smoky flavor and a hint of sweetness.",
    price: "1250.00",
    image: italianImg,
  },
  {
    id: 12,
    name: "Kenya Coffee",
    description:
      "Beloved, like the elephant that symbolizes it. Bold, like th...",
    price: "₹1350.00",
    image: kenyaImg,
  },
  {
    id: 13,
    name: "Sumantra Coffee",
    description: "A blend of Indonesian coffees with a rich, earthy flavor.",
    price: "₹2850.00",
    image: sumantraImg,
  },
  {
    id: 14,
    name: "Cold Brew black",
    description:
      "Starbucks coffee is freshly ground and then steeped for 48 h...",
    price: "₹350.00",
    image: coldbrewImg,
  },
  {
    id: 15,
    name: "Caramel Macchiato",
    description: "A perfect blend of steamed milk, espresso, and caramel...",
    price: "₹399.00",
    image: cmacchitoImg,
  },
  {
    id: 16,
    name: "Vanilla Latte",
    description: "Our dark, Rich in flavour espresso balanced with vanilla..",
    price: "₹375.00",
    image: vlatteImg,
  },
  {
    id: 17,
    name: "Classic Hot Coffee",
    description:
      "Savour our premium coffee made with top 3% Arabica beans in ....",
    price: "₹175.00",
    image: chotcoffeeImg,
  },
  {
    id: 18,
    name: "Caffè Mocha",
    description: "We combine our rich in flavour, full-bodied espresso...",
    price: "₹275.00",
    image: cmochaImg,
  },
  {
    id: 19,
    name: "Chocolate Cappuccino",
    description: "Dark, Rich in flavour espresso and bitter...",
    price: "₹345.00",
    image: choccapImg,
  },
  {
    id: 20,
    name: "Black Tea",
    description: "A classic black tea with a rich and robust flavor.",
    price: "₹375.00",
    image: blackteaImg,
  },
  {
    id: 21,
    name: "Strawberry Milkshake",
    description: "A Delicious milkshake for those with a sweet...",
    price: "₹340.00",
    image: smilkshakeImg,
  },
  {
    id: 22,
    name: "Green Tea Latte",
    description: "A blend of matcha green tea and steamed milk....",
    price: "₹315.00",
    image: greenlatteImg,
  },
  {
    id: 23,
    name: "Mango Frappuccino",
    description: "A refreshing blend of mango puree and milk...",
    price: "₹215.00",
    image: mfapImg,
  },
  {
    id: 24,
    name: "Signature Hot Chocolate",
    description:
      "Four Cocoas and fresh steamed milk with whipped vanilla topp.",
    price: "₹305.00",
    image: shotchocImg,
  },
  {
    id: 25,
    name: "Butter Croissant",
    description: "A flaky and buttery French style pastry served with butter.",
    price: "₹299.00",
    image: buttercroImg,
  },
  {
    id: 26,
    name: "Three Dips Chips",
    description:
      "Crispy Tortilla Chips loaded with peri peri cheesy dip, spic...",
    price: "₹220.00",
    image: tdchipsImg,
  },
  {
    id: 27,
    name: "Chocolate Truffle Pastry",
    description:
      "An absolute classic! A moist chocolate cake layered with whi....",
    price: "₹390.00",
    image: ctpastryImg,
  },
  {
    id: 28,
    name: "Almond Butter Cookie",
    description:
      "A buttery cookie with a combination of crunchy almond and bu...",
    price: "₹300.00",
    image: almonddImg,
  },
  {
    id: 29,
    name: "Chocolate Cake",
    description: "Decadent, moist chocolate cake perfect for dessert.",
    price: "₹390.00",
    image: ccakeImg,
  },
  {
    id: 30,
    name: "Blueberry Muffin",
    description:
      "Buttery vanilla cake with berries dusted with granulated sug...",
    price: "₹352.00",
    image: bmuffinImg,
  },
  {
    id: 31,
    name: "Double ChocoChip Cookie",
    description:
      "A soft & chewy chocolate cookie topped with chocolate chips ...",
    price: "₹320.00",
    image: dcchipcookieImg,
  },
  {
    id: 32,
    name: "Lemon Loaf Cake",
    description:
      "English tea cake with rich taste of butter and citrusy lemon....",
    price: "₹480.00",
    image: lloafImg,
  },
  {
    id: 33,
    name: "Chilli Paneer Sandwich",
    description:
      "A tangy chilli paneer filling with chopped spinach tucked be...",
    price: "₹308.00",
    image: sandwichImg,
  },
  {
    id: 34,
    name: "Camping Mug",
    description: "A durable camping mug for your outdoor adventures.",
    price: "₹3850.00",
    image: campmugImg,
  },
  {
    id: 35,
    name: "Hydro Flask",
    description: "A stainless steel water bottle to keep your drinks cold.",
    price: "₹4999.00",
    image: hydroImg,
  },
  {
    id: 36,
    name: "Coffee themed Bag",
    description: "A stylish bag with a coffee theme for coffee lovers.",
    price: "₹3785.00",
    image: bagImg,
  },
  {
    id: 37,
    name: "Barista metal badge",
    description: "A metal badge for baristas and coffee enthusiasts.",
    price: "₹1499.00",
    image: badgeImg,
  },
  {
    id: 38,
    name: "Coffee Queen Pen Set",
    description: "A set of pens for coffee lovers.",
    price: "₹2585.00",
    image: penImg,
  },
  {
    id: 39,
    name: "Coffee Cup Keychain",
    description: "A coffee cup keychain for coffee.... ",
    price: "₹999.00",
    image: keychainImg,
  },
  {
    id: 40,
    name: "classic salty cashew",
    description: "A classic salty cashew for a crunchy snack.",
    price: "₹600.00",
    image: cashewImg,
  },
  {
    id: 41,
    name: "Fudge Brownie",
    description: "A rich and fudgy brownie for a sweet treat.",
    price: "₹550.00",
    image: fudgeImg,
  },
  {
    id: 42,
    name: "Coffee Choco Barks",
    description: "A delightful blend of coffee and chocolate.",
    price: "₹450.00",
    image: coffeechocoImg,
  },
];
