import modalDialog from "./modal-dialog";


const modal = () => {
  const _modal = document.createElement('div')

  _modal.id = 'modal_ID';
  _modal.className = "modal fade";
  _modal.tabIndex = -1;
  _modal.role = "dialog";

  _modal.append(modalDialog())

  return _modal
}

export default modal
