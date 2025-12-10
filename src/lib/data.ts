import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';
import { Award } from 'lucide-react';
import * as React from 'react';

const findImage = (id: string): ImagePlaceholder => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    throw new Error(`Image with id "${id}" not found.`);
  }
  return image;
};

export const personalInfo = {
  name: "Veersen Jadhav",
  title: "Senior Software Engineer by Profession & Photographer by Paasion",
  summary: "A creative and detail-oriented Senior Software Engineer with over 5 years of experience in building scalable web applications. Passionate about clean and quality code, intuitive product formation, and capturing the world through photography. Seeking to leverage technical expertise and a creative eye in a challenging new role.",
  profilePicture: findImage('profile_picture'),
  skills: ["C#", ".Net Core", "Python", "Nvidia CUDA Framework", "Machine Learning", "Deep Learning", "Photography"]
};

export const socialLinks = {
  email: "veersenjadhav@gmail.com",
  linkedin: "https://www.linkedin.com/in/veersenjadhav",
  github: "https://github.com/veersenjadhav",
  twitter: "https://x.com/veersen_jadhav",
};

export const academicRecords = [
  {
    institution: "Walchand College of Engineering, Sangli (An Govt. Aided Autonomous Institute)",
    degree: "M. Tech. in Computer Science and Engineering",
    period: "2018 - 2020",
    description: "Focused on High Performance Computing and Parallel Computing domains. Thesis project with colab (DELL EMC) on Scaling Up Machine Learning Algorithms using OpenMP and CUDA."
  },
  {
    institution: "Shivaji University, Kolhapur",
    degree: "Bachelor of Engineering in Computer Science and Engineering",
    period: "2014 - 2018",
    description: "Graduated with First Class. Active member of the coding club, Computer Science Students' Association and participated in several hackathons."
  }
];

export const workExperience = [
  {
    company: "Sagitec Solutions LLC., Pune",
    role: "Senior Software Engineer",
    period: "2024 - Present",
    description: "I became a key developer driving critical enhancements to the Neospin product. I took the lead in developing and implementing the complex State Tax calculations logic for more than 20 different US states. I am a key developer in developing Payroll and improving the batch execution process for several major customers. This helped in running large-scale data operations much faster and more efficiently. All my development work, enhancements, and features are completed while strictly following the SAFe's Agile methodology, ensuring quality code and timely delivery. Also as a Senior Developer, I provide support to multiple customers. This involves delivering necessary configurations and customizations within the product while always making sure of the code quality and reliablity."
  },
  {
    company: "Sagitec Solutions LLC., Pune",
    role: "Software Engineer",
    period: "2020 - 2024",
    description: "As a Software Engineer, I was a core developer primarily focused on the back-end logic of the Neospin product. This product is a crucial platform designed specifically for the US Pension domain. My main responsibility was to develop and enhance the software, contributing heavily to the complex retiree-side calculations. Throughout this role, I ensured that every development met the specific needs of our customers, while always keeping a the focus on the required business rules and processes of the pension industry. My contributions helped maintain the accuracy and functionality of this core financial product."
  },
  {
    company: "DELL EMC, Pune",
    role: "Intern",
    period: "2019 - 2020",
    description: "Focused on scaling Machine Learning algorithms for a rule-based log analysis engine that used a Reinforcement Decision Tree (Machine Learning) algorithm. I effectively increased the engine's performance by implementing parallel computing using OpenMP for multi-core CPU optimization and CUDA for GPU-accelerated processing. This work made the log analysis process significantly faster and more efficient."
  }
];

export const projects = [
  {
    title: "Project Nova",
    description: "A collaborative project management tool designed for remote teams, featuring real-time updates and task tracking.",
    technologies: ["Next.js", "Firebase", "Tailwind CSS"],
    image: findImage('project_1'),
    repoLink: "https://github.com/veejay/nova",
    liveLink: "#"
  },
  {
    title: "DataViz",
    description: "A data visualization library for creating interactive charts and graphs with a simple and intuitive API.",
    technologies: ["D3.js", "TypeScript", "React"],
    image: findImage('project_2'),
    repoLink: "https://github.com/veejay/dataviz",
    liveLink: "#"
  },
  {
    title: "ConnectApp",
    description: "A mobile-first social networking application concept with a focus on privacy and user control.",
    technologies: ["React Native", "GraphQL", "PostgreSQL"],
    image: findImage('project_3'),
    repoLink: "https://github.com/veejay/connectapp",
    liveLink: null
  }
];

export const blogs = [
  {
    title: "The Art of Clean Code",
    description: "Exploring the principles of writing clean, readable, and maintainable code in modern software development.",
    image: findImage('blog_1'),
    link: "#"
  },
  {
    title: "A Deep Dive into React Hooks",
    description: "A comprehensive guide to understanding and mastering React Hooks for more efficient and powerful components.",
    image: findImage('blog_2'),
    link: "#"
  },
  {
    title: "UI vs. UX: A Developer's Guide",
    description: "Demystifying the relationship between User Interface and User Experience from a developer's perspective.",
    image: findImage('blog_3'),
    link: "#"
  },
  {
    title: "Mastering TypeScript",
    description: "Tips and tricks for leveraging TypeScript to build robust, type-safe applications at scale.",
    image: findImage('blog_4'),
    link: "#"
  },
  {
    title: "The Lens: A Photographer's Journal",
    description: "A personal blog sharing stories and techniques behind my favorite photographs.",
    image: findImage('blog_5'),
    link: "#"
  }
];


export const recognitions = [
  {
    title: "Microsoft Certified: Full Stack Developer",
    issuer: "Microsoft",
    date: "2023",
    description: "Earned certification demonstrating expertise in front-end and back-end web development with Microsoft technologies.",
    icon: 'https://picsum.photos/seed/mslogo/32/32',
    link: "#",
    showLink: true
  },
  {
    title: "Certified Kubernetes Application Developer",
    issuer: "The Linux Foundation",
    date: "2022",
    description: "Demonstrated expertise in designing, building, and deploying cloud-native applications on Kubernetes.",
    icon: Award,
    link: "#",
    showLink: true
  },
  {
    title: "Innovator of the Year Award",
    issuer: "Innovate Inc.",
    date: "2021",
    description: "Awarded for outstanding contributions to the company's flagship product and leadership within the engineering team.",
    icon: Award,
    link: null,
    showLink: false
  },
  {
    title: "International Photo Contest - Honorable Mention",
    issuer: "Photography World",
    date: "2020",
    description: "Recognized for a landscape photograph in a highly competitive international contest.",
    icon: Award,
    link: null,
    showLink: false
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
