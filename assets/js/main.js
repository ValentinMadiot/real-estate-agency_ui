/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*=============== SWIPER POPULAR ===============*/
let swiperPopular = new Swiper(".popular__container", {
  spaceBetween: 32,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*=============== VALUE ACCORDION ===============*/
const accordionItems = document.querySelectorAll(".value__accordion-item");

// 1. Select each item
accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector(".value__accordion-header");

  // 2. Select each header click
  accordionHeader.addEventListener("click", () => {
    // 7. Create the tag
    const openItem = document.querySelector(".accordion-open");

    // 5. Call toggle item function
    toggleItem(item);

    // 8. Check if the class exists
    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

// 3. Create a constant type function
const toggleItem = (item) => {
  // 3.1 Create the tag
  const accordionContent = item.querySelector(".value__accordion-content");

  // 6. If there is another element that contains the class accordion-open remove its class
  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    // 4. Add the maximum height of the content
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SHOW SCROLL UP ===============*/

/*=============== DARK LIGHT THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
