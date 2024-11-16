import { BANK_LIST, ACCOUNT_FORM } from "./account.js";

const bankDropdown = document.getElementById("bank-selector");
const accountNo = document.getElementById("account-input");
const submitBtn = document.getElementById("submit-btn");
const accountList = document.getElementById("account-list");
var selected_account_format = ACCOUNT_FORM[1];

Object.entries(BANK_LIST).forEach(([key, value]) => {
  const bank = document.createElement("option");
  bank.value = key;
  bank.textContent = value;
  bankDropdown.appendChild(bank);
});

function formatAccountNumber(accountNumber) {
  var accountIndex = 0;
  var formattedAccount = "";
  for (let char of selected_account_format) {
    if (char === "0") {
      if (accountIndex < 2 || accountIndex >= accountNumber.length - 2) {
        formattedAccount += accountNumber[accountIndex];
      } else {
        formattedAccount += "*";
      }
      accountIndex++;
    } else {
      formattedAccount += char;
    }
  }

  return formattedAccount;
}

function parseAccountNumber() {
  const selectedBankId = bankDropdown.value;
  const accountNumber = accountNo.value;

  if (accountNumber.length !== 12) {
    alert("계좌번호는 12자리여야 합니다.");
    return;
  }

  const listItem = document.createElement("li");
  listItem.textContent = `${BANK_LIST[selectedBankId]}: ${formatAccountNumber(
    accountNumber
  )}`;
  accountList.appendChild(listItem);
}

bankDropdown.addEventListener("change", () => {
  selected_account_format = ACCOUNT_FORM[bankDropdown.value];
});

submitBtn.addEventListener("click", parseAccountNumber);
