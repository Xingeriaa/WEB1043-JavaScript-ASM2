const BANNER_COUNT = 5;
const INTERVAL_DURATION = 5000;

var CurrentProgress = 0;
var CurrentBanner = 1;
var BannerAutomation = null;
var ProgressAutomation = null;

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
    2: {src: "./src/Banner/banner2.webp", about: "Lót chuột PORON cao cấp chính hãng", name: "Fnatic MAX và Lethal Gaming", button: "Xem thêm"},
    3: {src: "./src/Banner/banner3.webp", about: "Thương hiệu gaming gear cao cấp hiệu năng cao", name: "Vancer - Công nghệ LCD dongle độc quyền", button: "Xem thêm"},
    4: {src: "./src/Banner/banner4.webp", about: "Thiết kế bởi Phong Cách Xanh", name: "Túi đựng bàn phím/ gaming gear", button: "Đặt ngay"},
    5: {src: "./src/Banner/banner5.jpg", about: "Lót chuột siêu chậm, siêu control", name: "Lethal Gaming Gear Jupiter PRO", button: "Xem chi tiết"}
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

function InfoSwticher(title, desc, button) {
    const Title = document.querySelector(".desc-section h1");
    const Description = document.querySelector(".desc-section h4");
    const Button = document.querySelector(".desc-section input");

    Title.style.transition = "opacity 0.3s";
    Description.style.transition = "opacity 0.3s";
    Button.style.transition = "opacity 0.3s";

    Title.style.opacity = 0;
    Description.style.opacity = 0;
    Button.style.opacity = 0;

    setTimeout(() => {
        Title.innerHTML = title;
        Description.innerHTML = desc;
        Button.value = button;

        Title.style.opacity = 1;
        Description.style.opacity = 1;
        Button.style.opacity = 1;
    }, 300);
}

function BannerSwitcher(src) {
    const Banner = document.querySelector(".background-img");

    Banner.style.transition = "filter 0.3s";
    Banner.style.filter = "brightness(0%)";

    setTimeout(() => {
        Banner.style.backgroundImage = `url(${src})`;
        Banner.style.filter = "brightness(65%)";
    }, 300);
}

function PagesSwitcher(Index) {
    let PagesSection = document.querySelectorAll(".pages-btn");
    PagesSection.forEach(Child => {
        Child.style.color = (Child.value == Index) ? "white" : "gray";
    });
}

Object.keys(ProductsList).forEach(key => {
    const value = ProductsList[key];
    AddProduct(value.name, value.price, value.src);
});

Object.keys(BrandsList).forEach(key => {
    const value = BrandsList[key];
    AddBrand(value);
});

BannerAutomation = setInterval(() => {
    CurrentBanner++;
    if (CurrentBanner > BANNER_COUNT) {
        CurrentBanner = 1
    }
    BannerSwitcher(BannersList[CurrentBanner].src);
    InfoSwticher(BannersList[CurrentBanner].name, BannersList[CurrentBanner].about, BannersList[CurrentBanner].button)
    PagesSwitcher(CurrentBanner);
}, INTERVAL_DURATION);

ProgressAutomation = setInterval(() => {
    if (CurrentProgress >= 100) {
        CurrentProgress = 0;
    } else {
        CurrentProgress++;
    }
    const progressBar = document.querySelector(".progress-bar");
    if (progressBar) {
        progressBar.style.width = CurrentProgress + "%";
    }
}, INTERVAL_DURATION/100);

document.querySelector("header").addEventListener("mousemove", function() {
    let RightCursor = document.querySelector("#right");
    let LeftCursor = document.querySelector("#left");
    RightCursor.style.zIndex = "0";
    LeftCursor.style.zIndex = "0";
});

document.querySelector("header").addEventListener("mouseout", function() {
    let RightCursor = document.querySelector("#right");
    let LeftCursor = document.querySelector("#left");
    RightCursor.style.zIndex = "2";
    LeftCursor.style.zIndex = "2";
});

