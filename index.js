// Khai báo mảng để lưu số nguyên
let numbersArray = [];

// Hàm để thêm số nguyên vào mảng
function addNumber() {
  const numberInput = document.getElementById("numberInput").value;
  if (numberInput !== "") {
    numbersArray.push(parseFloat(numberInput));
    document.getElementById("arrayDisplay").textContent =
      numbersArray.join(", ");
    document.getElementById("numberInput").value = ""; // Xóa giá trị input sau khi thêm
  }
}

// 1. Tính tổng các số dương trong mảng
function sumPositive() {
  const sum = numbersArray.reduce((total, num) => {
    return num > 0 ? total + num : total;
  }, 0);
  document.getElementById("resultSumPositive").textContent = sum;
}

// 2. Đếm số dương trong mảng
function countPositive() {
  const count = numbersArray.filter((num) => num > 0).length;
  document.getElementById("resultCountPositive").textContent = count;
}

// 3. Tìm số nhỏ nhất trong mảng
function findMin() {
  const min = Math.min(...numbersArray);
  document.getElementById("resultFindMin").textContent = min;
}

// 4. Tìm số dương nhỏ nhất trong mảng
function findMinPositive() {
  const positiveNumbers = numbersArray.filter((num) => num > 0);
  const minPositive =
    positiveNumbers.length > 0
      ? Math.min(...positiveNumbers)
      : "Không có số dương trong mảng";
  document.getElementById("resultFindMinPositive").textContent = minPositive;
}

// 5. Tìm số chẵn cuối cùng trong mảng
function findLastEven() {
  const lastEven = [...numbersArray].reverse().find((num) => num % 2 === 0);
  document.getElementById("resultFindLastEven").textContent =
    lastEven !== undefined ? lastEven : "Không có số chẵn trong mảng";
}

// 6. Đổi chỗ 2 giá trị trong mảng
function swapPositions() {
  const pos1 = parseInt(document.getElementById("swapPosition1").value);
  const pos2 = parseInt(document.getElementById("swapPosition2").value);

  if (
    pos1 >= 0 &&
    pos2 >= 0 &&
    pos1 < numbersArray.length &&
    pos2 < numbersArray.length
  ) {
    [numbersArray[pos1], numbersArray[pos2]] = [
      numbersArray[pos2],
      numbersArray[pos1],
    ];
    document.getElementById("arrayDisplay").textContent =
      numbersArray.join(", ");
  } else {
    alert("Vị trí không hợp lệ");
  }
}

// 7. Sắp xếp mảng tăng dần
function sortArray() {
  numbersArray.sort((a, b) => a - b);
  document.getElementById("resultSortArray").textContent =
    numbersArray.join(", ");
}

// 8. Tìm số nguyên tố đầu tiên
function findFirstPrime() {
  const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const firstPrime = numbersArray.find(isPrime);
  document.getElementById("resultFindFirstPrime").textContent =
    firstPrime !== undefined ? firstPrime : "Không có số nguyên tố trong mảng";
}

// 9. Đếm số nguyên trong mảng số thực
let realNumbersArray = [];

function addRealNumber() {
  const realNumberInput = document.getElementById("realNumberInput").value;
  if (realNumberInput !== "") {
    realNumbersArray.push(parseFloat(realNumberInput));
    document.getElementById("soLuongSoThuc").textContent =
      realNumbersArray.join(", ");
    document.getElementById("realNumberInput").value = "";
  }
}

function countIntegers() {
  const count = realNumbersArray.filter((num) => Number.isInteger(num)).length;
  document.getElementById("resultDisplay").textContent = count;
}

// 10. So sánh số dương và âm
function comparePositiveNegative() {
  const positiveCount = numbersArray.filter((num) => num > 0).length;
  const negativeCount = numbersArray.filter((num) => num < 0).length;
  let result = "";
  if (positiveCount > negativeCount) {
    result = "Số lượng số dương nhiều hơn số lượng số âm";
  } else if (positiveCount < negativeCount) {
    result = "Số lượng số âm nhiều hơn số lượng số dương";
  } else {
    result = "Số lượng số dương và số âm bằng nhau";
  }
  document.getElementById("resultComparePositiveNegative").textContent = result;
}
