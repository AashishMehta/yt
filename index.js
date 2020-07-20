// var textVal = document.getElementById("text-box");

// var btn = document.getElementById("btn");

// btn.addEventListener("click", bot);

// function bot() {
//   localStorage.setItem("textStorage", textVal.value);
//   // console.log(textVal.value);
// }

const text = " ";
const url =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10000&q=" +
  text +
  "&key=AIzaSyB9TuxDht-P-mgBF8NOGourXHJHdhKvLsY";

async function getHome() {
  const response = await fetch(url);
  const json = await response.json();
  //console.log(json);

  for (let i = 0; i < 20; i++) {
    var body = document.getElementById("body");
    var div = document.createElement("div");
    div.setAttribute("class", "div");
    var ifram = document.createElement("iframe");
    ifram.setAttribute(
      "src",
      "https://www.youtube.com/embed/" + json.items[i].id.videoId
    );
    div.appendChild(ifram);

    var title = document.createElement("p");
    title.textContent = json.items[i].snippet.title;
    div.appendChild(title);

    body.appendChild(div);
  }
}
getHome();
