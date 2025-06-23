function getAPI() {
  return (
    "https://api.allorigins.win/get?url=" +
    encodeURIComponent("https://zenquotes.io/api/random") +
    `&rand=${Math.random()}`
  );
}

let btn = document.querySelector(".new");
const quote = document.getElementsByClassName("quote")[0];
const who = document.getElementsByClassName("who")[0];

async function randomquote() {
  const res = await fetch(getAPI());
  const data = await res.json();
  const parsed = JSON.parse(data.contents);

  quote.innerHTML = `"${parsed[0].q}"`;
  who.innerHTML = `- ${parsed[0].a}`;
}

randomquote();

btn.addEventListener("click", () => {
  randomquote();
});
