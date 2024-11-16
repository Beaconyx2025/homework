/* 
레시피 재료 추가하기
*/

const addMeterialToTable = document.getElementById("add");
const addMeterial = document.getElementsByName("ingredient");
const weightInput = document.getElementsByName("weight");
const classList = document.getElementsByClassName("thead");
const submit = document.getElementById("submit_button");
const ingredientList = document.getElementById("ingredient-list");

addMeterialToTable.addEventListener("click", (event) => {
  event.preventDefault();
  const materialTable = document.getElementById("materialTable");
  const meterialEl = addMeterial[0].value;
  const weightEl = weightInput[0].value;

  if (
    isNaN(Number(weightEl)) ||
    Number(weightEl) == "null" ||
    Number(weightEl) == 0
  ) {
    alert("Please input a valid number for weight.");
  } else {
    const materialCells = document.querySelectorAll(
      "#materialTable tbody tr td:first-child"
    );

    const existsInFirstColumn = Array.from(materialCells).some(
      (cell) => cell.textContent.trim() === meterialEl
    );

    if (existsInFirstColumn) {
      alert(`The ${meterialEl} already exists.`);
    } else {
      const newRow = `
        <tr>
        <td>${meterialEl}</td>
        <td>${weightEl}G</td>
        <td><button>삭제</button></td>
        </tr>
        `;
      materialTable.insertAdjacentHTML("beforeend", newRow);
    }
  }
});

materialTable.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.tagName === "BUTTON") {
    const row = event.target.parentNode.parentNode;

    const ingredient = row.querySelector("td:first-child").textContent.trim();

    row.remove();
  }
});

submit.addEventListener("click", (event) => {
  const rows = document.querySelectorAll("#materialTable tr:not(.thead)");
  ingredientList.innerHTML = "";

  rows.forEach((row) => {
    const cells = row.querySelectorAll("td");

    const material = cells[0].textContent.trim();
    const weight = cells[1].textContent.trim();

    const listItem = document.createElement("li");
    listItem.textContent = `재료: ${material}: ${weight}`;
    ingredientList.appendChild(listItem);
  });
});
