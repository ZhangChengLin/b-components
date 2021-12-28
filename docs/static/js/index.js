function functionSwitch(id) {
  let switchEl = document.querySelector("#" + id + "Switch")
  let select = document.querySelector("#" + id + "Select")
  switchEl.addEventListener("click", function () {
    select.parentElement.classList.toggle("d-none")
  })
}

function getRadio(name) {
  let radio = document.querySelectorAll("[name='" + name + "']")
  let radioValue
  let returnValue

  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked === true) {
      radioValue = radio[i].value
      break
    }
  }

  switch (radioValue) {
    case 'true':
      returnValue = true
      break
    case 'false':
      returnValue = false
      break
    default:
      returnValue = radioValue
      break
  }

  return returnValue;
}

function checkboxStatus(id) {
  const checkbox = document.querySelector("#" + id + "Switch");
  return checkbox.checked ?? false;
}

function selectFunctionValue(id) {
  const fun_name = document.querySelector("#" + id + "Select").value;
  return eval(fun_name);
}

function selectValue(id) {
  const option = document.querySelector("#" + id);
  return option.value;
}
