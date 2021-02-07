var elements = [];

var d, h;

var Heading = document.querySelector('#Greeting')

var data = new Date()
var h = data.getHours()

if (h >= 4 && h < 12) {
  Heading.innerHTML = 'Good Morning'
}

else if (h >= 12 && h < 18) {
  Heading.innerHTML = 'Good Afternoon'
}

else if (h >= 18 && h < 21) {
  Heading.innerHTML = 'Good Evening'
}

else{
  Heading.innerHTML = 'Good Night'
}

window.onload = function () {
  if (JSON.parse(localStorage.getItem("elements")) != null)
    elements = JSON.parse(localStorage.getItem("elements"));
  console.log(elements);
  display();
};

function addElement() {
  if (document.querySelector(".addTxt").value.trim() != "") {
    elements.push(document.querySelector(".addTxt").value.trim());
    if (localStorage.getItem("elements") == null) {
      localStorage.setItem("elements", JSON.stringify(elements));
    } else {
      localStorage.setItem("elements", JSON.stringify(elements));
    }
    document.querySelector(".addTxt").value = ''
    display();
  }
}

function display() {
  document.querySelector(".list").innerHTML = "";
  for (var i = 0; i < elements.length; i++)
    document.querySelector(".list").innerHTML +=
      "<center><div class='element'>" +
      elements[i] +
      "<img class='tick' src = 'icon/icon-2.png' onclick='strike(" +
      i +
      ")'><img class='dustbin' src = 'icon/icon-3.png' onclick='del(" +
      i +
      ")'></div></center><br>";
}

function del(index) {
  elements.splice(index, 1);
  if (localStorage.getItem("elements") == null) {
    localStorage.setItem("elements", JSON.stringify(elements));
  } else {
    localStorage.setItem("elements", JSON.stringify(elements));
  }
  display();
}


function strike(index) {
  if (elements[index].includes("<strike>")) {
    elements[index] = elements[index].replace("<strike>", "");
  } else {
    elements[index] = "<strike>" + elements[index] + "</strike>";
  }
  if (localStorage.getItem("elements") == null) {
    localStorage.setItem("elements", JSON.stringify(elements));
  } else {
    localStorage.setItem("elements", JSON.stringify(elements));
  }
  display();
}