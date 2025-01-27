import testimonials from "../testimonial.js";
import Headline from "../shared/Headline.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const Testimonials = () => {
  return (
    <div className="py-8 px-7 dark:bg-gray-950 bg-gray-100 h-auto" id="testimonials">
      <Headline
        title="TESTIMONIALS"
        subtitle="Here are some words from clients and partners we've worked with."
      />
      <Swiper
        loop={true}
        modules={[Pagination, Navigation, Autoplay, EffectFade]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        effect="fade" 
        autoplay={{
          delay: 3000,
          disableOnInteraction: false, 
        }}
        className="my-8"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="dark:bg-black bg-white rounded-xl flex flex-col justify-around items-center w-[18rem] h-[15rem] shadow-md shadow-blue-600 mx-auto p-4">
              <div className="w-28 h-28 rounded-full border-4 border-white">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col justify-end items-center p-4">
                <h4 className="text-xl font-bold dark:text-white text-center">{testimonial.name}</h4>
                <p className="text-sm text-gray-800 dark:text-gray-300 text-center">{testimonial.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
