import "./style.css";

const numberElement = document.getElementsByClassName("numero-turno")[0];
const btnAnterior = document.getElementsByClassName("btnDisplay")[0];
const btnSiguiente = document.getElementsByClassName("btnDisplay")[1];
const btnReset = document.getElementsByClassName("btnDisplay")[2];
const userText = document.getElementById("userInput");
const submit = document.getElementById("userSubmit");

function sumar(value: Element) {
  let numberValue = parseInt(value.innerHTML);
  let stringValue: string = "";

  numberValue++;
  stringValue = numberValue.toString();
  value.innerHTML = stringValue.padStart(2, "0");
}

function restar(value: Element) {
  let numberValue = parseInt(value.innerHTML);
  console.log({ numberValue });
  let stringValue: string = "";

  if (numberValue > 0) {
    numberValue--;
    stringValue = numberValue.toString();
    value.innerHTML = stringValue.padStart(2, "0");
  }
}

function userInteraction(inputValue: HTMLElement | null, title: Element) {
  let stringValue = "";
  if (inputValue !== null && inputValue !== undefined) {
    const userValue = parseInt((inputValue as HTMLInputElement).value);
    if (userValue > 0 && typeof Number) {
      stringValue = userValue.toString();
      title.innerHTML = stringValue.padStart(2, "0");
    } else {
      title.innerHTML = "00";
    }
  }
}

if (numberElement !== null && numberElement !== undefined) {
  if (btnAnterior !== null && numberElement !== undefined) {
    btnAnterior.addEventListener("click", () => {
      restar(numberElement);
    });
  }
  if (btnSiguiente !== null && btnSiguiente !== undefined) {
    btnSiguiente.addEventListener("click", () => {
      sumar(numberElement);
    });
  }
  if (btnReset !== null && btnReset !== undefined) {
    btnReset.addEventListener("click", () => {
      numberElement.innerHTML = "00";
    });
  }
  if (submit !== null && submit !== undefined) {
    submit.addEventListener("click", () => {
      userInteraction(userText, numberElement);
    });
  }
}
