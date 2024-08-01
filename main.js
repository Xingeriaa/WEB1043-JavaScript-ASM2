
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

const BrandsList = {
    1: "./src/Brand/Filco.webp",
    2: "./src/Brand/finalmouse.webp",
    3: "./src/Brand/fnatic.avif",
    4: "./src/Brand/lamzu.webp",
    5: "./src/Brand/yuki-aim.webp",

    6: "./src/Brand/arbiter-300px.webp",
    7: "./src/Brand/GLSSWRKS-logo-320px_84ef7b9b-4888-4c00-9293-0d7e3d731b37.webp",
    8: "./src/Brand/vancer-logo-300px.avif",
    9: "./src/Brand/corepad.webp",
    10: "./src/Brand/deltahub-logo.webp",

    11: "./src/Brand/lgg-logo.webp",
    12: "./src/Brand/drunkdeer-logo.avif",
    13: "./src/Brand/gamesense-logo-v2.avif",
    14: "./src/Brand/pulsar.avif",
    15:"./src/Brand/datacolor.avif",

    16: "./src/Brand/Xtrfy-logo-homepage.avif",
    17: "./src/Brand/pwnagesq_Logo_black-300-v2.webp",
    18: "./src/Brand/ninjutso.avif",
    19: "./src/Brand/skypad.webp",
    20: "./src/Brand/glorious.avif"

}

const BannersList = {
    1: {src: "./src/Banner/banner1.webp", about: "Lót chuột kính cường lực giới hạn", name: "Yuki Aim 2024 Katana & Kitsune", button: "Xem thêm"},
    2: {src: "./src/Banner/banner2.webp", about: "Lót chuột kính cường lực giới hạn", name: "Yuki Aim 2024 Katana & Kitsune", button: "Xem thêm"},
    3: {src: "./src/Banner/banner3.webp", about: "Lót chuột kính cường lực giới hạn", name: "Yuki Aim 2024 Katana & Kitsune", button: "Xem thêm"},
    4: {src: "./src/Banner/banner4.webp", about: "Lót chuột kính cường lực giới hạn", name: "Yuki Aim 2024 Katana & Kitsune", button: "Đặt ngay"},
    5: {src: "./src/Banner/banner5.jpg", about: "Lót chuột kính cường lực giới hạn", name: "Yuki Aim 2024 Katana & Kitsune", button: "Xem chi tiết"}
}

function ImagesPreloader(src) {
    Object.keys(src).forEach(key => {
        const value = src[key];
        var Img = new Image();
        Img.src = src;
    });
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

function AddBrand(src) {
    let BrandSection = document.querySelector(".brand-section");
    let Brand = `<div><img src=${src} alt=""></div>`
    BrandSection.innerHTML += Brand;
}

function BannerSwitcher(src) {
    const Banner = document.querySelector(".background-img");
    const Title = document.querySelector(".desc-section h1");
    const Description = document.querySelector(".desc-section h4")
    const Button = document.querySelector(".desc-section input");
    let duration = 300;
    let steps = 60; 
    let interval = duration / steps;

    for (let i = steps; i > 0; i--) {
        setTimeout(() => {
            Banner.style.filter = `brightness(${i}%)`;
        }, interval * (steps - i));
    }

    setTimeout(() => {
        Banner.style.backgroundImage = `url(${src})`;
        for (let i = 0; i < steps; i++) {
            setTimeout(() => {
                Banner.style.filter = `brightness(${i + 1}%)`;
            }, interval * i);
        }
    }, duration);
}

Object.keys(ProductsList).forEach(key => {
    const value = ProductsList[key];
    AddProduct(value.name, value.price, value.src);
});

Object.keys(BrandsList).forEach(key => {
    const value = BrandsList[key];
    AddBrand(value);
});

var CurrentBanner = 1;

setInterval(() => {
    CurrentBanner++;
    if (CurrentBanner > 5) {
        CurrentBanner = 1
    }
    BannerSwitcher(BannersList[CurrentBanner].src);
}, 3000);