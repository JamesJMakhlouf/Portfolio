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
  | { type: 'video'; src: string; poster?: string; muted?: boolean; alt: string; caption?: string }
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
      tags: ['C++', 'Arduino', 'MATLAB/Simulink'],
      cover: 'trace/trace.png',
      coverAlt: 'The T.R.A.C.E. robotic arm holding a pen',
      media: [
        {
          type: 'video',
          src: 'trace/trace-demo.mp4',
          alt: 'T.R.A.C.E. robotic arm tracing a trajectory',
          caption: 'T.R.A.C.E. in action — task-space impedance control during trajectory tracing.',
        },
        {
          type: 'image',
          src: 'trace/trace.png',
          alt: 'The T.R.A.C.E. robotic arm holding a pen',
          caption: 'The assembled 3-DOF robotic arm.',
        },
        {
          type: 'video',
          src: 'trace/Mechatronics.mp4',
          alt: 'MATLAB Simscape simulation of T.R.A.C.E.',
          caption: 'Full trajectory traced in the MATLAB Simscape simulation.',
        },
        {
          type: 'image',
          src: 'trace/Mechatronics.png',
          alt: 'Simulation output writing the word mechatronics',
          caption: 'Simulation output — the arm writes "mechatronics".',
        },
        {
          type: 'image',
          src: 'trace/model.jpg',
          alt: 'SOLIDWORKS model of the robotic arm',
          caption: 'Mechanical design modelled in SOLIDWORKS.',
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
      cover: 'nine-lives/screenshot-04.png',
      coverAlt: 'Nine Lives gameplay screenshot',
      media: [
        ...Array.from({ length: 14 }, (_, i) => ({
          type: 'image' as const,
          src: `nine-lives/screenshot-${String(i + 1).padStart(2, '0')}.png`,
          alt: `Nine Lives gameplay screenshot ${i + 1}`,
        })),
      ],
    },
    {
      slug: 'elevator-prototype',
      title: 'L.I.F.T. (Logic-Integrated Floor Transport)',
      summary:
        'A functional 2-floor elevator prototype driven by an Arduino Mega, translating core Mitsulift elevator operations into physical hardware.',
      longDescription:
        'L.I.F.T. (Logic-Integrated Floor Transport) is a fully functional 2-floor elevator prototype and CAD model built to Mitsulift specifications. The mechanical system translates real elevator operations into hardware: a 2:1 roping mechanism for lifting force, automated landing doors with a safety curtain, a landing operating panel with LCD feedback, encoder-based speed control with deceleration, and up/down over-travel limit switches for emergency protection. A separate fully functional revolving door with IR presence sensing handles the building entrance.',
      highlights: [
        '2:1 roping mechanism doubling lifting force on a lower-torque motor.',
        'Automated landing doors with IR safety curtain and servo linkage.',
        'Landing Operating Panel (LOP) with push-button input and LCD feedback.',
        'Encoder-based speed control with landing deceleration logic.',
        'Up/Down Over-Travel (UOT/DOT) limit switches with emergency halt and manual reset.',
        'Revolving entrance door with IR user detection.',
      ],
      tags: ['Arduino', 'C++'],
      cover: 'elevator-prototype/Building Front (2).jpeg',
      coverAlt: 'The L.I.F.T. elevator prototype building front',
      media: [
        {
          type: 'video',
          src: 'elevator-prototype/2 to 1 Roping.mp4',
          alt: '2:1 roping mechanism in motion',
          caption: '2:1 roping mechanism doubling the lifting force.',
        },
        {
          type: 'video',
          src: 'elevator-prototype/Deceleration.mp4',
          alt: 'Elevator decelerating at the landing',
          caption: 'Speed control with landing deceleration.',
        },
        {
          type: 'video',
          src: 'elevator-prototype/Door System Back.mp4',
          alt: 'Landing door system from the back',
          caption: 'Landing door actuation mechanism.',
        },
        {
          type: 'video',
          src: 'elevator-prototype/Emergency.mp4',
          alt: 'Emergency halt triggered by over-travel switch',
          caption: 'Over-travel protection triggering emergency mode.',
        },
        {
          type: 'video',
          src: 'elevator-prototype/Revolving Door.mp4',
          alt: 'Revolving door in operation',
          caption: 'Revolving entrance door with IR user detection.',
        },
        {
          type: 'video',
          src: 'elevator-prototype/Safety Curtain.mp4',
          alt: 'Safety curtain detecting an obstruction',
          caption: 'IR safety curtain stopping door closure on obstruction.',
        },
        {
          type: 'image',
          src: 'elevator-prototype/2 to 1 System.jpeg',
          alt: '2:1 roping system diagram',
          caption: 'Pulley-based 2:1 roping system.',
        },
        {
          type: 'image',
          src: 'elevator-prototype/Building Front (2).jpeg',
          alt: 'Elevator prototype installed in building front',
          caption: 'The prototype integrated into the building front.',
        },
        {
          type: 'image',
          src: 'elevator-prototype/Door System Back.jpeg',
          alt: 'Landing door actuator assembly',
          caption: 'Landing door panels, guide rails, and servo motor.',
        },
        {
          type: 'image',
          src: 'elevator-prototype/DOT.jpeg',
          alt: 'Down over-travel switch',
          caption: 'Down Over-Travel (DOT) limit switch.',
        },
        {
          type: 'image',
          src: 'elevator-prototype/Emergency.jpeg',
          alt: 'Emergency system components',
          caption: 'Emergency halt hardware.',
        },
        {
          type: 'image',
          src: 'elevator-prototype/Encoder (2).jpeg',
          alt: 'Quadrature encoder on the motor',
          caption: 'Quadrature encoder for speed and position tracking.',
        },
        {
          type: 'image',
          src: 'elevator-prototype/Encoder.jpeg',
          alt: 'Encoder installation detail',
          caption: 'Encoder attached to the traction motor.',
        },
        {
          type: 'image',
          src: 'elevator-prototype/LOP + Door.jpeg',
          alt: 'Landing operating panel and landing door',
          caption: 'Landing Operating Panel (LOP) with LCD feedback.',
        },
        {
          type: 'image',
          src: 'elevator-prototype/Motor.jpeg',
          alt: 'Traction motor unit',
          caption: 'Traction motor driving the roping system.',
        },
        {
          type: 'image',
          src: 'elevator-prototype/UOT.jpeg',
          alt: 'Up over-travel switch',
          caption: 'Up Over-Travel (UOT) limit switch.',
        },
      ],
    },
    {
      slug: 'elevator-model',
      title: 'Mitsulift Elevator CAD Model',
      summary:
        'Detailed 3D SOLIDWORKS model of the Mitsulift elevators, covering cabin, landing doors, and machine room design.',
      longDescription:
        'A detailed 3D CAD model of the elevator system at Mitsulift, designed in SOLIDWORKS. The model covers the full installation scope — cabin design, landing doors, and machine room layout — with mechanical mates configured to simulate cable and roping motion during assembly animations.',
      highlights: [
        'Full elevator assembly modelled in SOLIDWORKS.',
        'Cabin, landing door, and machine room sub-designs.',
        'Mechanical mates simulating cable and roping motion.',
      ],
      tags: ['SOLIDWORKS'],
      cover: 'elevator-model/Screenshot 2026-07-28 114629.png',
      coverAlt: 'SOLIDWORKS model of the Mitsulift elevator',
      media: [
        {
          type: 'video',
          src: 'elevator-model/animation.mp4',
          alt: 'Animation of the elevator CAD model',
          caption: 'Assembly animation of the Mitsulift elevator model.',
        },
        {
          type: 'image',
          src: 'elevator-model/Screenshot 2026-07-28 114629.png',
          alt: 'Elevator CAD model view 1',
          caption: 'Full elevator assembly.',
        },
        {
          type: 'image',
          src: 'elevator-model/Screenshot 2026-07-28 114952.png',
          alt: 'Elevator CAD model view 2',
          caption: 'Cabin and counterweight assembly.',
        },
        {
          type: 'image',
          src: 'elevator-model/Screenshot 2026-07-28 115224.png',
          alt: 'Machine room CAD design',
          caption: 'Machine room layout.',
        },
        {
          type: 'image',
          src: 'elevator-model/Screenshot 2026-07-28 115908.png',
          alt: 'Landing doors CAD design',
          caption: 'Landing door frame and panels.',
        },
      ],
    },
    {
      slug: 'cup-guessing',
      title: 'Autonomous Cup Guessing Game',
      summary:
        'Fully autonomous version of the classic "cups order" game — a Raspberry Pi shuffles three cups, and computer vision scores the player\'s guess.',
      longDescription:
        'An autonomous cup guessing system that removes the human moderator from the classic "cups order" game. On a Raspberry Pi, the system shuffles three colored cups onto a display conveyor, starts a timer, and uses a Pi Camera with HSV-filtered computer vision to read the player\'s arrangement. The LCD reports how many cups sit in the correct position each round, tracks elapsed time on a dedicated timer thread, and announces the win once the player matches the hidden order.',
      highlights: [
        'Raspberry Pi-controlled non-blocking state machine for shuffling and detection.',
        'Pi Camera + HSV computer vision for cup recognition and guess validation.',
        'Threaded LCD timing and guess-counter feedback.',
        'Self-contained game loop with win detection and restart.',
      ],
      tags: ['Raspberry Pi', 'Python', 'Computer Vision'],
      media: [
        {
          type: 'image',
          src: 'cup-guessing/WhatsApp Image 2026-08-17 at 10.38.35 AM.jpeg',
          alt: 'Cup guessing game setup overview',
          caption: 'Hardware setup of the cup guessing game.',
        },
        {
          type: 'image',
          src: 'cup-guessing/WhatsApp Image 2026-08-17 at 10.38.35 AM (2).jpeg',
          alt: 'Cup guessing game components close-up',
          caption: 'Cups, conveyor, and sensor components.',
        },
        {
          type: 'video',
          src: 'cup-guessing/demo-video.mp4',
          alt: 'Cup Guessing Game demo video',
          caption: 'Full demo of the autonomous cup guessing game.',
        },
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
      media: [
        {
          type: 'video',
          src: 'inverted-pendulum/pendulum-demo.mp4',
          muted: true,
          alt: 'Inverted pendulum control demo video',
          caption: 'Swing-up and stabilization of the inverted pendulum.',
        },
        {
          type: 'image',
          src: 'inverted-pendulum/WhatsApp Image 2026-08-17 at 10.39.18 AM.jpeg',
          alt: 'Inverted pendulum hardware setup',
          caption: 'Physical inverted pendulum setup.',
        },
      ],
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
      cover: 'roommate-finder/Screenshot 2.png',
      coverAlt: 'Roommate Finder platform showcase',
      media: [
        ...Array.from({ length: 20 }, (_, i) => ({
          type: 'image' as const,
          src: `roommate-finder/Screenshot ${i + 1}.png`,
          alt: `Roommate Finder screenshot ${i + 1}`,
        })),
      ],
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
      tags: ['LabVIEW', 'Arduino', 'myRIO'],
      award: 'LAU Engineering Projects Day Winner',
      cover: 'explorer-bot/rover.png',
      coverAlt: 'The Explorer Bot rover',
      media: [
        {
          type: 'image',
          src: 'explorer-bot/rover.png',
          alt: 'The Explorer Bot rover',
          caption: 'The completed Explorer Bot rover.',
        },
        {
          type: 'video',
          src: 'explorer-bot/full-demo.mp4',
          alt: 'Full Explorer Bot demo',
          caption: 'Full demo of the glove-controlled Explorer Bot.',
        },
        {
          type: 'video',
          src: 'explorer-bot/demo-1.mp4',
          alt: 'Explorer Bot demo clip 1',
          caption: 'Demo clip — glove control in action.',
        },
        {
          type: 'video',
          src: 'explorer-bot/demo-2.mp4',
          alt: 'Explorer Bot demo clip 2',
          caption: 'Demo clip — grabber and sensors.',
        },
        {
          type: 'video',
          src: 'explorer-bot/demo-3.mp4',
          alt: 'Explorer Bot demo clip 3',
          caption: 'Demo clip — navigating with the camera feed.',
        },
        {
          type: 'image',
          src: 'explorer-bot/glove.png',
          alt: 'The glove control interface',
          caption: 'The custom glove controller.',
        },
        {
          type: 'image',
          src: 'explorer-bot/rover-2.png',
          alt: 'Another view of the Explorer Bot rover',
          caption: 'Another view of the rover.',
        },
      ],
    },
    {
      slug: 'gripper-model',
      title: 'Robotic Arm CAD Model with Gripper',
      summary:
        '6-axis robotic arm CAD assembly in SOLIDWORKS with a two-jaw gripper, simulated in SOLIDWORKS Simulation and Flow Simulation.',
      longDescription:
        'A 6-axis robotic arm designed in SOLIDWORKS for the EE 351 Computer Aided Design course, inspired by the "SolidWorks Tutorial #310: Robotic Arm". The assembly includes 29 unique parts — base and turntable, lower and upper arm links, wrist and end-effector mount, connectors, bearings, support plates, and a servo motor, mostly in Aluminum Alloy 6061-T6 and POM Acetal Copolymer. The gripper jaws were stress-analyzed under a 5.72 N box load with a 1.5 dynamic safety factor, and an external CFD flow simulation over the arm at 10 km/h produced streamlines, velocity, and pressure contours.',
      highlights: [
        '6-axis robotic arm with a two-jaw gripper end-effector.',
        '29 unique parts modelled and mated in SOLIDWORKS.',
        'Static gripper-jaw stress analysis with factor of safety.',
        'External flow simulation visualizing pressure and velocity contours.',
      ],
      tags: ['SOLIDWORKS'],
      links: [
        { label: 'Engineering Drawings', url: 'gripper-model/Engineering Drawings.PDF' },
        { label: 'Rendered Images', url: 'gripper-model/Rendered Images.pdf' },
      ],
      cover: 'gripper-model/Screenshot 2025-12-02 221818.png',
      coverAlt: 'SOLIDWORKS model of the robotic arm',
      media: [
        {
          type: 'video',
          src: 'gripper-model/Assembly.mp4',
          alt: 'Assembly animation of the robotic arm',
          caption: 'Assembly animation of the robotic arm CAD model.',
        },
        ...[
          '221818',
          '221915',
          '223149',
          '224157',
          '224303',
          '224346',
          '224524',
          '224617',
          '224711',
          '224756',
          '224845',
          '224958',
          '225032',
          '225123',
          '225413',
          '225536',
          '230437',
          '230700',
          '230744',
          '230911',
          '231022',
          '231135',
          '231259',
          '231442',
          '231639',
          '231740',
          '231810',
          '231852',
          '231926',
          '232005',
          '232040',
          '232114',
          '232144',
          '232648',
          '232739',
          '232825',
          '232925',
          '233618',
          '233638',
          '235020',
          '235044',
          '235522',
          '235549',
        ].map((stamp) => ({
          type: 'image' as const,
          src: `gripper-model/Screenshot 2025-12-02 ${stamp}.png`,
          alt: `Robotic arm CAD model view ${stamp}`,
        })),
        ...[
          'Screenshot 2025-12-03 000327.png',
          'Screenshot 2025-12-03 000539.png',
        ].map((name) => ({
          type: 'image' as const,
          src: `gripper-model/${name}`,
          alt: `Robotic arm CAD model view ${name.replace(/\.png$/, '')}`,
        })),
        {
          type: 'image',
          src: 'gripper-model/Screenshot 2025-12-05 184448.png',
          alt: 'Flow simulation surface pressure distribution',
          caption: 'Flow simulation — surface pressure distribution.',
        },
        {
          type: 'image',
          src: 'gripper-model/Screenshot 2025-12-05 184634.png',
          alt: 'Flow simulation streamlines plot',
          caption: 'Flow simulation — streamlines plot.',
        },
        {
          type: 'image',
          src: 'gripper-model/Screenshot 2025-12-05 184938.png',
          alt: 'Flow simulation velocity contour plot',
          caption: 'Flow simulation — velocity contour plot.',
        },
        {
          type: 'image',
          src: 'gripper-model/Screenshot 2025-12-05 190346.png',
          alt: 'Flow simulation pressure trajectories',
          caption: 'Flow simulation — pressure trajectories.',
        },
        {
          type: 'image',
          src: 'gripper-model/Screenshot 2025-12-05 190639.png',
          alt: 'Flow simulation velocity trajectories',
          caption: 'Flow simulation — velocity trajectories.',
        },
      ],
    },
    {
      slug: 'shooter-game',
      title: 'Shooter Game',
      summary:
        'Browser-based shooter game built with vanilla JavaScript, HTML5 Canvas, and CSS — fully playable in the browser.',
      longDescription:
        'A browser-based shooter game built entirely with vanilla JavaScript, HTML5 Canvas, and CSS. Players control a shooter defending against a stream of approaching targets, with score tracking and escalating difficulty. The game runs directly in the browser with no dependencies or build step.',
      highlights: [
        'Built with vanilla JavaScript and HTML5 Canvas.',
        'Score tracking with escalating difficulty.',
        'Deployed and playable in the browser.',
      ],
      tags: ['JavaScript', 'HTML', 'CSS'],
      links: [{ label: 'Live Demo', url: 'https://jamesjmakhlouf.github.io/Shooter-Game/' }],
      cover: 'shooter/Screenshot 2026-08-12 115659.png',
      coverAlt: 'Shooter Game gameplay screenshot',
      media: [
        ...[
          '115659',
          '115755',
          '115812',
          '115842',
          '115854',
          '115910',
        ].map((stamp) => ({
          type: 'image' as const,
          src: `shooter/Screenshot 2026-08-12 ${stamp}.png`,
          alt: `Shooter Game gameplay screenshot ${stamp}`,
        })),
      ],
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
      period: 'August 2023 – December 2027',
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
