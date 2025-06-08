let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));

  document.getElementById("counter").innerText = slideIndex + "/4";
}

function showDivs(n) {
  let i;
  const x = document.getElementsByClassName("slide");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

let slideIndex2 = 1;
showDivs2(slideIndex2);

function plusDivs2(n) {
  showDivs2((slideIndex2 += n));
  document.getElementById("counter2").innerText = slideIndex2 + "/6";
}

function showDivs2(n) {
  let i;
  const x = document.getElementsByClassName("slide2");
  if (n > x.length) {
    slideIndex2 = 1;
  }
  if (n < 1) {
    slideIndex2 = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex2 - 1].style.display = "block";
}

let slideIndex3 = 1;
showDivs3(showDivs3);

function plusDivs3(n) {
  showDivs3((slideIndex3 += n));
  document.getElementById("counter3").innerText = slideIndex3 + "/5";
}

function showDivs3(n) {
  let i;
  const x = document.getElementsByClassName("slide3");
  if (n > x.length) {
    slideIndex3 = 1;
  }
  if (n < 1) {
    slideIndex3 = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex3 - 1].style.display = "block";
}

let slideIndex4 = 1;
showDivs4(slideIndex4);

function plusDivs4(n) {
  showDivs4((slideIndex4 += n));
  document.getElementById("counter4").innerText = slideIndex4 + "/4";
}

function showDivs4(n) {
  let i;
  const x = document.getElementsByClassName("slide4");

  if (n > x.length) {
    slideIndex4 = 1;
  }

  if (n < 1) {
    slideIndex4 = x.length;
  }

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex4 - 1].style.display = "block";
}
