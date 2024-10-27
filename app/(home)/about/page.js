import Image from "next/image";

import React from "react";

import Vission from "./../../../asset/about/vission.jpg";
import Mission from "../../../asset/about/mission.jpg";

import { Card, CardContent } from "@/components/ui/card";
import {
  BeakerIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

export default function page() {
  return (
    <div>
      <div className="min-h-screen bg-white p-8 flex items-center justify-center">
        <div className="max-w-6xl w-full space-y-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-black mb-8">
            About <span className="text-green-500">Us</span>
          </h1>

          {/* Vision Section */}
          <Card className=" border shadow-xl">
            <CardContent className="p-6 md:p-8 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0 md:mr-8">
                <Image
                  src={Vission}
                  alt="Our Vision"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-semibold mb-4 text-black">
                  <span className="text-yellow-300 text-4xl">Our</span> Vision
                </h2>
                <p className="text-gray-800">
                  We envision a world where technology seamlessly integrates
                  with daily life, enhancing human potential and fostering
                  global connectivity. Our aim is to be at the forefront of this
                  technological revolution, driving innovation that makes a
                  positive impact on society and the environment.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Mission Section */}
          <Card className=" border shadow-xl">
            <CardContent className="p-6 md:p-8 flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/2 mb-6 md:mb-0 md:ml-8">
                <Image
                  src={Mission}
                  alt="Our Mission"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-md w-96 h-72"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  <span className="text-yellow-300 text-4xl">Our</span> Mission
                </h2>
                <p className="text-gray-800">
                  Our mission is to deliver cutting-edge solutions that empower
                  businesses and individuals to thrive in the digital age. We
                  are committed to developing user-centric products, fostering a
                  culture of continuous learning, and maintaining the highest
                  standards of quality and ethical practices in everything we
                  do.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Values Section */}
          <Card className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg border shadow-xl">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-6 text-center text-black">
                <span className="text-yellow-300 text-4xl">Our</span> Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Innovation",
                    description: "Pushing boundaries and embracing new ideas",
                    icon: BeakerIcon,
                    color: "bg-blue-500",
                  },
                  {
                    title: "Integrity",
                    description:
                      "Upholding ethical standards in all our actions",
                    icon: ShieldCheckIcon,
                    color: "bg-green-500",
                  },
                  {
                    title: "Collaboration",
                    description: "Fostering teamwork and diverse perspectives",
                    icon: UserGroupIcon,
                    color: "bg-purple-500",
                  },
                ].map((value, index) => (
                  <div
                    key={index}
                    className="text-center flex flex-col items-center"
                  >
                    <div className={`${value.color} p-3 rounded-full mb-4`}>
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-black">
                      {value.title}
                    </h3>
                    <p className="text-gray-800">{value.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
