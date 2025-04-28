// for add money
document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const input_Balance = document.getElementById("input-balance");
    const inputBalance = input_Balance.value;
    const inputBalanceNum = parseFloat(inputBalance);
    const input_Pin = document.getElementById("input-balance-pin");
    const inputPin = input_Pin.value;

    if (inputPin === "1234") {
      const mainBalance = document.getElementById("main-balance").innerText;
      const balance = parseFloat(mainBalance);
      const newBalance = balance + inputBalanceNum;
      document.getElementById("main-balance").innerText = newBalance;
      input_Balance.value = "";
      input_Pin.value = "";
    } else {
      alert("Failed, Try again");
    }
  });

// for cashout money
document.getElementById("withdraw").addEventListener("click", function (event) {
  event.preventDefault();
  const input_Balance = document.getElementById("input-balance");
  const inputBalance = input_Balance.value;
  const inputBalanceNum = parseFloat(inputBalance);
  const input_Pin = document.getElementById("input-balance-pin");
  const inputPin = input_Pin.value;

  if (inputPin === "1234") {
    const mainBalance = document.getElementById("main-balance").innerText;
    const balance = parseFloat(mainBalance);
    const newBalance = balance - inputBalanceNum;
    document.getElementById("main-balance").innerText = newBalance;
    input_Balance.value = "";
    input_Pin.value = "";
  } else {
    alert("Failed, Try again");
  }
});
