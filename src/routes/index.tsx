import { Title } from "@solidjs/meta";
import Counter from "~/components/Counter";
import Modal from "~/components/Modal";
import IconBox from "~/components/IconBox";
import { createSignal, For } from "solid-js";
import { Show } from "solid-js/web";
import { modals } from "~/data/modals";
import Carousel from "../components/Carousel";

export default function Home() {
  const [modal, setModal] = createSignal<string | null>(null);
  const [isMaximized, setIsMaximized] = createSignal(false);


  const openModal = (modalId: string) => {
    console.log(`Opening modal: ${modalId}`);
    setModal(modalId);
    document.body.classList.add("prevent-background-scroll");
  };

  const closeModal = () => {
    console.log(`Closing modal`);
    setModal(null);
    setIsMaximized(false);
    document.body.classList.remove("prevent-background-scroll");
  };

  const toggleMaximize = () => {
    if (isMaximized()) {
      setIsMaximized(false);
    } else {
      setIsMaximized(true);
    }
  };

  return (
    <main class="bg-cover bg-center bg-fixed bg-no-repeat">
      <Show when={!modal()}>
        <Title>Home</Title>
        <h1 class="p-3">Home</h1>
        <Carousel images={[{ src: "https://picsum.photos/1200/800", alt: "Random Image" },
        { src: "https://picsum.photos/1000/800", alt: "Random Image" },
        { src: "https://picsum.photos/1200/900", alt: "Random Image" }]} />
      </Show>
      <section class="relative flex flex-col items-center justify-end h-full pb-2">
        <div class="flex p-2 bg-white bg-opacity-50 rounded-lg shadow-lg fixed-bottom scale icon-container">
          <For each={modals}>
            {(modalProps) => (
              <IconBox
                icon={modalProps.icon}
                modalId={modalProps.id}
                onClick={openModal}
              />
            )}
          </For>
        </div>

        <For each={modals}>
          {(modalProps) => (
            <Show when={modal() === modalProps.id}>
              <Modal
                id={modalProps.id}
                isOpen={modal() === modalProps.id}
                isMaximized={isMaximized()}
                closeModal={closeModal}
                toggleMaximize={toggleMaximize}
              >
                <div class="p-2">{modalProps.component()}</div>
              </Modal>
            </Show>
          )}
        </For>
      </section>
    </main>
  );
}
