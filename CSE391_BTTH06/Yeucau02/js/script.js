function RandomArrNumber() {
  arr = []
  for (let i = 0; i < Math.floor(Math.random() * 10) + 10; i++) {
    arr.push(Math.floor(Math.random() * 90) + 10)
  }

  document.getElementById("random-input").innerHTML = arr.join(", ")
}

function arrange() {
  arr = document.getElementById("random-input").innerHTML.split(" , ")
  if (document.getElementById("increase").checked == true) {
    arr.sort(function (a, b) {
      return a - b
    })
    document.getElementById("output").innerHTML = arr
  }
  if (document.getElementById("decrease").checked == true) {
    arr.sort(function (a, b) {
      return b - a
    });
    document.getElementById("output").innerHTML = arr
  }
}
function insertNumber() {
    number = document.getElementById("number").value
    index = document.getElementById("index").value-1
  
    arr = document.getElementById("output").innerHTML.split(", ")
  
    arr.splice(index, 0, number)
    document.getElementById("output").innerHTML = arr.join(", ")
}


