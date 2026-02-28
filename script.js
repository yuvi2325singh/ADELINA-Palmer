const elements = document.querySelectorAll(".animate");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {

    if (entry.isIntersecting) {
      entry.target.classList.add("active");

      observer.unobserve(entry.target);
    }

  });
}, {
  threshold: 0.1
});

elements.forEach(el => observer.observe(el));

function addData() {

    let valid = true;

    for (let i = 1; i <= 3; i++) {

        let input = document.getElementById("f" + i);
        let errorText = input.nextElementSibling;
        let value = input.value.trim();

        if (value === "") {
            input.classList.add("input-error");
            errorText.innerText = "This field is required";
            valid = false;
            continue;
        }

        if (i === 2) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(value)) {
                input.classList.add("input-error");
                errorText.innerText = "Enter valid email";
                valid = false;
                continue;
            }
        }

        input.classList.remove("input-error");
        errorText.innerText = "";
    }

    if (!valid) return;

    alert("Form Submitted");
    document.getElementById("form").reset();
}