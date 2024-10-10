const myBody = document.getElementById("myBody");
let width = window.innerWidth;

function pointer() {
  myBody.addEventListener("mousemove", function (e) {
    x = e.clientX;
    y = e.clientY;
    myBody.style.backgroundColor = `rgb(${x}, ${y}, ${x - y})`;
  });
  console.log(y)
}
pointer();

/* let hue = (x / width) * 147;
let saturation = 50;
let lightness = (y / window.innerHeight) * 47;

myBody.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`; */