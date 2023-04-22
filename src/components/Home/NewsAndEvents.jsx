import React from "react";
import EventCard from "../Home/Events/EventCard";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { RiNewspaperLine, RiCalendarEventLine } from "react-icons/ri";

const NewsAndEvents = () => {
  SwiperCore.use([Navigation, Pagination]);

  const events = [
    {
      id: 1,
      title: "Annual Sports Day",
      date: "25 Apr 2023",
      time: "10:00 AM - 2:00 PM",
      image: "https://domf5oio6qrcr.cloudfront.net/medialibrary/10992/b8b237ee-7cfe-4eab-b79b-dac389707899.jpg",
      description: "Join us for a day full of exciting sports events.",
      link: "/events/sports-day"
    },
    {
      id: 2,
      title: "Science Fair",
      date: "30 May 2023",
      time: "9:00 AM - 12:00 PM",
      image: "https://domf5oio6qrcr.cloudfront.net/medialibrary/10992/b8b237ee-7cfe-4eab-b79b-dac389707899.jpg",
      description: "Explore the world of science with hands-on experiments.",
      link: "/events/science-fair"
    },
    {
      id: 3,
      title: "Art Exhibition",
      date: "15 Jun 2023",
      time: "3:00 PM - 5:00 PM",
      image: "https://domf5oio6qrcr.cloudfront.net/medialibrary/10992/b8b237ee-7cfe-4eab-b79b-dac389707899.jpg",
      description: "Admire the creativity of our talented students.",
      link: "/events/art-exhibition"
    },
    {
      id: 3,
      title: "Art Exhibition",
      date: "15 Jun 2023",
      time: "3:00 PM - 5:00 PM",
      image: "https://domf5oio6qrcr.cloudfront.net/medialibrary/10992/b8b237ee-7cfe-4eab-b79b-dac389707899.jpg",
      description: "Admire the creativity of our talented students.",
      link: "/events/art-exhibition"
    },
    {
      id: 3,
      title: "Art Exhibition",
      date: "15 Jun 2023",
      time: "3:00 PM - 5:00 PM",
      image: "https://domf5oio6qrcr.cloudfront.net/medialibrary/10992/b8b237ee-7cfe-4eab-b79b-dac389707899.jpg",
      description: "Admire the creativity of our talented students.",
      link: "/events/art-exhibition"
    }
    
  ];
  
  return (
    <>
     <div className="bg-[#4E31AA] py-12 p-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-center mb-12">
          <RiNewspaperLine className="text-white text-3xl mr-2" />
          <h2 className="text-3xl font-bold text-white">News & Events</h2>
          <RiCalendarEventLine className="text-white text-3xl ml-2" />
        </div>
        <div className="flex flex-wrap  justify-center">
        <Swiper
  slidesPerView={3}
  spaceBetween={10}
  navigation
  pagination={{ clickable: true }}
  loop={true}
  autoplay={{ delay: 1000 }}
  breakpoints={{
    640: {
      slidesPerView: 1,   
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }}
>
  {events.map((event) => (
    <SwiperSlide key={event.id}>
      <EventCard event={event} />
    </SwiperSlide>
  ))}
</Swiper>

        </div>
      </div>
    </div>

   
    </>
   
  
  );
  
  
};

export default NewsAndEvents;
