function checkPassword() {
  getCookie();
  return window.selectedPassword == correctHash;
}

function deleteAllCookies() {
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;";
  }
}

function setCookie(password, exdays) {
  deleteAllCookies();

  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = "password=" + password + ";" + expires + ";path=/";
}

function getCookie() {
  try {
    window.selectedPassword = CryptoJS.SHA256(
      document.cookie.match(/password=([^;]+)/)[1]
    ).toString(CryptoJS.enc.Hex);
  } catch (error) {
    console.log(error);
  }
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

      if (hashedPassword === correctHash) {
        setCookie(passwordInput.value.toString(), 30);
        form.remove();
        functions.forEach((functionName) => {
          functionName();
        });
        window.selectedPassword = passwordInput;
      } else {
        errorMark.style.display = "inline";
      }
    });
  }
}

const month_labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const correctHash =
  "d944bfb18e1258bfa8deb6009a3067b89caad6ad97c83e0f3459b1481f686d1b";

const completedColor = "rgba(79, 180, 119, 1)";
const plannedColor = "rgba(247, 179, 43, 1)";
const unplannedColor = "rgba(186,27,29, 1)";
