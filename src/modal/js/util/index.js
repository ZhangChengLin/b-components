const getTimeString = () => {
  return new Date().getTime().toString()
}

const modalEvents = (modalId, EventsType, EventsFun) => {
  const modal = document.querySelector("#" + modalId);
  switch (EventsType) {
    case "show":
      modal.addEventListener("show.bs.modal", function () {
        return EventsFun();
      });
      break;
    case "shown":
      modal.addEventListener("shown.bs.modal", function () {
        return EventsFun();
      });
      break;
    case "hide":
      modal.addEventListener("hide.bs.modal", function () {
        return EventsFun();
      });
      break;
    case "hidden":
      modal.addEventListener("hidden.bs.modal", function () {
        return EventsFun();
      });
      break;
    case "hidePrevented":
      modal.addEventListener("hidePrevented.bs.modal", function () {
        return EventsFun();
      });
      break;
    default:
      break;
  }
};

const removeModal = modalId => {
  const modal_element = document.querySelector("#" + modalId);
  modal_element.addEventListener("hidden.bs.modal", function () {
    let x = bootstrap.Modal.getInstance(modal_element);
    x.dispose();
    setTimeout(function () {
      modal_element.parentElement.removeChild(modal_element);
    }, 2e3);
  });
};

export {
  getTimeString,
  modalEvents,
  removeModal
}
