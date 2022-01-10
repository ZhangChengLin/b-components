/**
 * @param {String} modalId
 */
const modal = (modalId) => {
  const _modal = document.createElement('div')

  _modal.className = 'modal fade'
  _modal.id = modalId
  _modal.tabIndex = -1
  _modal.role = 'dialog'
  _modal.setAttribute('aria-labelledby', 'modalTitleLabel')

  return _modal
}

export default modal
