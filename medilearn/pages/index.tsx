import React, { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";
import Header from "../components/Header";
import { Course } from "../mockBackend";

const HomePage = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [search, setSearch] = useState('');
  const filterCourses = (courses: Course[], keyword: string) => {
    return courses.filter((course) =>
      course.title.toLowerCase().includes(keyword.toLowerCase())
    );
  };
  useEffect(() => {
    // Replace this with a function that fetches data from the actual backend
    import("../mockBackend").then((backend) => {
      setCourses(backend.getCourses());
    });
  }, []);
  return (
    <div>
      <Header onSearchChange={(value) => setSearch(value)} />      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", padding: "1rem" }}>
      {filterCourses(courses, search).map((course) => (          
      <CourseCard
            key={course.id}
            id={course.id}
            thumbnail={course.thumbnail}
            title={course.title}
            shortDescription={course.description}
            videoUrl={course.videoUrl} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;