const dropDownButton = document.querySelector(".drop-down-button");
const dropDownContainer = document.querySelector(".drop-down-button-container");
const itemButton = document.querySelectorAll(".content");

const visible = function toggleVisibilityOfDropDownMenu() {
    const dropDownMenu = document.querySelector(".drop-down-content");
    dropDownMenu.classList.toggle("visible");
};

const display = function displayDropDownItemValue(event) {
    alert(event.target.textContent);
};

itemButton.forEach((item) => {
    item.addEventListener("click", display);
});

dropDownButton.addEventListener("mouseover", visible);
dropDownContainer.addEventListener("mouseleave", visible);
