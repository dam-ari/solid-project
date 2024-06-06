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
    icon: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
    title: "Parade",
    component: EmojiParade,
  },
];
