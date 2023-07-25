import React, {useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { ClassType } from '@/shared/types';
import Class from "./Class";

const classes: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description: "Weight training classes are specialized fitness sessions designed to help individuals build strength, increase muscle mass, and improve overall body composition.",
        image: image1,
    },
    {
        name: "Yoga Classes",
        description: "Yoga classes in the gym offer a holistic approach to fitness and well-being, combining physical exercises, breath control, meditation, and relaxation techniques. ",
        image: image2,
    },
    {
        name: "Ab Core Classes",
        description: "Ab core classes are specialized fitness sessions focused on strengthening and toning the abdominal muscles, also known as the core. The core muscles include the rectus abdominis, obliques, transverse abdominis, and the lower back muscles.",
        image: image3,
    },
    {
        name: "Adventure Classes",
        description: "Adventure classes in the gym offer a unique and exhilarating fitness experience, taking participants out of the traditional gym setting and into the realm of outdoor adventure and physical challenges.",
        image: image4,
    },
    {
        name: "Fitness Classes",
        description: "These classes provide a structured and guided approach to exercise, led by certified fitness instructors who create engaging and effective workouts.",
        image: image5,
    },
    {
        name: "Training Classes",
        description: "The structured and supervised nature of training classes ensures participants perform exercises correctly and safely, maximizing results while minimizing the risk of injury. Additionally, the supportive and motivating environment of group training can boost accountability and adherence to fitness routines.",
        image: image6,
    },
  ];
const AutoplayCarousel = () => {
  const settings = {
    dots: false,       // Hide navigation dots
    infinite: true,    // Infinite loop
    speed: 6000,       // Transition speed in milliseconds (e.g., 3 seconds)
    slidesToShow: 1,   // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true,    // Auto-play the carousel
    autoplaySpeed: 0,  // Set to 0 to enable the ticker effect
    cssEase: 'linear', // Use linear easing for smoother scrolling
    variableWidth: true,// Auto-play speed in milliseconds (e.g., 3 seconds)
  };

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6
    // Add more image URLs as needed
  ];

const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Function to handle mouse enter event
  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  // Function to handle mouse leave event
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div
          key={index}
          className="relative cursor-pointer group"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="px-4 py-2 rounded-md h-[350px] w-[420px]"
          />
          {/* Show the description only when the current image is being hovered */}
          {hoveredIndex === index && (
            <div
              className="absolute bottom-0 left-0 right-0 py-2 px-2 text-white text-center opacity-0 
              transition-opacity duration-300 group-hover:opacity-100
              whitespace-nowrap"
            >
              <Class
                key={`${classes[index].name}-${index}`}
                name={classes[index].name}
                description={classes[index].description}
                image={classes[index].image}
              />
            </div>
          )}
        </div>
      ))}
    </Slider>
  );
};

export default AutoplayCarousel;
