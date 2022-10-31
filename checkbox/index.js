let male = document.getElementById("male");
let female = document.getElementById("female");
let other = document.getElementById("other");

let married = document.getElementById("married");
let single = document.getElementById("single");
let divorced = document.getElementById("divorced");

let young = document.getElementById("young");
let adult = document.getElementById("adult");
let senior = document.getElementById("senior");

let infoGender = document.getElementById("info-gender");
let infoMarriage = document.getElementById("info-marriage");
let infoAge = document.getElementById("info-age");

let submit = (document.getElementById("submit").onclick = function () {
  if (male.checked) {
    infoGender.innerHTML = "Gender: male";
  } else if (female.checked) {
    infoGender.innerHTML = "Gender: female";
  } else if (other.checked) {
    infoGender.innerHTML = "Gender: Non-binary";
  } else {
    infoGender.innerHTML = "Gender: Unknown";
  }

  if (married.checked) {
    infoMarriage.innerHTML = "Status: Married";
  } else if (single.checked) {
    infoMarriage.innerHTML = "Status: Single";
  } else if (divorced.checked) {
    infoMarriage.innerHTML = "Status: Divorced";
  } else {
    infoMarriage.innerHTML = "Status: unknown";
  }

  if (young.checked) {
    infoAge.innerHTML = "Age Status: Young (18-35)";
  } else if (adult.checked) {
    infoAge.innerHTML = "Age Status: Adult (36-59)";
  } else if (senior.checked) {
    infoAge.innerHTML = "Age Status: Senior (60+)";
  } else {
    infoAge.innerHTML = "Age Status: Unknown";
  }
});
