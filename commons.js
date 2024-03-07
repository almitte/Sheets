function checkPassword() {
  var passwordIsCorrect = getCookie("passwordIsCorrect");
  if (passwordIsCorrect === "true") {
    return true;
  } else {
    return false;
  }
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie() {
  var cookieValue = document.cookie.replace(
    /(?:(?:^|.*;\s*)passwordIsCorrect\s*\=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
  return cookieValue;
}

function openForm(functions) {
  const form = document.querySelector(".form-container");
  if (checkPassword()) {
    passwordIsCorrect = true;
    functions.forEach((functionName) => {
      functionName();
    });
    form.remove();
  } else {
    document.getElementById("myForm").style.display = "block";
    const passwordInput = document.querySelector("input[name='psw']");
    const errorMark = document.querySelector(".error-mark");
    const submitButton = document.querySelector("button[type='submit']");

    submitButton.addEventListener("click", (event) => {
      event.preventDefault();

      // Hash the submitted password
      const hashedPassword = CryptoJS.SHA256(passwordInput.value).toString(
        CryptoJS.enc.Hex
      );

      const correctHash =
        "d944bfb18e1258bfa8deb6009a3067b89caad6ad97c83e0f3459b1481f686d1b";

      if (hashedPassword === correctHash) {
        setCookie("passwordIsCorrect", "true", 30);
        form.remove();
        functions.forEach((functionName) => {
          functionName();
        });
      } else {
        errorMark.style.display = "inline";
      }
    });
  }
}
