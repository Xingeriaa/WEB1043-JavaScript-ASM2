
const ProductsList = {
    1: {name: "Kê tay công thái học DeltaHub Carpio G2.0", price: "1.100.000đ", src: "./src/Products/DeltaHub-Carpio-G2.webp"},
    2: {name: "Chuột không dây siêu nhẹ Lamzu Atlantis Mini Champion Edition - Hỗ trợ 8KHz", price: "2.750.000₫", src: "./src/Products/Lamzu-Atlantis-Mini-Champion-Light-Pink.webp"},
    3: {name: "Chuột không dây Razer DeathAdder V3 Hyperspeed", price: "2.390.000₫", src: "./src/Products/chu-t-khong-day-razer-deathadder-v3-hyperspeed.webp"},
    4: {name: "Chuột không dây Razer Viper V3 Pro - Đi kèm dongle 8KHz", price: "3.935.000₫", src: "./src/Products/chu-t-khong-day-razer-viper-v3-pro.webp"},
    5: {name: "Lót chuột Lethal Gaming Gear Jupiter PRO (V2)", price: "1.551.000₫", src: "./src/Products/LGG-JUPITERPRO-XL-SQ-Bcopy.webp"},
    6: {name: "Bàn phím từ Lamzu Atlantis Pro Keyboard - Hỗ trợ Rapid Trigger", price: "4.630.000₫", src: "./src/Products/ban-phim-t-lamzu-atlantis-pro-keyboard-h-tr-rapid-trigger-39938162786549.webp"},
    7: {name: "Lót chuột kính cường lực Yuki Aim Kitsune - Limited Edition", price: "3.190.000₫", src: "./src/Products/lot-chu-t-kinh-c-ng-l-c-yuki-aim-kitsune-limited-edition-40729345229045.webp"},
    8: {name: "Lót chuột kính cường lực Yuki Aim Katana - Limited Edition", price: "3.190.000₫", src: "./src/Products/lot-chu-t-kinh-c-ng-l-c-yuki-aim-katana-limited-edition-40761371001077.webp"}
}

function AddProduct(name,price,src) {
    let ProductSeciton = document.querySelector(".products-section");
    let Product = `<div class="product-frame">
        <img src=${src} alt="">
        <p class="name">${name}</p>
        <p class="price">${price}</p>
    </div>`
    ProductSeciton.innerHTML += Product;
}

Object.keys(ProductsList).forEach(key => {
    const value = ProductsList[key];
    AddProduct(value.name, value.price, value.src);
});
