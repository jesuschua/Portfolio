/**
 * Main JavaScript file for Jesus Hernandez Chua Jr Portfolio
 * Handles interactive elements and translations
 */

const translations = {
    en: {
        subtitle: 'IT Consultant · Process and Test Automation · Aarhus',
        highlightTitle: 'What I do professionally',
        highlightText: 'I help bring sensible software development practices to legacy systems.<br>Simple things like git for version control, CICD for deployment, and dashboards for test monitoring.<br>These are relatively low-tech, quick to implement, and inexpensive.<br>Orchestrated together, small increments make a big difference in the pace and quality of software delivery.',
        areasTitle: 'Areas I care most about',
        processTitle: 'Process Automation',
        processBullet1: 'Listening to stakeholders and validating their "as-is" states',
        processBullet2: 'Branching out possible paths for improvement',
        processBullet3: 'Choosing the right tools, technologies, and finding good spots where AI or self-evolving technologies can help',
        processBullet4: 'Ensuring that critical use cases are covered',
        processBullet5: 'Deploying safely with fallback options',
        processBullet6: 'Having a healthy respect for the unknowns',
        testTitle: 'Test Automation',
        testBullet1: 'Answering the "Why" questions deeply enough so that the test cases write themselves',
        testBullet2: 'Choosing end-to-end versus component testing',
        testBullet3: 'Enabling static and dynamic test data to flow through the scenarios',
        testBullet4: 'Positioning manual checks where it matters',
        testBullet5: 'Defining a "Passed" state that is understood by all, and "Failed" states that are clear-cut and actionable',
        monitoringTitle: 'Monitoring',
        monitoringBullet1: 'Creating truthful, clear, and beautiful presentations',
        monitoringBullet2: 'Designing dashboards that are easy to understand at a glance',
        monitoringBullet3: 'Getting the right balance between graph detail and simplicity',
        documentationTitle: 'Documentation',
        documentationUnderstanding: 'Understanding how less documentation is better documentation',
        documentationQuestions: 'Asking the necessary:',
        documentationQuestion1: '"Who reads this and why?"',
        documentationQuestion2: '"Who updates this and when?"',
        documentationQuestion3: '"How do I know if this is correct?"',
        experienceTitle: "Roles I've had over the years",
        job1Title: 'IT Consultant and Tooling Lead for Automated Testing',
        job1Desc1: 'Most of the work I do supports and supplements the development teams. I do a good mix of pipeline development, analysis and prototyping, and in general, being a good sparring buddy for ideas and an honest code reviewer.',
        job1Desc2: "Recent projects I've led or helped deliver:",
        job1Ach1: 'CICD for legacy sales system',
        job1Ach2: 'Migration from ALM to Azure Devops Test Plans',
        job1Ach3: 'Custom GDPR compliance tool for legacy sales system',
        job1Ach4: 'Migration from SVN to git version control',
        job1Ach5: 'End-to-end testing strategy for SAP systems',
        job1Ach6: 'Self-updating ADO Test Plan reports and dashboards',
        job1Ach7: 'AI-assisted User Story and Test Case Generation',
        job2Title: 'Business Process Architect for Legacy Sales System',
        job2Desc: 'Specialized in analyzing complex business processes and data requirements.',
        job2Ach1: 'Delivered business analysis of change requests',
        job2Ach2: 'Served as second and third level support for debugging of production issues',
        job2Ach3: 'Advised on test case creation and execution',
        job2Ach4: 'Created automated reports for various recipients within the organization',
        job2Ach5: 'Created and maintained various tools for software development, estimation, and testing',
        job3Title: 'Technical Consultant for Process Documentation',
        job3Desc: 'Developed automation solutions for technical documentation and process management. Created custom SharePoint applications and VBA automation tools.',
        job3Ach1: 'Created tools for the conversion and updating of legacy documents to the Avanade Connected Methods',
        job3Ach2: 'Applied modern documentation standards',
        job3Ach3: 'Functioned as an interim team lead and scrum master when the team lead was not present',
        job3Ach4: 'Developed SharePoint pages with jQuery animations',
        projectsTitle: 'Fun things I do for myself',
        project1Title: 'Fluid Dynamics Simulation',
        project1Tech: 'JavaScript • HTML5',
        project1Description: 'Real-time fluid simulation with minimal abstraction layers.',
        project1Link: 'View Demo',
        project2Title: 'Colorwise',
        project2Tech: 'JavaScript',
        project2Description: "A fun game that tests one's ability to discern colors.",
        project2Link: 'Try Game',
        project3Title: 'Forbes List vs Wikipedia Pageviews',
        project3Tech: 'Jupyter • Python • Statistical Analysis',
        project3Description: 'A small study comparing the Forbes Celebrity 100 List and how they can possibly correlate with Wikipedia pageviews. The analysis includes data visualization and statistical insights.',
        project3Link: 'View Analysis',
        project4Title: 'General Physics Simulation',
        project4Tech: 'JavaScript • Canvas API • Physics',
        project4Description: 'Collection of physics-based simulations including archery and golf games, demonstrating real-time optimization and performance monitoring.',
        project4Link1: 'Try Archery Game',
        project4Link2: 'Try Golf Screen Saver',
        downloadCv: 'Download CV',
        footerText: '© 2025 Jesus Hernandez Chua Jr. Built for GitHub Pages.'
    },
    da: {
        subtitle: 'IT-konsulent · Proces- og testautomation · Aarhus',
        highlightTitle: 'Hvad jeg laver professionelt',
        highlightText: 'Jeg hjælper med at indføre fornuftige softwareudviklingspraksisser i gamle systemer.<br>Små ting som git til versionsstyring, CICD til deployment og dashboards til testovervågning.<br>Det er relativt lavpraktisk, hurtigt at implementere og billigt.<br>Når de orkestreres sammen, gør små skridt en stor forskel for tempoet og kvaliteten i softwareleverancer.',
        areasTitle: 'Områder jeg brænder for',
        processTitle: 'Procesautomation',
        processBullet1: 'Lytter til interessenter og validerer deres aktuelle situation',
        processBullet2: 'Kortlægger mulige forbedringsspor',
        processBullet3: 'Vælger de rigtige værktøjer, teknologier og finder gode steder, hvor AI eller selvudviklende teknologier kan hjælpe',
        processBullet4: 'Sikrer, at kritiske use cases er dækket',
        processBullet5: 'Ruller sikkert ud med fallback-muligheder',
        processBullet6: 'Har respekt for det ukendte',
        testTitle: 'Testautomation',
        testBullet1: 'Besvarer "hvorfor"-spørgsmålene, så testcases skriver sig selv',
        testBullet2: 'Vælger mellem end-to-end og komponenttests',
        testBullet3: 'Lader statiske og dynamiske testdata flyde gennem scenarierne',
        testBullet4: 'Placere manuelle tjek, hvor det betyder noget',
        testBullet5: 'Definerer en "Bestået"-tilstand, som alle forstår, og "Fejl", der er klare og handlingsorienterede',
        monitoringTitle: 'Overvågning',
        monitoringBullet1: 'Skaber ærlige, klare og visuelt flotte præsentationer',
        monitoringBullet2: 'Designer dashboards, der er nemme at forstå på et øjeblik',
        monitoringBullet3: 'Finder det rette niveau mellem detaljer og enkelhed',
        documentationTitle: 'Dokumentation',
        documentationUnderstanding: 'Forstår, hvordan mindre dokumentation kan være bedre dokumentation',
        documentationQuestions: 'Stiller de nødvendige spørgsmål:',
        documentationQuestion1: '"Hvem læser det, og hvorfor?"',
        documentationQuestion2: '"Hvem opdaterer det, og hvornår?"',
        documentationQuestion3: '"Hvordan ved jeg, om det er korrekt?"',
        experienceTitle: 'Roller jeg har haft gennem årene',
        job1Title: 'IT-konsulent og tooling lead for automatiseret test',
        job1Desc1: 'Det meste af mit arbejde støtter og supplerer udviklingsteamene. Jeg kombinerer pipeline-udvikling, analyse og prototyping og fungerer som en god sparringspartner og ærlig kodeanmelder.',
        job1Desc2: 'Seneste projekter jeg har ledet eller bidraget til:',
        job1Ach1: 'CICD for det gamle salgssystem',
        job1Ach2: 'Migration fra ALM til Azure DevOps Test Plans',
        job1Ach3: 'Specialbygget GDPR-kompatibilitetsværktøj til det gamle salgssystem',
        job1Ach4: 'Migration fra SVN til git versionsstyring',
        job1Ach5: 'End-to-end teststrategi for SAP-systemer',
        job1Ach6: 'Selvopdaterende ADO Test Plan-rapporter og dashboards',
        job1Ach7: 'AI-assisteret brugerhistorier og testcase-generering',
        job2Title: 'Forretningsprocesarkitekt for det gamle salgssystem',
        job2Desc: 'Specialiserede mig i at analysere komplekse forretningsprocesser og datakrav.',
        job2Ach1: 'Leverede forretningsanalyse af change requests',
        job2Ach2: 'Fungerede som 2. og 3. level support til fejlfinding i produktion',
        job2Ach3: 'Rådgav om oprettelse og udførelse af testcases',
        job2Ach4: 'Lavede automatiserede rapporter til forskellige modtagere i organisationen',
        job2Ach5: 'Udviklede og vedligeholdt værktøjer til softwareudvikling, estimering og test',
        job3Title: 'Teknisk konsulent for procesdokumentation',
        job3Desc: 'Udviklede automatiseringsløsninger til teknisk dokumentation og processtyring. Skabte specialiserede SharePoint-apps og VBA-automatiseringsværktøjer.',
        job3Ach1: 'Skabte værktøjer til konvertering og opdatering af gamle dokumenter til Avanade Connected Methods',
        job3Ach2: 'Anvendte moderne dokumentationsstandarder',
        job3Ach3: 'Fungerede som midlertidig teamleder og scrum master, når teamlederen ikke var til stede',
        job3Ach4: 'Udviklede SharePoint-sider med jQuery-animationer',
        projectsTitle: 'Sjove ting jeg laver for mig selv',
        project1Title: 'Fluiddynamiksimulation',
        project1Tech: 'JavaScript • HTML5',
        project1Description: 'Realtids fluidsimulering med minimale abstraktionslag.',
        project1Link: 'Se demo',
        project2Title: 'Colorwise',
        project2Tech: 'JavaScript',
        project2Description: 'Et sjovt spil, der tester evnen til at skelne farver.',
        project2Link: 'Prøv spil',
        project3Title: 'Forbes-listen vs. Wikipedia-siders besøgstal',
        project3Tech: 'Jupyter • Python • Statistisk analyse',
        project3Description: 'En lille undersøgelse af Forbes Celebrity 100-listen og hvordan den kan korrelere med Wikipedia-siders besøgsdata. Analysen indeholder datavisualisering og statistiske indsigter.',
        project3Link: 'Se analyse',
        project4Title: 'Generel fysiksimulering',
        project4Tech: 'JavaScript • Canvas API • Fysik',
        project4Description: 'Samling af fysikbaserede simulationer inklusive bueskydning og golfspil, der demonstrerer realtidsoptimering og performanceovervågning.',
        project4Link1: 'Spil bueskydning',
        project4Link2: 'Prøv golf screensaver',
        downloadCv: 'Hent CV',
        footerText: '© 2025 Jesus Hernandez Chua Jr. Lavet til GitHub Pages.'
    }
};

