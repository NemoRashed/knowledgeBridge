"use client";

import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, Trash2 } from "lucide-react";

export default function CourseForm() {
  const [activeTab, setActiveTab] = useState("details");
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      title: "",
      category: "",
      subCategory: "",
      description: "",
      level: "",
      price: "",
      sections: [
        {
          title: "",
          lessons: [
            { title: "", description: "", videoUrl: "", resourceUrl: "" },
          ],
        },
      ],
    },
  });
  const {
    fields: sectionFields,
    append: appendSection,
    remove: removeSection,
  } = useFieldArray({
    control,
    name: "sections",
  });

  const onSubmit = (data) => {
    console.log(data);
    // Here you would typically send the data to your backend
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-4xl mx-auto p-6 space-y-8"
    >
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="details">Course Details</TabsTrigger>
          <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
        </TabsList>
        <TabsContent value="details" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Course Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input id="title" {...register("title")} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select
                    onValueChange={(value) =>
                      register("category").onChange({ target: { value } })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="programming">Programming</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="subCategory">Sub Category</Label>
                  <Input id="subCategory" {...register("subCategory")} />
                </div>
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" {...register("description")} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="level">Level</Label>
                  <Select
                    onValueChange={(value) =>
                      register("level").onChange({ target: { value } })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="price">Price</Label>
                  <Input id="price" type="number" {...register("price")} />
                </div>
              </div>
              <div>
                <Label htmlFor="banner">Course Banner Image</Label>
                <Input id="banner" type="file" accept="image/*" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="curriculum" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Curriculum</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {sectionFields.map((section, sectionIndex) => (
                <Card key={section.id}>
                  <CardHeader>
                    <CardTitle>
                      <Input
                        placeholder="Section Title"
                        {...register(`sections.${sectionIndex}.title`)}
                      />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {section.lessons.map((lesson, lessonIndex) => (
                      <div key={lesson.id} className="space-y-2 mb-4">
                        <Input
                          placeholder="Lesson Title"
                          {...register(
                            `sections.${sectionIndex}.lessons.${lessonIndex}.title`
                          )}
                        />
                        <Textarea
                          placeholder="Lesson Description"
                          {...register(
                            `sections.${sectionIndex}.lessons.${lessonIndex}.description`
                          )}
                        />
                        <Input
                          placeholder="Video URL"
                          {...register(
                            `sections.${sectionIndex}.lessons.${lessonIndex}.videoUrl`
                          )}
                        />
                        <Input
                          placeholder="Resource URL"
                          {...register(
                            `sections.${sectionIndex}.lessons.${lessonIndex}.resourceUrl`
                          )}
                        />
                      </div>
                    ))}
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="mt-2 bg-yellow-300"
                      onClick={() => {
                        const lessons = section.lessons || [];
                        lessons.push({
                          title: "",
                          description: "",
                          videoUrl: "",
                          resourceUrl: "",
                        });
                      }}
                    >
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Add Lesson
                    </Button>
                  </CardContent>
                </Card>
              ))}
              <div className="flex justify-between">
                <Button
                  type="button"
                  onClick={() =>
                    appendSection({
                      title: "",
                      lessons: [
                        {
                          title: "",
                          description: "",
                          videoUrl: "",
                          resourceUrl: "",
                        },
                      ],
                    })
                  }
                >
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add Section
                </Button>
                <Button
                  type="button"
                  variant="destructive"
                  onClick={() => removeSection(sectionFields.length - 1)}
                  disabled={sectionFields.length === 1}
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Remove Last Section
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      <Button type="submit" className="w-full bg-green-500 hover:bg-green-600">
        Submit Course
      </Button>
    </form>
  );
}
