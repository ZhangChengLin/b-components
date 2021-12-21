function removeModal(modal_id) {
  const modal_element = document.querySelector("#" + modal_id);
  modal_element.addEventListener("hidden.bs.modal", function () {
    let x = bootstrap.Modal.getInstance(modal_element);
    x.dispose();
    setTimeout(function () {
      modal_element.parentElement.removeChild(modal_element);
    }, 3e3);
  });
}

function modalEvents(modal_id, type, fun) {
  const modal = document.querySelector("#" + modal_id);
  switch (type) {
    case "show":
      modal.addEventListener("show.bs.modal", function () {
        return fun();
      });
      break;
    case "shown":
      modal.addEventListener("shown.bs.modal", function () {
        return fun();
      });
      break;
    case "hide":
      modal.addEventListener("hide.bs.modal", function () {
        return fun();
      });
      break;
    case "hidden":
      modal.addEventListener("hidden.bs.modal", function () {
        return fun();
      });
      break;
    case "hidePrevented":
      modal.addEventListener("hidePrevented.bs.modal", function () {
        return fun();
      });
      break;
    default:
      break;
  }
}

export {
  removeModal,
  modalEvents
}
