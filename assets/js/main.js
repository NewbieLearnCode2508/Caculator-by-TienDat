let runningTotal = 0;
let buffer = "0";
let prevOperation = 0;

/* 
  prevOperation: phép toán
  buffer: chứa giá trị in ra màn hình
  runningTotal: kết quả

  B1: Nhấn xác định số hoặc ký tự
*/

const screen = document.querySelector(".screen");
const calcBtn = document.querySelectorAll(".calc-btn");

function updateScreen() {
  screen.innerText = buffer;
}

calcBtn.forEach((btn) => {
  btn.onclick = () => {
    let value = btn.dataset.value;
    switch (value) {
      case "C":
        buffer = "0";
        runningTotal = 0;
      case "=":
        runningTotal = eval(buffer);
        buffer = `${runningTotal}`;
        break;
      case "back":
        if (buffer !== "0") {
          buffer = buffer.slice(0, buffer.length - 2);
        }
        break;
      default:
        handleMath(value);
        break;
    }
    screen.innerText = buffer;
  };
});

function handleMath(value) {
  let intValue = parseInt(value);
  if (isNaN(intValue)) {
    prevOperation++;
    if(prevOperation === 1) {
      buffer += value;
    }
  }else {
    if(buffer === "0") {
      buffer = value;
    }else {
      buffer += value;
    }
    prevOperation = 0;
  }
}
