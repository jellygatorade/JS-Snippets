// Following
// Draw SVG rope using JavaScript
// to learn about SVG manipulation with JavaScript
// https://muffinman.io/blog/draw-svg-rope-using-javascript/
// https://codepen.io/stanko/pen/vYaEMKX

function getPathPoints(d, step = 10) {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", d);

  const length = path.getTotalLength();

  const count = length / step;

  const points = [];

  for (let i = 0; i < count + 1; i++) {
    const n = i * step;
    points.push(path.getPointAtLength(n));
  }

  return points;
}

const exampleSvg = document.getElementById("example-svg");
const examplePath = document.getElementById("example-path");
console.log(examplePath);

// Path data is stored in the "d" attribute

let points = getPathPoints(examplePath.getAttribute("d"));

console.log(points);

let newGraphicStringPoints = `<g opacity="${1}" class="points">${points
  .map((p) => `<circle cx="${p.x}" cy="${p.y}" r="3" />`)
  .join("")}</g>`;

function createElementFromHTML(htmlString) {
  var div = document.createElement("div");
  div.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes.
  return div.firstChild;
}

let newGraphic = createElementFromHTML(newGraphicStringPoints);

exampleSvg.innerHTML = newGraphicStringPoints;
//exampleSvg.appendChild(newGraphic);

// How to get both the original path and the points to show at the same time?
