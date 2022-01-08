export * from '../../../util/index'

/**
 * @param {HTMLElement} _modal
 * @param {String} eventsType
 * @param {function} eventsFun
 */
const modalEvents = (_modal, eventsType, eventsFun) => {
  switch (eventsType) {
    case 'show':
      _modal.addEventListener('show.bs.modal', () => eventsFun())
      break
    case 'shown':
      _modal.addEventListener('shown.bs.modal', () => eventsFun())
      break
    case 'hide':
      _modal.addEventListener('hide.bs.modal', () => eventsFun())
      break
    case 'hidden':
      _modal.addEventListener('hidden.bs.modal', () => eventsFun())
      break
    case 'hidePrevented':
      _modal.addEventListener('hidePrevented.bs.modal', () => eventsFun())
      break
    default:
      break
  }
}

/**
 * @param {HTMLElement} _modal
 */
const removeModal = _modal => {
  _modal.addEventListener('hidden.bs.modal', () => {
    const x = bootstrap.Modal.getInstance(_modal)
    x.dispose()
    setTimeout(() => {
      _modal.remove()
    }, 2e3)
  })
}

export {
  modalEvents,
  removeModal
}
