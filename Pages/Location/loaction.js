function controller() {
  const clicker = document.querySelectorAll(".round");
  const ul = document.querySelectorAll(".locationList li");

  const handlerActive = (index) => {
    ul.forEach((li, i) => {
      if (i === index) {
        li.classList.add("active");
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
  function OnOff(index) {
    clicker.forEach((el, i) => {
      if (i === index) {
        el.classList.toggle("on");
      }
    });
  }
  clicker.forEach((el, index) => {
    el.addEventListener("click", (event) => {
      event.preventDefault();
      OnOff(index);
    });
  });
}

function openAdd() {
  const btn = document.querySelector(".createLocation");
  const form = document.querySelector(".adder");
  const formEd = document.querySelector(".editor");
  const body = document.querySelector(".loaction");
  function PopUp(form, formEd, body) {
    const isFormOpen = form.classList.toggle("open");
    const isFormEdOpen = formEd.classList.toggle("openEditor");
    console.log(isFormEdOpen);
    if (isFormOpen || isFormEdOpen) {
      body.style.filter = "blur(5px)";
    } else {
      body.style.filter = "none";
    }
    if (!isFormOpen && !isFormEdOpen) {
      body.style.filter = "none";
    }
  }
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    PopUp(form, formEd, body);
  });
}

export { controller, openAdd };
