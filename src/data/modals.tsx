import { JSX } from "solid-js";
import AboutModal from "~/components/modals/AboutModal";
import ProjectsModal from "~/components/modals/ProjectsModal";
import TestimonialsModal from "~/components/modals/TestimonialsModal";
import ContactModal from "~/components/modals/ContactModal";
import EmojiParade from "~/components/modals/EmojiParade";

interface ModalProps {
  id: string;
  icon: string;
  title: string;
  component: () => JSX.Element;
}

const emojiParadeIcon = `
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <!-- Sun -->
  <circle cx="32" cy="32" r="10" fill="#FFEB3B"/>
  <path d="M32 2v8M32 54v8M62 32h-8M10 32H2M48.8 15.2l-5.6 5.6M15.2 48.8l5.6-5.6M48.8 48.8l-5.6-5.6M15.2 15.2l5.6 5.6" stroke="#FFEB3B" stroke-width="2"/>
  <!-- Three emojis -->
  <circle cx="16" cy="48" r="6" fill="#FFD700"/>
  <circle cx="48" cy="48" r="6" fill="#FFD700"/>
  <circle cx="32" cy="48" r="6" fill="#FFD700"/>
  <!-- Faces -->
  <!-- Left Emoji Face -->
  <circle cx="14" cy="46" r="1" fill="#000"/>
  <circle cx="18" cy="46" r="1" fill="#000"/>
  <path d="M14 50c2 1.5 4 1.5 6 0" stroke="#000" stroke-width="1"/>
  <!-- Center Emoji Face -->
  <circle cx="30" cy="46" r="1" fill="#000"/>
  <circle cx="34" cy="46" r="1" fill="#000"/>
  <path d="M30 50c2 1.5 4 1.5 6 0" stroke="#000" stroke-width="1"/>
  <!-- Right Emoji Face -->
  <circle cx="46" cy="46" r="1" fill="#000"/>
  <circle cx="50" cy="46" r="1" fill="#000"/>
  <path d="M46 50c2 1.5 4 1.5 6 0" stroke="#000" stroke-width="1"/>
</svg>
`;

export const modals: ModalProps[] = [
  {
    id: "about",
    icon: "M3 3h18v18H3V3zm16 16V5H5v14h14zm-8-8H7v2h4V7h2v6h6v-2h-4v4h-2v-4h-4v6H7v-2h4z",
    title: "About Me",
    component: AboutModal,
  },
  {
    id: "projects",
    icon: "M20 3H4c-1.1 0-1.99.9-1.99 2L2 19c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 14h-4v-2h4v2zm4-4H6v-2h12v2zm0-4H6V7h12v2z",
    title: "Projects",
    component: ProjectsModal,
  },
  {
    id: "testimonial",
    icon: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 6h16v12H4V6zm4 10h8v-2H8v2zm0-4h8v-2H8v2zm0-4h8V6H8v2z",
    title: "Testimonials",
    component: TestimonialsModal,
  },
  {
    id: "contact",
    icon: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
    title: "Contact",
    component: ContactModal,
  },
  {
    id: "emoji",
    icon: emojiParadeIcon,
    title: "Parade",
    component: EmojiParade,
  },
];
