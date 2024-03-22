
const Modal = ({ onConfirm, onCancel }) => {
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>remove all items from your shopping cart?</h4>
        <div className="btn-container">
          <button type="button" className="btn confirm-btn" onClick={onConfirm}>
            confirm
          </button>
          <button type="button" className="btn clear-btn" onClick={onCancel}>
            cancel
          </button>
        </div>
      </div>
    </aside>
  )
}
export default Modal