document.querySelector("header").childNodes.forEach(function(Child){
    Child.addEventListener("mousemove", function() {
        let RightCursor = document.querySelector("#right");
        let LeftCursor = document.querySelector("#left");
        RightCursor.style.zIndex = "0";
        LeftCursor.style.zIndex = "0";
    });
    
    Child.addEventListener("mouseout", function() {
        let RightCursor = document.querySelector("#right");
        let LeftCursor = document.querySelector("#left");
        RightCursor.style.zIndex = "2";
        LeftCursor.style.zIndex = "2";
    });
});

document.querySelector(".desc-section input").addEventListener("mouseover", function() {
    let RightCursor = document.querySelector("#right");
    let LeftCursor = document.querySelector("#left");
    RightCursor.style.zIndex = "0";
    LeftCursor.style.zIndex = "0";
});

document.querySelector(".desc-section input").addEventListener("mouseout", function() {
    let RightCursor = document.querySelector("#right");
    let LeftCursor = document.querySelector("#left");
    RightCursor.style.zIndex = "2";
    LeftCursor.style.zIndex = "2";
});

document.querySelector("header").addEventListener("mousemove", function() {
    let RightCursor = document.querySelector("#right");
    let LeftCursor = document.querySelector("#left");
    RightCursor.style.zIndex = "0";
    LeftCursor.style.zIndex = "0";
});

document.querySelector("header").addEventListener("mouseout", function() {
    let RightCursor = document.querySelector("#right");
    let LeftCursor = document.querySelector("#left");
    RightCursor.style.zIndex = "2";
    LeftCursor.style.zIndex = "2";
});


document.querySelectorAll(".pages-btn").forEach(Child => {
    Child.addEventListener("mouseover", function() {
        let RightCursor = document.querySelector("#right");
        let LeftCursor = document.querySelector("#left");
        RightCursor.style.zIndex = "0";
        LeftCursor.style.zIndex = "0";
    });
})

document.querySelectorAll(".pages-btn").forEach(Child => {
    Child.addEventListener("mouseout", function() {
        let RightCursor = document.querySelector("#right");
        let LeftCursor = document.querySelector("#left");
        RightCursor.style.zIndex = "2";
        LeftCursor.style.zIndex = "2";
    });
})

document.querySelectorAll(".pages-btn").forEach(Child => {
    Child.addEventListener("click", function() {
        clearInterval(BannerAutomation);
        clearInterval(ProgressAutomation);
        document.querySelector(".progress-bar").style.transition = "none"
        CurrentProgress = 0;
        document.querySelector(".progress-bar").style.transition = "50ms linear"
        CurrentBanner = Child.value;
        BannerSwitcher(BannersList[CurrentBanner].src);
        InfoSwticher(BannersList[CurrentBanner].name, BannersList[CurrentBanner].about, BannersList[CurrentBanner].button);
        PagesSwitcher(CurrentBanner);

        BannerAutomation = setInterval(() => {
            CurrentBanner++;
            if (CurrentBanner > BANNER_COUNT) {
                CurrentBanner = 1;
            }
            BannerSwitcher(BannersList[CurrentBanner].src);
            InfoSwticher(BannersList[CurrentBanner].name, BannersList[CurrentBanner].about, BannersList[CurrentBanner].button);
            PagesSwitcher(CurrentBanner);
        }, INTERVAL_DURATION);

        ProgressAutomation = setInterval(() => {
            if (CurrentProgress >= 100) {
                CurrentProgress = 0;
            } else {
                CurrentProgress++;
            }
            const progressBar = document.querySelector(".progress-bar");
            if (progressBar) {
                progressBar.style.width = CurrentProgress + "%";
            }
        }, INTERVAL_DURATION/100);        
    });
});

document.querySelectorAll(".categories-container div").forEach(Child => {
    let img = Child.querySelector("img");
    let p = Child.querySelector("p");
    img.addEventListener("mouseover", function() {
        img.style.transform = "scale(1.1)";
        p.style.bottom = "12%";
    });
});

document.querySelectorAll(".categories-container div").forEach(Child => {
    let img = Child.querySelector("img");
    let p = Child.querySelector("p");
    img.addEventListener("mouseout", function() {
        img.style.transform = "scale(1)";
        p.style.bottom = "15%";
    });
});

