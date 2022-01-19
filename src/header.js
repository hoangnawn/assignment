const header = {
    render(){
        return /* html */ `
        <header>
      <div class="bg-blue-900 py-5">
        <a href=""><img src="./img/FPT_Polytechnic.png" width="250px" class="mx-auto" alt=""></a>
      </div>
      <div class="bg-orange-500 py-4 mb-4">
        <ul class="flex px-2">
          <li><a class="px-3 text-white hover:underline" href="/">Trang chủ</a></li>
          <li><a class="px-3 text-white hover:underline" href="/news">Tin tức</a></li>
          <li><a class="px-3 text-white hover:underline" href="/product">Chương trình đào tạo</a></li>
          <li><a class="px-3 text-white hover:underline" href="">Góc sinh viên</a></li>
          <li><a class="px-3 text-white hover:underline" href="">Tuyển dụng</a></li>
          <li><a class="px-3 text-white hover:underline" href="/admin/dashboard">Admin</a></li>
          <li><a class="px-3 text-white hover:underline" href="/signin">Đăng nhập</a></li>
          <li><input class="mx-8 px-1" type="text"></li>
          <li><button class="border-solid border-2 border-white text-white bg-blue-900 px-4 text-sm">Tìm Kiếm</button>
          </li>
        </ul>
      </div>
    </header>
        `
    }
};
export default header;