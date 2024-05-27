import { Title } from "@solidjs/meta";
import Counter from "~/components/Counter";
import Modal from "~/components/Modal";
import IconBox from "~/components/IconBox";
import SwiperComponent from "~/components/SwiperComponent";
import { createSignal } from "solid-js";
import "../styles/tailwind.css";

export default function Home() {
  const [modal, setModal] = createSignal<string | null>(null);
  const [isMaximized, setIsMaximized] = createSignal(false);

  const openModal = (modalId: string) => {
    setModal(modalId);
    document.body.classList.add("prevent-background-scroll");
  };

  const closeModal = () => {
    setModal(null);
    setIsMaximized(false);
    document.body.classList.remove("prevent-background-scroll");
  };

  const toggleMaximize = () => {
    setIsMaximized(!isMaximized());
  };

  return (
    <main
      class="bg-cover bg-center min-h-screen bg-fixed bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/773ac512-567c-4316-81c9-511db0c8a094')",
      }}
    >
      <Title>Hello World</Title>
      <h1 class="text-4xl text-center text-white mt-8">Hello world!</h1>
      <Counter />
      <p class="text-center text-white mt-4">Visit me</p>
      <section class="relative flex flex-col items-center justify-center h-full">
        <div class="flex space-x-4 p-4 bg-white bg-opacity-50 rounded-lg shadow-lg">
          <IconBox
            icon="M3 3h18v18H3V3zm16 16V5H5v14h14zm-8-8H7v2h4V7h2v6h6v-2h-4v4h-2v-4h-4v6H7v-2h4z"
            modalId="about"
            onClick={openModal}
          />
          <IconBox
            icon="M20 3H4c-1.1 0-1.99.9-1.99 2L2 19c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 14h-4v-2h4v2zm4-4H6v-2h12v2zm0-4H6V7h12v2z"
            modalId="projects"
            onClick={openModal}
          />
          <IconBox
            icon="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
            modalId="testimonial"
            onClick={openModal}
          />
          <IconBox
            icon="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 6h16v12H4V6zm4 10h8v-2H8v2zm0-4h8v-2H8v2zm0-4h8V6H8v2z"
            modalId="contact"
            onClick={openModal}
          />
        </div>

        <Modal
          id="about"
          isOpen={modal() === "about"}
          isMaximized={isMaximized()}
          closeModal={closeModal}
          toggleMaximize={toggleMaximize}
        >
          <div class="p-4">
            <div class="mb-4">
              <img
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/1f842b2d-1245-497e-9a9e-b1cdb0da1eec"
                alt=""
                class="w-full rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h1 class="text-3xl mb-2">Ruth Thomson</h1>
              <p>
                I'm a front-end developer. I have dedicated myself to creating
                visually appealing and user-friendly websites. I'm always open
                to using new skill sets and I believe in the power of
                collaboration, working closely with designers and back-end
                developers to deliver cohesive and effective solutions.
              </p>
            </div>
          </div>
        </Modal>

        <Modal
          id="projects"
          isOpen={modal() === "projects"}
          isMaximized={isMaximized()}
          closeModal={closeModal}
          toggleMaximize={toggleMaximize}
        >
          <div class="p-4">
            <div class="mb-4">
              <h1 class="text-3xl mb-2">Skills</h1>
              <ul class="list-disc list-inside">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Vue JS</li>
                <li>Bootstrap</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h1 class="text-3xl mb-2">Projects</h1>
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div class="bg-white p-4 rounded-lg shadow-lg">
                  <img
                    src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/0c183f3d-cc94-4ed9-afea-4d33740dbf40"
                    alt=""
                    class="w-full rounded-lg mb-4"
                  />
                  <h3 class="text-xl">Adventure Landing Page</h3>
                  <button class="bg-blue-500 text-white px-4 py-2 rounded mt-4">
                    Learn More
                  </button>
                </div>
                {/* Add other projects here */}
              </div>
            </div>
          </div>
        </Modal>

        <Modal
          id="testimonial"
          isOpen={modal() === "testimonial"}
          isMaximized={isMaximized()}
          closeModal={closeModal}
          toggleMaximize={toggleMaximize}
        >
          <div class="p-4">
            <h1 class="text-3xl mb-2">Testimonials</h1>
            <SwiperComponent />
          </div>
        </Modal>

        <Modal
          id="contact"
          isOpen={modal() === "contact"}
          isMaximized={isMaximized()}
          closeModal={closeModal}
          toggleMaximize={toggleMaximize}
        >
          <div class="p-4">
            <h1 class="text-3xl mb-2">Contact</h1>
            <p>Hi there, you can contact with me via email.</p>
            <form>
              <label for="name" class="block mt-4">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name.."
                class="w-full p-2 rounded border"
              />
              <label for="email" class="block mt-4">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Your mail.."
                class="w-full p-2 rounded border"
              />
              <label for="subject" class="block mt-4">
                Subject
              </label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
                class="w-full p-2 rounded border"
                style={{ height: "200px" }}
              ></textarea>
              <button class="bg-blue-500 text-white px-4 py-2 rounded mt-4">
                Submit
              </button>
            </form>
          </div>
        </Modal>
      </section>
    </main>
  );
}
