const actionSidebar = document.getElementById("action-sidebar");
const sidebar = document.querySelector(".sidebar");
const sidebarMenu = document.querySelector(".sidebar-menu");
const sidebarMenuItem = document.querySelectorAll(".sidebar-menu-item");
const lineIndicator = document.querySelector(".line-indicator");
const changeTheme = document.getElementById("change-theme");

changeTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        changeTheme.querySelector(".sidebar-icon").classList.replace("ri-moon-line", "ri-sun-line");
        changeTheme.querySelector("span").textContent = "Light Mode";
    } else {
        changeTheme.querySelector(".sidebar-icon").classList.replace("ri-sun-line", "ri-moon-line");
        changeTheme.querySelector("span").textContent = "Dark Mode";
    }
});

const setLineIndicator = (element) => {
    lineIndicator.style.cssText = `top: ${element.getBoundingClientRect().top}px; height: ${element.clientHeight}px`;
    element.classList.add("sidebar-menu-item-select");
};

actionSidebar.addEventListener("click", () => {
    sidebar.classList.toggle("sidebar-active");
    for (let menuItem of sidebarMenuItem) {
        if (sidebar.classList.contains("sidebar-active")) {
            actionSidebar.classList.replace("ri-menu-line", "ri-close-fill");
            menuItem.querySelector("span").removeAttribute("class");
        } else {
            actionSidebar.classList.replace("ri-close-fill", "ri-menu-line");
            menuItem.querySelector("span").classList.add("sidebar-tooltip");
        }
    }
});

const openMenuItem = (menuItem) => {
    Array.from(sidebarMenu.children, (item) => item.classList.remove("sidebar-menu-item-select"));
    setLineIndicator(menuItem);
};

setLineIndicator(sidebarMenu.children[0]);
