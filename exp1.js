function findTriangleArea() {
  let base = parseFloat(document.getElementById("base").value);
  let height = parseFloat(document.getElementById("height").value);
  let area = 0.5 * base * height;
  document.getElementById("triangleArea").innerHTML = "Area of Triangle: " + area;
  console.log(area);
  alert(area);
}

function findRectangleArea() {
  let length = parseFloat(document.getElementById("length").value);
  let breadth = parseFloat(document.getElementById("breadth").value);
  let area = length * breadth;
  document.getElementById("rectangleArea").innerHTML = "Area of Rectangle: " + area;
  console.log(area);
  alert(area);
}

function findCircleArea() {
  let radius = parseFloat(document.getElementById("radius").value);
  let area = 3.14 * radius * radius;
  document.getElementById("circleArea").innerHTML = "Area of Circle: " + area;
  console.log(area);
  alert(area);
}
