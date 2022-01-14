import Navigo from "navigo";
import HomePage from "./page/home";
import DetailNewsPage from "./page/detailNews";
import News from "./components/news";
import Signup from "./page/signup";
import SignIn from "./page/signin";


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
  "/signup": () =>{
    print(Signup.render());
  },
  "signin": () =>{
    print(SignIn.render());
  },
  "/news/:id": (value) => {
    console.log(value.data.id);
    print(DetailNewsPage.render(value.data.id));
},

});

router.notFound(() => console.log("Page Not found"));

router.resolve();


