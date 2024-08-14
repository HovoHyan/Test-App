function loadOptions() {
  const options = document.querySelectorAll(".optionsList li");
  if (options.length) {
    const handlerOptActive = (index) => {
      options.forEach((li, i) => {
        if (i === index) {
          li.classList.add("active");
        } else {
          li.classList.remove("active");
        }
      });
    };
    options.forEach((el, index) => {
      el.addEventListener("click", () => {
        handlerOptActive(index);
      });
    });
  }
}

function printTable(tableArr) {
  const board = document.querySelector(".tablica");
  const more = "../Assets/more.png";
  const edit = "../Assets/edit.png";
  board.innerHTML = "";
  tableArr.forEach((el, index) => {
    board.innerHTML += `
		<tr class="${index % 2 === 0 ? "odd" : ""}">
			<td><img src="${more}" alt="More"> ${
      el.name
    } <img src="${edit}" alt="Edit"></td>
			<td></td>
			<td>${el.sort}</td>
			<td>${el.id}</td>
			<td>${el.typePol}</td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		`;
  });
}


export { loadOptions, printTable };
