/**
 * CV Interactivo - JavaScript
 * Implementa todas las funcionalidades dinámicas del CV
 */

// ============================================
// Data - Arrays de objetos para renderizar
// ============================================

const skillsData = {
  tech: [
    { name: 'JavaScript', level: 'Avanzado', progress: 85, icon: '⚡' },
    { name: 'React / Next.js', level: 'Avanzado', progress: 80, icon: '⚛️' },
    { name: 'HTML5 / CSS3', level: 'Avanzado', progress: 90, icon: '🎨' },
    { name: 'Node.js', level: 'Intermedio', progress: 70, icon: '🟢' },
    { name: 'Git / GitHub', level: 'Avanzado', progress: 85, icon: '📦' },
    { name: 'TypeScript', level: 'Intermedio', progress: 65, icon: '📘' }
  ],
  landscape: [
    { name: 'Diseño de Jardineras', level: 'Experto', progress: 95, icon: '🌿' },
    { name: 'Sistemas de Riego', level: 'Avanzado', progress: 85, icon: '💧' },
    { name: 'Selección de Plantas', level: 'Experto', progress: 90, icon: '🌴' },
    { name: 'Preparación de Suelos', level: 'Avanzado', progress: 88, icon: '🏔️' },
    { name: 'Materiales (Tezontle, Grava)', level: 'Experto', progress: 92, icon: '🪨' },
    { name: 'Mantenimiento', level: 'Avanzado', progress: 85, icon: '✂️' }
  ],
  soft: [
    { name: 'Comunicación', level: 'Avanzado', progress: 88, icon: '💬' },
    { name: 'Trabajo en Equipo', level: 'Avanzado', progress: 85, icon: '🤝' },
    { name: 'Resolución de Problemas', level: 'Avanzado', progress: 90, icon: '🧩' },
    { name: 'Gestión del Tiempo', level: 'Avanzado', progress: 82, icon: '⏰' },
    { name: 'Atención al Detalle', level: 'Experto', progress: 95, icon: '🔍' },
    { name: 'Creatividad', level: 'Avanzado', progress: 88, icon: '💡' }
  ]
};

const projectsData = [
  {
    id: 1,
    title: 'Jardinera Residencial Premium',
    description: 'Diseño e instalación de jardinera de 18m² con Phoenix roebelenii, sistema de drenaje con tezontle y acabado en grava sílica.',
    category: 'landscape',
    tags: ['Paisajismo', 'Palmas', 'Diseño'],
    icon: '🌴'
  },
  {
    id: 2,
    title: 'Portfolio Web Personal',
    description: 'Sitio web responsive desarrollado con Next.js, optimización OKLCH para accesibilidad y diseño moderno.',
    category: 'web',
    tags: ['Next.js', 'React', 'CSS'],
    icon: '💻'
  },
  {
    id: 3,
    title: 'Jardín Vertical Corporativo',
    description: 'Instalación de jardín vertical de 12m² para oficinas, con sistema de riego automatizado y plantas de bajo mantenimiento.',
    category: 'landscape',
    tags: ['Vertical', 'Corporativo', 'Automatización'],
    icon: '🌱'
  },
  {
    id: 4,
    title: 'E-commerce Dashboard',
    description: 'Panel de administración para tienda en línea con gráficas interactivas y gestión de inventario en tiempo real.',
    category: 'web',
    tags: ['React', 'Charts', 'API'],
    icon: '📊'
  },
  {
    id: 5,
    title: 'Terraza Zen',
    description: 'Transformación de terraza de 25m² en espacio de meditación con jardín seco japonés y bambú.',
    category: 'landscape',
    tags: ['Zen', 'Bambú', 'Diseño'],
    icon: '🎋'
  },
  {
    id: 6,
    title: 'App de Gestión de Proyectos',
    description: 'Aplicación web para seguimiento de proyectos con Kanban board, notificaciones y reportes automáticos.',
    category: 'web',
    tags: ['JavaScript', 'Kanban', 'PWA'],
    icon: '📋'
  }
];

