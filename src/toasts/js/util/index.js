/**
 * @param {HTMLElement} _toasts
 * @param {String} EventsType
 * @param {Function} EventsFun
 */
const toastsEvents = (_toasts, EventsType, EventsFun) => {
  switch (EventsType) {
    case "show":
      _toasts.addEventListener("show.bs.toasts", () => EventsFun())
      break
    case "shown":
      _toasts.addEventListener("shown.bs.toasts", () => EventsFun())
      break
    case "hide":
      _toasts.addEventListener("hide.bs.toasts", () => EventsFun())
      break
    case "hidden":
      _toasts.addEventListener("hidden.bs.toasts", () => EventsFun())
      break
    default:
      throw 'EventsType error'
  }
}

/**
 * @param {HTMLElement} _toasts
 */
const removeToasts = _toasts => {
  _toasts.addEventListener("hidden.bs.toasts", () => {
    let x = bootstrap.Toasts.getInstance(_toasts)
    x.dispose()
    setTimeout(() => {
      _toasts.parentElement.removeChild(_toasts)
    }, 3e3)
  })
}

export {
  getTimeString,
  toastsEvents,
  removeToasts
}