const defaultLanguage = 'en';
let currentLanguage = defaultLanguage;
let langButtons = [];

document.addEventListener('DOMContentLoaded', function() {
    initTranslations();
    initInteractiveElements();
});

function initTranslations() {
    langButtons = Array.from(document.querySelectorAll('.lang-switch button'));
    const savedLang = defaultLanguage;
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const target = this.dataset.lang;
            if (target) {
                setLanguage(target);
            }
        });
    });
    setLanguage(savedLang);
}

function setLanguage(lang) {
    if (!translations[lang]) {
        lang = defaultLanguage;
    }
    currentLanguage = lang;
    applyTranslations(lang);
    langButtons.forEach(button => {
        button.classList.toggle('active', button.dataset.lang === lang);
    });
}

function applyTranslations(lang) {
    const dictionary = translations[lang] || translations[defaultLanguage];
    document.querySelectorAll('[data-i18n-key]').forEach(element => {
        const key = element.dataset.i18nKey;
        if (!key) return;
        const translation = dictionary[key];
        if (!translation) return;
        if (element.dataset.i18nHtml === 'true') {
            element.innerHTML = translation;
        } else {
            element.textContent = translation;
        }
    });
}

/**
 * Initialize interactive elements
 */
function initInteractiveElements() {
    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-4px)';
        });
    });

    // Add click tracking for external links (for analytics if needed)
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    externalLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Add analytics tracking here if needed
            console.log('External link clicked:', this.href);
        });
    });

    // Add form validation if contact form is added later
    initContactForm();
}

/**
 * Initialize contact form functionality (placeholder for future enhancement)
 */
function initContactForm() {
    const contactForm = document.querySelector('#contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add form submission logic here
            console.log('Contact form submitted');
        });
    }
}

/**
 * Utility function to add loading states
 */
function showLoading(element) {
    element.classList.add('loading');
}

function hideLoading(element) {
    element.classList.remove('loading');
}

/**
 * Theme toggle functionality (for future dark mode support)
 */
function initThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');
            localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
        });

        // Load saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
        }
    }
}

/**
 * Performance optimization: Lazy load images
 */
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}
