// data/projects.js
// Simple file-based CMS for projects

// Each project:
// id, slug, title, role, year, tags [array], tech [array], summary, description (HTML), featuredImage, links

const projects = [
    
    {
      id: 1,
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
          <img src="assets/images/safestride1.jpeg" alt="SafeStride Brainstorm" />
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
          <img src="assets/images/safestride2.jpeg" alt="Mobile Interface" />
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
          <img src="assets/images/safestride3.jpeg" alt="The Prototype" />
        </div>
    
        <h3>Outcome</h3>
        <p>
          SafeStride became a complete end-to-end project consisting of market research, technical development, 
          user validation, and business modelling. It showcased how engineering and entrepreneurship can work together 
          to solve meaningful real-world problems. This project strengthened my skills in embedded systems, hardware design, 
          microcontroller programming, and user-focused product development.
        </p>
        <div class="project-image">
          <img src="assets/images/safestride4.jpeg" alt="User Trial" />
        </div>

      `,
    },
    

    {
      id: 2,
      slug: "habitrack-habit-fitness-app",
      title: "HabiTrack – Youth Habit & Fitness Tracking App",
      role: "Prototype & Research Lead",
      year: 2024,
      tags: ["Mobile App", "Health", "Gamification"],
      tech: ["Figma", "UI/UX Prototyping", "User Research"],
      summary:
        "A gamified habit-tracking concept designed to help youths build consistent fitness routines. Created as a team project for the SIP module in Singapore Polytechnic, focusing on structured goals, motivation, and realistic health habit-building.",
      featuredImage: "assets/images/habitrack/habitrack.jpeg",
      liveUrl: "#",
      repoUrl: "#",
      description: `
        
    
        <p>
          HabiTrack is a youth-focused habit and fitness tracking app developed during the 
          <strong>Social Innovation Project (SIP)</strong> module in Year 2 at Singapore Polytechnic. 
          Our challenge was to propose a realistic solution that encourages healthier lifestyles 
          among youths aged 17–25 in Queenstown, based on real user research and problem validation.
        </p>
    
        <p>
          Insights from the SIP survey and interviews showed a clear pattern: 
          <strong>youths want to stay active, but struggle due to tight schedules, inconsistent motivation, and lack of structure</strong>. 
          HabiTrack addresses this by combining simple everyday routines with gamification, progress tracking, 
          and friendly competition.
        </p>
        <figure class="post-image">
          <img src="assets/images/habitrack/habitrack1.jpeg" alt="HabiTrack Logo" />
          <figcaption>HabiTrack Logo</figcaption>
        </figure>

        <h4>My Role (Precise Responsibilities)</h4>
        <ul>
          <li><strong>Developed the interactive prototype</strong> using Figma based on final app flows.</li>
          <li><strong>Led the research synthesis</strong> from surveys, observation notes, and gallery walk feedback.</li>
          <li><strong>Constructed the User Journey Map</strong> and refined the persona (“Active Milo”).</li>
          <li><strong>Translated user pain points</strong> into actionable features.</li>
          <li><strong>Supported concept clustering</strong> from the initial 15 raw idea directions to the final app concept.</li>
        </ul>
    
    
        <h4>Core Problem We Addressed</h4>
        <ul>
          <li>Youths lack <strong>structured motivation</strong> to maintain healthy habits.</li>
          <li><strong>Time constraints</strong> and long commuting routes reduce exercise consistency.</li>
          <li>Most apps focus on advanced fitness goals, not small, achievable weekly habits.</li>
        </ul>
    
        <h4>Key App Features (Based on Real User Input)</h4>
        <p>
          Each feature was selected because it directly supports the users’ motivations identified in the SIP findings:
        </p>
        <ul>
          <li><strong>Gamified streaks & points</strong> – keeps engagement high without overwhelming users.</li>
          <li><strong>Weekly goal-setting</strong> – encourages realistic, achievable health habits.</li>
          <li><strong>Leaderboard</strong> – competitive motivation for users who enjoy comparing progress.</li>
          <li><strong>Location-based activity suggestions</strong> – nearby places like parks, tracks, and gyms.</li>
          <li><strong>Simple task-based routines</strong> – avoids complex fitness plans.</li>
        </ul>
    
        <figure class="post-image">
          <img src="assets/images/habitrack/habitrack2.jpeg" alt="Mobile App Interface" />
          <figcaption>Mobile App Interface</figcaption>
        </figure>
    
        <h4>User Research & Validation</h4>
        <p>
          Using the User Journey Map and gallery walk insights, we identified exactly what motivates 
          and discourages youths. Below are the key findings:
        </p>
        <ul>
          <li>Users preferred <strong>short, manageable activity goals</strong> over long workouts.</li>
          <li><strong>Gamification</strong> was consistently rated as the most engaging element.</li>
          <li>Clear visual progress and streaks helped maintain commitment.</li>
          <li>Users requested <strong>reminders</strong> and <strong>simple UI navigation</strong>.</li>
        </ul>
    
        <h4>Outcome</h4>
        <p>
          HabiTrack became a well-validated app concept supported by real data, structured research,
          and a functional prototype. This project strengthened my skills in user-centered design,
          prototyping, research synthesis, and presenting a complete product concept with clear reasoning.
        </p>

        <figure class="post-image">
          <img src="assets/images/habitrack/habitrack.jpeg" alt="Gallery Walk" />
          <figcaption>Gallery Walk</figcaption>
        </figure>
        
      `,
    },
    
    {
      id: 3,
      slug: "unicycle-campus-marketplace",
      title: "UniCycle – Campus Marketplace & Peer Support App",
      role: "Android Developer (Marketplace, Camera, Messaging)",
      year: 2024,
      tags: ["Mobile App", "Marketplace", "Android"],
      tech: ["Java", "Android Studio", "MySQL", "SQLite", "Camera API"],
      summary:
        "A student-driven mobile app that enables SP students to buy/sell academic materials, connect with seniors, and exchange study advice. Developed as part of a team project, with my main contributions in marketplace coding, camera integration, postings, and in-app messaging.",
      featuredImage: "assets/images/unicycle/unicycle.jpeg",
      liveUrl: "#",
      repoUrl: "#",
      description: `
        
        <p>
          UniCycle is a multi-functional mobile app created for <strong>Singapore Polytechnic students</strong> as part of a 
          team project. Its main purpose is to provide a <strongcampus-specific marketplace</strong> where students can buy, 
          sell, or donate used academic materials while also connecting with seniors for study help and project advice. 
          The idea directly addresses the problem statement described in the project proposal: 
          <em>“How can we create a platform that supports recycling of academic materials and meaningful knowledge-sharing?”</em>
        </p>
    
        <p>
          According to the background research in our proposal, Singapore’s domestic recycling rate has fallen 
          from 62% to 52% in recent years, partly due to the drop in recycled paper and textbooks. 
          UniCycle offers a practical solution by <strong>extending the lifespan of academic resources</strong> 
          and reducing waste on campus. (Background data on page 4) :contentReference[oaicite:1]{index=1}
        </p>
    
        <h4>My Role</h4>
        <ul>
          <li><strong>Implemented the full Marketplace system</strong> including:
            <ul>
              <li>Market listings (buy, sell, donate)</li>
              <li>Category filtering</li>
              <li>Search bar and item browsing</li>
            </ul>
          </li>
          <li><strong>Integrated camera features</strong> to allow users to capture item photos and upload them when posting items.</li>
          <li><strong>Developed the posting interface</strong> (form, categories, price, description).</li>
          <li><strong>Coded in-app messaging</strong> to enable students to communicate with buyers and sellers.</li>
          <li>Contributed to database integration using <strong>Firebase</strong> for item storage and retrieval.</li>
        </ul>
    
        <h4>Challenges Faced</h4>
        <p>
          As this was a large-scale student project with multiple functional areas (marketplace, community forum, 
          QR features, admin filtering, notifications), we encountered several difficulties during development:
        </p>
        <ul>
          <li><strong>Database Synchronization</strong> – Integrating Firebase resulted in timing issues and occasional mismatched data.</li>
          <li><strong>Camera & Image Upload</strong> – Getting consistent image quality across phones required adjustments in the Camera API workflow.</li>
          <li><strong>UI Alignment</strong> – Coordinating consistent layouts across the Marketplace and Community pages was tricky because four team members handled different screens.</li>
          <li><strong>Messaging Integration</strong> – Ensuring smooth user-to-user messaging while maintaining message history required additional data structure changes.</li>
        </ul>
    
        <p>
          Despite these challenges, we were able to deliver a <strong>functional working prototype</strong> with all core features implemented. 
          Some adjustments were made to simplify the payment structure and admin moderation flows, but the 
          overall app experience remained consistent with the project vision described in the proposal.
        </p>
    
       <figure class="post-image">
          <img src="assets/images/unicycle/unicycle2.jpeg" alt="App Design" />
          <figcaption>App Design on Figma</figcaption>
        </figure>
    
        <h4>Key Features of UniCycle</h4>
        <ul>
          <li><strong>Marketplace</strong> – Buy, sell, donate academic materials (books, tools, stationery).</li>
          <li><strong>Camera Upload</strong> – Users can capture item photos directly from the app.</li>
          <li><strong>Community Forum</strong> – Discussion space for project help, module advice, and mentorship.</li>
          <li><strong>QR Code</strong> – Used for easy profile sharing.</li>
          <li><strong>Notifications</strong> – Alerts for offers, posts, and messages.</li>
          <li><strong>User Profile & Editing</strong> – Students can track their posted items and received posts.</li>
        </ul>
    
        <h4>Outcome</h4>
        <p>
          UniCycle stands out as an app that supports <strong>environmental sustainability</strong>, 
          <strong>student affordability</strong>, and <strongcommunity building</strong>, offering both academic material recycling 
          and mentorship features.
          The project allowed me to apply my skills in mobile development, marketplace architecture, camera 
          integration, and messaging logic while working within a team-driven environment.
        </p>
    
        <figure class="post-image">
          <img src="assets/images/unicycle/unicycle1.jpeg" alt="Student Interview" />
          <figcaption>A Feedback from a Student</figcaption>
        </figure>
      `,
    },
    {
      id: 4,
      slug: "carousel-carpark",
      title: "Carousel CarPark – Automated EV Parking & Charging System",
      role: "Hardware Developer (3D Printing, Mechanical Design)",
      year: 2024,
      tags: ["Hardware", "3D Printing", "Sustainability", "STM32"],
      tech: ["3D Printing", "CAD", "Prototyping", "STM32", "Sensors"],
      summary:
        "A hardware prototype of an automated vertical parking carousel designed to support EV adoption, improve land usage, and align with Singapore’s sustainability goals.",
      featuredImage: "assets/images/carouselcp/carouselcp.jpeg",
      liveUrl: "#",
      repoUrl: "#",
      description: `
        
    
        <p>
          <strong>Carousel CarPark</strong> is a hardware-driven innovation created under the 
          <strong>Microcontroller Applications module</strong>. The project addresses a critical challenge highlighted 
          in our research: in Singapore, EV adoption is increasing rapidly, yet EV parking lots and charging 
          spaces remain limited. As referenced in our slides, there are <strong>only ~6,000 charging points</strong> today, 
          far below the national target of <strong>60,000 by 2030</strong>.
        </p>
    
        <p>
          The solution is a <strong>vertical automated parking carousel</strong> that stores EVs in stacked rotating 
          compartments—minimizing land use while enabling each slot to support EV charging. This system directly 
          aligns with the Singapore Green Plan 2030 and SDG goals on sustainable energy and efficient cities.
        </p>
    
        <h4>My Role</h4>
        <ul>
          <li><strong>Primary hardware developer</strong> for the Carousel CarPark mechanism.</li>
          <li><strong>Designed and measured all mechanical components</strong> for proper rotation, alignment, and fit.</li>
          <li><strong>3D-printed the full chain and mechanical parts</strong> used to simulate carousel movement.</li>
          <li><strong>Worked with teammate Wai Yan</strong> to refine the mechanical concept and overall layout.</li>
          <li>Collaborated with the programming team for <strong>sensor integration</strong> (IR, ultrasonic, keypad, LCD).</li>
        </ul>
    
        <figure class="post-image">
          <img src="assets/images/carouselcp/carouselcp3.jpeg" alt="Prototype Tear Down" />
          <figcaption>Prototype Tear Down</figcaption>
        </figure>
    
        <h4>Key Features</h4>
        <ul>
          <li><strong>Vertical Parking Carousel</strong> – reduces land needed for EV parking lots.</li>
          <li><strong>Integrated Charging Concept</strong> – each slot includes EV charging capability.</li>
          <li><strong>Microcontroller-Based Control</strong> – using STM32 with sensors and motor control.</li>
          <li><strong>User Access Input</strong> – keypad and verification to retrieve vehicle.</li>
          <li><strong>Real-Time Display</strong> – LCD showing slot number and carousel movement.</li>
        </ul>
    
        <h4>Challenges Faced</h4>
        <ul>
          <li><strong>Complex mechanical alignment</strong> to ensure smooth rotation.</li>
          <li><strong>Chain tension & measurements</strong> needed precise adjustments before printing.</li>
          <li><strong>Weight distribution</strong> during rotation caused stability issues in early prototypes.</li>
          <li><strong>Microcontroller integration</strong> required syncing sensors with physical movement.</li>
          <li>Iterative design revisions were needed to match the concept sketches.</li>
        </ul>
        <figure class="post-image">
          <img src="assets/images/carouselcp/carouselcp2.jpeg" alt="Final Prototype" />
          <figcaption>Final Prototype</figcaption>
        </figure>
        <p>
          Despite these challenges, our team successfully built a <strong>working functional prototype</strong> that 
          demonstrated the carousel concept, movement mechanism, and EV-charging workflow. The final model 
          showcased how vertical parking can free land, reduce congestion, and support Singapore’s push for 
          cleaner energy vehicles.
        </p>
    
        <figure class="post-image">
          <img src="assets/images/carouselcp/carouselcp1.jpeg" alt="Wai Yan and I" />
          <figcaption>Wai Yan and I with the prototype</figcaption>
        </figure>
      `,
      
    },
    {
      id: 5,
      slug: "pdd-dashboard",
      title: "PDD Dashboard — Church of the Province of Myanmar",
      role: "System Architect & Developer (Provincial Digital Development Officer)",
      year: 2026,
      tags: ["Web", "Cloud", "Fullstack", "Automation"],
      tech: [
        "Cloudflare Workers",
        "Google Sheets API",
        "Google Drive API",
        "Gmail API",
        "OAuth2",
        "HTML5",
        "CSS3",
        "Vanilla JavaScript"
      ],
      summary:
        "A centralised digital management system built for the Church of the Province of Myanmar's Programme Development Department — replacing manual Excel workflows with a full-stack dashboard for finance, reporting, task management, and automated email notifications.",
      featuredImage: "/assets/images/pdd.jpeg",
      liveUrl: "#",
      repoUrl: "#",
      description: `
    
        <p>
          The <strong>PDD Dashboard</strong> is a single-tenant web application built for the 
          <strong>Church of the Province of Myanmar — Province Development Department (CPMPDD)</strong>.
          It was designed and developed entirely by me in my role as <strong>Provincial Digital Development Officer</strong>,
          with one clear mandate: digitalize the department's internal workflows without disrupting any existing 
          initiatives, systems, or people already operating in the organisation.
        </p>
    
        <p>
          Before this system, the department relied heavily on manual Excel files and informal email chains 
          to manage programme data, track expenditure, generate donor reports, and coordinate staff across 
          multiple dioceses in Myanmar. The PDP Dashboard replaces all of that with a structured, 
          role-aware platform — built on zero-cost infrastructure and designed to be maintainable 
          without a dedicated IT team.
        </p>
    
        <h4>What It Does</h4>
        <ul>
          <li><strong>Finance Module</strong> — Full budget lifecycle: create budgets, attach international donors (ABM, TearFund, USPG, ARDF, ERD), log quarterly expenditure, approve or reject submissions, and generate formatted financial reports directly to Google Drive.</li>
          <li><strong>Report Generation</strong> — Four report types (budget, donor, diocese, consolidated) built to match the ABM Joint Budget and Reporting Template exactly — with FX columns for AUD, GBP, and USD where exchange rates are set.</li>
          <li><strong>Programme & Task Management</strong> — Create programmes, projects, and tasks. Assign staff. Track status and completion across five active programmes.</li>
          <li><strong>DCR Reports</strong> — Staff submit Daily, Monthly, Biannual, and Annual reports through a guided form. Each submission saves a structured JSON file and a human-readable Google Doc to Drive automatically.</li>
          <li><strong>Email Notifications</strong> — 11 notification event types (expense submissions, approvals, task assignments, weekly check-in reminders, and more) delivered via Gmail API with per-user opt-out support.</li>
          <li><strong>Role-Based Access Control</strong> — Five roles (Admin, Manager, Finance Manager, Finance Staff, Staff) with diocese-level data scoping. Finance staff never see data from other dioceses.</li>
          <li><strong>Weekly Check-ins</strong> — Staff submit structured check-in reports each week referenced to calendar week numbers. Managers receive immediate notifications.</li>
        </ul>
    
        <h4>Architecture</h4>
        <p>
          The entire backend runs as a <strong>single Cloudflare Worker</strong> (v3.2.6 — 3,720 lines, 42 actions) 
          with no server to manage, no cold start, and global edge deployment. The frontend is 
          three plain HTML files with no framework and no build step — intentionally simple so that 
          anyone can maintain or update it. All data lives in <strong>Google Sheets</strong> 
          (the organisation already had Google Workspace), and all file outputs go to 
          <strong>Google Drive</strong>. The only external cost is zero.
        </p>
    
        <ul>
          <li><strong>Frontend</strong> — <code>index.html</code> (10 tabs, 5,013 lines), <code>finance.html</code> (8 panes, 2,391 lines), <code>dcr_form.html</code> (4-step form, 1,947 lines)</li>
          <li><strong>Backend</strong> — Cloudflare Worker (V8 strict mode). All Google API calls made server-side. CORS always returned. Auth validated on every single request.</li>
          <li><strong>Data</strong> — Two Google Sheets workbooks: <code>PDP_Data.xlsx</code> for programmes/tasks/users, and a Finance Spreadsheet with five relational tables (Donors, Budgets, Budget_Donors, Line_Items, Expenditures).</li>
          <li><strong>Auth</strong> — Credential-based with hashed passwords stored in a Cloudflare Worker secret. No third-party auth service required.</li>
        </ul>
    
        <h4>Design Principles</h4>
        <ul>
          <li><strong>Non-disruptive by design.</strong> The system was built around the organisation's existing Google Workspace setup. No new accounts, no new platforms, no migration of existing data unless chosen.</li>
          <li><strong>All amounts in MMK.</strong> Exchange rates are locked at the time a donor is attached to a budget — no live rate recalculation, no ambiguity in reporting.</li>
          <li><strong>Soft deletes only.</strong> No records are ever hard-deleted. Line items prefixed with <code>[DELETED]</code> remain visible to preserve expenditure history and audit integrity.</li>
          <li><strong>Diocese scoping at the worker level.</strong> Finance staff data is filtered server-side — the client never receives records from other dioceses, regardless of what the browser requests.</li>
          <li><strong>Fire-and-forget email.</strong> Notification failures are logged but never thrown — the main workflow is never blocked by an email error.</li>
        </ul>
    
        <h4>Key Challenges</h4>
        <ul>
          <li><strong>Multi-currency reporting</strong> — Building FX-aware report columns that appear only when a reference rate exists, across four different report types, required careful conditional logic at the row and column level.</li>
          <li><strong>Google Sheets as a relational store</strong> — Designing a five-table schema (with donor splits stored as JSON within a single cell) that stays maintainable without a real database took significant iteration.</li>
          <li><strong>Email notification reliability</strong> — Ensuring at least one recipient always gets notified (via <code>ALERT_EMAIL_TO</code> fallback) while still resolving the correct role-based recipients from a JSON user store.</li>
          <li><strong>Zero-infrastructure constraint</strong> — The entire system had to run within free-tier Cloudflare Workers and Google Workspace limits, with no VPS, no database, and no ongoing server cost.</li>
          <li><strong>Organisational sensitivity</strong> — Working inside a church institution meant every feature had to be introduced carefully, respecting existing hierarchies, workflows, and the people already doing this work manually.</li>
        </ul>
    
        <p>
          The PDP Dashboard is currently live and in active use by the CPMPDD team across Myanmar. 
          It represents my ongoing freelance work as Provincial Digital Development Officer — 
          a project I designed, built, deployed, and continue to maintain independently.
        </p>
    
      `,
    },
    
    
  
  ];
  