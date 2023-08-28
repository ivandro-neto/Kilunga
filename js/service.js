const data = {
  farmer: { month: 11000, year: 132000 },
  truck: { month: 0, year: 0 },
  financial: { month: 65000, year: 780000 },
  business: { month: 35000, year: 420000 },
};

const defaulting = () => {
  const list = ["farmer", "financial", "business", "truck"];

  for (let index = 0; index < list.length; index++) {
    const categoryMonth = document.querySelector(`#${list[index]}-month`);
    const categoryYear = document.querySelector(`#${list[index]}-year`);
    const categoryPrice = document.querySelector(`#${list[index]}-price`);
    const btn_bg = document.querySelector(`#btn_bg_${list[index]}`);
    categoryMonth.classList.remove("selected");
    categoryYear.classList.remove("selected");
    categoryPrice.innerText = data[list[index]]["month"];
    categoryMonth.classList.add("selected");
    btn_bg.style.left = "7%";
    btn_bg.style.width = "45%";
  }
};

const selectPlan = (category, period) => {
  const categoryMonth = document.querySelector(`#${category}-month`);
  const categoryYear = document.querySelector(`#${category}-year`);
  const categoryPrice = document.querySelector(`#${category}-price`);
  const btn_bg = document.querySelector(`#btn_bg_${category}`); // Updated selector

  categoryMonth.classList.remove("selected");
  categoryYear.classList.remove("selected");
  categoryPrice.innerText = data[category][period];

  if (period === "month") {
    categoryMonth.classList.add("selected");
    btn_bg.style.left = "7%";
    btn_bg.style.width = "45%";
  } else {
    categoryYear.classList.add("selected");
    btn_bg.style.left = "57%";
    btn_bg.style.width = "35%";
  }
};

document
  .querySelector("#farmer-month")
  .addEventListener("click", () => selectPlan("farmer", "month"));
document
  .querySelector("#financial-month")
  .addEventListener("click", () => selectPlan("financial", "month"));
document
  .querySelector("#business-month")
  .addEventListener("click", () => selectPlan("business", "month")); // Updated ID
document
  .querySelector("#truck-month")
  .addEventListener("click", () => selectPlan("truck", "month"));

document
  .querySelector("#farmer-year")
  .addEventListener("click", () => selectPlan("farmer", "year"));
document
  .querySelector("#financial-year")
  .addEventListener("click", () => selectPlan("financial", "year"));
document
  .querySelector("#business-year")
  .addEventListener("click", () => selectPlan("business", "year")); // Updated ID
document
  .querySelector("#truck-year")
  .addEventListener("click", () => selectPlan("truck", "year"));


function show_nav() {
  document.getElementById("menu").style.opacity = 1;
  document.getElementById("menu").style.pointerEvents = "stroke";
}
function hide_nav() {
  document.getElementById("menu").style.opacity = 0;
  document.getElementById("menu").style.pointerEvents = "none";
}