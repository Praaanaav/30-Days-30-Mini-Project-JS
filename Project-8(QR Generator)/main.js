const btn = document.querySelector(".gen");
const url = document.querySelector(".url");
const qrimg = document.querySelector(".qrimg");
const imgbox = document.querySelector(".imgbox");

const api = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

async function qrgen() {
  qrimg.src = api + url.value;
}

btn.addEventListener("click", () => {
  qrgen();
});
