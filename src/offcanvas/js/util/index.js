const getTimeString = () => {
  return new Date().getTime().toString()
}

/**
 * @param {String} offcanvasId
 * @param {String} EventsType
 * @param {Function} EventsFun
 */
const offcanvasEvents = (offcanvasId, EventsType, EventsFun) => {
  const offcanvas = document.querySelector("#Offcanvas_" + offcanvasId)
  switch (EventsType) {
    case "show":
      offcanvas.addEventListener("show.bs.offcanvas", () => EventsFun())
      break
    case "shown":
      offcanvas.addEventListener("shown.bs.offcanvas", () => EventsFun())
      break
    case "hide":
      offcanvas.addEventListener("hide.bs.offcanvas", () => EventsFun())
      break
    case "hidden":
      offcanvas.addEventListener("hidden.bs.offcanvas", () => EventsFun())
      break
    default:
      throw 'EventsType error'
  }
}

/**
 * @param {HTMLElement} offcanvas
 */
const removeOffcanvas = offcanvas => {
  offcanvas.addEventListener("hidden.bs.offcanvas", () => {
    let x = bootstrap.Offcanvas.getInstance(offcanvas)
    x.dispose()
    setTimeout(() => {
      offcanvas.parentElement.removeChild(offcanvas)
    }, 3e3)
  })
}

export {
  getTimeString,
  offcanvasEvents,
  removeOffcanvas
}
