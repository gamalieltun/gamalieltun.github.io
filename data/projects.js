// data/projects.js
// Simple file-based CMS for projects

// Each project:
// id, slug, title, role, year, tags [array], tech [array], summary, description (HTML), featuredImage, links

const projects = [
    {
      id: 1,
      slug: "personal-portfolio-website",
      title: "Personal Portfolio Website",
      role: "Designer & Developer",
      year: 2025,
      tags: ["Web", "Frontend"],
      tech: ["HTML", "CSS", "JavaScript"],
      summary:
        "A fast, fully static portfolio site with a file-based blog, dark theme, and responsive layout.",
      featuredImage: "assets/images/project-portfolio.jpg",
      liveUrl: "#",
      repoUrl: "#",
      description: `
        <p>
          This site is my central hub on the internet. I wanted something simple, fast,
          and fully under my control without relying on heavy frameworks.
        </p>
        <p>
          The project uses a file-based content approach: blog posts and projects are stored as JavaScript
          arrays (<code>posts.js</code> and <code>projects.js</code>). The pages are then rendered
          dynamically with vanilla JavaScript.
        </p>
        <p>
          Key features include:
        </p>
        <ul>
          <li>Responsive, dark-only design</li>
          <li>File-based blog and projects</li>
          <li>SEO-friendly structure</li>
        </ul>
      `,
    },
    {
      id: 2,
      slug: "safestride-smart-cane-addon",
      title: "SafeStride – Smart Obstacle Detection Add-On",
      role: "Prototype Builder | Microcontroller Developer | Embedded Programmer",
      year: 2024,
      tags: ["Hardware", "Assistive Tech", "IoT", "Prototype", "T2B"],
      tech: ["Ultrasonic Sensor", "Microcontroller", "Prototyping", "User Testing", "Embedded C"],
      summary:
        "A detachable ultrasonic-based smart cane attachment that enhances obstacle detection for visually impaired users. Developed in the 'Technology to Business' elective module.",
      featuredImage: "assets/images/safestride.jpeg",
      liveUrl: "#",
      repoUrl: "#",
      description: `
      
    
        <h3>Project Background</h3>
        <p>
          SafeStride was created as a school project in the elective module <strong>“Technology to Business (T2B)”</strong>. 
          The module required students to identify a real-world problem, develop a technical solution, 
          validate the idea with users, and build a business model around it. Our team focused on mobility challenges 
          faced by the visually impaired community in Singapore.
        </p>
    
        <h3>My Role</h3>
        <ul>
          <li>Built the full physical prototype housing and mounting system.</li>
          <li>Programmed the microcontroller to process ultrasonic readings.</li>
          <li>Developed the detection logic and buzzer feedback system.</li>
          <li>Integrated the ultrasonic module with the control board.</li>
          <li>Conducted prototype testing and assisted in user trials.</li>
        </ul>
    
        <h3>Overview</h3>
        <p>
          SafeStride is a detachable smart cane add-on designed to help visually impaired individuals detect 
          obstacles above knee level—something traditional canes often cannot detect. The device uses an ultrasonic 
          sensor to measure distance and alerts the user with buzzer feedback that increases in frequency as obstacles get closer.
        </p>
    
        <ul>
          <li>Detects elevated obstacles such as open windows, railings, tables, and platforms.</li>
          <li>Up to <strong>3 meters</strong> detection range with directional sensing.</li>
          <li>Audio-based feedback system (simulating vibration feedback).</li>
          <li>Lightweight, portable, and attachable to any cane.</li>
          <li>Designed to be affordable and accessible for elderly users.</li>
        </ul>
    
        <div class="project-image">
          <img src="assets/images/project-safestride-prototype.jpg" alt="SafeStride Prototype Unit" />
        </div>
    
        <h3>Technical Details</h3>
        <ul>
          <li><strong>Ultrasonic Sensor (HC-SR04)</strong> for distance measurement.</li>
          <li><strong>Microcontroller</strong> handles timing pulses, signal processing, and output control.</li>
          <li><strong>Buzzer Feedback Logic</strong> increases beep rate based on proximity.</li>
          <li><strong>Detachable Bracket</strong> designed for universal cane compatibility.</li>
          <li><strong>Low Power Draw</strong> for long-lasting mobile use.</li>
        </ul>
    
        <div class="project-image">
          <img src="assets/images/project-safestride-testing.jpg" alt="User Testing Session" />
        </div>
    
        <h3>User Testing & Validation</h3>
        <p>
          We conducted interviews and real-world tests with visually impaired individuals at Dialogue in the Dark 
          and St. Joseph’s Home.
        </p>
    
        <ul>
          <li><strong>70%</strong> of users supported the concept.</li>
          <li>Users appreciated the affordability and compatibility with their existing cane.</li>
          <li>Testing showed successful detection of obstacles that traditional canes missed.</li>
        </ul>
    
        <h3>Business Insights (T2B Requirements)</h3>
        <ul>
          <li>Target Audience: Elderly visually impaired users in Singapore.</li>
          <li>Willingness to Pay: <strong>$40–$60</strong> based on survey results.</li>
          <li>Projected Revenue: <strong>SGD 50k–100k</strong> in Year 1, scaling to <strong>250k–300k</strong> by Year 3.</li>
          <li>Competitive products cost $399–$1050, making SafeStride significantly more accessible.</li>
        </ul>
    
        <div class="project-image">
          <img src="assets/images/project-safestride-financials.jpg" alt="Revenue Projection Chart" />
        </div>
    
        <h3>Outcome</h3>
        <p>
          SafeStride became a complete end-to-end project consisting of market research, technical development, 
          user validation, and business modelling. It showcased how engineering and entrepreneurship can work together 
          to solve meaningful real-world problems. This project strengthened my skills in embedded systems, hardware design, 
          microcontroller programming, and user-focused product development.
        </p>
      `,
    },
    

    {
      id: 3,
      slug: "student-expense-tracker",
      title: "Student Expense Tracker",
      role: "Full-Stack Developer",
      year: 2024,
      tags: ["Web App", "Productivity"],
      tech: ["HTML", "CSS", "JavaScript"],
      summary:
        "A lightweight web app that helps students track daily expenses and view simple analytics.",
      featuredImage: "assets/images/project-expense.jpg",
      liveUrl: "#",
      repoUrl: "#",
      description: `
        <p>
          The Student Expense Tracker is a small web app built to help manage day-to-day spending.
          It focuses on clarity: quick input, clean summaries, and simple charts.
        </p>
        <p>
          The UI is optimized for mobile so it can be used quickly after each purchase.
        </p>
      `,
    },
  ];
  