import { getEmbedUrl } from "../utils"; // Import the getEmbedUrl function

export type Course = {
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

const courses: Course[] = [
  {
    id: 1,
    title: "Psychosis, Delusions and Hallucinations",
    thumbnail: "https://i.ytimg.com/vi/ZEbWFEB1GFg/mqdefault.jpg",
    description: "Lecture on psychosis, delusions and hallucinations.",
    instructor: {
      name: "Dr. Farrell ",
      bio: "Dr. Farrell is a Harvard Medical School faculty member and board certified psychiatrist with a private practice in Boston. She has experience in patient care, teaching and in treating psychological disorders in various settings, including the Emergency Department, inpatient units and outpatient settings.",
    },
    duration: "7:13",
    videoUrl: getEmbedUrl("https://www.youtube.com/watch?v=ZEbWFEB1GFg"),
  },
  {
    id: 2,
    title: "Schizophrenia: Neurotransmitter Tracts, Causes, Treatment & Assessment",
    thumbnail: "https://i.ytimg.com/vi/xoIQKABdSbk/mqdefault.jpg",
    description: "Lecture on schizophrenia: neurotransmitter tracts, causes, treatment & assessment.",
    instructor: {
      name: "Dr. Jane Brown",
      bio: "Dr. Jane Brown is an experienced psychiatrist and professor of medicine.",
    },
    duration: "22:44",
    videoUrl: getEmbedUrl("https://www.youtube.com/watch?v=xoIQKABdSbk"),  },
  {
    id: 3,
    title: "Antipsychotics: Classification and Side Effects",
    thumbnail: "https://i.ytimg.com/vi/hKdJqmt9Lvg/mqdefault.jpg",
    description: "Lecture on antipsychotics: classification and side effects.",
    instructor: {
      name: "Dr. Emily White",
      bio: "Dr. Emily White is an experienced psychiatrist and professor of medicine.",
    },
    duration: "10:26",
    videoUrl: getEmbedUrl("https://www.youtube.com/watch?v=hKdJqmt9Lvg"),  },
  {
    id: 4,
    title: "Thought Disorders: Different Types & Diagnoses",
    thumbnail: "https://i.ytimg.com/vi/r09c87UmeYo/mqdefault.jpg",
    description: "Lecture on thought disorders: different types & diagnoses.",
    instructor: {
      name: "Dr. Michael Johnson",
      bio: "Dr. Michael Johnson is an experienced psychiatrist and professor of medicine.",
    },
    duration: "7:28",
    videoUrl: getEmbedUrl("https://www.youtube.com/watch?v=r09c87UmeYo"),  },
  {
    id: 5,
    title: "Alcohol and Delirium",
    thumbnail: "https://i.ytimg.com/vi/sT8tTMowpSU/mqdefault.jpg",
    description: "Lecture on alcohol and delirium.",
    instructor: {
      name: "Dr. Jane Smith",
      bio: "Dr. Jane Smith is an experienced psychiatrist and professor of medicine.",
    },
    duration: "12:54",
    videoUrl: getEmbedUrl("https://www.youtube.com/watch?v=sT8tTMowpSU"),  }
];

export function getCourses(): Course[] {
  return courses;
}

export function getCourseById(id: number): Course | undefined {
  return courses.find((course) => course.id === id);
}