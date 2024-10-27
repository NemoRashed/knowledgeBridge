"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import AboutImage from "../asset/about/about1.jpg";

import { FaBook, FaUsers, FaChalkboardTeacher, FaSmile } from "react-icons/fa";

export default function About() {
  const [counters, setCounters] = useState({
    courses: 0,
    students: 0,
    instructors: 0,
    satisfaction: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  const finalValues = {
    courses: 200,
    students: 200,
    instructors: 200,
    satisfaction: 200,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          startCounting();
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [hasAnimated]);

  const startCounting = () => {
    const duration = 2000; // 2 seconds
    const steps = 100; // Number of steps
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounters({
        courses: Math.round(progress * finalValues.courses),
        students: Math.round(progress * finalValues.students),
        instructors: Math.round(progress * finalValues.instructors),
        satisfaction: Math.round(progress * finalValues.satisfaction),
      });

      if (step === steps) {
        clearInterval(timer);
      }
    }, interval);
  };

  return (
    <div>
      <main className="flex flex-col lg:flex-row items-center justify-between gap-16 px-10 md:px-32 py-20  shadow-lg">
        <div className="lg:w-1/2">
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            About <span className="text-green-500">Us</span>
          </h1>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            We provide flexible, high-quality education designed to empower
            learners at every stage. Our mission is to help you unlock your
            potential and achieve your goals.
          </p>
          <div className="flex space-x-4">
            <a
              href="/courses"
              className="inline-block bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Courses
            </a>
            <a
              href="/about"
              className="inline-block border-2 border-yellow-300 text-green-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-500 hover:text-white transition-colors"
            >
              Know More
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="w-full h-full lg:h-[500px] py-44 bg-white bg-opacity-30 backdrop-filter backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <Image
              src={AboutImage}
              alt="3D Laptop on Desk with Code"
              layout="fill"
              objectFit="cover"
              className="transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-200 rounded-full filter blur-3xl opacity-70"></div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200 rounded-full filter blur-3xl opacity-70"></div>
        </div>
      </main>
      <div className="w-full bg-gray-50 py-12" ref={counterRef}>
        <div className="container mx-auto px-4 md:px-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <CounterBox
              icon={FaBook}
              count={counters.courses}
              label="Courses"
              suffix="+"
            />
            <CounterBox
              icon={FaUsers}
              count={counters.students}
              label="Students"
              suffix="+"
            />
            <CounterBox
              icon={FaChalkboardTeacher}
              count={counters.instructors}
              label="Instructors"
              suffix="+"
            />
            <CounterBox
              icon={FaSmile}
              count={counters.satisfaction}
              label="Satisfaction Rate"
              suffix="%"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function CounterBox({ icon: Icon, count, label, suffix = "" }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
      <div className="flex items-center justify-center mb-4">
        <div className="bg-green-100 rounded-full p-3">
          <Icon className="text-3xl text-green-600" />
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-4xl font-bold mb-2 text-gray-800">
          {count.toLocaleString()}
          <span className="text-green-500">{suffix}</span>
        </h3>
        <p className="text-lg font-medium text-gray-600">{label}</p>
      </div>
    </div>
  );
}
