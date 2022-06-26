const getFreeTrial = (event) => {
  event.preventDefault();
  const form = document.getElementById("form");

  //get all the inputs
  const formData = form.getElementsByTagName("input");

  //get all the spans
  const errors = form.getElementsByClassName("errorMessage");

  //get email elements
  const email = document.getElementById("emailAddress");
  const emailMessage = document.querySelector(".mail");

  // regex email check pattern
  const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;

  //An array to check if the inputs are filled
  let checks = [];

  for (var i = 0; i < formData.length; i++) {
    //specific check for the mail
    if (!pattern.test(email.value)) {
      email.classList.add("errorBorder");
      emailMessage.classList.remove("none");
      //Not the best, but as we know the mail is the third data to get...checks[i] would display the alert even if the mail pattern is not matched.
      //No need to add an else with checks[i] == true because if the mail matches the pattern, it doesn't enter this first if statement.
      checks[2] = false;
    }

    if (formData[i].value === "") {
      formData[i].classList.add("errorBorder");
      errors[i].classList.remove("none");
    } else {
      formData[i].classList.remove("errorBorder");
      errors[i].classList.add("none");
      checks[i] = true;
    }
  }

  if (checks.length === 4 && !checks.includes(false)) {
    alert(
      `Thank you, ${formData[0].value}! Check your mails and enjoy your trial!`
    );
  }
};
