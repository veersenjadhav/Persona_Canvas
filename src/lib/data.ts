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
  title: "Senior Software Engineer by Profession & Photographer by Pasion",
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
    title: "Neospin : Public Sector Pension Modernization Initiative",
    description: "Contributed to the development and implementation of Neospin product, a high-scale pension administration system. I worked on streamlining complex retirement workflows, including automated benefit calculations, benefit payrolls and Line-of-Business portals. The product focused on replacing aging legacy systems with a modern, browser-based solution to improve operational efficiency and costs for large-scale pension funds.",
    technologies: [".Net Core", "C#", "Backend Development", "SQL", "Azure DevOps", "SAFe Agile Framework"],
    image: findImage('project_1'),
    repoLink: "https://www.sagitec.com/neospin/pension-administration-software",
    repoButtonText: "Learn More",
    showGithubIcon: false,
    liveLink: "#"
  },
  {
    title: "Persona Canvas - Personal Portfolio",
    description: "This is a personal portfolio website built with Next.js, React, and Tailwind CSS and also with help of Gen-AI tools, hosted using Google Cloud platform to experience CI/CD pipelines. It's designed to showcase professional experience, projects, academic background, and personal interests like photography.",
    technologies: ["Next.js", "Google Cloud", "Tailwind CSS"],
    image: findImage('project_2'),
    repoLink: "https://github.com/veersenjadhav/Persona_Canvas",
    repoButtonText: "GitHub",
    showGithubIcon: true,
    liveLink: "#"
  },
  {
    title: "Scaling Up Machine Learning Algorithm for Rule Based Log Engine : A Parallel Approach with OpenMP & CUDA",
    description: "As part of my M. Tech. studies, in this internship project collaborated with DELL EMC, I introduced ideas of a massively Parallel, Novel Algorithm, which is an essential step in learning Gradient Boosted Decision Tree (GBDT) and random forests for accelerating the decision tree construction procedure for rulebased log analysis engines on CPU and GPU.",
    technologies: ["C++", "Nvidia CUDA", "Python", "Machine Learning", "High Performance Computing"],
    image: findImage('project_3'),
    repoLink: "https://drive.google.com/file/d/1v57YL4qiuAoH2zHfagEMRld8kiyZpzZz/view?usp=sharing",
    repoButtonText: "View Thesis",
    showGithubIcon: false,
    liveLink: "#"
  },
  {
    title: "Advanced Computational Labs",
    description: "A deep dive into the world of algorithms, featuring everything from neural networks to optimized data normalization techniques. These projects highlight my skills in optimizing performance and implementing heavy mathematical theories into working code.",
    technologies: ["C++", "Nvidia CUDA", "Python", "JavaScript"],
    image: findImage('project_4'),
    repoLink: "https://github.com/stars/veersenjadhav/lists/advanced-computational-labs",
    repoButtonText: "GitHub",
    showGithubIcon: true,
    liveLink: "#"
  }
];

export const blogs = [
  {
    title: "Unlocking the Power of Parallelism: A Deep Dive into PLINQ",
    description: "Enhance Your C# Data Processing with Parallel LINQ for Superior Performance and Simplicity.",
    image: findImage('blog_1'),
    link: "https://medium.com/@veersenjadhav/unlocking-the-power-of-parallelism-a-deep-dive-into-plinq-da514c970df0"
  },
  {
    title: "Why Relative Sizing is NOT About Hours: Understanding True Story Point Estimation",
    description: "Based on my experience in SAFe Agile world",
    image: findImage('blog_2'),
    link: "https://medium.com/@veersenjadhav/why-relative-sizing-is-not-about-hours-understanding-true-story-point-estimation-f8865731d170"
  },
  {
    title: "The History of Evolution of Graphics Cards (GPUs)",
    description: "Graphics cards, also known as video cards or display adapters, are essential components in modern computing systems, responsible for rendering images, videos, and animations on a computer screen.",
    image: findImage('blog_3'),
    link: "https://medium.com/@veersenjadhav/the-history-of-evolution-of-graphics-cards-gpus-89f1d5354d78"
  },
  {
    title: "13th Gen Intel Processors: A Comprehensive Analysis",
    description: "Intel Thread Director: Enhancing Workload Management & The Future of Gaming and Productivity with 13th Gen Intel CPUs.",
    image: findImage('blog_4'),
    link: "https://medium.com/@veersenjadhav/13th-gen-intel-processors-a-comprehensive-analysis-8ec37e1c524"
  },
  {
    title: "Electric Cars More Harmful Than Conventional & Hybrid Cars: IIT Kanpur Study",
    description: "A recent study by the Indian Institute of Technology (IIT) Kanpur has found that electric vehicles may actually be more harmful to the environment than conventional and hybrid cars.",
    image: findImage('blog_5'),
    link: "https://medium.com/@veersenjadhav/electric-cars-more-harmful-than-conventional-hybrid-cars-iit-kanpur-study-900b447ce7c5"
  },
  {
    title: "Accelerating Data Centers with NVIDIA DPUs: Power Efficiency and Performance Boost",
    description: "Harness the Power of Data Processing Units (DPUs) for Enhanced Data Processing, Networking, Security, and Power Efficiency.",
    image: findImage('blog_6'),
    link: "https://medium.com/@veersenjadhav/accelerating-data-centers-with-nvidia-dpus-power-efficiency-and-performance-boost-8f9b7335339d"
  }
];


