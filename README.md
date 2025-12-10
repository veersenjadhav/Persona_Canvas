# Persona Canvas - A Next.js Personal Portfolio

This is a personal portfolio website built with Next.js, React, and Tailwind CSS. It's designed to showcase professional experience, projects, academic background, and personal interests like photography.

## Features

- **Responsive Design**: Looks great on desktops, tablets, and mobile devices.
- **Modern Tech Stack**: Built with the latest Next.js App Router, React Server Components, and TypeScript.
- **Beautifully Styled**: Uses Tailwind CSS and ShadCN UI components for a clean, modern, and customizable look.
- **Interactive UI**: Smooth animations and hover effects to create an engaging user experience.
- **Easy to Customize**: All personal data is centralized in `src/lib/data.ts` and `src/lib/placeholder-images.json`, making it simple to update your information, projects, and images.

## Getting Started

To run this project locally, you'll need [Node.js](https://nodejs.org/) installed on your machine.

1.  **Install Dependencies:**
    Open your terminal in the project directory and run:
    ```bash
    npm install
    ```

2.  **Run the Development Server:**
    ```bash
    npm run dev
    ```

    Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## Key Files for Customization

-   `src/lib/data.ts`: Edit this file to change all the text content, such as your name, summary, work experience, projects, etc.
-   `src/lib/placeholder-images.json`: Update this file to change all the images used throughout the site.
-   `src/app/globals.css`: Modify the CSS variables here to change the site's color theme.
-   `src/app/page.tsx`: The main page component where you can change the order or layout of the different sections.
