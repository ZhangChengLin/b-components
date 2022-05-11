import { Modal } from 'bootstrap'
export * from '../../../util/index'

/**
 * @param {HTMLElement} _modal
 */
const removeAfterHiding = (_modal) => {
  _modal.addEventListener('hidden.bs.modal', () => {
    const x = Modal.getInstance(_modal)
    x.dispose()
    setTimeout(() => {
      _modal.remove()
    }, 2e3)
  })
}

export {
  removeAfterHiding
}
