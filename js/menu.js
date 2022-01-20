(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const mobileLogoRef = document.querySelector("[data-menu-logo]");
  const mobileHeaderRef = document.querySelector("[data-menu-header]");
  const mobileBodyRef = document.querySelector("[data-menu-body]");
  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    
    menuBtnRef.classList.toggle("menu-btn--is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);
    mobileMenuRef.classList.toggle("is-open");
    mobileLogoRef.classList.toggle("is-open");
    mobileHeaderRef.classList.toggle("is-open");
    mobileBodyRef.classList.toggle("is-open");
  });
})();