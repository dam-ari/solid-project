import { Title } from "@solidjs/meta";
import Counter from "~/components/Counter";
import Modal from "~/components/Modal";
import IconBox from "~/components/IconBox";
import { createSignal, For } from "solid-js";
import { Show } from "solid-js/web";
import { modals } from "~/data/modals";

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
      <Title>Hello World</Title>
      <h1 class="text-4xl text-center text-white mt-8">Hello world!</h1>
      <Counter />
      <p class="text-center text-grey mt-4 ">Visit me</p>
      <section class="relative flex flex-col items-center justify-end h-full pb-8">
        <div class="flex space-x-4 p-4 bg-white bg-opacity-50 rounded-lg shadow-lg fixed-bottom">
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
                <div class="p-4">{modalProps.component()}</div>
              </Modal>
            </Show>
          )}
        </For>
      </section>
    </main>
  );
}
