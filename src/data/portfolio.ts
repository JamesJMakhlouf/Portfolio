export interface Contact {
  name: string
  title: string
  summary: string
  email: string
  phone: string
  location: string
  linkedin: string
  github: string
  cvUrl: string
}

export interface SkillGroup {
  title: string
  skills: string[]
}

export interface ExperienceItem {
  role: string
  company: string
  location: string
  start: string
  end: string
  highlights: string[]
}

export interface ProjectLink {
  label: string
  url: string
}

export interface Project {
  title: string
  summary: string
  tags: string[]
  links?: ProjectLink[]
  award?: string
  image?: string
  imageAlt?: string
}

export interface EducationItem {
  school: string
  location: string
  degree: string
  period: string
  details: string[]
}

export interface Achievement {
  title: string
  url?: string
}

export interface VolunteerItem {
  title: string
  description: string
}

export interface Language {
  name: string
  level: string
}

export interface PortfolioData {
  contact: Contact
  skills: SkillGroup[]
  experience: ExperienceItem[]
  projects: Project[]
  education: EducationItem[]
  achievements: Achievement[]
  volunteering: VolunteerItem[]
  languages: Language[]
  interests: string[]
}

export const portfolio: PortfolioData = {
  contact: {
    name: 'James Makhlouf',
    title: 'Mechatronics Engineering Student',
    summary:
      "Fourth-year Mechatronics Engineering student with a perfect GPA and Dean's List recognition. Strong interest in control systems, robotics, and brain-computer interfaces (BCI), with hands-on experience in research, embedded systems, and software development. Actively engaged in interdisciplinary projects bridging mechanical, electrical, and computational engineering.",
    email: 'jamesjmakhlouf@gmail.com',
    phone: '+961 70-347465',
    location: 'Lebanon',
    linkedin: 'https://www.linkedin.com/in/jamesmakhlouf',
    github: 'https://github.com/JamesJMakhlouf',
    cvUrl: 'james-makhlouf-cv.pdf',
  },

  skills: [
    {
      title: 'Engineering Tools',
      skills: ['MATLAB/Simulink', 'SOLIDWORKS', 'AutoCAD', 'ROS 2', 'CMake', 'Docker'],
    },
    {
      title: 'Programming & Development',
      skills: ['C++', 'Python', 'Java', 'Flutter (Dart)', 'JavaScript', 'HTML', 'CSS', 'PostgreSQL', 'Firebase'],
    },
    {
      title: 'Machine Learning',
      skills: ['Deep Learning', 'Computer Vision', 'Neural Networks'],
    },
    {
      title: 'Soft Skills',
      skills: ['Problem Solving', 'Critical Thinking', 'Adaptability', 'Time Management', 'Teamwork'],
    },
  ],

  experience: [
    {
      role: 'Robotics Intern',
      company: 'Inmind.ai',
      location: 'Mkalles, Lebanon',
      start: 'July 2026',
      end: 'Present',
      highlights: [
        'Developed and executed SLAM simulation pipelines in Dockerized ROS 2 environments.',
        'Built and debugged multi-node ROS 2 packages integrating driver, filter, and logger nodes for real-time processing.',
      ],
    },
    {
      role: 'Engineering Intern',
      company: 'Mitsulift',
      location: 'Dbayeh, Lebanon',
      start: 'June 2026',
      end: 'August 2026',
      highlights: [
        'Drafted 2D AutoCAD engineering drawings, including proposal layouts, shop drawings, and installation diagrams.',
        'Collaborated with the sales engineering team on cost estimation and drafting technical project commercial offers.',
        'Performed Quality Control (QC) field inspections on installed elevator systems, auditing mechanical integrity and logging snag reports.',
        'Designed a detailed 3D elevator and counterweight assembly in SOLIDWORKS, configuring mechanical mates to simulate cable motion.',
        'Constructed a functional 2-floor prototype elevator controlled by an Arduino Mega with IR sensors, limit switches, and motor actuators.',
      ],
    },
    {
      role: 'Undergraduate Research',
      company: 'Lebanese American University',
      location: 'Byblos, Lebanon',
      start: 'December 2025',
      end: 'Present',
      highlights: [
        'Conducting research in Brain-Computer Interfaces (BCI), focusing on multi-channel EEG signal preprocessing.',
      ],
    },
  ],

  projects: [
    {
      title: 'T.R.A.C.E. (Writing Robotic Arm)',
      summary:
        'Designed and 3D-printed a 3-DOF robotic arm with a task-space impedance controller for precise trajectory tracking, fully simulated in MATLAB Simscape.',
      tags: ['Arduino', 'MATLAB/Simulink'],
    },
    {
      title: 'Nine Lives (Game Development Project)',
      summary:
        'Multiplayer and single-player pixel-art platformer built with Flutter and the Flame engine, with real-time multiplayer powered by Firebase.',
      tags: ['Flutter (Dart)', 'Flame Engine', 'Firebase'],
      links: [{ label: 'Live Demo', url: 'https://nine-lives-game.web.app/' }],
    },
    {
      title: 'Inverted Pendulum Control and Swing-up',
      summary:
        'Designed and implemented swing-up and stabilization controllers using PID, fuzzy logic, LQR, and energy-based control strategies.',
      tags: ['MATLAB/Simulink'],
    },
    {
      title: 'Explorer Bot',
      summary:
        'Award-winning glove-controlled robotic system featuring a mechanical grabber, camera, and multiple sensors.',
      tags: ['Arduino', 'myRIO'],
      award: 'LAU Engineering Projects Day Winner',
    },
    {
      title: 'Roommate Finder',
      summary:
        'Web platform that matches users with compatible roommates based on lifestyle, location, and budget.',
      tags: ['Node.js', 'Express', 'JavaScript', 'HTML', 'CSS'],
    },
  ],

  education: [
    {
      school: 'Lebanese American University',
      location: 'Byblos, Lebanon',
      degree: 'Bachelor in Mechatronics Engineering',
      period: 'August 2023 – Present',
      details: ["Dean's Distinguished List", 'GPA: 4.0 / 4.0'],
    },
    {
      school: 'College Notre Dame de Louaize',
      location: 'Zouk Mosbeh, Lebanon',
      degree: 'Lebanese Baccalaureate – General Sciences',
      period: 'September 2008 – June 2023',
      details: ['High Distinction', 'Final Average: 18.167 / 20'],
    },
  ],

  achievements: [
    {
      title: 'Certified SOLIDWORKS Associate (CSWA) – Dassault Systèmes',
      url: 'https://www.credly.com/badges/e2e0e48f-3021-430c-8d4a-241e7e25448a/public_url',
    },
    { title: 'LAU Engineering Projects Day Winner – Explorer Bot' },
    { title: '1st Place, Lebanese National Mathematics Olympiad (CRDP)' },
  ],

  volunteering: [
    {
      title: 'LAU Robotics Summer Camp 2025',
      description: 'Mentored high school students during hands-on robotics workshops.',
    },
  ],

  languages: [
    { name: 'English', level: 'C2' },
    { name: 'French', level: 'C1' },
    { name: 'Arabic', level: 'C1' },
  ],

  interests: [],
}