export const recognitions = [
  {
    title: "Star Award",
    issuer: "Sagitec Solutions LLC",
    date: "2024",
    description: "Recognised with Star Award for making contribution towards achieving improved product performace.",
    icon: "https://media.licdn.com/dms/image/v2/D560BAQGq-oYhwKIWPQ/company-logo_100_100/company-logo_100_100/0/1719255327619/sagitec_solutions_logo?e=1767830400&v=beta&t=jn9oisl221e97ExuFz4Y4H_Z9-KudRUUjl864XcgasE",
    link: "#",
    showLink: false
  },
  {
    title: "Star Award",
    issuer: "Sagitec Solutions LLC",
    date: "2023",
    description: "Recognised with Star Award for making my best contribution towards the best performing Pension Products team in Sagitec Solutions LLC.",
    icon: "https://media.licdn.com/dms/image/v2/D560BAQGq-oYhwKIWPQ/company-logo_100_100/company-logo_100_100/0/1719255327619/sagitec_solutions_logo?e=1767830400&v=beta&t=jn9oisl221e97ExuFz4Y4H_Z9-KudRUUjl864XcgasE",
    link: "#",
    showLink: false
  },
  {
    title: "Foundations of Coding Full-Stack",
    issuer: "Microsoft",
    date: "2025",
    description: "Covered foundational concepts of full-stack development. Learnt the basics of coding, problem-solving, and writing efficient, modular code, while gaining hands-on experience with both front-end and back-end technologies.",
    icon: "https://media.licdn.com/dms/image/v2/D560BAQH32RJQCl3dDQ/company-logo_100_100/B56ZYQ0mrGGoAU-/0/1744038948046/microsoft_logo?e=1767830400&v=beta&t=u9FCDbqLVZ4t6nd1Wz9TRGvZhw0T_f7QhcelWHj4SFM",
    link: "https://www.coursera.org/account/accomplishments/verify/T6UFHLN3Z3AR",
    showLink: true
  },
  {
    title: "Google Certified: Agile Project Management",
    issuer: "Google",
    date: "2023",
    description: "Demonstrated Agile project management approach and philosophy, including values and principles and pillars of Scrum and how they support Scrum values.",
    icon: "https://media.licdn.com/dms/image/v2/D4E0BAQGv3cqOuUMY7g/company-logo_100_100/B4EZmhegXHGcAU-/0/1759350753990/google_logo?e=1767830400&v=beta&t=3YHrF4qFtVFJXbv2wKiCRzpP-UkRWLBOvEmwtpa0Cgg",
    link: "https://www.coursera.org/account/accomplishments/verify/GZZSKH82AC26",
    showLink: true
  },
  {
    title: "Microsoft Certified: Azure AI Fundamentals",
    issuer: "Microsoft",
    date: "2022",
    description: "Demonstrated foundational knowledge of machine learning (ML) and artificial intelligence (AI) concepts and related Microsoft Azure services.",
    icon: "https://media.licdn.com/dms/image/v2/D560BAQH32RJQCl3dDQ/company-logo_100_100/B56ZYQ0mrGGoAU-/0/1744038948046/microsoft_logo?e=1767830400&v=beta&t=u9FCDbqLVZ4t6nd1Wz9TRGvZhw0T_f7QhcelWHj4SFM",
    link: "https://www.credly.com/badges/765cd5d8-81a2-407f-a322-7057921cfa0c/public_url",
    showLink: true
  },
  {
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "2021",
    description: "Demonstrated foundational level knowledge of cloud services and how those services are provided with Microsoft Azure",
    icon: "https://media.licdn.com/dms/image/v2/D560BAQH32RJQCl3dDQ/company-logo_100_100/B56ZYQ0mrGGoAU-/0/1744038948046/microsoft_logo?e=1767830400&v=beta&t=u9FCDbqLVZ4t6nd1Wz9TRGvZhw0T_f7QhcelWHj4SFM",
    link: "https://www.credly.com/badges/42afa92a-db89-4cbb-9d18-409180e47ed8/public_url",
    showLink: true
  },
  {
    title: "Deep Learning with Keras and Tensorflow",
    issuer: "IBM",
    date: "2020",
    description: "Awarded for contributions in Unsupervised learning in Keras, Deep Q-networks (DQNs), and reinforcement learning.",
    icon: "https://media.licdn.com/dms/image/v2/D560BAQGiz5ecgpCtkA/company-logo_100_100/company-logo_100_100/0/1688684715866/ibm_logo?e=1767830400&v=beta&t=GV_W400aHOIzn6Nh0GlcCdoDaqIhAuhtJAAHhgOqkKU",
    link: "https://www.coursera.org/account/accomplishments/verify/ATGRMMFY4VZA",
    showLink: true
  },
  {
    title: "Fundamentals of Parallelism on Intel Architecture",
    issuer: "Intel Corporation",
    date: "2020",
    description: "Recognized for completeting graded course on Fundamentals of Parallelism on Intel Architecture.",
    icon: "https://media.licdn.com/dms/image/v2/C560BAQGpvWtEtj9oTQ/company-logo_100_100/company-logo_100_100/0/1630663244736/intel_corporation_logo?e=1767830400&v=beta&t=0nvi10G7m-q3GeC_9pXE7-ZJlTsZfXu8MN6hfSUbiXQ",
    link: "https://www.coursera.org/account/accomplishments/verify/2QQVEHHZKYBN",
    showLink: true
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
