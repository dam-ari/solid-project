import { JSX } from "solid-js";

const ContactModal = (): JSX.Element => (
  <>
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
  </>
);

export default ContactModal;
