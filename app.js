function main(ev) {

    blurButtonAsMouseGoesUp();

    const ageIndicator = document.querySelector("#age");
    const increaseAgeBtn = document.querySelector("#increaseAge");
    const decreaseAgeBtn = document.querySelector("#decreaseAge");

    displayAge();

    increaseAgeBtn.addEventListener("click", increaseAge);
    decreaseAgeBtn.addEventListener("click", decreaseAge);

    function getAge() {
        return parseInt(localStorage.getItem("age")) || 0;
    }

    function setAge(newAge) {
        localStorage.setItem("age", newAge);
        displayAge();
    }

    function displayAge() {
        ageIndicator.textContent = getAge();
    }

    function increaseAge() {
        newAge = getAge() + 1;
        setAge(newAge);
    }

    function decreaseAge() {

        age = getAge();

        if (age > 0) {
            age -= 1;
            setAge(age);
        } else {
            alert("Age can't be less than zero");
        }

    }

};

document.addEventListener("DOMContentLoaded", main);


function blurButtonAsMouseGoesUp() {

    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("mouseup", function () {
            this.blur();
        });
    })
}