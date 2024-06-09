import GIF from "gif.js";
import html2canvas from "html2canvas";

export const createGif = async (
  element: HTMLElement,
  emojis: string[],
  size: string,
  duration: number
): Promise<string> => {
  const gif = new GIF({
    workers: 2,
    quality: 10,
    workerScript: "/gif.worker.js", // Local path
  });

  const frameDuration = duration / emojis.length;
  const offscreenDiv = document.createElement("div");
  offscreenDiv.style.position = "fixed";
  offscreenDiv.style.top = "-9999px";
  offscreenDiv.style.left = "-9999px";
  offscreenDiv.style.whiteSpace = "nowrap"; // Prevent line breaks
  offscreenDiv.style.backgroundColor = "transparent"; // Ensure transparency
  document.body.appendChild(offscreenDiv);

  try {
    for (const emoji of emojis) {
      const span = document.createElement("span");
      span.textContent = emoji;
      span.style.fontSize = size;
      span.style.lineHeight = "3em"; // Adjust line height
      span.style.display = "inline-block"; // Ensure proper sizing
      span.style.verticalAlign = "middle"; // Align vertically
      span.style.padding = "0 0.5em"; // Add padding

      offscreenDiv.innerHTML = "";
      offscreenDiv.appendChild(span);

      const canvas = await html2canvas(offscreenDiv, {
        backgroundColor: null, // Ensure transparent background
        logging: true, // Enable logging to debug issues
        useCORS: true, // Handle cross-origin issues if any
      });
      gif.addFrame(canvas, { delay: frameDuration });
    }

    return new Promise<string>((resolve, reject) => {
      gif.on("finished", function (blob) {
        const url = URL.createObjectURL(blob);
        resolve(url);
        document.body.removeChild(offscreenDiv); // Clean up
      });

      gif.on("abort", function () {
        reject(new Error("GIF creation aborted"));
      });

      gif.on("start", function () {
        console.log("GIF creation started");
      });

      gif.on("progress", function (p) {
        console.log(`GIF creation progress: ${p * 100}%`);
      });

      gif.render();
    });
  } catch (error) {
    document.body.removeChild(offscreenDiv);
    throw error;
  }
};

export const downloadGif = (url: string) => {
  const a = document.createElement("a");
  a.href = url;
  a.download = "emoji-animation.gif";
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

export const handleCopy = async (
  emojis: string[],
  size: string,
  duration: number
) => {
  const animatorElement = document.querySelector(".emoji-animator");
  if (!animatorElement) {
    alert("Animator element not found");
    return;
  }

  alert("Creating GIF...");

  try {
    const url = await createGif(
      animatorElement as HTMLElement,
      emojis,
      size || "3em",
      duration || 4000
    );
    alert("GIF created successfully. Downloading...");
    downloadGif(url);
  } catch (error) {
    alert("Error creating GIF: " + error);
    console.error("Error creating GIF:", error);
  }
};
