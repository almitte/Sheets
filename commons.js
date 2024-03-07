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
