let inp = document.querySelector(".inp");
inp.max = new Date().toISOString().split("T")[0];
let calbtn = document.querySelector(".calbtn");

calbtn.addEventListener("click", function () {
  let bd = new Date(inp.value);
  let d1 = bd.getDate();
  let m1 = bd.getMonth() + 1;
  let y1 = bd.getFullYear();

  let td = new Date();
  let d2 = td.getDate();
  let m2 = td.getMonth() + 1;
  let y2 = td.getFullYear();

  let y3 = y2 - y1;
  let m3, d3;

  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }

  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = getDaysInMonth(y2, m2 === 1 ? 12 : m2 - 1) + d2 - d1;
  }

  let caltext = document.querySelector(".caltext");
  caltext.innerHTML = `Age: ${y3} years, ${m3} months, ${d3} days`;
});

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
