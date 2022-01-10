import Navigo from "navigo";
import AboutPage from "./page/about";
import HomePage from "./page/home";
import ProductPage from "./page/product";

const router =  new Navigo("/", {linksSelector : "a"});
const print = (content) => {
    document.getElementById("app").innerHTML = content;
};

router.on({
  "/": () => {
    print(HomePage.render());
  },
  "/about": () =>{
      print(AboutPage.render());
  },
  "/product": () =>{
      print(ProductPage.render());
  }

});

router.notFound(() => console.log("Page Not found"));

router.resolve();


