import React from "react";
import styles from "./CourseDetails.module.css";

type Course = {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  duration: string;
  instructor: {
  name: string;
  bio: string;
  };
  videoUrl: string;
};

type CourseDetailsProps = {
  course: Course;
};

const CourseDetails = ({ course }: CourseDetailsProps) => {
  return (
    <div className={styles.courseDetails}>
      {/* Course summary, duration, and instructor info */}
      {/* ... */}

      {/* Syllabus */}
      {/* ... */}

      {/* Sample video lessons */}
      {/* ... */}
    </div>
  );
};

export default CourseDetails;