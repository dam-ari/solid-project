import { For, JSX, createSignal } from "solid-js";

const Carousel = (props: { images: { src: string; alt: string; }[] }): JSX.Element => {
  let carouselRef: HTMLDivElement;
  const [currentIndex, setCurrentIndex] = createSignal(0);

  const nextImage = () => {
    if (currentIndex() < props.images.length - 1) {
      setCurrentIndex(currentIndex() + 1);
      scrollToCurrentImage();
    }
  };

  const prevImage = () => {
    if (currentIndex() > 0) {
      setCurrentIndex(currentIndex() - 1);
      scrollToCurrentImage();
    }
  };

  const currentImage = (index: number) => {
    setCurrentIndex(index);
    scrollToCurrentImage();
  };

  const scrollToCurrentImage = () => {
    const scrollAmount = carouselRef.scrollWidth / props.images.length;
    carouselRef.scrollTo({
      left: scrollAmount * currentIndex(),
      behavior: "smooth",
    });
  };

  return (
    <div class="relative max-w-30 max-w-md mx-auto p-4 rounded-box">
      <div
        ref={carouselRef!}
        class="carousel-container overflow-x-scroll overflow-y-hidden inline-flex max-w-full rounded-box no-scrollbar"
      >
        <div class="carousel flex">
          <For each={props.images}>
            {(img, i) => (
              <div class="carousel-item flex-shrink-0 w-full p-2 px-4 rounded-3xl card" onClick={() => currentImage(i())}>
                <img src={img.src} alt={img.alt} class="rounded-xl w-full p-1 glass-effect" />
              </div>
            )}
          </For>
        </div>
      </div>
      <button class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full" onClick={prevImage}>‹</button>
      <button class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full" onClick={nextImage}>›</button>
      <style>
        {`
          .card {
            align-content: space-around;
            background: linear-gradient(90deg, #ff005282, #0265a1db);
            background-size: 200% 200%;
            animation: gradientAnimation 5s linear infinite;
          }

          @keyframes gradientAnimation {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          .glass-effect {
            backdrop-filter: blur(10px);
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            border: 1px solid rgba(255, 255, 255, 0.2);
          }

          .no-scrollbar::-webkit-scrollbar {
            height: 8px;
          }

          .no-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }

          .no-scrollbar::-webkit-scrollbar-thumb {
            background: linear-gradient(90deg, red, blue);
            border-radius: 4px;
          }

          .carousel-container {
            scrollbar-width: thin;
            scrollbar-color: transparent transparent;
          }
        `}
      </style>
    </div>
  );
};

export default Carousel;
