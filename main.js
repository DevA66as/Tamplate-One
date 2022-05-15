let menuIcon = document.querySelector(".toggle")
let myHeader = document.querySelector(".header")
let myUl = document.querySelector("ul");
menuIcon.onclick = function () {
    myUl.classList.toggle("ulDisplay")
}
let download = document.querySelector(".download");
let urlPlace = document.querySelector(".search-input");
urlPlace.onblur = function () {
  let theLink = urlPlace.value;
  let reg = /youtu(\w*|\W*|\d*|\D*)+\d*/gi;
  window.sessionStorage.setItem(
    "theUrl",
    `https://www.ss${theLink.match(reg)}`
  );
  if (theLink.includes("youtu.be")) {
    let myArray = theLink.split("/");
    console.log(myArray[3]);
    window.sessionStorage.setItem(
      "theUrl",
      `https://www.ssyoutube.com/watch?v=${myArray[3]}`
    );
  }
};
let theInput = document.querySelector(".search-container");
download.addEventListener("click", (event) => {
  if (
    urlPlace.value.includes("youtu") === false ||
    urlPlace.value.includes("https") === false
  ) {
    theInput.classList.toggle("shake");
    event.preventDefault();
  } else {
    open(`${window.sessionStorage.getItem("theUrl")}`);
  }
});
