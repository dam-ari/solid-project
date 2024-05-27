import { Component, JSX } from "solid-js";

interface ModalProps {
  id: string;
  isOpen: boolean;
  isMaximized: boolean;
  closeModal: () => void;
  toggleMaximize: () => void;
  children: JSX.Element;
}

const Modal: Component<ModalProps> = ({
  id,
  isOpen,
  isMaximized,
  closeModal,
  toggleMaximize,
  children,
}) => {
  return (
    <div
      class={`fixed inset-0 bg-black bg-opacity-50 z-20 ${
        isOpen ? "block" : "hidden"
      }`}
      id={id}
      onClick={(e) =>
        (e.target as HTMLElement).classList.contains("popup") && closeModal()
      }
    >
      <div
        class={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl bg-gray-800 bg-opacity-50 shadow-lg rounded-lg text-white p-4 transition-all ${
          isMaximized ? "w-full h-full" : "max-h-[70vh]"
        }`}
      >
        <div class="flex justify-between items-center mb-4">
          <div class="flex space-x-2">
            <button
              type="button"
              class="w-4 h-4 rounded-full bg-red-500"
              onClick={closeModal}
              title="Close"
            >
              <i class="fa-solid fa-xmark"></i>
            </button>
            <button
              type="button"
              class="w-4 h-4 rounded-full bg-yellow-500"
              onClick={closeModal}
              title="Minimize"
            >
              <i class="fa-solid fa-window-minimize"></i>
            </button>
            <button
              type="button"
              class="w-4 h-4 rounded-full bg-green-500"
              onClick={toggleMaximize}
              title="Maximize"
            >
              <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
            </button>
          </div>
        </div>
        <div class="overflow-y-auto p-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
