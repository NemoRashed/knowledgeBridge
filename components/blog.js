import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import Link from "next/link";
import Ai from "../asset/blog/ai.jpg";

const blogPosts = [
  {
    title: "The Future of Artificial Intelligence in Education",
    description:
      "Explore how AI is revolutionizing the education sector, from personalized learning experiences to automated grading systems. Discover the potential benefits and challenges of integrating AI into classrooms and online learning platforms.",
    date: "2023-06-15",
    image: Ai,
  },
];

export default function BlogPosts() {
  const [featuredPost, ...otherPosts] = blogPosts;

  return (
    <div className="min-h-screen bg-gradient-to-b bg-gray-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-32">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">
          Latest Insights
        </h1>

        {/* First Row: Featured Post */}
        <div className="mb-12">
          <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="md:flex">
              <div className="md:w-1/2 relative h-72 ">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105 rounded-lg"
                />
              </div>
              <div className="md:w-1/2 p-6 flex flex-col justify-between bg-gradient-to-br from-green-50 to-green-100">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                    {featuredPost.description}
                  </p>
                </div>
                <div>
                  <div className="flex items-center text-gray-500 mb-4">
                    <CalendarIcon className="w-4 h-4 mr-2" />
                    <time dateTime={featuredPost.date} className="text-xs">
                      {new Date(featuredPost.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white text-sm py-2">
                    Read Full Article
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Second Row: Read More Button */}
        <div className="flex justify-end mt-8">
          <Link href="/blog">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-300">
              Read More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
