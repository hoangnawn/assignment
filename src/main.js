import Navigo from "navigo";
import AboutPage from "./page/about";
import HomePage from "./page/home";
import ProductPage from "./page/product";
import DetailNewsPage from "./page/detailNews";
import News from "./components/news";


const router =  new Navigo("/", {linksSelector : "a"});
const print = (content) => {
    document.getElementById("app").innerHTML = content;
};

router.on({
  "/": () => {
    print(HomePage.render());
  },
  "/news": () =>{
      print(News.render());
  },
  "/product": () =>{
      print(ProductPage.render());
  },
  "/news/:id": (value) => {
    console.log(value.data.id);
    print(DetailNewsPage.render(value.data.id));
},

});

router.notFound(() => console.log("Page Not found"));

router.resolve();


