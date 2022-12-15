const $ = (name) => document.querySelector(name);

const inputName = $("#input-name");
const btnCreate = $("#btn-create");
const tbody = $("#tbody");

const data = {};

inputName.onkeyup = function (event) {
  data.name = event.target.value;
};

async function getProduct() {
  try {
    const result = await get("/product/");
    result.forEach((product) => renderRow(product));
  } catch (error) {
    console.log(error);
  }
}

getProduct();

btnCreate.onclick = async function () {
  try {
    const result = await post("/product/", data);
    inputName.value = "";
    renderRow(result);
  } catch (error) {
    console.log(error);
  }
};

function renderRow(product) {
  tbody.innerHTML += `
        <tr>
          <td>${product.id}</td>
          <td>${product.name}</td>
          <th>${product.price}</th>
          <th>${product.url_image}</th>
          <th>${product.discount}</th>
          <th>${product.stok}</th>
        </tr>
      `;
}