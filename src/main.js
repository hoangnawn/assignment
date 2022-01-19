import Navigo from "navigo";
import HomePage from "./page/home";
import DetailNewsPage from "./page/detailNews";
import News from "./components/news";
import Signup from "./page/signup";
import SignIn from "./page/signin";
import admin from "./page/admin/dashboard";
import adminNew from "./page/admin/news";
import add from "./page/admin/news/add";
import NewsEdit from "./page/admin/news/edit";



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
  "/signin": () =>{
    print(SignIn.render());
  },
  "/admin/dashboard":() =>{
    print(admin.render());
  },
  "/admin/news": () => print(adminNew.render()),

  "/admin/news/add": () =>{
    print(add.render());
  },
  "/admin/news/:id/edit": ({ data }) => {
    const { id } = data;
    print(NewsEdit.render(+id));
},
  "/news/:id": (value) => {
    const { id } = data;
    print(DetailNewsPage.render(+id));
},

});

router.notFound(() => console.log("Page Not found"));

router.resolve();