const certificationsData = [
  {
    title: 'JavaScript Algorithms and Data Structures',
    issuer: 'freeCodeCamp',
    date: '2024',
    icon: '🏆'
  },
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: '2024',
    icon: '📜'
  },
  {
    title: 'Diseño de Jardines Sustentables',
    issuer: 'Instituto de Paisajismo MX',
    date: '2023',
    icon: '🌿'
  },
  {
    title: 'Next.js & React - Complete Guide',
    issuer: 'Udemy',
    date: '2024',
    icon: '⚛️'
  }
];

// Configuración
const CONFIG = {
  startYear: 2020, // Año de inicio de experiencia
  animationDelay: 100
};

// ============================================
// DOM Elements
// ============================================

const elements = {
  header: document.getElementById('header'),
  nav: document.getElementById('nav'),
  menuToggle: document.getElementById('menu-toggle'),
  themeToggle: document.getElementById('theme-toggle'),
  navLinks: document.querySelectorAll('.nav__link'),
  aboutToggle: document.getElementById('btn-about-toggle'),
  aboutDetails: document.getElementById('about-details'),
  skillsTabs: document.querySelectorAll('.skills__tab'),
  skillsPanels: {
    tech: document.getElementById('panel-tech'),
    landscape: document.getElementById('panel-landscape'),
    soft: document.getElementById('panel-soft')
  },
  projectsGrid: document.getElementById('projects-grid'),
  filterBtns: document.querySelectorAll('.filter-btn'),
  filteredCount: document.getElementById('filtered-count'),
  certificationsGrid: document.getElementById('certifications-grid'),
  contactForm: document.getElementById('contact-form'),
  formStatus: document.getElementById('form-status'),
  submitBtn: document.getElementById('submit-btn'),
  backToTop: document.getElementById('back-to-top'),
  currentYear: document.getElementById('current-year'),
  yearsExperience: document.getElementById('years-experience'),
  projectsCount: document.getElementById('projects-count'),
  clientsCount: document.getElementById('clients-count')
};

// ============================================
// Theme Management
// ============================================

function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  } else if (prefersDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}

// ============================================
// Mobile Menu
// ============================================

function toggleMenu() {
  const isActive = elements.nav.classList.toggle('active');
  elements.menuToggle.classList.toggle('active');
  elements.menuToggle.setAttribute('aria-expanded', isActive);
  
  // Prevent body scroll when menu is open
  document.body.style.overflow = isActive ? 'hidden' : '';
}

