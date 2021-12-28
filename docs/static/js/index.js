function functionSwitch(id) {
  let switchEl = document.querySelector("#" + id + "Switch")
  let select = document.querySelector("#" + id + "Select")
  switchEl.addEventListener("click", function () {
    select.parentElement.classList.toggle("d-none")
  })
}

function getRadio(name, returnType = 'val') {
  let radio = document.querySelectorAll("[name='" + name + "']")
  let radioValue
  let returnValue

  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked === true) {
      radioValue = radio[i].value
      break
    }
  }
  switch (returnType) {
    case "val":
      returnValue = radioValue
      break
    case 'bool':
    default:
      returnValue = Boolean(radioValue)
      break
  }

  return returnValue;
}
