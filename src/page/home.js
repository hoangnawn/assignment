import News from "../components/news";
import New from "./new";

const HomePage = {
    render() {
        return /*html*/`
        <div>
        <a href=""><img src="./img/banner.jpg" width="1100px" alt=""></a>
      </div>
      <div class="new">
          ${New.render()}
      </div>
    
        `;
    }
};
export default HomePage;