function closeMenu() {
  elements.nav.classList.remove('active');
  elements.menuToggle.classList.remove('active');
  elements.menuToggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

// ============================================
// Navigation
// ============================================

function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.scrollY + 100;
  
  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      elements.navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

function handleScroll() {
  // Header shadow on scroll
  if (window.scrollY > 50) {
    elements.header.classList.add('scrolled');
  } else {
    elements.header.classList.remove('scrolled');
  }
  
  // Back to top button visibility
  if (window.scrollY > 500) {
    elements.backToTop.classList.add('visible');
  } else {
    elements.backToTop.classList.remove('visible');
  }
  
  // Update active nav link
  updateActiveNavLink();
  
  // Animate skill bars when in view
  animateSkillBarsOnScroll();
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// ============================================
// About Section - Ver más/menos
// ============================================

function toggleAboutDetails() {
  const isExpanded = elements.aboutDetails.classList.toggle('expanded');
  elements.aboutToggle.setAttribute('aria-expanded', isExpanded);
}

// ============================================
// Skills Rendering
// ============================================

function renderSkills(category) {
  const skills = skillsData[category];
  const panel = elements.skillsPanels[category];
  
  panel.innerHTML = skills.map((skill, index) => `
    <article class="skill-card" style="animation-delay: ${index * CONFIG.animationDelay}ms">
      <span class="skill-card__icon" aria-hidden="true">${skill.icon}</span>
      <h3 class="skill-card__name">${skill.name}</h3>
      <p class="skill-card__level">${skill.level}</p>
      <div class="skill-card__bar" role="progressbar" aria-valuenow="${skill.progress}" aria-valuemin="0" aria-valuemax="100">
        <div class="skill-card__progress" style="--progress: ${skill.progress}%"></div>
      </div>
    </article>
  `).join('');
}

function initSkills() {
  // Render all skill categories
  Object.keys(skillsData).forEach(category => {
    renderSkills(category);
  });
}

function switchSkillsTab(tabElement) {
  const targetTab = tabElement.dataset.tab;
  
  // Update active tab
  elements.skillsTabs.forEach(tab => tab.classList.remove('active'));
  tabElement.classList.add('active');
  
  // Update active panel
  Object.keys(elements.skillsPanels).forEach(key => {
    elements.skillsPanels[key].classList.remove('active');
  });
  elements.skillsPanels[targetTab].classList.add('active');
  
  // Trigger animation for skill bars
  setTimeout(() => {
    const progressBars = elements.skillsPanels[targetTab].querySelectorAll('.skill-card__progress');
    progressBars.forEach(bar => bar.classList.add('animate'));
  }, 100);
}

function animateSkillBarsOnScroll() {
  const skillsSection = document.getElementById('habilidades');
  if (!skillsSection) return;
  
  const rect = skillsSection.getBoundingClientRect();
  const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
  
  if (isVisible) {
    const activePanel = document.querySelector('.skills__panel.active');
    if (activePanel) {
      const progressBars = activePanel.querySelectorAll('.skill-card__progress');
      progressBars.forEach(bar => bar.classList.add('animate'));
    }
  }
}

// ============================================
// Projects Rendering & Filtering
// ============================================

function renderProjects(filter = 'all') {
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);
  
  elements.projectsGrid.innerHTML = filteredProjects.map((project, index) => `
    <article class="project-card" style="animation-delay: ${index * CONFIG.animationDelay}ms" data-category="${project.category}">
      <div class="project-card__image">
        <span aria-hidden="true">${project.icon}</span>
        <span class="project-card__category">${project.category === 'web' ? 'Web' : 'Paisajismo'}</span>
      </div>
      <div class="project-card__content">
        <h3 class="project-card__title">${project.title}</h3>
        <p class="project-card__description">${project.description}</p>
        <div class="project-card__tags">
          ${project.tags.map(tag => `<span class="project-card__tag">${tag}</span>`).join('')}
        </div>
      </div>
    </article>
  `).join('');
  
  // Update counter badge
  elements.filteredCount.textContent = filteredProjects.length;
  
  // Re-trigger animations
  const cards = elements.projectsGrid.querySelectorAll('.project-card');
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    setTimeout(() => {
      card.style.opacity = '1';
    }, index * 50);
  });
}

function filterProjects(filterBtn) {
  const filter = filterBtn.dataset.filter;
  
  // Update active button
  elements.filterBtns.forEach(btn => btn.classList.remove('active'));
  filterBtn.classList.add('active');
  
  // Render filtered projects
  renderProjects(filter);
}

// ============================================
// Certifications Rendering
// ============================================

function renderCertifications() {
  elements.certificationsGrid.innerHTML = certificationsData.map((cert, index) => `
    <article class="cert-card" style="animation-delay: ${index * CONFIG.animationDelay}ms">
      <span class="cert-card__icon" aria-hidden="true">${cert.icon}</span>
      <div class="cert-card__info">
        <h3 class="cert-card__title">${cert.title}</h3>
        <p class="cert-card__issuer">${cert.issuer}</p>
        <p class="cert-card__date">${cert.date}</p>
      </div>
    </article>
  `).join('');
}

// ============================================
// Stats Counter Animation
// ============================================

function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}

function initStats() {
  // Calculate years of experience automatically
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - CONFIG.startYear;
  
  // Set current year in footer
  elements.currentYear.textContent = currentYear;
  
  // Animate counters when hero section is visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(elements.yearsExperience, yearsOfExperience);
        animateCounter(elements.projectsCount, projectsData.length);
        animateCounter(elements.clientsCount, 15); // Ejemplo de clientes
        observer.disconnect();
      }
    });
  }, { threshold: 0.5 });
  
  observer.observe(document.querySelector('.hero__stats'));
}

// ============================================
// Form Validation
// ============================================

