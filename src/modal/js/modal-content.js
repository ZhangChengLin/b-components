import modalHeader from "./modal-header"
import modalBody from "./modal-body"
import modalFooter from "./modal-footer"

/**
 * @param {Node|string|Function|null} headerNodeElement
 * @param {Node|string|Function|null} bodyNodeElement
 * @param {Node|string|Function|null} footerNodeElement
 */
const modalContent = (headerNodeElement, bodyNodeElement, footerNodeElement) => {
  const content = document.createElement("div")

  content.className = "modal-content"

  content.append(
    modalHeader(headerNodeElement),
    modalBody(bodyNodeElement),
    modalFooter(footerNodeElement)
  )

  return content
}

export default modalContent
