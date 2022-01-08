import modalHeader from './modal-header'
import modalBody from './modal-body'
import modalFooter from './modal-footer'

/**
 * @param {Node|String|Function} headerNodeElement
 * @param {Node|String|Function} bodyNodeElement
 * @param {Node|String|Function} footerNodeElement
 */
const modalContent = (headerNodeElement, bodyNodeElement, footerNodeElement) => {
  const content = document.createElement('div')

  content.className = 'modal-content'

  content.append(
    modalHeader(headerNodeElement),
    modalBody(bodyNodeElement),
    modalFooter(footerNodeElement)
  )

  return content
}

export default modalContent
