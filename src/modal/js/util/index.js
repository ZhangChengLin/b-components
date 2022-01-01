/**
 * @param {HTMLElement} _modal
 * @param {String} EventsType
 * @param {function} EventsFun
 */
const modalEvents = (_modal, EventsType, EventsFun) => {
  switch (EventsType) {
    case "show":
      _modal.addEventListener("show.bs.modal", () => EventsFun())
      break
    case "shown":
      _modal.addEventListener("shown.bs.modal", () => EventsFun())
      break
    case "hide":
      _modal.addEventListener("hide.bs.modal", () => EventsFun())
      break
    case "hidden":
      _modal.addEventListener("hidden.bs.modal", () => EventsFun())
      break
    case "hidePrevented":
      _modal.addEventListener("hidePrevented.bs.modal", () => EventsFun())
      break
    default:
      break
  }
}

/**
 * @param {HTMLElement} _modal
 */
const removeModal = _modal => {
  _modal.addEventListener("hidden.bs.modal", () => {
    let x = bootstrap.Modal.getInstance(_modal)
    x.dispose()
    setTimeout(() => {
      _modal.parentElement.removeChild(_modal)
    }, 2e3)
  })
}

export {
  modalEvents,
  removeModal
}
