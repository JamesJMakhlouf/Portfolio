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

export type ProjectMedia =
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'video'; src: string; poster?: string; alt: string; caption?: string }
  | { type: 'videoLink'; url: string; label?: string; alt: string; caption?: string }

export interface Project {
  slug: string
  title: string
  summary: string
  longDescription?: string
  highlights?: string[]
  tags: string[]
  links?: ProjectLink[]
  award?: string
  cover?: string
  coverAlt?: string
  media?: ProjectMedia[]
}

export interface ResearchItem {
  title: string
  organization: string
  period: string
  description: string
  focus: string[]
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
  research: ResearchItem[]
  education: EducationItem[]
  achievements: Achievement[]
  volunteering: VolunteerItem[]
  languages: Language[]
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
      slug: 'trace-writing-robotic-arm',
      title: 'T.R.A.C.E. (Writing Robotic Arm)',
      summary:
        'Designed and 3D-printed a 3-DOF robotic arm with a task-space impedance controller for precise trajectory tracking, fully simulated in MATLAB Simscape.',
      longDescription:
        'T.R.A.C.E. is a 3-DOF writing robotic arm designed to trace predefined trajectories with high precision. The mechanical structure was fully 3D-printed and assembled in-house, and the controller was developed and validated in a MATLAB Simscape simulation before physical deployment.',
      highlights: [
        '3-DOF robotic arm with 3D-printed mechanical structure.',
        'Implemented a task-space impedance controller for precise trajectory tracking.',
        'Full control stack validated in MATLAB Simscape.',
      ],
      tags: ['Arduino', 'MATLAB/Simulink'],
      media: [
        {
          type: 'video',
          src: 'trace-demo.mp4',
          alt: 'T.R.A.C.E. robotic arm tracing a trajectory',
          caption: 'T.R.A.C.E. in action — task-space impedance control during trajectory tracing.',
        },
      ],
    },
    {
      slug: 'nine-lives',
      title: 'Nine Lives (Game Development Project)',
      summary:
        'Multiplayer and single-player pixel-art platformer built with Flutter and the Flame engine, with real-time multiplayer powered by Firebase.',
      longDescription:
        'Nine Lives is a pixel-art platformer built with Flutter and the Flame game engine. It supports both single-player and real-time multiplayer modes, with synchronization handled through Firebase real-time database for a seamless online experience.',
      highlights: [
        'Single-player and real-time multiplayer modes.',
        'Real-time state sync via Firebase real-time database.',
        'Deployed and playable in the browser.',
      ],
      tags: ['Flutter (Dart)', 'Flame Engine', 'Firebase'],
      links: [{ label: 'Live Demo', url: 'https://nine-lives-game.web.app/' }],
      media: [
        ...Array.from({ length: 14 }, (_, i) => ({
          type: 'image' as const,
          src: `nine-lives/screenshot-${String(i + 1).padStart(2, '0')}.png`,
          alt: `Nine Lives gameplay screenshot ${i + 1}`,
        })),
      ],
    },
    {
      slug: 'inverted-pendulum-control',
      title: 'Inverted Pendulum Control and Swing-up',
      summary:
        'Designed and implemented swing-up and stabilization controllers using PID, fuzzy logic, LQR, and energy-based control strategies.',
      longDescription:
        'A control-systems study of the classic inverted pendulum problem. Several control strategies — PID, fuzzy logic, LQR, and energy-based — were designed, compared, and evaluated for both the swing-up phase and upright stabilization.',
      highlights: [
        'Compared PID, fuzzy, LQR, and energy-based strategies.',
        'Designed both swing-up and stabilization controllers.',
        'Implemented entirely in MATLAB/Simulink.',
      ],
      tags: ['MATLAB/Simulink'],
    },
    {
      slug: 'explorer-bot',
      title: 'Explorer Bot',
      summary:
        'Award-winning glove-controlled robotic system featuring a mechanical grabber, camera, and multiple sensors.',
      longDescription:
        'Explorer Bot is a glove-controlled robotic system built with an Arduino and NI myRIO. It features a mechanical grabber, an onboard camera, and a suite of sensors, all controlled through a custom glove interface. The project won the LAU Engineering Projects Day.',
      highlights: [
        'Glove-based remote control interface.',
        'Mechanical grabber, camera, and multi-sensor payload.',
        'Won LAU Engineering Projects Day.',
      ],
      tags: ['Arduino', 'myRIO'],
      award: 'LAU Engineering Projects Day Winner',
    },
    {
      slug: 'roommate-finder',
      title: 'Roommate Finder',
      summary:
        'Web platform that matches users with compatible roommates based on lifestyle, location, and budget.',
      longDescription:
        'A full-stack web platform that connects students and renters with compatible roommates. Users create a profile describing lifestyle, location, and budget preferences, and the platform surfaces the best matches.',
      highlights: [
        'Profile-based matching on lifestyle, location, and budget.',
        'Full-stack app with Node.js and Express backend.',
        'Responsive interface built with HTML, CSS, and JavaScript.',
      ],
      tags: ['Node.js', 'Express', 'JavaScript', 'HTML', 'CSS'],
    },
  ],

  research: [
    {
      title: 'Brain-Computer Interface Research',
      organization: 'Lebanese American University',
      period: 'December 2025 – Present',
      description:
        'Undergraduate research in Brain-Computer Interfaces (BCI), focusing on multi-channel EEG signal preprocessing to improve signal quality for downstream classification and control applications.',
      focus: ['BCI', 'EEG Signal Processing', 'Signal Preprocessing'],
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
}
