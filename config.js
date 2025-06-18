// Portfolio Configuration File
// Update this file with your personal information, skills, projects, etc.

window.portfolioConfig = {
    // Personal Information
    personal: {
        name: "Mohammed  Faisar A",
        role: "AI - Software Developer & Cybersecurity Enthusiast",
        bio: "Passionate about technology and software developement, Working towards growing my expertise in software development and a amazing career in software engineering, with a strong interest in AI and cybersecurity innovations.",
        profileImage: "assets/profile.jpg", // Path to your profile image
        resumeLink: "https://drive.google.com/file/d/1vRL3d2ZtUMXdO0FGVJb-I1XDiE-ycB8a/view?usp=drivesdk" // Replace with your Google Drive resume link
    },

    // About Section
    // Updated About Section in config.js - Replace the existing about section with this:

// Updated About Section in config.js - Replace the existing about section with this:

about: {
    description: "With a strong passion for technology, I’m building a solid foundation in software development and aiming for a thriving career in software engineering. My interests lie particularly in AI and cybersecurity innovations. Along this journey, I’ve completed several certifications and hands-on projects focused on AI and software development, further strengthening my expertise in the field.",
    image: "assets/about-image.jpg", // Path to your about section image
    
    // Education Details
    education: [
    {
        level: "Pursuing - Bachelor's Degree",
        institution: "Sri Manakula Vinayagar Engineering College", 
        field: "B.Tech - Information Technology",
        year: "2023-2027",
        grade: "8.51 CGPA"
    },
    {
        level: "Higher Secondary",
        institution: "Amalorpavam Higher Secondary School",
        field: "Bio-Maths",
        year: "2022-2023",
        grade: "90%"
    }
],
    
    // Communication Languages
    languages: ["English", "Tamil", "Hindi"],
    
    // Stats - Only Projects
    stats: {
        projects: "10+"  // Number of projects completed
    }
},

    // Skills Section
    skills: {
        languages: [
            { name: "Python", icon: "fab fa-python" },
            { name: "Java", icon: "fab fa-java" },
            { name: "C\/C++", icon: "fab fa-code" }
        ],
        web: [
            { name: "HTML5", icon: "fab fa-html5" },
            { name: "CSS3", icon: "fab fa-css3-alt" },
            { name: "JavaScript", icon: "fab fa-js-square" },
            { name: "React.js", icon: "fab fa-react" },
            { name: "Node.js", icon: "fab fa-node" },
            { name: "Express.js", icon: "fab fa-server" }
        ],
        db: [
            { name: "MongoDB", icon: "fab fa-database" },
            { name: "SQL", icon: "fab fa-sql-database" }
        ],
        other: [
            { name: "Flask", icon: "fas fa-mail-flask" },
            { name: "API integration", icon: "fas fa-api" },
            { name: "Llama AI", icon: "fab fa-llama" },
            { name: "Bootstrap", icon: "fab fa-bootstrap" }
            
        ],
        tools: [
            { name: "Postman", icon: "fas fa-mail-bulk" },
            { name: "VS Code", icon: "fas fa-code" },
            { name: "Git", icon: "fab fa-git-alt" },
            { name: "Firebase", icon: "fas fa-fire" },
            { name: "Figma", icon: "fab fa-figma" },
            { name: "Netlify", icon: "fas fa-cloud" }
            
        ]
    },

    // Projects Section
    projects: [
        {
            title: "PixelMnd",
            description: "PixelMind is an advanced text-to-image encryption system with chat-bot designed to transform sensitive text files into innocent-looking images and secure PDF documents with the help of AI and Custom algorithm. .",
            image: "assets/p1.jpg",
            technologies: ["Python", "Flask", "MongoDB", "Llama AI", "HTML", "CSS"],
            liveLink: "https://pixelminds.pythonanywhere.com/",
            githubLink: "https://github.com/MdFaisar/PIXELMIND-IMAGE-TYPE-TEXT-ENCRYPTION-SYSTEM"
        },
        {
            title: "Career AI",
            description: "A comprehensive web application designed to assist individuals in discovering their ideal career paths by leveraging artificial intelligence and user-specific data.",
            image: "assets/p2.jpg",
            technologies: ["Python", "Flask", "Llama AI", "HTML", "CSS"],
            liveLink: "https://faisar.pythonanywhere.com/login",
            githubLink: "https://github.com/MdFaisar/Career-recommendation-using-AI-and-Chatbot/"
        },
        {
            title: "To-DO List",
            description: "A full-stack To-Do List application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows users to efficiently manage their tasks with full CRUD operations",
            image: "assets/p3.jpg",
            technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
            liveLink: "https://mohammedfaisar-portfolio.netlify.app/",
            githubLink: "https://github.com/MdFaisar/ToDo-List-MERN-Stack-Project"
        },
        {
            title: "Trip-AI",
            description: "It's a AI based trip planning assistant. Which gives a clear layout of the travel planning (day-to-day)",
            image: "assets/p4.jpg",
            technologies: ["Python", "Streamlit", "Llama AI", "Groq"],
            liveLink: "https://tripai.pythonanywhere.com/",
            githubLink: "https://github.com/MdFaisar/trip_ai"
        },
    ],

    // ADD this new section to your config.js file after the projects section:

// Certifications Section
certifications: [
    {
        title: "AWS Certified cloud foundations",
        description: "Professional certification demonstrating expertise in designing distributed systems and applications on AWS platform with best practices for security, reliability, and cost optimization.",
        image: "assets/aws.jpg",
        issuer: "Amazon Web Services",
        technologies: ["AWS", "Cloud Computing", "System Architecture", "Security"],
        credentialLink: "https://www.credly.com/badges/837e2e85-f8fb-4701-8daf-f60c5314147d/print",
        issueDate: "2024"
    },
    {
        title: "Infosys Certified - Frontend developer",
        description: "Certification validating skills in building attractive UI with scalable and reliable templates.",
        image: "assets/infosys.jpg",
        issuer: "Infosys Springboard",
        technologies: ["HTML","CSS","JavaScript"],
        credentialLink: "https://drive.google.com/file/d/13GyQav8RK_yaOTPPKAMGipvgwTifuJf1/view?usp=drivesdk",
        issueDate: "2025"
    },
    {
        title: "MongoDB Certified Developer",
        description: "Certification demonstrating proficiency in MongoDB database access, development, and the use of NoSQL in modern applications.",
        image: "assets/mongodb.jpg",
        issuer: "MongoDB Inc.",
        technologies: ["MongoDB", "NoSQL", "Database Design", "Node.js"],
        credentialLink: "https://drive.google.com/file/d/1awcIDuY5WUM_8sZ7QwRMd3KCo9bA1L10/view?usp=drivesdk",
        issueDate: "2024"
    },
    {
        title: "Python For Data Science",
        description: "Professional certificate program in python skills and datascience appliction through python.",
        image: "assets/nptel.jpg",
        issuer: "nptel",
        technologies: ["Python", "linearregression", "matplotlib", "numpy and Pandas"],
        credentialLink: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS68S14460038002702746",
        issueDate: "2024"
    },
    
    {
        title: "AICTEE - AI-ML",
        description: "Professional certification validating skills in the accesing, demonstrating the Artificial Intelligence and Machine Learning Practices.",
        image: "assets/aictee.jpg",
        issuer: "AICTEE",
        technologies: ["Docker", "Containers", "DevOps", "Kubernetes"],
        credentialLink: "https://aictecert.eduskillsfoundation.org/pages/home/verify.php?cert=559bffdc11a063b1d0cbea8e644e883b",
        issueDate: "2025"
    },
    {
        title:"ISO - Honours of Diploma in Computer Application (HDCA)",
        description: "HDCA certification is a ISO - One year diploma certification, in which programming languages and computer applications are trained and certified",
        image: "assets/iso.jpg",
        issuer: "ISO",
        technologies: ["Python", "c\c++","MySQL","HTML","CSS","Excel"],
        credentialLink: "https://drive.google.com/file/d/16sMoKyR3lPlL5cn6eYNGeUeX_A3a1nuY/view?usp=drivesdk",
        issueDate: "2023"
    }
],

    // Contact Information
    contact: {
        email: "amohammedfaisar@gmail.com", // Replace with your email
        phone: "+91 8015375860",         // Replace with your phone
        location: "Puducherry, India"       // Replace with your location
    },

    // Social Media Links
    social: {
        github: "https://github.com/MdFaisar",           // Replace with your GitHub
        linkedin: "https://www.linkedin.com/in/mohammedfaisar/",    // Replace with your LinkedIn
        twitter: "https://x.com/Faisar05",         // Replace with your Twitter
        instagram: "https://www.instagram.com/mr_faisar/"      // Replace with your Instagram
    }
};

// Instructions for updating:
// 1. Replace all placeholder URLs with your actual social media profiles
// 2. Update the resumeLink with your Google Drive resume link
// 3. Replace email, phone, and location with your actual contact info
// 4. Add your actual project details, images, and links
// 5. Update skills based on your expertise
// 6. Replace profile and about images with your actual photos
