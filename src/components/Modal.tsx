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

  return (
    <div
      id={props.id}
      class={`modal ${props.isOpen ? "block" : "hidden"} ${
        props.isMaximized ? "maximized" : ""
      } ${isMinimized() ? "minimized" : ""}`}
    >
      <div class="modal-header">
        <button class="button" onClick={props.closeModal}>
          ✖
        </button>
        <button class="button" onClick={toggleMinimize}>
          ➖
        </button>
        <button class="button" onClick={props.toggleMaximize}>
          ⬜
        </button>
      </div>
      <div class="modal-content">{props.children}</div>
    </div>
  );
};

export default Modal;