const validators = {
  name: (value) => {
    if (!value.trim()) return 'El nombre es requerido';
    if (value.trim().length < 2) return 'El nombre debe tener al menos 2 caracteres';
    return '';
  },
  email: (value) => {
    if (!value.trim()) return 'El email es requerido';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return 'Por favor ingresa un email válido';
    return '';
  },
  subject: (value) => {
    if (!value) return 'Por favor selecciona un asunto';
    return '';
  },
  message: (value) => {
    if (!value.trim()) return 'El mensaje es requerido';
    if (value.trim().length < 10) return 'El mensaje debe tener al menos 10 caracteres';
    return '';
  }
};

function validateField(field) {
  const value = field.value;
  const fieldName = field.name;
  const errorElement = document.getElementById(`${fieldName}-error`);
  
  const error = validators[fieldName] ? validators[fieldName](value) : '';
  
  if (error) {
    field.classList.add('error');
    field.classList.remove('success');
    errorElement.textContent = error;
    return false;
  } else {
    field.classList.remove('error');
    field.classList.add('success');
    errorElement.textContent = '';
    return true;
  }
}

function validateForm() {
  const fields = elements.contactForm.querySelectorAll('.form__input');
  let isValid = true;
  
  fields.forEach(field => {
    if (!validateField(field)) {
      isValid = false;
    }
  });
  
  return isValid;
}

function handleFormSubmit(e) {
  e.preventDefault();
  
  if (!validateForm()) {
    return;
  }
  
  // Show loading state
  elements.submitBtn.classList.add('btn--loading');
  elements.submitBtn.disabled = true;
  
  // Simulate form submission
  setTimeout(() => {
    elements.submitBtn.classList.remove('btn--loading');
    elements.submitBtn.disabled = false;
    
    // Show success message
    elements.formStatus.textContent = '¡Mensaje enviado con éxito! Te contactaré pronto.';
    elements.formStatus.className = 'form__status success';
    
    // Reset form
    elements.contactForm.reset();
    elements.contactForm.querySelectorAll('.form__input').forEach(field => {
      field.classList.remove('success', 'error');
    });
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      elements.formStatus.className = 'form__status';
    }, 5000);
  }, 1500);
}

// ============================================
// Event Listeners
// ============================================

function initEventListeners() {
  // Theme toggle
  elements.themeToggle.addEventListener('click', toggleTheme);
  
  // Mobile menu
  elements.menuToggle.addEventListener('click', toggleMenu);
  
  // Close menu when clicking nav links
  elements.navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (elements.nav.classList.contains('active') && 
        !elements.nav.contains(e.target) && 
        !elements.menuToggle.contains(e.target)) {
      closeMenu();
    }
  });
  
  // Scroll events
  window.addEventListener('scroll', handleScroll);
  
  // About toggle
  elements.aboutToggle.addEventListener('click', toggleAboutDetails);
  
  // Skills tabs
  elements.skillsTabs.forEach(tab => {
    tab.addEventListener('click', () => switchSkillsTab(tab));
  });
  
  // Project filters
  elements.filterBtns.forEach(btn => {
    btn.addEventListener('click', () => filterProjects(btn));
  });
  
  // Back to top
  elements.backToTop.addEventListener('click', scrollToTop);
  
  // Form validation on input
  elements.contactForm.querySelectorAll('.form__input').forEach(field => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (field.classList.contains('error')) {
        validateField(field);
      }
    });
  });
  
  // Form submission
  elements.contactForm.addEventListener('submit', handleFormSubmit);
  
  // Keyboard navigation for menu
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && elements.nav.classList.contains('active')) {
      closeMenu();
    }
  });
}

// ============================================
// Initialization
// ============================================

function init() {
  console.log('✅ CV Interactivo cargado correctamente');
  
  // Initialize theme
  initTheme();
  
  // Initialize all event listeners
  initEventListeners();
  
  // Render dynamic content
  initSkills();
  renderProjects();
  renderCertifications();
  initStats();
  
  // Initial scroll check
  handleScroll();
  
  // Trigger initial skill bar animation for visible tab
  setTimeout(() => {
    const activePanel = document.querySelector('.skills__panel.active');
    if (activePanel) {
      const progressBars = activePanel.querySelectorAll('.skill-card__progress');
      progressBars.forEach(bar => bar.classList.add('animate'));
    }
  }, 500);
}

// Run when DOM is ready
document.addEventListener('DOMContentLoaded', init);
