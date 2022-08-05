export const utils = {
  toggleAddContact() {
    let background = document.querySelector(".Contacts");
    background.classList.toggle("active");
    let changeContact = document.querySelector(".ChangeContact");
    changeContact.classList.toggle("active");
  },
  toggleDropdown() {
    let dropdownOptions = document.querySelector(".dropdownOptions");
    dropdownOptions.classList.toggle("show");
    window.onclick = function (event) {
      if (!event.target.matches(".threeDot")) {
        var dropdowns = document.querySelector(".dropdownOption");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains("show")) {
            openDropdown.classList.remove("show");
          }
        }
      }
    };
  },
};

export default utils;
