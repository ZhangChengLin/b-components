/**
 * @param {HTMLElement} _offcanvas
 * @param {String} EventsType
 * @param {Function} EventsFun
 */
const offcanvasEvents = (_offcanvas, EventsType, EventsFun) => {
  switch (EventsType) {
    case "show":
      _offcanvas.addEventListener("show.bs.offcanvas", () => EventsFun())
      break
    case "shown":
      _offcanvas.addEventListener("shown.bs.offcanvas", () => EventsFun())
      break
    case "hide":
      _offcanvas.addEventListener("hide.bs.offcanvas", () => EventsFun())
      break
    case "hidden":
      _offcanvas.addEventListener("hidden.bs.offcanvas", () => EventsFun())
      break
    default:
      throw 'EventsType error'
  }
}

/**
 * @param {HTMLElement} _offcanvas
 */
const removeOffcanvas = _offcanvas => {
  _offcanvas.addEventListener("hidden.bs.offcanvas", () => {
    let x = bootstrap.Offcanvas.getInstance(_offcanvas)
    x.dispose()
    setTimeout(() => {
      _offcanvas.parentElement.removeChild(_offcanvas)
    }, 3e3)
  })
}

export {
  offcanvasEvents,
  removeOffcanvas
}
