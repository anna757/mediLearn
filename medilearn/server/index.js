const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const { courses } = require("./mockDatabase");
const app = express();

const typeDefs = gql`
type Query {
    courses: [Course!]!
    course(id: ID!): Course
  }
  
  type Course {
    id: ID!
    title: String!
    thumbnail: String!
    shortDescription: String!
    syllabus: [String!]!
    duration: String!
    instructor: Instructor!
    sampleVideoLessons: [VideoLesson!]!
  }
  
  type Instructor {
    name: String!
    avatar: String
    bio: String!
  }
  
  type VideoLesson {
    id: ID!
    title: String!
    videoUrl: String!
  }
`;

const resolvers = {
    Query: {
        courses: () => {
            // Fetch all courses from the database
            return courses;
        },
        course: (parent, args, context, info) => {
            // Fetch a single course by ID from the database
            return courses.find((course) => course.id === parseInt(args.id));
        },
    },
};


const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
