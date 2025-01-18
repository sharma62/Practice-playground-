const inputName = document.getElementById("item-name-input")
const inputPrice = document.getElementById("item-price-input")
const addBtn = document.getElementById("addBtn")
const list = document.getElementById("List")
const errorMsg = document.getElementById("error-msg")
let gTotal = 0;
let counter = 0;



function validateInput(name, price) {
  //check input it not contain null or whitespace 
  if (!name.trim()) { // because of "" is falsy 
    errorMsg.textContent = "* Input name field";
    hideErrorMsg()
    return false;
  }
  //check price is invalid : empty , Not a number, or less then or equal to 0
  if ((!price) || isNaN(price) || parseFloat(price) <= 0) {
    errorMsg.textContent = "* invalid price field";
    hideErrorMsg()
    return false;
  }

  // if validation pass errorMsg is "" 
  errorMsg.textContent = "";
  return true;
}

function hideErrorMsg(){
  setTimeout(() => {
    errorMsg.textContent ="";
  }, 5000);
}

function addList(name, price) {
  const row = document.createElement("tr");
  const sno = document.createElement("td")
  const nameCell = document.createElement("td");
  const priceCell = document.createElement("td");
  counter = counter + 1;
  sno.textContent = counter;
  nameCell.textContent = name;
  priceCell.textContent = `${parseFloat(price).toFixed(2)}`;
  row.appendChild(sno);
  row.appendChild(nameCell);
  row.appendChild(priceCell);
  list.insertBefore(row, list.lastElementChild)

  gTotal += parseFloat(price);
  console.log("List Added " + gTotal);
  updateGrandTotal();

}

// Function to update the Grand Total
function updateGrandTotal() {
  const tblFooter = document.getElementById('tblFooter');
  const grandTotalRow = tblFooter.querySelector('[data-ns-test="grandTotal"]');
  grandTotalRow.textContent = `  $${gTotal.toFixed(2)}`
}


addBtn.addEventListener("click", () => {
  console.log("add btn clicked")
  const itemName = inputName.value.trim();
  const itemPrice = inputPrice.value.trim();

  if (validateInput(itemName, itemPrice)) {
    addList(itemName, itemPrice);
    // Clear input fields
    inputName.value = "";
    inputPrice.value = "";
  }
})