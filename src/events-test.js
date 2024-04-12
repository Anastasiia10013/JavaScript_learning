//test-block
console.log(window.nam);
console.log("works");
document.getElementById("test-block").onclick = (event) => {
  console.log("click!");
};

document.getElementById("test-block").style.display = "flex";
document.getElementById("test-block").click();
window.onhashchange = function () {
  console.log("onhashchange");
};
