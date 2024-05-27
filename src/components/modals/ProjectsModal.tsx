import { JSX } from "solid-js";

const ProjectsModal = (): JSX.Element => (
  <>
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
  </>
);

export default ProjectsModal;
