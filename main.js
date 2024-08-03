window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

document.querySelector("#right").style.top = -100+"px";
document.querySelector("#left").style.top = -100+"px";

const BANNER_COUNT = 5;
const INTERVAL_DURATION = 5000;

var CurrentProgress = 0;
var CurrentBanner = 1;
var BannerAutomation = null;
var ProgressAutomation = null;

const ProductsList = {
    1: {name: "Kê tay công thái học DeltaHub Carpio G2.0", price: "1.100.000đ", src: "./src/Products/DeltaHub-Carpio-G2.webp", productID: "001"},
    2: {name: "Chuột không dây siêu nhẹ Lamzu Atlantis Mini Champion Edition - Hỗ trợ 8KHz", price: "2.750.000₫", src: "./src/Products/Lamzu-Atlantis-Mini-Champion-Light-Pink.webp", productID: "002"},
    3: {name: "Chuột không dây Razer DeathAdder V3 Hyperspeed", price: "2.390.000₫", src: "./src/Products/chu-t-khong-day-razer-deathadder-v3-hyperspeed.webp", productID: "003"},
    4: {name: "Chuột không dây Razer Viper V3 Pro - Đi kèm dongle 8KHz", price: "3.935.000₫", src: "./src/Products/chu-t-khong-day-razer-viper-v3-pro.webp", productID: "004"},
    5: {name: "Lót chuột Lethal Gaming Gear Jupiter PRO (V2)", price: "1.551.000₫", src: "./src/Products/LGG-JUPITERPRO-XL-SQ-Bcopy.webp", productID: "005"},
    6: {name: "Bàn phím từ Lamzu Atlantis Pro Keyboard - Hỗ trợ Rapid Trigger", price: "4.630.000₫", src: "./src/Products/ban-phim-t-lamzu-atlantis-pro-keyboard-h-tr-rapid-trigger-39938162786549.webp", productID: "006"},
    7: {name: "Lót chuột kính cường lực Yuki Aim Kitsune - Limited Edition", price: "3.190.000₫", src: "./src/Products/lot-chu-t-kinh-c-ng-l-c-yuki-aim-kitsune-limited-edition-40729345229045.webp", productID: "007"},
    8: {name: "Lót chuột kính cường lực Yuki Aim Katana - Limited Edition", price: "3.190.000₫", src: "./src/Products/lot-chu-t-kinh-c-ng-l-c-yuki-aim-katana-limited-edition-40761371001077.webp", productID: "008"}
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

var CartList = {
    1: {id:"001", quanity:0},
    2: {id:"002", quanity:0},
    3: {id:"003", quanity:0},
    4: {id:"004", quanity:0},
    5: {id:"005", quanity:0},
    6: {id:"006", quanity:0},
    7: {id:"007", quanity:0},
    8: {id:"008", quanity:0}
}

function ConvertToInt(String) {
    return parseInt(String.replace(/\D/g, ''), 10);
}
function NumberFormat(Input) {
    let Count = 0;
    let FormatedInput = "";
    for (let i = Input.length - 1; i >= 0; i--) {
        if (Count === 3) {
            FormatedInput = "." + FormatedInput;
            Count = 0;
        }
        FormatedInput = Input[i] + FormatedInput;
        Count++;
    }
    return FormatedInput;
}

function AddProduct(name,price,src,productid) {
    let ProductSeciton = document.querySelector(".products-section");
    let Product = `<div data-productid="${productid}" class="product-frame">
                <img src=${src} alt="">
                <p class="name">${name}</p>
                <p class="price">${price}</p>
                <div class="hover-container">
                    <div class="add-to-cart-frame">
                        + Thêm nhanh
                    </div>
                    <div class="detail-frame">
                        <form action="product.html" method="GET">
                            <input type="text" name="id" id="">
                            <input type="text" name="name" id="">
                            <input type="text" name="price" id="">
                            <input type="submit" value="submit">
                            <i class="fa-solid fa-ellipsis-vertical"></i>
                        </form>
                    </div>
                    <div class="fav-frame">
                        <i data-fav="false" class="fa-regular fa-heart"></i>
                    </div>
                </div>
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
    AddProduct(value.name, value.price, value.src, value.productID);
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

function PositionChecker(event) {
    const posX = event.clientX;
    const posY = event.clientY;
    
    if (posY < document.querySelector("header").getBoundingClientRect().bottom) return false;
    
    const input = document.querySelector(".desc-section input");
    if (input && posX > input.getBoundingClientRect().left && posX < input.getBoundingClientRect().right &&
        posY > input.getBoundingClientRect().top && posY < input.getBoundingClientRect().bottom) {
        return false;
    }

    let isInsidePagesBtn = false;
    document.querySelectorAll(".pages-btn").forEach(Child => {
        if (posX > Child.getBoundingClientRect().left && posX < Child.getBoundingClientRect().right &&
            posY > Child.getBoundingClientRect().top && posY < Child.getBoundingClientRect().bottom) {
            isInsidePagesBtn = true;
        }
    });

    if (isInsidePagesBtn) {
        return false;
    }

    return true;
}

function AddCartProduct(src, name, price, quanity, productid) {
    let CartList = document.querySelector(".products-list"); 
    let Product = `
        <div data-productid="${productid}" class="product">
            <div class="img-frame">
                <img src="${src}" alt="">
            </div>
            <div class="information-section">
                <div class="title">
                    ${name}
                </div>
                <div class="price">
                    ${price}
                </div>
            </div>
            <div class="interactive-section">
                <div class="ammount">
                    <input type="number" name="" id="" min="1" value="${quanity}">
                </div>
                <br>
                <div class="remove">
                    Bỏ
                </div>
            </div>
        </div>
    `
    CartList.innerHTML += Product;
}

function CartProductsCheck(id) {
    const products = document.querySelectorAll(".product");
    for (let i = 0; i < products.length; i++) {
        if (products[i].dataset.productid === id) {
            return false;
        }
    }
    return true;
}

function ProductFind(id) {
    const products = document.querySelectorAll(".product");
    for (let i = 0; i < products.length; i++) {
        if (products[i].dataset.productid == id) {
            return products[i];
        }
    }
    return false;
}

document.querySelectorAll(".pages-btn").forEach(Child => {
    Child.addEventListener("click", function(event) {
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
    RightCursor.style.zIndex = "2";
    LeftCursor.style.zIndex = "2";

    if (posX > (window.innerWidth/2)) {
        LeftCursor.style.left = -100 + 'px';
        // RightCursor.style.zIndex = "2";
        RightCursor.style.top = posY + 'px';
        RightCursor.style.left = posX + 'px';
    } else {
        RightCursor.style.top = -100 + 'px';
        // LeftCursor.style.zIndex = "2";
        LeftCursor.style.top = posY + 'px';
        LeftCursor.style.left = posX + 'px';
    }

    if (posY < (document.querySelector("header").getBoundingClientRect().bottom)) {
        LeftCursor.style.left = -100 + 'px';
        RightCursor.style.top = -100 + 'px';
    }

    if (posX > document.querySelector(".desc-section input").getBoundingClientRect().left && posX < document.querySelector(".desc-section input").getBoundingClientRect().right && 
        posY > document.querySelector(".desc-section input").getBoundingClientRect().top && posY < document.querySelector(".desc-section input").getBoundingClientRect().bottom) {
        LeftCursor.style.left = -100 + 'px';
        RightCursor.style.top = -100 + 'px';
    }

    document.querySelectorAll(".pages-btn").forEach(Child => {
        if (posX > Child.getBoundingClientRect().left && posX < Child.getBoundingClientRect().right && 
        posY > Child.getBoundingClientRect().top && posY < Child.getBoundingClientRect().bottom) {
            LeftCursor.style.left = -100 + 'px';
            RightCursor.style.top = -100 + 'px';
        }
    })
});

window.addEventListener("mousemove", function(event){
    let RightCursor = document.querySelector("#right");
    let LeftCursor = document.querySelector("#left");
    const posX = event.clientX;
    const posY = event.clientY;
    LeftCursor.style.top = posY + 'px';
    RightCursor.style.left = posX + 'px';
});

document.querySelector(".banner-container").addEventListener("mouseout", function(event) {
    let RightCursor = document.querySelector("#right");
    let LeftCursor = document.querySelector("#left");
    RightCursor.style.zIndex = "0";
    LeftCursor.style.zIndex = "0";
});

document.querySelector(".banner-container").addEventListener("click", function(event) {
    const posX = event.clientX;
    if (PositionChecker(event) == false) {return};

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

var TranslateCheck = false;

document.addEventListener("scroll", (event) => {
    const BannerIMG = document.querySelector(".background-img");
    let HeaderSection = document.querySelector('header');

    if (window.scrollY > (BannerIMG.getBoundingClientRect().width / 2)) {
        HeaderSection.style.position = "fixed";
        HeaderSection.style.backgroundColor = '#272727';

        if (!TranslateCheck) {
            TranslateCheck = true;
            HeaderSection.style.transition = 'none';
            HeaderSection.style.transform = 'translateY(-10vh)';

            setTimeout(() => {
                HeaderSection.style.transition = '.125s';
                HeaderSection.style.transform = 'translateY(0)';
            }, 0); 
        }
    } else {
        if (TranslateCheck) {
            TranslateCheck = false;
            HeaderSection.style.transition = '.125s';
            HeaderSection.style.transform = 'translateY(-10vh)';

            setTimeout(() => {
                HeaderSection.style.position = "absolute";
                HeaderSection.style.backgroundColor = 'transparent';
                HeaderSection.style.transition = 'none';
                HeaderSection.style.transform = 'translateY(0)';
            }, 125); 
        }
    }
});

document.querySelectorAll(".fav-frame i").forEach(Child => {
    Child.addEventListener("click", function(){
        if (Child.getAttribute("fav") === "true") {
            Child.setAttribute("fav", "false");
            Child.style.transform = 'scale(0)';
            setTimeout(() => {
                Child.className = "fa-regular fa-heart";
                Child.style.transform = 'scale(2)';
            }, 250);
            
        } else {
            Child.setAttribute("fav", "true");
            Child.style.transform = 'scale(0)';
            setTimeout(() => {
                Child.className = "fa-solid fa-heart";
                Child.style.transform = 'scale(2)';
            }, 250);
        } 
    });
})

document.querySelectorAll(".product-frame").forEach(Child => {
    Child.addEventListener("mousemove", function(event){
        let Frame = Child.parentNode;
        let CartBtn = Child.querySelector(".add-to-cart-frame");
        let DetailBtn = Child.querySelector(".detail-frame");
        let FavBtn = Child.querySelector(".fav-frame");
        DetailBtn.style.opacity = "1";
        DetailBtn.style.transform = "translateY(0)";
        FavBtn.style.opacity = "1";
        FavBtn.style.transform = "translateY(0)";
        CartBtn.style.opacity = "1";
        CartBtn.style.transform = "translateY(0)";
    });
})

document.querySelectorAll(".product-frame").forEach(Child => {
    Child.addEventListener("mouseout", function(event){
        let Frame = Child.parentNode;
        let CartBtn = Child.querySelector(".add-to-cart-frame");
        let DetailBtn = Child.querySelector(".detail-frame");
        let FavBtn = Child.querySelector(".fav-frame");
        DetailBtn.style.opacity = "0";
        DetailBtn.style.transform = "translateY(-2vh)";
        FavBtn.style.opacity = "0";
        FavBtn.style.transform = "translateY(-2vh)";
        CartBtn.style.opacity = "0";
        CartBtn.style.transform = "translateY(2vh)";
    });
})

var AddToCartCD = false;
document.querySelectorAll(".add-to-cart-frame").forEach(Child => {
    Child.addEventListener("click", function(){
        // if (!AddToCartCD) {
            AddToCartCD = true;
            const Product = Child.parentNode.parentNode;
            const ProductID = Product.dataset.productid;
            const CartQuanity = document.querySelector(".items-quanity");
            let ProductsCount = 0;
            let PriceTotal = 0;
            Object.keys(CartList).forEach(index => {
                let product = CartList[index];
                let ProductInfo = ProductsList[index];
                if (product.id == ProductID) {
                    product.quanity++;
                    if (CartProductsCheck(ProductID) == true) {    
                        AddCartProduct(ProductInfo.src, ProductInfo.name, ProductInfo.price, product.quanity, ProductID)
                    } else {
                        ProductFind(ProductID).querySelector(".ammount input").value++;
                    }
                }
                PriceTotal += (ConvertToInt(ProductInfo.price)*product.quanity);
                ProductsCount += product.quanity;
            });
            
            document.querySelectorAll(".interactive-section .remove").forEach(Child => {
                Child.addEventListener("click", function(event){
                    let Product = Child.parentNode.parentNode;
                    let ProductsCount = 0;
                    let Total = 0
                    Object.keys(CartList).forEach(key => {
                        const item = CartList[key];
                        if (item.id == Product.dataset.productid) {
                            item.quanity = 0;
                        }
                        ProductsCount += item.quanity;
                        Total += (ConvertToInt(ProductsList[key].price)*item.quanity);
                    });
                    document.querySelector(".cart-container .title-section .ammount div").innerText = ProductsCount;
                    CartQuanity.innerHTML = ProductsCount;
                    Product.remove();
                    document.querySelector(".bill-section .total").innerHTML = NumberFormat(Total + "") + " VND";
                });
            });            

            document.querySelector(".bill-section .total").innerHTML = NumberFormat(PriceTotal + "") + " VND";
            document.querySelector(".cart-container .title-section .ammount div").innerText = ProductsCount;
            CartQuanity.innerHTML = ProductsCount;
            Child.style.fontSize = 0;
            setTimeout(() => {
                Child.innerHTML = `<i class="fa-solid fa-check"></i>`;
                Child.style.fontSize = "1rem";
                setTimeout(() => {
                    Child.style.fontSize = 0;
                    setTimeout(() => {
                        Child.innerHTML = `+ Thêm nhanh`;
                        Child.style.fontSize = "1rem";
                        AddToCartCD = false;
                    }, 250);
                }, 1000);
            }, 250);
        // }
    });
})

document.querySelector(".remove-all").addEventListener("click", function() {
    Object.keys(CartList).forEach(key => {
        const item = CartList[key];
        item.quanity = 0
    });
    document.querySelector(".items-quanity").innerHTML = "0";
    document.querySelector(".cart-container .title-section .ammount div").innerHTML = "0";
    document.querySelector(".bill-section .total").innerHTML =  "0 VND";
    document.querySelector(".products-list").innerHTML = "";
});

document.querySelector(`.total-section form input[type="text"]`).addEventListener("keydown", function(event) {
    if (isFinite(event.key) && event.key != ' '){event.preventDefault()} 
});


let SelectInput = document.querySelector(`.total-section form select`);
document.querySelector(".pay-btn").addEventListener("click", function() {
    if (document.querySelector(".bill-section .total").innerText == "0 VND") {
        alert("Giỏ hàng của bạn đang trống!")
        return;
    }

    if (document.querySelector(`.total-section form input[type="text"]`).value == '' || document.querySelector(`.total-section form input[type="text"]`).value == ' ') {
        alert("Vui lòng nhập lại Họ và tên!");
        return;
    } else if (document.querySelector(`.total-section form input[type="number"]`).value < 1000000000) {
        alert("Vui lòng nhập lại Số điện thoại!");
        return;
    } else if (SelectInput.options[SelectInput.selectedIndex].text == "Tỉnh thành") {
        alert("Vui lòng chọn Tỉnh thành!");
        return;
    } else if (!document.querySelector(`.total-section form div input[value="creditcard"]`).checked && !document.querySelector(`.total-section form div input[value="onlinebanking"]`).checked && !document.querySelector(`.total-section form div input[value="cash"]`).checked) {
        alert("Vui lòng chọn Phương thức thanh toán!");
        return;
    }
    alert("Thanh toán thành công!");
});

document.querySelector(".cart-container .exit").addEventListener("click", function(event) {
    let Cart = document.querySelector(".cart-container");
    Cart.style.transform = "translateX(200%)";
    setTimeout(() => {
        document.querySelector(".focus-background").style.display = "none"; 
        document.querySelector("body").style.overflow = "auto";
    }, 250); 
});


document.querySelector(`.user-section i[class="fa-solid fa-cart-shopping"]`).addEventListener("click",function(event) {
    let Cart = document.querySelector(".cart-container");
    Cart.style.transform = "translateX(0)";
    document.querySelector(".focus-background").style.display = "flex"; 
    document.querySelector("body").style.overflow = "hidden";
});

document.querySelector(`.bill-section .pay-btn`).addEventListener("mousemove",function(){
    document.querySelector(`.bill-section .pay-btn`).style = `background-color: white; color: #3C619E`;
});

document.querySelector(`.bill-section .pay-btn`).addEventListener("mouseout",function(){
    document.querySelector(`.bill-section .pay-btn`).style = `background-color: #3C619E; color: white`;
});