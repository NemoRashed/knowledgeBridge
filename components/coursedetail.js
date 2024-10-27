"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Clock,
  BarChart,
  CheckCircle,
  PlayCircle,
  BookOpen,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CourseDetail() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);
  const [isZaadFormOpen, setIsZaadFormOpen] = useState(false);
  const [isEdahabFormOpen, setIsEdahabFormOpen] = useState(false);
  const [isMastercardFormOpen, setIsMastercardFormOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [paymentForm, setPaymentForm] = useState({
    fullName: "",
    number: "",
    price: "",
    dollar: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const router = useRouter();
  const { isLoaded, isSignedIn, user } = useUser();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const course = {
    title: "Advanced React and Redux: Building Complex Applications",
    instructor: "Jane Doe",
    rate: 4.8,
    date: "Last updated: June 2023",
    description:
      "Master advanced React concepts and Redux state management to build scalable and maintainable web applications. This course covers advanced hooks, custom middleware, and complex state management patterns.",
    level: "Advanced",
    learningOutcomes: [
      "Implement advanced React patterns and hooks",
      "Master Redux for complex state management",
      "Build scalable and maintainable React applications",
      "Optimize performance in large React applications",
      "Implement advanced routing and code-splitting techniques",
    ],
    previewVideoUrl: "https://example.com/preview-video.mp4",
    price: 99.99,
    requirements: [
      "Solid understanding of JavaScript and ES6+",
      "Basic knowledge of React and Redux",
      "Familiarity with modern web development practices",
    ],
    content: [
      {
        title: "Introduction to Advanced React Concepts",
        lessons: 5,
        duration: "1h 30m",
      },
      {
        title: "Deep Dive into Redux and Middleware",
        lessons: 8,
        duration: "2h 45m",
      },
      {
        title: "Performance Optimization Techniques",
        lessons: 6,
        duration: "2h 15m",
      },
      {
        title: "Advanced Routing and Code Splitting",
        lessons: 4,
        duration: "1h 45m",
      },
      {
        title: "Testing and Debugging Complex React Apps",
        lessons: 7,
        duration: "2h 30m",
      },
    ],
  };

  const handleEnrollClick = () => {
    if (!isLoaded) {
      return;
    }

    if (isSignedIn) {
      setIsPaymentDialogOpen(true);
    } else {
      // Encode the current URL to use as a redirect parameter
      const redirectUrl = encodeURIComponent(window.location.href);
      router.push(`/sign-up?redirect=${redirectUrl}`);
    }
  };

  const handlePaymentMethodSelect = (method) => {
    if (method === "Zaad") {
      setIsZaadFormOpen(true);
    } else if (method === "E-dahab") {
      setIsEdahabFormOpen(true);
    } else if (method === "Mastercard") {
      setIsMastercardFormOpen(true);
    } else {
      console.log(`Selected payment method: ${method}`);
    }
    setIsPaymentDialogOpen(false);
  };

  const handleFormChange = (e) => {
    setPaymentForm({ ...paymentForm, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e, method) => {
    e.preventDefault();
    console.log(`${method} form submitted:`, paymentForm);
    setIsZaadFormOpen(false);
    setIsEdahabFormOpen(false);
    setIsMastercardFormOpen(false);
    // Handle form submission logic here
  };

  if (!isMounted || !isLoaded) {
    return null; // or a loading spinner
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-8 sm:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="p-8 md:p-12 lg:p-16 space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                {course.title}
              </h1>
              <div className="flex items-center space-x-4">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  alt={course.instructor}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <p className="text-lg font-medium text-gray-900">
                    {course.instructor}
                  </p>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="ml-1 text-sm text-gray-600">
                      {course.rate}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-500">{course.date}</p>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-gray-700">{course.description}</p>
              <Badge
                variant="secondary"
                className="text-sm bg-yellow-300 text-yellow-800"
              >
                {course.level}
              </Badge>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">What you'll learn</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.learningOutcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative aspect-video">
              {!isVideoPlaying ? (
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <Button
                    onClick={() => setIsVideoPlaying(true)}
                    className="text-white bg-purple-600 hover:bg-purple-700"
                  >
                    <PlayCircle className="w-6 h-6 mr-2" />
                    Play Preview
                  </Button>
                </div>
              ) : (
                <video
                  src={course.previewVideoUrl}
                  controls
                  className="w-full h-full"
                  onEnded={() => setIsVideoPlaying(false)}
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Course Content</h2>
              <Accordion type="single" collapsible className="w-full">
                {course.content.map((section, index) => (
                  <AccordionItem key={index} value={`section-${index}`}>
                    <AccordionTrigger className="text-left">
                      <div className="flex justify-between w-full items-center">
                        <div className="flex items-center">
                          <BookOpen className="w-5 h-5 mr-2 text-green-500" />
                          <span>{section.title}</span>
                        </div>
                        <span className="text-sm text-gray-500">
                          {section.lessons} lessons • {section.duration}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2">
                        {Array.from({ length: section.lessons }).map(
                          (_, lessonIndex) => (
                            <li key={lessonIndex} className="flex items-center">
                              <PlayCircle className="w-4 h-4 mr-2 text-gray-400" />
                              <span>Lesson {lessonIndex + 1}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Requirements</h2>
              <ul className="list-none space-y-2">
                {course.requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-2 flex-shrink-0"></div>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Enroll in this course</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-3xl font-bold">
                      ${course.price.toFixed(2)}
                    </span>
                    <span className="text-xl text-gray-500 line-through">
                      ${(course.price * 1.2).toFixed(2)}
                    </span>
                  </div>
                  <Button
                    className="bg-yellow-300 hover:bg-yellow-400 text-yellow-800"
                    onClick={handleEnrollClick}
                  >
                    Enroll Now
                  </Button>
                </div>
                <p className="text-sm text-gray-500">
                  30-day money-back guarantee • Full lifetime access
                </p>
              </CardContent>
            </Card>

            <Dialog
              open={isPaymentDialogOpen}
              onOpenChange={setIsPaymentDialogOpen}
            >
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Select Payment Method</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <Button onClick={() => handlePaymentMethodSelect("Zaad")}>
                    Zaad Payment
                  </Button>
                  <Button onClick={() => handlePaymentMethodSelect("E-dahab")}>
                    E-dahab Payment
                  </Button>
                  <Button
                    onClick={() => handlePaymentMethodSelect("Mastercard")}
                  >
                    Mastercard Payment
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog open={isZaadFormOpen} onOpenChange={setIsZaadFormOpen}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Zaad Payment</DialogTitle>
                </DialogHeader>
                <form
                  onSubmit={(e) => handleFormSubmit(e, "Zaad")}
                  className="space-y-4"
                >
                  <div>
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={paymentForm.fullName}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="number">Number</Label>
                    <Input
                      id="number"
                      name="number"
                      value={paymentForm.number}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="price">Price</Label>
                    <Input
                      id="price"
                      name="price"
                      value={paymentForm.price}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="dollar">Dollar</Label>
                    <Input
                      id="dollar"
                      name="dollar"
                      value={paymentForm.dollar}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  <Button type="submit">Submit</Button>
                </form>
              </DialogContent>
            </Dialog>

            <Dialog open={isEdahabFormOpen} onOpenChange={setIsEdahabFormOpen}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>E-dahab Payment</DialogTitle>
                </DialogHeader>
                <form
                  onSubmit={(e) => handleFormSubmit(e, "E-dahab")}
                  className="space-y-4"
                >
                  <div>
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={paymentForm.fullName}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="number">Number</Label>
                    <Input
                      id="number"
                      name="number"
                      value={paymentForm.number}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="price">Price</Label>
                    <Input
                      id="price"
                      name="price"
                      value={paymentForm.price}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="dollar">Dollar</Label>
                    <Input
                      id="dollar"
                      name="dollar"
                      value={paymentForm.dollar}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  <Button type="submit">Submit</Button>
                </form>
              </DialogContent>
            </Dialog>

            <Dialog
              open={isMastercardFormOpen}
              onOpenChange={setIsMastercardFormOpen}
            >
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Mastercard Payment</DialogTitle>
                </DialogHeader>
                <form
                  onSubmit={(e) => handleFormSubmit(e, "Mastercard")}
                  className="space-y-4"
                >
                  <div>
                    <Label htmlFor="cardNumber">Card Number:</Label>
                    <Input
                      id="cardNumber"
                      name="cardNumber"
                      value={paymentForm.cardNumber}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  <div className="flex space-x-4">
                    <div className="flex-1">
                      <Label htmlFor="expirationDate">Expiration Date:</Label>
                      <Input
                        id="expirationDate"
                        name="expirationDate"
                        value={paymentForm.expirationDate}
                        onChange={handleFormChange}
                        placeholder="MM/YY"
                        required
                      />
                    </div>
                    <div className="flex-1">
                      <Label htmlFor="cvv">CVV:</Label>
                      <Input
                        id="cvv"
                        name="cvv"
                        value={paymentForm.cvv}
                        onChange={handleFormChange}
                        required
                      />
                    </div>
                  </div>
                  <Button type="submit">Submit</Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}
