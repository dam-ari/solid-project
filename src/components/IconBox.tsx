import { Component } from "solid-js";

interface IconBoxProps {
  icon: string;
  modalId: string;
  onClick: (modalId: string) => void;
}

const IconBox: Component<IconBoxProps> = ({ icon, modalId, onClick }) => {
  return (
    <div
      class="flex justify-center items-center w-12 h-12 rounded-lg text-white text-2xl p-2 cursor-pointer transition-transform transform hover:scale-110 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
      onClick={() => onClick(modalId)}
    >
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={icon} stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    </div>
  );
};

export default IconBox;
