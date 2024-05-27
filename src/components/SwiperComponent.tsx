import { For } from "solid-js";
import { A } from "@solidjs/router";
import Swiper, { Navigation, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/mousewheel";
import { testimonials } from "~/data/Testimonials";

const SwiperComponent = () => {
  return (
    <Swiper spaceBetween={50} slidesPerView={1}>
      <For each={testimonials}>
        {(testimonial) => (
          <SwiperSlide>
            <div class="p-4 bg-white rounded-lg shadow-md">
              <div class="flex items-center mb-4">
                <img
                  src={testimonial.imgSrc}
                  alt={testimonial.name}
                  class="w-16 h-16 rounded-full mr-4"
                />
                <h2 class="text-xl">{testimonial.name}</h2>
              </div>
              <p>{testimonial.text}</p>
            </div>
          </SwiperSlide>
        )}
      </For>
    </Swiper>
  );
};

export default SwiperComponent;
