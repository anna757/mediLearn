import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CourseDetails from "../../components/CourseDetails";
import Header from "../../components/Header";
import { Course } from "../../mockBackend";

const CourseDetailPage = () => {
  const router = useRouter();
  const { courseId } = router.query;
  const [course, setCourse] = useState<Course | null>(null);

  useEffect(() => {
    if (courseId) {
      // Replace this with a function that fetches data from the actual backend
      import("../../mockBackend").then((backend) => {
        setCourse(backend.getCourseById(parseInt(courseId as string, 10)));      });
    }
  }, [courseId]);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <CourseDetails course={course} />
    </div>
  );
};

export default CourseDetailPage;