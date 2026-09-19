# Portfolio Reference & Implementation Specification

## Reference Website

Primary reference:

https://pranavz.in/

Unmasked reference used for structural/content inspection:

https://4iku0x9x1n.c35.airoapp.ai/

The screenshots supplied with this task show the exact visual appearance of the
reference website.

The goal is to recreate the reference portfolio as closely as possible.

IMPORTANT:

- Preserve the content exactly as provided below.
- Preserve the section ordering.
- Preserve the visual hierarchy.
- Preserve the minimalist design.
- Preserve the project-page architecture.
- Preserve the contact-page architecture.
- Do not "modernize" or redesign the visual style.
- Do not replace the layout with a generic developer portfolio template.

The implementation itself should be independently written.

---

# SITE STRUCTURE

The site consists of:

/
├── Homepage
│
├── /projects/talent-iq
│
├── /projects/24hrcloud
│
├── /projects/eventify
│
└── /contact

---

# DESIGN PHILOSOPHY

The reference is a minimal, typography-first developer portfolio.

It should feel like:

"An engineer's personal technical profile."

It should NOT feel like:

- A SaaS landing page
- An agency website
- A generic AI-generated portfolio
- A dashboard
- A flashy developer portfolio template

Avoid:

- Large gradients
- Glassmorphism
- Giant hero sections
- Excessive animations
- Large decorative illustrations
- Huge technology logo grids
- Excessive cards
- Excessive shadows
- Blob backgrounds
- Floating decorative elements
- Excessive rounded elements
- Dark-mode-first styling

The visual hierarchy comes primarily from:

1. Typography
2. Whitespace
3. Alignment
4. Thin section separators
5. Small colored icon blocks
6. Content hierarchy

---

# GLOBAL LAYOUT

The page uses a narrow centered content column.

On a large desktop viewport around 1664px wide, the actual content area
is approximately 670px wide.

The content should NOT stretch across the entire screen.

Suggested:

max-width: approximately 670px–700px

margin-inline: auto

The page should have generous whitespace on the left and right.

Use responsive horizontal padding on smaller screens.

Conceptual structure:

<body>
  <main>
    <div class="container">

      Header

      Introduction

      Skills

      Projects

      Achievements

      Education

      Footer

    </div>
  </main>
</body>

---

# BACKGROUND

Use a very light gray/off-white background.

The reference is visually close to:

#f8f8f8 / #fafafa

Do not use a strong white/black contrast.

The background should remain extremely subtle.

---

# TYPOGRAPHY

Typography is one of the most important parts of the design.

Use a clean modern sans-serif font.

The design uses:

- Large bold identity heading
- Medium subtitle
- Regular readable body text
- Small uppercase section labels
- Muted secondary text
- Blue links

## Main Name

Text:

Pranav Kumar Singh

Approximate size:

28–30px

Weight:

600–700

## Subtitle

Text:

Full Stack & Backend Developer

Approximate size:

18–20px

Color:

Muted gray.

## Body

Approximate size:

16–17px

Line height:

approximately 1.6

## Section Labels

Examples:

WHAT I KNOW

PROJECTS I'VE WORKED ON

ACHIEVEMENTS

EDUCATION

These should be:

- uppercase
- small
- letter-spaced
- muted
- approximately 11–12px

They should look like editorial metadata labels rather than large headings.

---

# HEADER

The header sits inside the main narrow content column.

It contains:

Pranav Kumar Singh

Full Stack & Backend Developer

Then the navigation:

Home
GitHub
LinkedIn
Email
Contact

Desktop navigation is horizontal.

The links use small subtle outline icons where appropriate.

Do NOT create:

- A large sticky navbar
- A filled navigation bar
- Pill-shaped navigation buttons
- A separate full-width navigation section

The header should remain lightweight.

---

# EXACT HOMEPAGE CONTENT

## Name

Pranav Kumar Singh

## Title

Full Stack & Backend Developer

## Navigation

Home

GitHub

LinkedIn

Email

Contact

---

# INTRODUCTION

Use the following text exactly.

### Paragraph 1

I'm a software developer passionate about building scalable systems. I spend most of my time writing backend code, designing APIs, and exploring cloud infrastructure.

### Paragraph 2

I'm currently pursuing B.Tech in Computer Science at Babu Banarasi Das University, Lucknow. I enjoy working across the full stack — from React frontends to Node.js/Express backends and AWS deployments.

### Paragraph 3

When I'm not coding, I'm solving problems on LeetCode, contributing to open source, or tinkering with new DevOps tools.

