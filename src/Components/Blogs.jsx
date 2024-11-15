import React from "react";
import img1 from "../assets/img/blog1.jpg";
import img2 from "../assets/img/blog2.jpg";
import img3 from "../assets/img/blog3.jpg";
import img4 from "../assets/img/blog4.jpg";
import img5 from "../assets/img/blog5.jpg";
import img6 from "../assets/img/blog6.jpg";
import BlogCard from "../Layouts/BlogCard";

const Blogs = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
      <div className="flex flex-col items-center justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-center">
            VitalWave Insights
          </h1>
          <p className="mt-2 text-center lg:text-right">
            Bringing essential healthcare knowledge and innovation to remote communities.
          </p>
        </div>
      </div>
      <div className="my-8">
        <div className="flex flex-wrap justify-center gap-5">
          <BlogCard
            img={img1}
            headlines="Innovations in Remote Cardiac Care"
            description="How portable ECG technology is transforming cardiac monitoring in rural areas, offering patients life-saving assessments without the need for travel."
          />
          <BlogCard
            img={img2}
            headlines="Bridging Healthcare Gaps in Remote Communities"
            description="Exploring ways to improve healthcare accessibility for remote communities through mobile clinics, telemedicine, and real-time health data."
          />
          <BlogCard
            img={img3}
            headlines="Empowering Local Caregivers with Technology"
            description="A closer look at how ECG and other portable health technologies empower local caregivers to provide timely assessments and connect with specialists."
          />
          <BlogCard
            img={img4}
            headlines="Early Detection of Cardiac Conditions"
            description="The importance of early cardiac condition detection in underserved areas and how VitalWave's technology makes it possible."
          />
          <BlogCard
            img={img5}
            headlines="Improving Patient Outcomes with Real-Time Data"
            description="Understanding how instant data transfer improves outcomes by connecting rural patients with healthcare professionals in real time."
          />
          <BlogCard
            img={img6}
            headlines="Health Education for Remote Communities"
            description="Providing essential healthcare education to remote populations, enabling self-monitoring and informed health choices."
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
