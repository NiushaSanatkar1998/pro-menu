let link = document.querySelectorAll("div.wrapper > div.menu > ul > li > a");
let submenu = document.querySelectorAll(
  "div.wrapper > div.menu > ul > li > div.submenu"
);
let svg = document.querySelectorAll(".fa-chevron-down");
let flag = true;

link.forEach((elem, index) => {
  if ((index === 0) | (index === 1) | (index === 2)) {
    elem.addEventListener("mouseenter", (e) => {
      elem.children[0].classList.replace(
        "animate-scaleY-down",
        "animate-scaleY-up"
      );
      elem.children[0].style.transform = "scaleY(-1)";

      if (e.target.nextElementSibling) {
        e.target.nextElementSibling.classList.replace("hidden", "flex");
      } else {
        const Toast = Swal.mixin({
          toast: true,
          position: "center",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "error",
          title: "This menu has no item",
        });
      }
    });

    elem.addEventListener("mouseleave", (e) => {
      elem.children[0].classList.replace(
        "animate-scaleY-up",
        "animate-scaleY-down"
      );
      elem.children[0].style.transform = "scaleY(1)";

      if (e.target.nextElementSibling) {
        e.target.nextElementSibling.classList.replace("flex", "hidden");
      }
    });
  } else {
    elem.addEventListener("click", (e) => {
      if (flag) {
        elem.children[0].classList.replace(
          "animate-scaleY-down",
          "animate-scaleY-up"
        );
        elem.children[0].style.transform = "scaleY(-1)";

        if (e.target.nextElementSibling) {
          e.target.nextElementSibling.classList.replace("hidden", "flex");
        } else {
          const Toast = Swal.mixin({
            toast: true,
            position: "center",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            },
          });
          Toast.fire({
            icon: "error",
            title: "This menu has no item",
          });
        }
        flag = false;
      } else {
        elem.children[0].classList.replace(
          "animate-scaleY(-up",
          "animate-scaleY-down"
        );
        elem.children[0].style.transform = "scaleY(1)";

        if (e.target.nextElementSibling) {
          e.target.nextElementSibling.classList.replace("flex", "hidden");
        }
        flag = true;
      }
    });
  }
});
