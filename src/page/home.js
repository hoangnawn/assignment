import News from "../components/news";
import New from "./new";
import header from "../header";
import footer from "../footer";

const HomePage = {
    render() {
        return /*html*/`
        ${header.render()}
        <div>
        <a href=""><img src="./img/banner.jpg" width="1100px" alt=""></a>
      </div>
      <div class="new">
          ${New.render()}
      </div>
      ${footer.render()}
    
        `;
    }
};
export default HomePage;