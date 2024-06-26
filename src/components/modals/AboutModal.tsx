import { JSX } from "solid-js";
import profileImage from "~/assets/images/profile.png"; // Adjust the path as necessary

const AboutModal = (): JSX.Element => {
  return (
    <>
      <div class="mb-4 bg-gray-100 flex items-center justify-center w-20 h-50 ">
        <img
          src={profileImage}
          alt="Just A profile Photo"
          class="max-h-20 rounded-lg shadow-lg  transform hover:scale-125 transition duration-500 ease-in-out"
        />
      </div>
      <div>
        <h1 class="text-3xl mb-2">Holy me</h1>
        <p>

        </p>
      </div>
    </>
  );
};

export default AboutModal;
