import { controller, openAdd } from "../Location/loaction.js";
import { loadOptions, printTable } from "../Options/options.js";

const ul = document.querySelectorAll(".navBar li");
const show = document.querySelector(".content");

const pages = [
  "../Property/property.html",
  "../Inventorization/inventorization.html",
  "../Persons/persons.html",
  "../Notifications/notifications.html",
  "../Location/location.html",
  "../Options/options.html",
];
const tableArr = [
  {
    id: "1001",
    name: "Название",
    sort: "500",
    typePol: "Строка",
  },
  {
    id: "1002",
    name: "Цена",
    sort: "510",
    typePol: "Число",
  },
  {
    id: "1003",
    name: "МОЛ",
    sort: "520",
    typePol: "Справочник",
  },
  {
    id: "1004",
    name: "Фото",
    sort: "530",
    typePol: "Файл",
  },
  {
    id: "1005",
    name: "Цвет",
    sort: "540",
    typePol: "Строка",
  },
  {
    id: "1006",
    name: "Локация",
    sort: "550",
    typePol: "Справочник",
  },
  {
    id: "1007",
    name: "Количество",
    sort: "560",
    typePol: "Число",
  },
  {
    id: "1008",
    name: "Описание",
    sort: "570",
    typePol: "Текст",
  },
  {
    id: "1009",
    name: "Количество",
    sort: "580",
    typePol: "Число",
  },
];

const loadContent = (url) => {
  fetch(url)
    .then((res) => res.text())
    .then((data) => {
      show.innerHTML = data;
      loadOptions();
      switch (url) {
        case "../Location/location.html":
          controller();
          openAdd();
          break;
        case "../Options/options.html":
          printTable(tableArr);
          break;
      }
    });
};

const handlerActive = (index) => {
  ul.forEach((li, i) => {
    if (i === index) {
      li.classList.add("active");
      li.setAttribute("onclick", loadContent(pages[index]));
    } else {
      li.classList.remove("active");
    }
  });
};

ul.forEach((el, index) => {
  el.addEventListener("click", (event) => {
    event.preventDefault();
    handlerActive(index);
  });
});
