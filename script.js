let percentSpan = document.getElementById("percentSpan");
let percent = 0;

var loaderList = document.getElementById("mainLoaderList");
var loaderListItem = document.querySelectorAll(".loaderList");
var preloaderMain = document.getElementById("preloaderMain");

var time = setInterval(() => {
  percentSpan.innerHTML = percent;

  if (percent == 100) {
    clearInterval(time);

    gsap.to(preloaderMain, {
      transform: "translateY(-100%)",
      duration: 1.5,
      delay: 1.3,
      ease: "ease"
    })

    loaderList.style.transform = "translateY(-100%)";
    // preloaderMain.style.transform = "translateY(-100%)";
    // preloaderMain.style.opacity = "0";

    for (var i = 0; i < loaderListItem.length; i++) {
      loaderListItem[i].classList.add("pause");
    }

  }
  percent++;
}, 25)

let loaderMain = document.getElementById("preloaderMain");
let preCursor = document.getElementById("preCursor");

loaderMain.addEventListener("mousemove", (pre) => {
  gsap.to(preCursor, {
    x: pre.x,
    y: pre.y,
    opacity: 1
  })
})

loaderMain.addEventListener("mouseenter", () => {
  gsap.to(preCursor, {
    scale: 1,
    opacity: 1
  })
})

loaderMain.addEventListener("mouseleave", () => {
  gsap.to(preCursor, {
    scale: 0,
    opacity: 0
  })
})
let mainBody = document.getElementById("smooth-wrapper");
let mainCursor = document.getElementById("mainCursor");

mainBody.addEventListener("mousemove", (pre) => {
  gsap.to(mainCursor, {
    x: pre.x,
    y: pre.y,
    opacity: 1
  })
})

mainBody.addEventListener("mouseenter", () => {
  gsap.to(mainCursor, {
    scale: 1,
    opacity: 1
  })
})

mainBody.addEventListener("mouseleave", () => {
  gsap.to(mainCursor, {
    scale: 0,
    opacity: 0
  })
})

let contentSpan = document.querySelectorAll(".contentSpan");

gsap.to(contentSpan, {
  transform: "translateY(0%)",
  opacity: 1,
  duration: 0.5,
  delay:4.5,
  ease: "ease-in",
  stagger: {
    amount: 0.5
  }
})



let body = document.getElementById("body");

gsap.from(body, {
  y: 1000,
  delay: 3.52,
  duration: 1.236,
  ease: "ease"
})




let burger = document.getElementById("burger");
let slideMenu = document.querySelector(".slideMenu");
let blackLogo = document.getElementById("logoBlack");
let whiteLogo = document.getElementById("logoWhite");
let menuSpan = document.getElementById("menuSpan");

burger.addEventListener("click", function () {
  slideMenu.classList.toggle("show");
  blackLogo.classList.toggle("blackShow");
  whiteLogo.classList.toggle("whiteShow");
  menuSpan.classList.toggle("menuWhite");
})

