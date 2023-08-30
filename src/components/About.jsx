import React from "react";

export const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-slate-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-16">
          Hello there! I'm Apeksha, a curious soul with a passion for
          exploration and learning. Originally from a small town. I've always
          been captivated by the world of technology and its potential to shape
          the future. Iam currently pusrsuing my degree in Computer Science and
          Engineering. I have keen interest in Web development and also in
          cybersecurity.
        </p>
        <br />
        <p className="text-xl">
          When I'm not coding or debugging, you'll often find me engaging in
          outdoor activities like playing sports. Volleyball is my favourite
          sport. I find that these activities provide a much-needed balance to
          the world of coding, allowing me to recharge and gain fresh
          perspectives. As a computer science engineer, my ultimate goal is to
          leverage technology to solve real-world challenges and make a positive
          impact. I believe that technology has the potential to transform
          industries, improve lives, and shape a better future. I'm driven by
          the desire to create innovative solutions that enhance efficiency,
          accessibility, and sustainability.
        </p>
      </div>
    </div>
  );
};
