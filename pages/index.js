<body>
  <div class="box clickable" id="1">
    <div class="circle" id="0"></div>
  </div>
  <h3 class="rainbow" id="banner">KEEP TAPPING<br>ON THE CIRCLE</h3>
  <script src="script.js"></script>
</body>
var box = document.getElementsByClassName("clickable")[0];
var count = parseInt(box.id);

// setting the max num of circles
const max = 2500;

box.onclick = function () {
  var ok = true;

  // i dont want to add any more circles than the exact number of 2500
  // hence this code check while determining num of circles to add to the box
  if (ok === true && count <= max) {
    var num = count == 1 ? 1 : count * 2 > max ? (max - count) : count * 2;
    for (var i = 0; i < num ; i++) { addCircle() }
    box.id = num;
    if (count != 1) {
      box.style.gridTemplateColumns = `repeat(${Math.ceil(Math.sqrt(count))}, 1fr)`;
    }
    ok = false;
 }

  if (count >= max) {
    // doing this makes it a 50x50 grid with 2500 circles
    // now it makes sense to set max to 2500 amirite?
    box.style.gridTemplateColumns = "repeat(50, 1fr)";
    box.id="full";
    box.onclick = null;
  }
};
function addCircle() {
  var circle = document.createElement('div');
  circle.className = 'circle';
  circle.id = count;
  box.appendChild(circle);
  box.id = count++;
}
