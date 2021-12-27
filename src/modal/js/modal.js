import modalDialog from "./modal-dialog";


const modal = (titleElement, bodyElement, footerElement, ModalSizes, VerticallyCentered, LongContentType, modalId) => {
  const _modal = document.createElement('div')

  _modal.id = modalId;
  _modal.className = "modal fade";
  _modal.tabIndex = -1;
  _modal.role = "dialog";

  _modal.append(modalDialog(titleElement, bodyElement, footerElement, ModalSizes, VerticallyCentered, LongContentType))

  return _modal
}

export default modal
