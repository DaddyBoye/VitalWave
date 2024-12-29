import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  ArrowLeft,
  ArrowRight,
  Users,
  Heart,
  Clock,
  MapPin,
} from "lucide-react";

import doc1 from "../assets/img/doc1.jpg";
import doc2 from "../assets/img/doc2.jpg";
import doc3 from "../assets/img/doc3.jpg";

const CommunityImpact = () => {
  const data = [
    {
      img: doc1,
      location: "Offinso, Ashanti Region, Ghana",
      population: "25,000+",
      livesImpacted: "1,000+",
      implementationDate: "Since 2024",
      successStory:
        "Reduced cardiac diagnosis time from 14 days to just 24 hours",
      healthcarePartner: "Offinso Rural Health Center",
    },
    {
      img: doc2,
      location: "Ejisu, Ashanti Region, Ghana",
      population: "18,000+",
      livesImpacted: "3,200+",
      implementationDate: "Since 2023",
      successStory: "Connected 15 remote villages to cardiac specialists",
      healthcarePartner: "Ejisu Community Health Center",
    },
    {
      img: doc3,
      location: "Ayeduase, Ashanti Region, Ghana",
      population: "12,000+",
      livesImpacted: "2,800+",
      implementationDate: "Since 2023",
      successStory: "First-ever ECG services in Ayeduase and its environs",
      healthcarePartner: "Ayeduase Health Clinic",
    },
  ];

  const slider = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Communities Transformed
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how our ECG technology is revolutionizing cardiac care in
            remote communities around the world, bringing essential healthcare
            to those who need it most.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => slider.current.slickPrev()}
            className="p-3 rounded-full bg-white shadow-lg hover:bg-blue-50 transition-colors duration-200 group"
            aria-label="Previous slide"
          >
            <ArrowLeft className="w-6 h-6 text-backgroundColor group-hover:scale-110 transition-transform duration-200" />
          </button>
          <button
            onClick={() => slider.current.slickNext()}
            className="p-3 rounded-full bg-white shadow-lg hover:bg-blue-50 transition-colors duration-200 group"
            aria-label="Next slide"
          >
            <ArrowRight className="w-6 h-6 text-backgroundColor group-hover:scale-110 transition-transform duration-200" />
          </button>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="max-w-7xl mx-auto">
        <Slider ref={slider} {...settings}>
          {data.map((community, index) => (
            <div key={index} className="px-4 py-2">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
                {/* Image Section */}
                <div className="relative">
                  <img
                    src={community.img}
                    alt={`Healthcare in ${community.location}`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white text-xl font-bold">
                      {community.location}
                    </h3>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-backgroundColor" />
                      <div>
                        <p className="text-sm text-gray-600">Population</p>
                        <p className="font-semibold">{community.population}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart className="w-5 h-5 text-backgroundColor" />
                      <div>
                        <p className="text-sm text-gray-600">Lives Impacted</p>
                        <p className="font-semibold">
                          {community.livesImpacted}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Success Story */}
                  <div className="mb-4 pb-4 border-b border-gray-100">
                    <p className="text-gray-600 font-medium">Success Story:</p>
                    <p className="text-gray-800">{community.successStory}</p>
                  </div>

                  {/* Partner & Timeline */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{community.healthcarePartner}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{community.implementationDate}</span>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <button className="w-full mt-6 bg-backgroundColor text-white py-3 rounded-lg hover:bg-green-600 transition-colors duration-200">
                    View Impact Story
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CommunityImpact;
