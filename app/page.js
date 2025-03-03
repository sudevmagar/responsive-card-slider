"use client"; 

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function Home() {
  // Card data with title, content, and an image URL
  const cards = [
    { id: 1, title: "Card 1", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", image: "https://picsum.photos/800/800?random=1" },
    { id: 2, title: "Card 2", content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", image: "https://picsum.photos/800/800?random=2" },
    { id: 3, title: "Card 3", content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", image: "https://picsum.photos/800/800?random=3" },
    { id: 4, title: "Card 4", content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", image: "https://picsum.photos/800/800?random=4" },
    { id: 5, title: "Card 5", content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.", image: "https://picsum.photos/800/800?random=5" },
    { id: 6, title: "Card 6", content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.", image: "https://picsum.photos/800/800?random=6" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-200 to-gray-500 py-8 flex">
      <div className="container mx-auto px-4 w-[95%] max-w-[800px]">
        
        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div key={card.id} className="bg-white rounded-[25px] shadow-[0_14px_80px_rgba(34,35,58,0.2)] p-6 aspect-square flex flex-col justify-between">
              <h2 className="text-2xl font-bold text-gray-900 mb-5">{card.title}</h2>
              <p className="text-gray-600 leading-relaxed">{card.content}</p>
            </div>
          ))}
        </div>

        {/* Mobile Swiper View */}
        <div className="md:hidden relative w-full bg-white shadow-[0_14px_80px_rgba(34,35,58,0.2)] rounded-[25px] min-h-[500px] mt-[180px] overflow-visible">
          <Swiper
            modules={[Pagination, Mousewheel, EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true} 
            mousewheel={true} 
            effect="fade" 
            fadeEffect={{ crossFade: true }}
            pagination={{
              clickable: true,
              el: '.custom-pagination', 
              renderBullet: (index, className) => `
                <span class="${className} inline-block mx-1 rounded-full transition-all duration-300 bg-gray-400 opacity-20"></span>
              `,
            }}
            className="h-full overflow-visible"
            onSlideChange={(swiper) => {
              // Updates the appearance of the active pagination bullet
              const bullets = document.querySelectorAll('.swiper-pagination-bullet');
              bullets.forEach((bullet, idx) => {
                bullet.style.width = idx === swiper.realIndex ? '30px' : '11px';
                bullet.style.height = '11px';
                bullet.style.borderRadius = idx === swiper.realIndex ? '5px' : '9999px';
                bullet.style.opacity = idx === swiper.realIndex ? '1' : '0.2';
                bullet.style.backgroundColor = idx === swiper.realIndex ? '#4B5563' : '#9CA3AF';
                bullet.style.boxShadow = idx === swiper.realIndex ? '0px 0px 20px rgba(75, 85, 99, 0.3)' : 'none';
              });
            }}
            onInit={(swiper) => {
              // Initializes pagination styles on load
              const bullets = document.querySelectorAll('.swiper-pagination-bullet');
              bullets.forEach((bullet, idx) => {
                bullet.style.width = idx === swiper.realIndex ? '30px' : '11px';
                bullet.style.height = '11px';
                bullet.style.borderRadius = idx === swiper.realIndex ? '5px' : '9999px';
                bullet.style.opacity = idx === swiper.realIndex ? '1' : '0.2';
                bullet.style.backgroundColor = idx === swiper.realIndex ? '#4B5563' : '#9CA3AF';
                bullet.style.boxShadow = idx === swiper.realIndex ? '0px 0px 20px rgba(75, 85, 99, 0.3)' : 'none';
              });
            }}
          >
            {cards.map((card) => (
              <SwiperSlide key={card.id}>
                <div className="relative h-full overflow-visible">
                  <div className="absolute top-[-200px] left-6 right-6 h-[400px] z-10 bg-gray-300 rounded-[25px] shadow-[0_10px_30px_rgba(0,0,0,0.2)]"></div>
                  <div className="absolute top-[-200px] left-6 right-6 h-[400px] z-20 rounded-[25px] overflow-hidden transition-all duration-500 opacity-0 [.swiper-slide-active_&]:opacity-100">
                    <div className="absolute inset-0 bg-black/20 rounded-[25px] transition-all duration-500 opacity-0 [.swiper-slide-active_&]:opacity-100"></div>
                    <img 
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transition-all duration-500 opacity-0 [.swiper-slide-active_&]:opacity-100"
                    />
                  </div>

                  {/* Card Title and Content */}
                  <div className="h-full pt-[250px] px-6 pb-12 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-5 transition-all duration-500 opacity-0 translate-y-6 [.swiper-slide-active_&]:opacity-100 [.swiper-slide-active_&]:translate-y-0">
                      {card.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed transition-all duration-500 opacity-0 translate-y-6 [.swiper-slide-active_&]:opacity-100 [.swiper-slide-active_&]:translate-y-0">
                      {card.content}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center">
            <div className="custom-pagination"></div>
          </div>
        </div>
      </div>

      {/* Global styles for Swiper customization */}
      <style jsx global>{`
        .custom-pagination {
          position: absolute;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .swiper-pagination-bullet {
          margin: 0 5px !important;
        }
        .swiper, .swiper-wrapper, .swiper-slide {
          overflow: visible !important;
          height: auto !important;
          position: relative !important;
        }
        .swiper-pagination {
          position: static !important;
        }
      `}</style>
    </div>
  );
}
