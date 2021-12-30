const getTimeString = () => {
  return new Date().getTime().toString()
}

/**
 * @param {String} modalId
 * @param {String} EventsType
 * @param {function} EventsFun
 */
const modalEvents = (modalId, EventsType, EventsFun) => {
  const modal = document.querySelector("#" + modalId)
  switch (EventsType) {
    case "show":
      modal.addEventListener("show.bs.modal", () => EventsFun())
      break
    case "shown":
      modal.addEventListener("shown.bs.modal", () => EventsFun())
      break
    case "hide":
      modal.addEventListener("hide.bs.modal", () => EventsFun())
      break
    case "hidden":
      modal.addEventListener("hidden.bs.modal", () => EventsFun())
      break
    case "hidePrevented":
      modal.addEventListener("hidePrevented.bs.modal", () => EventsFun())
      break
    default:
      break
  }
}

/**
 * @param {HTMLElement} modal
 */
const removeModal = modal => {
  modal.addEventListener("hidden.bs.modal", () => {
    let x = bootstrap.Modal.getInstance(modal)
    x.dispose()
    setTimeout(() => {
      modal.parentElement.removeChild(modal)
    }, 2e3)
  })
}

export {
  getTimeString,
  modalEvents,
  removeModal
}
