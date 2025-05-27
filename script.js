// Load configuration and populate the website
document.addEventListener('DOMContentLoaded', function() {
    loadConfiguration();
    initializeEventListeners();
    initializeScrollEffects();
});

// Load configuration from config.js
async function loadConfiguration() {
    try {
        // Import the configuration
        const config = window.portfolioConfig;
        
        if (!config) {
            console.error('Configuration not found. Please check config.js file.');
            return;
        }

        populateContent(config);
    } catch (error) {
        console.error('Error loading configuration:', error);
    }
}

// Populate content based on configuration
function populateContent(config) {
    const { personal, about, skills, projects, contact, social } = config;

    // Personal Information
    document.getElementById('name').textContent = personal.name;
    document.getElementById('role').textContent = personal.role;
    document.getElementById('bio').textContent = personal.bio;
    document.getElementById('footer-name').textContent = personal.name;
    
    // Profile images
    if (document.getElementById('profile-img')) {
        document.getElementById('profile-img').src = personal.profileImage;
    }

    // About section - UPDATED PART
    document.getElementById('about-description').textContent = about.description;
    
    // Populate Education
    populateEducation(about.education);
    
    // Populate Communication Languages
    populateLanguages(about.languages);
    
    // Updated Stats - Only Projects
    document.getElementById('projects-count').textContent = about.stats.projects;
    
    if (document.getElementById('about-img')) {
        document.getElementById('about-img').src = about.image;
    }

    // Skills
    populateSkills(skills);
    populateProjects(projects);
    if (config.certifications) {
        populateCertifications(config.certifications);
    }

    document.getElementById('contact-email').textContent = contact.email;
    document.getElementById('contact-phone').textContent = contact.phone;
    document.getElementById('contact-location').textContent = contact.location;

    // Social Links
    document.getElementById('github-link').href = social.github;
    document.getElementById('linkedin-link').href = social.linkedin;
    document.getElementById('X-link').href = social.twitter;
    document.getElementById('instagram-link').href = social.instagram;

    // Resume download link
    document.getElementById('resume-btn').addEventListener('click', function() {
        if (personal.resumeLink) {
            window.open(personal.resumeLink, '_blank');
        } else {
            alert('Resume link not configured. Please update the config.js file.');
        }
    });
}


// Populate skills section
// Populate skills section with icons - REPLACE THIS FUNCTION IN script.js
function populateSkills(skills) {
    const languagesContainer = document.getElementById('languages-skills');
    const webContainer = document.getElementById('web-skills');
    const dbContainer = document.getElementById('db-skills');
    const otherContainer = document.getElementById('other-skills');
    const toolsContainer = document.getElementById('tools-skills');

    // Clear existing content
    languagesContainer.innerHTML = '';
    webContainer.innerHTML = '';
    dbContainer.innerHTML = '';
    otherContainer.innerHTML = '';
    toolsContainer.innerHTML = '';

    // Populate languages Skills
    skills.languages.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = 'skill-item';
        skillElement.innerHTML = `
            <i class="${skill.icon}"></i>
            <span>${skill.name}</span>
        `;
        languagesContainer.appendChild(skillElement);
    });
    // Populate languages Skills
    skills.web.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = 'skill-item';
        skillElement.innerHTML = `
            <i class="${skill.icon}"></i>
            <span>${skill.name}</span>
        `;
        webContainer.appendChild(skillElement);
    });
    skills.db.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = 'skill-item';
        skillElement.innerHTML = `
            <i class="${skill.icon}"></i>
            <span>${skill.name}</span>
        `;
        dbContainer.appendChild(skillElement);
    });
    // Populate Tools Skills
    skills.other.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = 'skill-item';
        skillElement.innerHTML = `
            <i class="${skill.icon}"></i>
            <span>${skill.name}</span>
        `;
        otherContainer.appendChild(skillElement);
    });

    // Populate Tools Skills
    skills.tools.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = 'skill-item';
        skillElement.innerHTML = `
            <i class="${skill.icon}"></i>
            <span>${skill.name}</span>
        `;
        toolsContainer.appendChild(skillElement);
    });
}

