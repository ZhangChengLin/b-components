import modalHeader from "./modal-header"
import modalBody from "./modal-body"
import modalFooter from "./modal-footer"


/**
 * @param {Node|string} titleContent
 * @param {Node|string} bodyContent
 * @param {Node|string} footerContent
 */
const modalContent = (titleContent, bodyContent, footerContent) => {
  const content = document.createElement("div")

  content.className = "modal-content"

  content.append(
    modalHeader(titleContent),
    modalBody(bodyContent),
    modalFooter(footerContent)
  )

  return content
}

export default modalContent
