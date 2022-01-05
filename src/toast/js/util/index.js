/**
 * @param {HTMLElement} _toast
 * @param {String} EventsType
 * @param {Function} EventsFun
 */
const toastEvents = (_toast, EventsType, EventsFun) => {
  switch (EventsType) {
    case "show":
      _toast.addEventListener("show.bs.toast", () => EventsFun())
      break
    case "shown":
      _toast.addEventListener("shown.bs.toast", () => EventsFun())
      break
    case "hide":
      _toast.addEventListener("hide.bs.toast", () => EventsFun())
      break
    case "hidden":
      _toast.addEventListener("hidden.bs.toast", () => EventsFun())
      break
    default:
      throw 'EventsType error'
  }
}

/**
 * @param {HTMLElement} _toast
 */
const removeToast = _toast => {
  _toast.addEventListener("hidden.bs.toast", () => {
    let x = bootstrap.Toast.getInstance(_toast)
    x.dispose()
    setTimeout(() => {
      _toast.remove()
    }, 3e3)
  })
}

export {
  toastEvents,
  removeToast
}