function populateEducation(education) {
    const educationContainer = document.getElementById('education-list');
    if (!educationContainer) return;
    
    educationContainer.innerHTML = '';

    education.forEach(edu => {
        const educationItem = document.createElement('div');
        educationItem.className = 'education-item';
        
        educationItem.innerHTML = `
            <h4>${edu.level}</h4>
            <div class="institution">${edu.institution}</div>
            <div class="details">
                <span class="field">${edu.field}</span>
                <span class="year">${edu.year}</span>
                <span class="grade">${edu.grade}</span>
            </div>
        `;
        
        educationContainer.appendChild(educationItem);
    });
}

// NEW FUNCTION: Populate Communication Languages
function populateLanguages(languages) {
    const languagesContainer = document.getElementById('languages-list');
    if (!languagesContainer) return;
    
    languagesContainer.innerHTML = '';

    languages.forEach(language => {
        const languageItem = document.createElement('div');
        languageItem.className = 'language-item';
        languageItem.textContent = language;
        
        languagesContainer.appendChild(languageItem);
    });
}

// Populate projects section
function populateProjects(projects) {
    const projectsContainer = document.getElementById('projects-grid');
    projectsContainer.innerHTML = '';

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        const techTags = project.technologies.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');

        const links = [];
        if (project.liveLink) {
            links.push(`<a href="${project.liveLink}" class="project-link primary" target="_blank">
                <i class="fas fa-external-link-alt"></i> Live Demo
            </a>`);
        }
        if (project.githubLink) {
            links.push(`<a href="${project.githubLink}" class="project-link secondary" target="_blank">
                <i class="fab fa-github"></i> Code
            </a>`);
        }

        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">${techTags}</div>
                <div class="project-links">${links.join('')}</div>
            </div>
        `;

        projectsContainer.appendChild(projectCard);
    });
}

function populateCertifications(certifications) {
    const certificationsContainer = document.getElementById('certifications-grid');
    if (!certificationsContainer) return;
    
    certificationsContainer.innerHTML = '';

    certifications.forEach(cert => {
        const certCard = document.createElement('div');
        certCard.className = 'certification-card';

        const techTags = cert.technologies.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');

        certCard.innerHTML = `
            <img src="${cert.image}" alt="${cert.title}" class="certification-image">
            <div class="certification-content">
                <h3 class="certification-title">${cert.title}</h3>
                <div class="certification-issuer">
                    <i class="fas fa-certificate"></i>
                    ${cert.issuer}
                </div>
                <p class="certification-description">${cert.description}</p>
                <div class="certification-tech">${techTags}</div>
                <div class="certification-links">
                    <a href="${cert.credentialLink}" class="certification-link primary" target="_blank">
                        <i class="fas fa-external-link-alt"></i> View Credential
                    </a>
                    <span class="issue-date">${cert.issueDate}</span>
                </div>
            </div>
        `;

        certificationsContainer.appendChild(certCard);
    });
}

// Initialize event listeners
function initializeEventListeners() {
    // Mobile Navigation Toggle
    const hamburger = document.getElementById('nav-hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        handleContactForm(this);
    });

    // Add scroll event listener for navbar
    window.addEventListener('scroll', handleNavbarScroll);
}

// Handle contact form submission
function handleContactForm(form) {
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // You can customize this to send to your preferred email service
    // For now, we'll create a mailto link
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const config = window.portfolioConfig;
    const mailto = `mailto:${config.contact.email}?subject=${subject}&body=${body}`;
    
    window.location.href = mailto;
    
    // Show success message
    alert('Thank you for your message! Your email client should open now.');
    form.reset();
}

// Handle navbar scroll effect
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
}

// Initialize scroll effects and animations
function initializeScrollEffects() {
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.project-card, .skills-category, .contact-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Active navigation highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function() {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
}

// Add typing effect for hero title (optional enhancement)
function initializeTypingEffect() {
    const config = window.portfolioConfig;
    if (config && config.personal.name) {
        const nameElement = document.getElementById('name');
        const name = config.personal.name;
        nameElement.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < name.length) {
                nameElement.textContent += name.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing effect after a delay
        setTimeout(typeWriter, 1000);
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadConfiguration();
    initializeEventListeners();
    initializeScrollEffects();
    
    // Optional: Enable typing effect
    // initializeTypingEffect();
});

