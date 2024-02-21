const menu = document.querySelector(".menu");
const menuMain = menu.querySelector(".menu-main");
const goBack = menu.querySelector(".go-back");
const menuTrigger = document.querySelector(".mobile-menu-trigger");
const closeMenu = menu.querySelector(".mobile-menu-close");
let subMenu;
menuMain.addEventListener("click", (e) => {
  if (!menu.classList.contains("active")) {
    return;
  }
  if (e.target.closest(".menu-item-has-children")) {
    const hasChildren = e.target.closest(".menu-item-has-children");
    showSubMenu(hasChildren);
  }
});
goBack.addEventListener("click", () => {
  hideSubMenu();
});
menuTrigger.addEventListener("click", () => {
  toggleMenu();
});
closeMenu.addEventListener("click", () => {
  toggleMenu();
});
document.querySelector(".menu-overlay").addEventListener("click", () => {
  toggleMenu();
});
function toggleMenu() {
  menu.classList.toggle("active");
  document.querySelector(".menu-overlay").classList.toggle("active");
}
function showSubMenu(hasChildren) {
  subMenu = hasChildren.querySelector(".sub-menu");
  subMenu.classList.add("active");
  subMenu.style.animation = "slideLeft 0.5s ease forwards";
  const menuTitle =
    hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
  menu.querySelector(".current-menu-title").innerHTML = menuTitle;
  menu.querySelector(".mobile-menu-head").classList.add("active");
}

function showSubMenu(hasChildren) {
  subMenu = hasChildren.querySelector(".sub-menu");
  subMenu.classList.add("active");

  // Calculate submenu width
  const subMenuWidth = subMenu.offsetWidth;

  // Calculate the position of the parent menu item
  const parentRect = hasChildren.getBoundingClientRect();
  const spaceOnRight = window.innerWidth - parentRect.right;
  const spaceOnLeft = parentRect.left;

  // Determine if there's enough space on the right or left side
  const hasSpaceOnRight = spaceOnRight >= subMenuWidth;
  const hasSpaceOnLeft = spaceOnLeft >= subMenuWidth;

  // Position the submenu based on available space
  if (hasSpaceOnRight) {
    subMenu.style.left = "auto"; // Position to the right of the parent item
    subMenu.style.right = "0";
  } else if (hasSpaceOnLeft) {
    subMenu.style.left = "0"; // Position to the left of the parent item
    subMenu.style.right = "auto";
  } else {
    // Fallback to default positioning if space is insufficient on both sides
    subMenu.style.left = "auto";
    subMenu.style.right = "auto";
  }

  // Animation and other operations
  subMenu.style.animation = "slideLeft 0.5s ease forwards";
  const menuTitle = hasChildren.querySelector("a").textContent;
  menu.querySelector(".current-menu-title").innerHTML = menuTitle;
  menu.querySelector(".mobile-menu-head").classList.add("active");
}

function hideSubMenu() {
  subMenu.style.animation = "slideRight 0.5s ease forwards";
  setTimeout(() => {
    subMenu.classList.remove("active");
  }, 300);
  menu.querySelector(".current-menu-title").innerHTML = "";
  menu.querySelector(".mobile-menu-head").classList.remove("active");
}

window.onresize = function () {
  if (this.innerWidth > 991) {
    if (menu.classList.contains("active")) {
      toggleMenu();
    }
  }
};
