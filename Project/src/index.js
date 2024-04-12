let button = document.getElementById("button-login");
button.onclick = submitUserData;

function submitUserData(event) {
  console.log("click!");
  let inputName = document.getElementById("input-name");
  console.log(inputName.value);
  let inputEmail = document.getElementById("input-email");
  console.log(inputEmail.value);

  let result = "https://google.com";

  result = updateQueryStringParameter(result, "name", inputName.value);
  result = updateQueryStringParameter(result, "email", inputEmail.value);
  console.log(result);
}

function updateQueryStringParameter(uri, key, value) {
  var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
  var separator = uri.indexOf("?") !== -1 ? "&" : "?";
  if (uri.match(re)) {
    return uri.replace(re, "$1" + key + "=" + value + "$2");
  } else {
    return uri + separator + key + "=" + value;
  }
}
