import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

const findImage = (id: string): ImagePlaceholder => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    throw new Error(`Image with id "${id}" not found.`);
  }
  return image;
};

export const personalInfo = {
  name: "Alex Doe",
  title: "Senior Software Engineer & Photographer",
  summary: "A creative and detail-oriented Senior Software Engineer with over 8 years of experience in building scalable web applications. Passionate about clean code, intuitive user experiences, and capturing the world through photography. Seeking to leverage technical expertise and a creative eye in a challenging new role.",
  profilePicture: findImage('profile_picture'),
  skills: ["React", "Next.js", "TypeScript", "Node.js", "GraphQL", "UI/UX Design", "Photography"]
};

export const socialLinks = {
  email: "alex.doe@example.com",
  phone: "+1 (555) 123-4567",
  linkedin: "https://linkedin.com/in/alexdoe",
  github: "https://github.com/alexdoe",
  twitter: "https://twitter.com/alexdoe",
};

export const academicRecords = [
  {
    institution: "University of Technology",
    degree: "Master of Science in Computer Science",
    period: "2014 - 2016",
    description: "Focused on machine learning and distributed systems. Thesis project on real-time data processing pipelines."
  },
  {
    institution: "State University",
    degree: "Bachelor of Science in Software Engineering",
    period: "2010 - 2014",
    description: "Graduated with honors. Active member of the coding club and participated in several hackathons."
  }
];

export const workExperience = [
  {
    company: "Innovate Inc.",
    role: "Senior Software Engineer",
    period: "2019 - Present",
    description: "Led the development of a new customer-facing analytics dashboard using Next.js and TypeScript. Mentored junior engineers and improved code review processes, reducing bugs by 20%."
  },
  {
    company: "Tech Solutions LLC",
    role: "Software Engineer",
    period: "2016 - 2019",
    description: "Developed and maintained features for a large-scale e-commerce platform. Worked on both front-end (React) and back-end (Node.js) systems, contributing to a 15% increase in site performance."
  },
  {
    company: "Digital Creations",
    role: "Junior Developer",
    period: "2014 - 2016",
    description: "Assisted in building responsive websites for various clients using HTML, CSS, and JavaScript. Gained foundational experience in agile development methodologies."
  }
];

export const projects = [
  {
    title: "Project Nova",
    description: "A collaborative project management tool designed for remote teams, featuring real-time updates and task tracking.",
    technologies: ["Next.js", "Firebase", "Tailwind CSS"],
    image: findImage('project_1'),
    repoLink: "https://github.com/alexdoe/nova",
    liveLink: "#"
  },
  {
    title: "DataViz",
    description: "A data visualization library for creating interactive charts and graphs with a simple and intuitive API.",
    technologies: ["D3.js", "TypeScript", "React"],
    image: findImage('project_2'),
    repoLink: "https://github.com/alexdoe/dataviz",
    liveLink: "#"
  },
  {
    title: "ConnectApp",
    description: "A mobile-first social networking application concept with a focus on privacy and user control.",
    technologies: ["React Native", "GraphQL", "PostgreSQL"],
    image: findImage('project_3'),
    repoLink: "https://github.com/alexdoe/connectapp",
    liveLink: null
  }
];

export const recognitions = [
  {
    title: "Certified Kubernetes Application Developer",
    issuer: "The Linux Foundation",
    date: "2022",
    description: "Demonstrated expertise in designing, building, and deploying cloud-native applications on Kubernetes."
  },
  {
    title: "Innovator of the Year Award",
    issuer: "Innovate Inc.",
    date: "2021",
    description: "Awarded for outstanding contributions to the company's flagship product and leadership within the engineering team."
  },
  {
    title: "International Photo Contest - Honorable Mention",
    issuer: "Photography World",
    date: "2020",
    description: "Recognized for a landscape photograph in a highly competitive international contest."
  }
];

export const galleryImages = [
  findImage('gallery_1'),
  findImage('gallery_2'),
  findImage('gallery_3'),
  findImage('gallery_4'),
  findImage('gallery_5'),
  findImage('gallery_6'),
];