Do not rewrite these paragraphs.

Do not shorten them.

Do not turn them into bullet points.

---

# SECTION: WHAT I KNOW

Section label:

WHAT I KNOW

There are exactly six skill categories.

---

## 1. Languages

Category:

Languages

Content:

C++, JavaScript, TypeScript, Python, Go, SQL

Icon:

Code icon

Accent:

Blue

---

## 2. Backend

Category:

Backend

Content:

Node.js, Express.js, REST APIs, Bun, Prisma, Zod, Auth

Icon:

Server icon

Accent:

Orange

---

## 3. Frontend

Category:

Frontend

Content:

React.js, Next.js, Redux, Tailwind CSS, Shadcn UI

Icon:

Monitor/display icon

Accent:

Teal/green

---

## 4. Databases

Category:

Databases

Content:

PostgreSQL, MongoDB, Redis, Convex

Icon:

Database icon

Accent:

Red/coral

---

## 5. Cloud & DevOps

Category:

Cloud & DevOps

Content:

AWS (EC2, S3, Lambda, DynamoDB, VPC, IAM), Docker, GitHub Actions, Linux

Icon:

Cloud icon

Accent:

Purple/indigo

---

## 6. Testing & Tools

Category:

Testing & Tools

Content:

Git, Postman, Jest, React Testing Library, Vitest

Icon:

Wrench/tools icon

Accent:

Yellow/orange

---

# SKILL ITEM DESIGN

Skills should NOT be displayed as cards.

Each skill is a horizontal row.

Structure:

[ colored square icon ]  Category
                          Technologies

Icon:

Approximately 44px × 44px.

Border radius:

approximately 8px.

Icon color:

white.

Category:

bold/dark.

Technology list:

muted gray.

Rows should have generous vertical spacing.

---

# SECTION SEPARATOR

Between major sections use:

1px dashed/dotted light-gray horizontal border.

Conceptually:

--------------------------------------------

Do NOT use thick solid borders.

Use generous vertical margins around separators.

---

# SECTION: PROJECTS

Section label:

PROJECTS I'VE WORKED ON

There are exactly three projects.

Projects should NOT be conventional cards.

Do not use:

- 3-column cards
- Large project thumbnails
- Image cards
- Bordered project boxes
- Glass cards

Instead, use vertically stacked project entries.

---

# PROJECT 1

## Name

Talent IQ

## Description

Talent IQ is a full-stack real-time interview platform built to streamline technical hiring. It combines WebRTC-powered video conferencing with a live collaborative code editor, enabling interviewers and candidates to code together in real time — no screen sharing needed.

## Link

View details →

## Icon

Video/camera icon.

## Accent

Blue.

## Detail Route

/projects/talent-iq

---

# PROJECT 2

## Name

24hrCloud.io

## Description

24hrCloud.io is a serverless file-sharing platform where uploaded files automatically expire and are deleted after 24 hours. Built entirely on AWS managed services, it requires zero server maintenance and scales to handle any upload volume without provisioning infrastructure.

## Link

View details →

## Icon

Cloud icon.

## Accent

Orange.

## Detail Route

/projects/24hrcloud

---

# PROJECT 3

## Name

Eventify

## Description

Eventify is a full-stack event management and ticketing platform. Organisers can create and publish events, set ticket tiers, and manage attendees. Buyers receive QR-coded tickets via email that are validated at the venue in real time — eliminating paper tickets and manual check-in lists.

## Link

View details →

## Icon

Ticket/event icon.

## Accent

Teal/green.

## Detail Route

/projects/eventify

---

# PROJECT ITEM DESIGN

Each project should look approximately like:

[icon]  Project Name  [external link icon]

       Project description spanning multiple lines.

       View details →

Project title:

Bold.

External-link icon:

Small and subtle.

Description:

Muted gray.

View details:

Blue.

Do not put each project inside a visible bordered card.

---

# SECTION: ACHIEVEMENTS

Section label:

ACHIEVEMENTS

Use exactly the following six achievements.

### Achievement 1

3rd place — Kalpathon Hackathon, Akhil Jyot'25, BBDU Lucknow

### Achievement 2