document.querySelector(".banner-container").addEventListener("mousemove", function(event) {
    let RightCursor = document.querySelector("#right");
    let LeftCursor = document.querySelector("#left");
    const posX = event.clientX;
    const posY = event.clientY;

    if (posX > (window.innerWidth/2)) {
        LeftCursor.style.top = -100 + 'px';
        RightCursor.style.top = posY + 'px';
        RightCursor.style.left = posX + 'px';
    } else {
        RightCursor.style.top = -100 + 'px';
        LeftCursor.style.top = posY + 'px';
        LeftCursor.style.left = posX + 'px';
    }
});

document.querySelector(".banner-container").addEventListener("mouseout", function(event) {
    let RightCursor = document.querySelector("#right");
    let LeftCursor = document.querySelector("#left");

    RightCursor.style.top = -100 + 'px';
    LeftCursor.style.left = -100 + 'px';
});

document.querySelector(".banner-container").addEventListener("click", function(event) {
    const posX = event.clientX;
    if (posX > (window.innerWidth/2)) {

        clearInterval(BannerAutomation);
        clearInterval(ProgressAutomation);
        document.querySelector(".progress-bar").style.transition = "none"
        CurrentProgress = 0;
        document.querySelector(".progress-bar").style.transition = "50ms linear"
        CurrentBanner++;
        if (CurrentBanner > BANNER_COUNT) {
            CurrentBanner = 1;
        }
        BannerSwitcher(BannersList[CurrentBanner].src);
        InfoSwticher(BannersList[CurrentBanner].name, BannersList[CurrentBanner].about, BannersList[CurrentBanner].button);
        PagesSwitcher(CurrentBanner);

        BannerAutomation = setInterval(() => {
            CurrentBanner++;
            if (CurrentBanner > BANNER_COUNT) {
                CurrentBanner = 1;
            }
            BannerSwitcher(BannersList[CurrentBanner].src);
            InfoSwticher(BannersList[CurrentBanner].name, BannersList[CurrentBanner].about, BannersList[CurrentBanner].button);
            PagesSwitcher(CurrentBanner);
        }, INTERVAL_DURATION);

        ProgressAutomation = setInterval(() => {
            if (CurrentProgress >= 100) {
                CurrentProgress = 0;
            } else {
                CurrentProgress++;
            }
            const progressBar = document.querySelector(".progress-bar");
            if (progressBar) {
                progressBar.style.width = CurrentProgress + "%";
            }
        }, INTERVAL_DURATION/100);        

    } else {

        clearInterval(BannerAutomation);
        clearInterval(ProgressAutomation);
        document.querySelector(".progress-bar").style.transition = "none"
        CurrentProgress = 0;
        document.querySelector(".progress-bar").style.transition = "50ms linear"
        CurrentBanner--;
        if (CurrentBanner < 1) {
            CurrentBanner = BANNER_COUNT;
        }
        BannerSwitcher(BannersList[CurrentBanner].src);
        InfoSwticher(BannersList[CurrentBanner].name, BannersList[CurrentBanner].about, BannersList[CurrentBanner].button);
        PagesSwitcher(CurrentBanner);

        BannerAutomation = setInterval(() => {
            CurrentBanner--;
            if (CurrentBanner > BANNER_COUNT) {
                CurrentBanner = 1;
            }
            BannerSwitcher(BannersList[CurrentBanner].src);
            InfoSwticher(BannersList[CurrentBanner].name, BannersList[CurrentBanner].about, BannersList[CurrentBanner].button);
            PagesSwitcher(CurrentBanner);
        }, INTERVAL_DURATION);

        ProgressAutomation = setInterval(() => {
            if (CurrentProgress >= 100) {
                CurrentProgress = 0;
            } else {
                CurrentProgress++;
            }
            const progressBar = document.querySelector(".progress-bar");
            if (progressBar) {
                progressBar.style.width = CurrentProgress + "%";
            }
        }, INTERVAL_DURATION/100);    

    }
});