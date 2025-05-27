import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Pawan",
  lastName: "Thakre",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Web Developer",
  avatar: "/images/avatar.png",
  location: "India/Maharashtra", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Marathi", "English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Pawan0603",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/pawan-thakre-12b99a2b8/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/pawanmthakre",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:pawanthakre252002@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Web Developer</>,
  subline: (
    <>
      I'm Pawan, a web developer. I build performant and responsive web applications.
      <br /> Find me on <a target="blank_" href="https://x.com/pawanmthakre">twitter</a>
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://x.com/pawanmthakre",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hi, I'm Pawan — a Web Developer crafting seamless digital experiences using modern web technologies.
        With hands-on expertise in Next.js, React.js, and the modern web stack, I build performant and responsive web applications. I've delivered projects for clients and also work on personal projects to sharpen my skills and explore new ideas in web development.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      // {
      //   company: "FLY",
      //   timeframe: "2022 - Present",
      //   role: "Senior Design Engineer",
      //   achievements: [
      //     <>
      //       Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
      //       engagement and 30% faster load times.
      //     </>,
      //     <>
      //       Spearheaded the integration of AI tools into design workflows, enabling designers to
      //       iterate 50% faster.
      //     </>,
      //   ],
      //   images: [
      //     // optional: leave the array empty if you don't want to display images
      //     {
      //       src: "/images/projects/project-01/cover-01.jpg",
      //       alt: "Once UI Project",
      //       width: 16,
      //       height: 9,
      //     },
      //   ],
      // },
      // {
      //   company: "Creativ3",
      //   timeframe: "2018 - 2022",
      //   role: "Lead Designer",
      //   achievements: [
      //     <>
      //       Developed a design system that unified the brand across multiple platforms, improving
      //       design consistency by 40%.
      //     </>,
      //     <>
      //       Led a cross-functional team to launch a new product line, contributing to a 15% increase
      //       in overall company revenue.
      //     </>,
      //   ],
      //   images: [],
      // },
      {
        company: "Freelance",
        timeframe: "2023 - Present",
        role: "Web Devloper",
        achievements: [
          <>
            Project development freelancer for clients, including students and professionals. Adept at delivering high-quality, tailor-made projects that meet specific client requirements within established deadlines.
          </>,
        ],
        images: []
      }
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Gondwana University",
        // timeframe: "2019 - 2022",
        description: <>Studied Master of Science in Computer Science.</>,
      },
      {
        name: "Gondwana University",
        timeframe: "2020 - 2023",
        description: <>Studied Bachelor of science in Computer Science.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      // {
      //   title: "Figma",
      //   description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
      //   // optional: leave the array empty if you don't want to display images
      //   images: [
      //     {
      //       src: "/images/projects/project-01/cover-02.jpg",
      //       alt: "Project image",
      //       width: 16,
      //       height: 9,
      //     },
      //     {
      //       src: "/images/projects/project-01/cover-03.jpg",
      //       alt: "Project image",
      //       width: 16,
      //       height: 9,
      //     },
      //   ],
      // },
      // { 
      //   title: "Next.js",
      //   description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
      //   // optional: leave the array empty if you don't want to display images
      //   images: [
      //     {
      //       src: "/images/projects/project-01/cover-04.jpg",
      //       alt: "Project image",
      //       width: 16,
      //       height: 9,
      //     },
      //   ],
      // },
      {
        title: "HTML/CSS",
        description: <>Building responsive and performant web apps with HTML/CSS.</>,
      },
      {
        title: "JavaScript",
        description: <>Building performant web apps with JavaScript.</>,
      },
      {
        title: "React.js",
        description: <>Building interactive UIs with component-based architecture.</>,
      },
      {
        title: "Next.js",
        description: <>Building full-stack web applications with Next.js and server-side rendering..</>,
      },
      {
        title: "Tailwind CSS",
        description: <>Building responsive and performant web apps with Tailwind CSS.</>,
      },
      // {
      //   title: "Supabase",
      //   description: <>Building performant web apps with Supabase.</>,
      // },
      {
        title: "Node.js",
        description: <> Developing backend logic and APIs using JavaScript runtime.</>,
      },
      {
        title: "Express.js",
        description: <> Building RESTful APIs and server-side apps with minimal overhead.</>,
      },
      {
        title: "MongoDB",
        description: <>Designing NoSQL databases with flexible document-based structure.</>,
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about Web technologies.",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
