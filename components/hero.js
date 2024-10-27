import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-5">
      <div className="h-[calc(100vh-6rem)] bg-cover bg-center bg-no-repeat relative">
        {/* Bubbles */}
        <div className="absolute top-[2%] left-[2%] w-40 h-40 rounded-full bg-green-400 bg-opacity-30 animate-bounce-slow"></div>
        <div className="absolute top-[10%] right-[5%] w-24 h-24 rounded-full bg-green-400 bg-opacity-30 animate-bounce-slow animation-delay-1000"></div>
        <div className="absolute bottom-[5%] left-[10%] w-32 h-32 rounded-full bg-yellow-400 bg-opacity-30 animate-bounce-slow animation-delay-2000"></div>
        <div className="absolute bottom-[15%] right-[15%] w-16 h-16 rounded-full bg-green-400 bg-opacity-30 animate-bounce-slow animation-delay-1500"></div>
        <div className="absolute top-[25%] left-[25%] w-20 h-20 rounded-full bg-green-400 bg-opacity-30 animate-bounce-slow animation-delay-2500"></div>
        <div className="absolute top-[35%] right-[2%] w-36 h-36 rounded-full bg-green-400 bg-opacity-30 animate-bounce-slow animation-delay-500"></div>
        <div className="absolute bottom-[2%] left-[35%] w-28 h-28 rounded-full bg-green-400 bg-opacity-30 animate-bounce-slow animation-delay-1750"></div>
        <div className="absolute top-[5%] left-[55%] w-12 h-12 rounded-full bg-green-400 bg-opacity-30 animate-bounce-slow animation-delay-2250"></div>
        <div className="absolute bottom-[10%] right-[35%] w-20 h-20 rounded-full bg-green-400 bg-opacity-30 animate-bounce-slow animation-delay-750"></div>

        <div className="relative flex h-full items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-3xl p-6 sm:p-8 text-center backdrop-blur-md bg-green-500 bg-opacity-80 rounded-xl shadow-lg relative">
            {/* Bubbles on top of the card */}
            <div className="absolute -top-24 -left-24 w-32 h-32 rounded-full bg-green-400 bg-opacity-30 animate-bounce-slow animation-delay-1250"></div>
            <div className="absolute -top-28 -right-20 w-24 h-24 rounded-full bg-yellow-400 bg-opacity-30 animate-bounce-slow animation-delay-2750"></div>
            <div className="absolute -bottom-28 -left-28 w-28 h-28 rounded-full bg-green-400 bg-opacity-30 animate-bounce-slow animation-delay-3000"></div>
            <div className="absolute -bottom-24 -right-24 w-20 h-20 rounded-full bg-green-400 bg-opacity-30 animate-bounce-slow animation-delay-3250"></div>

            <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white relative z-10">
              Empower Your Future. Learn Anytime, Anywhere
            </h1>
            <p className="mb-8 text-base sm:text-lg md:text-xl text-white text-opacity-90 relative z-10">
              Embark on a journey of knowledge and growth. Access world-class
              courses anytime, anywhere, and transform your future.
            </p>
            <Link
              href="/courses"
              className="inline-flex items-center justify-center rounded-full bg-yellow-300 px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-medium text-white shadow-md transition-all hover:bg-yellow-400 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellows-500 focus:ring-offset-2 relative z-10"
            >
              Start Learning Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
