import { onCleanup, onMount } from "solid-js";
import { A } from "@solidjs/router";
import Swiper, { Navigation, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/mousewheel";

const SwiperComponent = () => {
  let swiper: Swiper | undefined;

  onMount(() => {
    swiper = new Swiper(".swiper", {
      modules: [Navigation, Mousewheel],
      preventClicks: true,
      noSwiping: true,
      freeMode: false,
      spaceBetween: 10,
      navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
      mousewheel: {
        invert: false,
        thresholdDelta: 50,
        sensitivity: 1,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        680: {
          slidesPerView: 2,
        },
        1100: {
          slidesPerView: 3,
        },
        1600: {
          slidesPerView: 4,
        },
      },
    });
  });

  onCleanup(() => {
    if (swiper) {
      swiper.destroy();
      swiper = undefined;
    }
  });

  return (
    <div class="swiper w-full h-full">
      <div class="swiper-wrapper">
        <div class="swiper-slide bg-gray-700 p-6 rounded-lg shadow-lg">
          <A href="/about" class="block text-white">
            <div class="flex items-center space-x-4">
              <img
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/c3e8a2a1-ab19-4fae-be0c-92bb3b6f3122"
                alt="Emily Sullivan"
                class="w-12 h-12 rounded-full object-cover shadow-md"
              />
              <h2 class="text-xl">Emily Sullivan</h2>
            </div>
            <p class="mt-4">
              Ruth makes websites look really cool and work smoothly. She's
              turning ideas into websites that just make sense!
            </p>
          </A>
        </div>
        {/* Add other slides here */}
      </div>
      <ul class="control flex justify-center mt-4 space-x-2">
        <li class="prev cursor-pointer">
          <i class="arrow fa-solid fa-caret-left text-white text-2xl"></i>
        </li>
        <li class="next cursor-pointer">
          <i class="arrow fa-solid fa-caret-right text-white text-2xl"></i>
        </li>
      </ul>
    </div>
  );
};

export default SwiperComponent;
