import modalHeader from "./modal-header"
import modalBody from "./modal-body"
import modalFooter from "./modal-footer"

/**
 * @param {Node|string|function} headerNodeElement
 * @param {Node|string|function} bodyNodeElement
 * @param {Node|string|function} footerNodeElement
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
