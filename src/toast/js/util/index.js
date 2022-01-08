export * from "../../../util/index"

/**
 * @param {HTMLElement} _toast
 * @param {String} eventsType
 * @param {Function} eventsFun
 */
const toastEvents = (_toast, eventsType, eventsFun) => {
  switch (eventsType) {
    case "show":
      _toast.addEventListener("show.bs.toast", () => eventsFun())
      break
    case "shown":
      _toast.addEventListener("shown.bs.toast", () => eventsFun())
      break
    case "hide":
      _toast.addEventListener("hide.bs.toast", () => eventsFun())
      break
    case "hidden":
      _toast.addEventListener("hidden.bs.toast", () => eventsFun())
      break
    default:
      throw 'eventsType error'
  }
}

/**
 * @param {HTMLElement} _toast
 */
const removeToast = _toast => {
  _toast.addEventListener("hidden.bs.toast", () => {
    const x = bootstrap.Toast.getInstance(_toast)
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
