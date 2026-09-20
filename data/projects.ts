import { Cloud, Ticket, Video } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Project = {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  href: string;
  github: string;
  accentClassName: string;
  Icon: LucideIcon;
  highlights: string[];
  techStack: {
    category: string;
    technologies: string;
  }[];
};

export const projects: Project[] = [
  {
    slug: "talent-iq",
    name: "Talent IQ",
    subtitle: "Real-time technical interview platform",
    description:
      "Talent IQ is a full-stack real-time interview platform built to streamline technical hiring. It combines WebRTC-powered video conferencing with a live collaborative code editor, enabling interviewers and candidates to code together in real time — no screen sharing needed.",
    href: "/projects/talent-iq",
    github: "https://github.com/PranavMarch20/Talent-IQ",
    accentClassName: "bg-blue-500",
    Icon: Video,
    highlights: [
      "WebRTC peer-to-peer video calls with low-latency signalling via Socket.io",
      "Live collaborative code editor supporting 10+ languages with real-time sync",
      "Multi-language code execution engine with sandboxed runtime environments",
      "Room-based session management — interviewers create rooms, candidates join via link",
      "Interview notes and feedback panel saved per session",
    ],
    techStack: [
      { category: "Frontend", technologies: "React.js, TypeScript, Tailwind CSS, Shadcn UI" },
      { category: "Backend", technologies: "Node.js, Express.js, Socket.io, REST APIs" },
      { category: "Real-time", technologies: "WebRTC, Socket.io (signalling server)" },
      { category: "Database", technologies: "MongoDB, Redis (session caching)" },
      { category: "Auth", technologies: "JWT-based authentication, role-based access (interviewer / candidate)" },
    ],
  },
  {
    slug: "24hrcloud",
    name: "24hrCloud.io",
    subtitle: "Serverless ephemeral file-sharing on AWS",
    description:
      "24hrCloud.io is a serverless file-sharing platform where uploaded files automatically expire and are deleted after 24 hours. Built entirely on AWS managed services, it requires zero server maintenance and scales to handle any upload volume without provisioning infrastructure.",
    href: "/projects/24hrcloud",
    github: "https://github.com/PranavMarch20/cloud-file-share-platform",
    accentClassName: "bg-orange-500",
    Icon: Cloud,
    highlights: [
      "Files uploaded directly to S3 via pre-signed URLs — backend never handles file bytes",
      "DynamoDB stores file metadata with a TTL attribute for automatic record expiry",
      "Lambda function triggered by DynamoDB Streams to delete expired S3 objects",
      "API Gateway + Lambda REST API for generating upload URLs and fetching file info",
      "Shareable download links with expiry countdown shown to the uploader",
    ],
    techStack: [
      { category: "Cloud", technologies: "AWS S3, Lambda, API Gateway, DynamoDB, CloudWatch" },
      { category: "Backend", technologies: "Node.js (Lambda handlers), REST API design" },
      { category: "Frontend", technologies: "React.js, Tailwind CSS" },
      { category: "Infrastructure", technologies: "IAM roles & policies, VPC, S3 lifecycle rules, DynamoDB TTL" },
      { category: "CI/CD", technologies: "GitHub Actions for automated Lambda deployments" },
    ],
  },
  {
    slug: "eventify",
    name: "Eventify",
    subtitle: "Full-stack event management and ticketing platform",
    description:
      "Eventify is a full-stack event management and ticketing platform. Organisers can create and publish events, set ticket tiers, and manage attendees. Buyers receive QR-coded tickets via email that are validated at the venue in real time — eliminating paper tickets and manual check-in lists.",
    href: "/projects/eventify",
    github: "https://github.com/PranavMarch20/kalpathon_eventify",
    accentClassName: "bg-teal-500",
    Icon: Ticket,
    highlights: [
      "Event creation dashboard for organisers with rich event details and ticket tier management",
      "QR code generation per ticket using a unique token stored in MongoDB",
      "Real-time attendance validation — scanner marks tickets as used instantly via WebSocket",
      "Email delivery of QR tickets using Nodemailer on purchase confirmation",
      "Role-based access: admin, organiser, and attendee with protected routes",
    ],
    techStack: [
      { category: "Frontend", technologies: "React.js, Redux, Tailwind CSS" },
      { category: "Backend", technologies: "Node.js, Express.js, REST APIs" },
      { category: "Database", technologies: "MongoDB with Mongoose ODM" },
      { category: "Auth", technologies: "JWT authentication, bcryptjs password hashing" },
      { category: "Features", technologies: "QR code generation (qrcode npm), Nodemailer, Socket.io (real-time validation)" },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
