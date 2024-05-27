import { createSignal, JSX } from "solid-js";

interface ModalProps {
  id: string;
  isOpen: boolean;
  isMaximized: boolean;
  closeModal: () => void;
  toggleMaximize: () => void;
}

const Modal: Component<ModalProps> = (props) => {
  const [isMinimized, setIsMinimized] = createSignal(false);

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized());
  };
  const toggleMaximize = () => {
    if (props.isMaximized) {
      setIsMinimized(false);
    }
    props.toggleMaximize();
  };

  return (
    <div
      id={props.id}
      class={`modal ${props.isOpen ? "block" : "hidden"} ${
        props.isMaximized ? "maximized" : ""
      } ${isMinimized() ? "minimized" : ""}`}
    >
      <div class="modal-header">
        <div class="mac-buttons">
          <div class="mac-button close" onClick={props.closeModal}></div>
          <div class="mac-button minimize" onClick={toggleMinimize}></div>
          <div class="mac-button maximize" onClick={toggleMaximize}></div>
        </div>
      </div>
      <div class="modal-content">{props.children}</div>
    </div>
  );
};

export default Modal;