Top 5 — InnVedX Hackathon, BBD University · Qualified for Lucknow Multi-City Finals, Hack-a-Skill (Celesta' 2025, IIT Patna)

### Achievement 3

Selected Contributor — GirlScript Summer of Code (GSSoC) 2026

### Achievement 4

400+ problems solved on LeetCode, Codeforces, and GFG

### Achievement 5

CodeChef 2★ (Max Rating: 1448) — Ranks 237 & 339 in weekly contests

### Achievement 6

AWS Cloud & DevOps Training (90 hrs) — EC2, VPC, S3, IAM, RDS, CI/CD

Use a simple unordered list.

Do not create achievement cards.

Bullets should be subtle gray.

---

# SECTION: EDUCATION

Section label:

EDUCATION

There are exactly three education entries.

---

## Education 1

Institution:

Babu Banarasi Das University

Degree:

B.Tech, Computer Science & Engineering

Location:

Lucknow, India

Duration:

2023–Present

Score:

CGPA: 7.94 (till 6th Sem)

Desktop layout:

Left:

Babu Banarasi Das University
B.Tech, Computer Science & Engineering
Lucknow, India

Right:

2023–Present
CGPA: 7.94 (till 6th Sem)

---

## Education 2

Institution:

Army Public School, Nehru Road

Qualification:

CBSE Class XII

Location:

Lucknow, India

Duration:

2021–2022

Score:

84.20%

Desktop layout:

Left:

Army Public School, Nehru Road
CBSE Class XII
Lucknow, India

Right:

2021–2022
84.20%

---

## Education 3

Institution:

Army Public School, Nehru Road

Qualification:

CBSE Class X

Location:

Lucknow, India

Duration:

2019–2020

Score:

86.40%

Desktop layout:

Left:

Army Public School, Nehru Road
CBSE Class X
Lucknow, India

Right:

2019–2020
86.40%

---

# EDUCATION RESPONSIVENESS

On desktop:

Use two-column alignment.

Left:

institution / qualification / location

Right:

duration / score

Right-side metadata should be aligned toward the right edge of the main
content column.

On mobile:

Stack the metadata naturally underneath the institution information.

Do not create horizontal scrolling.

---

# HOMEPAGE FOOTER

Footer text:

Built by Pranav Kumar Singh · pranavmarch20@gmail.com

Below this:

GitHub icon

LinkedIn icon

The footer is centered.

Keep it minimal.

No footer columns.

No newsletter.

No large CTA.

No large branding.

---

# PROJECT DETAIL PAGES

Every project detail page uses the same visual system.

General structure:

← Back

[project icon] Project Name
             Project subtitle

GitHub

--------------------------------

ABOUT

Description

--------------------------------

KEY HIGHLIGHTS

✓ Highlight
✓ Highlight
✓ Highlight
✓ Highlight
✓ Highlight

--------------------------------

TECH STACK

Category      Technologies

--------------------------------

Footer

---

# TALENT IQ DETAIL PAGE

Route:

/projects/talent-iq

## Back

← Back

## Title

Talent IQ

## Subtitle

Real-time technical interview platform

## GitHub

GitHub

---

# TALENT IQ — ABOUT

Section:

ABOUT

Exact content:

Talent IQ is a full-stack real-time interview platform built to streamline technical hiring. It combines WebRTC-powered video conferencing with a live collaborative code editor, enabling interviewers and candidates to code together in real time — no screen sharing needed.

---

# TALENT IQ — KEY HIGHLIGHTS

Section:

KEY HIGHLIGHTS

Use exactly:

1. WebRTC peer-to-peer video calls with low-latency signalling via Socket.io

2. Live collaborative code editor supporting 10+ languages with real-time sync

3. Multi-language code execution engine with sandboxed runtime environments

4. Room-based session management — interviewers create rooms, candidates join via link

5. Interview notes and feedback panel saved per session

Each item uses a small circular check/verification icon.

The icon should use the project accent color.

---

# TALENT IQ — TECH STACK

Section:

TECH STACK

Use exactly:

Frontend
React.js, TypeScript, Tailwind CSS, Shadcn UI

Backend
Node.js, Express.js, Socket.io, REST APIs

Real-time
WebRTC, Socket.io (signalling server)

Database
MongoDB, Redis (session caching)

Auth
JWT-based authentication, role-based access (interviewer / candidate)

On desktop:

Use two-column key/value alignment.

On mobile:

Stack naturally.

---

# 24HRCLOUD.IO DETAIL PAGE

Route:

/projects/24hrcloud

## Title

24hrCloud.io

## Subtitle

Serverless ephemeral file-sharing on AWS

## GitHub

GitHub

---

# 24HRCLOUD.IO — ABOUT

Section:

ABOUT

Exact content:

24hrCloud.io is a serverless file-sharing platform where uploaded files automatically expire and are deleted after 24 hours. Built entirely on AWS managed services, it requires zero server maintenance and scales to handle any upload volume without provisioning infrastructure.

---

# 24HRCLOUD.IO — KEY HIGHLIGHTS

Section:

KEY HIGHLIGHTS

Use exactly:

1. Files uploaded directly to S3 via pre-signed URLs — backend never handles file bytes

2. DynamoDB stores file metadata with a TTL attribute for automatic record expiry

3. Lambda function triggered by DynamoDB Streams to delete expired S3 objects

4. API Gateway + Lambda REST API for generating upload URLs and fetching file info

5. Shareable download links with expiry countdown shown to the uploader

---

# 24HRCLOUD.IO — TECH STACK

Section:

TECH STACK

Use exactly:

Cloud
AWS S3, Lambda, API Gateway, DynamoDB, CloudWatch

Backend
Node.js (Lambda handlers), REST API design

Frontend
React.js, Tailwind CSS

Infrastructure
IAM roles & policies, VPC, S3 lifecycle rules, DynamoDB TTL

CI/CD
GitHub Actions for automated Lambda deployments

---

# EVENTIFY DETAIL PAGE

Route:

/projects/eventify

## Title

Eventify

## Subtitle

Full-stack MERN event ticketing platform

## GitHub

GitHub

---

# EVENTIFY — ABOUT

Section:

ABOUT

Exact content:

Eventify is a full-stack event management and ticketing platform. Organisers can create and publish events, set ticket tiers, and manage attendees. Buyers receive QR-coded tickets via email that are validated at the venue in real time — eliminating paper tickets and manual check-in lists.

---

# EVENTIFY — KEY HIGHLIGHTS

Section:

KEY HIGHLIGHTS

Use exactly:

1. Event creation dashboard for organisers with rich event details and ticket tier management

2. QR code generation per ticket using a unique token stored in MongoDB

3. Real-time attendance validation — scanner marks tickets as used instantly via WebSocket

4. Email delivery of QR tickets using Nodemailer on purchase confirmation

5. Role-based access: admin, organiser, and attendee with protected routes

---

# EVENTIFY — TECH STACK

Section:

TECH STACK

Use exactly:

Frontend
React.js, Redux, Tailwind CSS

Backend
Node.js, Express.js, REST APIs

Database
MongoDB with Mongoose ODM

Auth
JWT authentication, bcryptjs password hashing

Features
QR code generation (qrcode npm), Nodemailer, Socket.io (real-time validation)

---

# CONTACT PAGE

Route:

/contact

## Heading

Contact / Hire Me

## Subtitle

Have a project in mind or want to work together? I'd love to hear from you.

---

# CONTACT LINKS

Display:

pranavmarch20@gmail.com

LinkedIn

GitHub

These should be presented vertically with small colored square icons.

---

# CONTACT FORM

Section label:

SEND A MESSAGE

The form contains:

Name

Email

Subject

Message

Send message

---

# FORM PLACEHOLDERS

Name placeholder:

Pranav Singh

Email placeholder:

you@example.com

Subject placeholder:

Freelance project, collaboration, etc.

Message placeholder:

Tell me about your project or idea...

---

# CONTACT FORM LAYOUT

Desktop:

Name and Email should appear side-by-side.

Example:

Name                         Email
[____________________]       [____________________]

Subject:

[_______________________________________________]

Message:

[_______________________________________________]
[                                               ]
[                                               ]
[_______________________________________________]

Button:

[ ✈ Send message ]

On mobile:

Name and Email should stack vertically.

Subject remains full width.

Message remains full width.

---

# CONTACT FORM VISUAL STYLE

Inputs:

- Light background
- Thin gray border
- Approximately 8px radius
- Comfortable padding
- No heavy shadows

Button:

Blue background.

White text.

Paper-plane/send icon.

Approximately 8px radius.

Do not use pill-shaped buttons.

---

# CONTACT PAGE FOOTER

Use:

Built by Pranav Kumar Singh · pranavmarch20@gmail.com

Keep the same minimal footer style as the homepage.

---

# ICON SYSTEM

Use a consistent outline icon library.

Lucide Icons are appropriate.

Recommended icons:

Home
Github
Linkedin
Mail
Code
Server
Monitor
Database
Cloud
Wrench
Video
Ticket
ExternalLink
CheckCircle
Send
ArrowLeft

Icons should be:

- Outline style
- Consistent stroke width
- Small
- Subtle

---

# ACCENT ICON COLORS

Use a restrained accent palette.

Languages:

Blue

Backend:

Orange

Frontend:

Teal

Databases:

Red/coral

Cloud & DevOps:

Purple/indigo

Testing & Tools:

Yellow/orange

Talent IQ:

Blue

24hrCloud.io:

Orange

Eventify:

Teal/green

Contact:

Use blue/purple/orange for Email/LinkedIn/GitHub respectively.

Avoid gradients.

---

# SECTION SPACING

Major sections should have generous vertical spacing.

Recommended conceptual spacing:

Small:
8px

Medium:
16px

Large:
24–32px

Major section:
48–64px+

Do not compress the page.

The reference intentionally uses substantial whitespace.

---

# RESPONSIVE DESIGN

The desktop layout is narrow.

On large screens:

max-width approximately 670–700px

On mobile:

horizontal padding approximately 20–24px.

---

# MOBILE BEHAVIOR

The mobile version should preserve the same design rather than becoming
a different website.

Navigation:

Allow wrapping or stack appropriately.

Skills:

Remain vertically stacked.

Projects:

Remain vertically stacked.

Education:

Move right-side date/score information underneath the institution details.

Contact:

Stack Name and Email vertically.

Project tech-stack rows:

Collapse into a readable stacked structure.

Never allow horizontal overflow.

---

# ANIMATION

Animations should be minimal.

The reference is primarily static.

Allowed:

- Small hover color transitions
- Link hover transitions
- Button hover transition
- Very subtle page transitions

Avoid:

- Large scroll animations
- Parallax
- Floating elements
- Bouncy cards
- Excessive motion

Respect:

prefers-reduced-motion

---

# ACCESSIBILITY

Use semantic HTML.

Use:

<header>
<nav>
<main>
<section>
<footer>

Use appropriate heading hierarchy.

All forms must have labels.

All icon-only buttons/links need accessible labels.

Keyboard navigation must work.

Provide visible focus states.

Maintain sufficient color contrast.

---

# COMPONENT ARCHITECTURE

Suggested structure:

components/
├── Header
├── Navigation
├── SectionLabel
├── Divider
├── SkillItem
├── SkillsSection
├── ProjectItem
├── ProjectsSection
├── AchievementList
├── EducationItem
├── EducationSection
├── Footer
├── ProjectHeader
├── ProjectHighlights
├── ProjectTechStack
├── ContactLinks
└── ContactForm

Data:

data/
├── skills.ts
├── projects.ts
├── achievements.ts
├── education.ts
└── socials.ts

The UI should be data-driven.

Avoid hardcoding repeated UI structures directly into JSX.

---

# PROJECT DATA STRUCTURE

Conceptually:

project = {
  slug,
  name,
  subtitle,
  description,
  icon,
  accent,
  github,
  highlights[],
  techStack[]
}

Each project detail route should render from structured project data where
practical.

---

# CRITICAL VISUAL RULE

Do not make this website more visually complex than the reference.

If there is a choice between:

A) adding another visual component

