function addData() {

    let valid = true;

    for (let i = 1; i <= 3; i++) {

        let input = document.getElementById("f" + i);
        let group = input.parentElement;
        let errorText = group.querySelector(".error");

        if (input.value.trim() === "") {
            group.classList.add("error");
            errorText.innerText = "Required";
            valid = false;
        } else {
            group.classList.remove("error");
            errorText.innerText = "";
        }
    }

    if (!valid) return;

    alert("Form Submitted ✅");
}