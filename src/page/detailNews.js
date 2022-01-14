import data from "../data";

const DetailNewsPage = {
    render(id) {
        const result = data.find((post) => post.id === id);
        return /*html*/ `
<div class="flex font-sans">
  <div class="flex-none w-60 relative">
    <img src="${result.img}" alt="" class="absolute inset-0 w-full h-full object-cover" />
  </div>
  <form class="flex-auto p-6">
    <div class="flex flex-wrap">
      <h1 class="flex-auto text-lg font-semibold text-gray-900">
      ${result.title}
      </h1>
      <div class="text-lg font-semibold text-gray-500">
        $${result.price}
      </div>
      <div class="w-full flex-none text-sm font-medium text-gray-700 mt-2">
      ${result.desc}
      </div>
    </div>
    <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-gray-200">
    <div class="flex space-x-4 mb-6 text-sm font-medium">
      <div class="flex-auto flex space-x-4">
        <button class="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
          Mua ngay
        </button>
        <button class="h-10 px-6 font-semibold rounded-md border border-gray-200 text-gray-900" type="button">
          Thêm vào giỏ hàng
        </button>
      </div>
      <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-300 border border-gray-200" type="button" aria-label="Like">
        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </button>
    </div>
  </form>
</div>

            
        `;
    },
};
export default DetailNewsPage;