and

B) leaving clean whitespace

choose B.

The simplicity is intentional.

---

# CRITICAL CONTENT RULE

The content specified in this document is the reference content.

Do not:

- paraphrase it
- shorten it
- add marketing copy
- invent achievements
- invent technologies
- invent projects
- change project descriptions
- change education details
- change numerical values

Use the exact strings provided in this document.

---

# CRITICAL LAYOUT RULE

Do not replace the narrow centered layout with a typical:

max-width: 1200px

portfolio layout.

The main content should remain approximately 670–700px wide on desktop.

---

# CRITICAL PROJECT RULE

Projects are vertical editorial entries.

They are NOT card grids.

---

# CRITICAL SECTION RULE

Major sections are separated by thin dotted/dashed horizontal lines.

---

# CRITICAL DESIGN RULE

The design should be driven by:

Typography
Whitespace
Alignment
Separators
Small colored icons
Content hierarchy

Not by:

Gradients
Shadows
Cards
Animations
Decorative graphics

---

# FINAL ACCEPTANCE CRITERIA

Before considering the implementation complete:

1. Compare the homepage against the supplied screenshots.
2. Compare the project detail page against the supplied Talent IQ screenshot.
3. Verify the content character-for-character against this document.
4. Verify the section order.
5. Verify the narrow content width.
6. Verify typography hierarchy.
7. Verify section separators.
8. Verify icon sizes.
9. Verify project layout.
10. Verify education alignment.
11. Verify contact form layout.
12. Verify mobile responsiveness.

Do not redesign anything during this comparison.

Only fix discrepancies in:

- Width
- Spacing
- Typography
- Alignment
- Colors
- Borders
- Icon sizing
- Responsive behavior
- Content