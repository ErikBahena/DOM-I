const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// header
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// nav links content
const nav = document.querySelector("nav");
const navLinksArr = [...nav.children];
const navContentArr = Object.values(siteContent.nav).slice(
  0,
  navLinksArr.length
);

navLinksArr.forEach((link, i) => (link.textContent = navContentArr[i]));

// Cta section
const ctaSection = document.querySelector(".cta");

ctaSection.querySelector("h1").textContent = siteContent.cta.h1;

ctaSection.querySelector("button").textContent = siteContent.cta.button;

ctaSection.querySelector("img").src = siteContent.cta["img-src"];

// Main content
// Top
const topContentFeatures = document.querySelector(
  ".text-content:nth-of-type(1)"
);
topContentFeatures.querySelector("h4").textContent =
  siteContent["main-content"]["features-h4"];
topContentFeatures.querySelector("p").textContent =
  siteContent["main-content"]["features-content"];

const topContentAbout = document.querySelector(".text-content:nth-of-type(2)");
topContentAbout.querySelector("h4").textContent =
  siteContent["main-content"]["about-h4"];
topContentAbout.querySelector("p").textContent =
  siteContent["main-content"]["about-content"];
// main content image

const mainImg = document.querySelector(".main-content img");
mainImg.src = siteContent["main-content"]["middle-img-src"];

// main content bottom
const bottomContentServices = document.querySelector(
  ".bottom-content .text-content:nth-of-type(1)"
);
bottomContentServices.querySelector("h4").textContent =
  siteContent["main-content"]["services-h4"];

bottomContentServices.querySelector("p").textContent =
  siteContent["main-content"]["services-content"];

const bottomContentProduct = document.querySelector(
  ".bottom-content .text-content:nth-of-type(2)"
);
bottomContentProduct.querySelector("h4").textContent =
  siteContent["main-content"]["product-h4"];
bottomContentProduct.querySelector("p").textContent =
  siteContent["main-content"]["product-content"];

const bottomContentVision = document.querySelector(
  ".bottom-content .text-content:nth-of-type(3)"
);
bottomContentVision.querySelector("h4").textContent =
  siteContent["main-content"]["vision-h4"];
bottomContentVision.querySelector("p").textContent =
  siteContent["main-content"]["vision-content"];

// contact section

const contactSection = document.querySelector(".contact");
contactSection.querySelector("h4").textContent =
  siteContent.contact["contact-h4"];
contactSection.querySelector("p:nth-of-type(1)").textContent =
  siteContent.contact.address;
contactSection.querySelector("p:nth-of-type(2)").textContent =
  siteContent.contact.phone;
contactSection.querySelector("p:nth-of-type(3)").textContent =
  siteContent.contact.email;

  // footer section 

const footer = document.querySelector("footer")
footer.textContent = siteContent.footer.copyright;