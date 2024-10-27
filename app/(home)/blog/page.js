import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";

import Link from "next/link";
import Ai from "@/asset/blog/ai.jpg";

const blogPosts = [
  {
    title: "The Future of Artificial Intelligence in Education",
    description:
      "Explore how AI is revolutionizing the education sector, from personalized learning experiences to automated grading systems. Discover the potential benefits and challenges of integrating AI into classrooms and online learning platforms.",
    date: "2023-06-15",
    image: Ai,
  },
  {
    title: "Sustainable Web Design: Reducing Digital Carbon Footprint",
    description:
      "Learn about eco-friendly web design practices that can help reduce the environmental impact of digital products and services.",
    date: "2023-06-22",
    image: Ai,
  },
  {
    title: "The Rise of No-Code Platforms: Empowering Non-Technical Creators",
    description:
      "Discover how no-code platforms are democratizing app development and enabling more people to bring their ideas to life.",
    date: "2023-06-29",
    image: Ai,
  },
  {
    title: "The Rise of No-Code Platforms: Empowering Non-Technical Creators",
    description:
      "Discover how no-code platforms are democratizing app development and enabling more people to bring their ideas to life.",
    date: "2023-06-29",
    image: Ai,
  },
];

export default function page() {
  const [featuredPost, ...otherPosts] = blogPosts;

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
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
                    className="transition-transform duration-300 hover:scale-105 rounded-md"
                  />
                </div>
                <div className="md:w-1/2 p-6 flex flex-col justify-between bg-gradient-to-br bg-green-100">
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
                        {new Date(featuredPost.date).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </time>
                    </div>
                    <Link href="/blog/blogdetail">
                      <Button className="w-full bg-green-500 hover:bg-green-600 text-white text-sm py-2">
                        Read Full Article
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Second Row: Other Posts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherPosts.map((post, index) => (
              <Card
                key={index}
                className="overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-4 bg-white">
                  <h2 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-3 text-sm line-clamp-2">
                    {post.description}
                  </p>
                  <div className="flex items-center text-gray-500 mb-3">
                    <CalendarIcon className="w-3 h-3 mr-1" />
                    <time dateTime={post.date} className="text-xs">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                </CardContent>
                <CardFooter className="bg-gray-50 p-3">
                  <Button
                    variant="outline"
                    className="w-full hover:bg-green-500 text-xs py-1"
                  >
                    Read More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
