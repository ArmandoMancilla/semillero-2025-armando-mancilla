/**
 * CV Interactivo - Jose Armando Mancilla Romero
 * Actuarial Scientist | Credit Risk Analyst
 */

// ============================================
// Data - Arrays de objetos para renderizar
// ============================================

const skillsData = {
  tech: [
    { name: 'Python', level: 'Avanzado', progress: 85, icon: '🐍' },
    { name: 'R', level: 'Avanzado', progress: 80, icon: '📊' },
    { name: 'Advanced Excel', level: 'Experto', progress: 95, icon: '📗' },
    { name: 'HTML/CSS', level: 'Intermedio', progress: 70, icon: '🌐' },
    { name: 'CFDI/XML', level: 'Experto', progress: 90, icon: '📄' },
    { name: 'SQL', level: 'Intermedio', progress: 65, icon: '🗄️' }
  ],
  analytical: [
    { name: 'Financial Analysis', level: 'Experto', progress: 95, icon: '💹' },
    { name: 'Credit Risk', level: 'Experto', progress: 92, icon: '⚠️' },
    { name: 'Data Analysis', level: 'Avanzado', progress: 88, icon: '📈' },
    { name: 'Fiscal Compliance', level: 'Avanzado', progress: 85, icon: '✅' },
    { name: 'Statistical Modeling', level: 'Avanzado', progress: 82, icon: '📉' },
    { name: 'Risk Assessment', level: 'Experto', progress: 90, icon: '🎯' }
  ],
  soft: [
    { name: 'Decision-making', level: 'Experto', progress: 92, icon: '🧠' },
    { name: 'Analytical Thinking', level: 'Experto', progress: 95, icon: '🔍' },
    { name: 'Communication', level: 'Avanzado', progress: 85, icon: '💬' },
    { name: 'Team Collaboration', level: 'Avanzado', progress: 88, icon: '🤝' },
    { name: 'Problem Solving', level: 'Experto', progress: 90, icon: '🧩' },
    { name: 'Attention to Detail', level: 'Experto', progress: 95, icon: '🔎' }
  ]
};

const projectsData = [
  {
    id: 1,
    title: 'Evaluación de Riesgo Crediticio CFDI',
    description: 'Evaluación de riesgo crediticio basada en facturación electrónica (CFDI). Análisis de patrones de ingresos y cumplimiento fiscal como indicadores clave de riesgo.',
    category: 'creze',
    tags: ['CFDI', 'Risk Analysis', 'Credit'],
    icon: '📊'
  },
  {
    id: 2,
    title: 'Modelo Automatizado en Python',
    description: 'Desarrollo de modelo automatizado en Python para procesar datos fiscales basados en Excel. Optimización de tiempos de análisis.',
    category: 'creze',
    tags: ['Python', 'Automation', 'Excel'],
    icon: '🐍'
  },
  {
    id: 3,
    title: 'Análisis de Operaciones Crediticias',
    description: 'Análisis de hasta seis operaciones crediticias por día, verificando cumplimiento fiscal y patrones de ingresos.',
    category: 'creze',
    tags: ['Credit Analysis', 'Fiscal', 'Daily Operations'],
    icon: '📈'
  },
  {
    id: 4,
    title: 'Participación en Comités de Crédito',
    description: 'Participación activa en comités de crédito, entregando insights técnicos y de negocio para la toma de decisiones.',
    category: 'creze',
    tags: ['Committee', 'Business Insights', 'Decision Making'],
    icon: '👥'
  },
  {
    id: 5,
    title: 'Análisis de Capacidad de Pago',
    description: 'Recolección y análisis de datos financieros para evaluar capacidad de pago y riesgo crediticio de clientes.',
    category: 'quantum',
    tags: ['Financial Data', 'Payment Capacity', 'Risk'],
    icon: '💰'
  },
  {
    id: 6,
    title: 'Mejora de Modelos Financieros',
    description: 'Mejora de modelos financieros para optimizar procesos de análisis crediticio y reducir tiempos de evaluación.',
    category: 'quantum',
    tags: ['Financial Models', 'Process Optimization', 'Analysis'],
    icon: '📉'
  },
  {
    id: 7,
    title: 'Evaluación de Estados Financieros',
    description: 'Evaluación de estados financieros, historial crediticio y registros de facturación para determinar perfiles de riesgo.',
    category: 'quantum',
    tags: ['Financial Statements', 'Credit History', 'Invoicing'],
    icon: '📋'
  },
  {
    id: 8,
    title: 'Negociación de Términos de Crédito',
    description: 'Negociación con clientes respecto a términos de pago y límites de crédito, balanceando riesgo y oportunidad de negocio.',
    category: 'quantum',
    tags: ['Negotiation', 'Credit Limits', 'Client Relations'],
    icon: '🤝'
  }
];

const certificationsData = [
  {
    title: 'Licenciatura en Ciencias Actuariales',
    issuer: 'ITAM - Instituto Tecnológico Autónomo de México',
    date: '2015 - 2022',
    icon: '🎓'
  },
  {
    title: 'Senior Credit Analyst',
    issuer: 'Creze',
    date: 'Feb 2025 - Ago 2025',
    icon: '💼'
  },
  {
    title: 'Credit Risk Analyst',
    issuer: 'Quantum FL',
    date: 'Sep 2022 - Oct 2023',
    icon: '📊'
  }
];

// Configuración
const CONFIG = {
  startYear: 2022, // Año de inicio de experiencia profesional
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
    analytical: document.getElementById('panel-analytical'),
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

  if (!panel) return;

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
    if (elements.skillsPanels[key]) {
      elements.skillsPanels[key].classList.remove('active');
    }
  });
  if (elements.skillsPanels[targetTab]) {
    elements.skillsPanels[targetTab].classList.add('active');
  }

  // Trigger animation for skill bars
  setTimeout(() => {
    if (elements.skillsPanels[targetTab]) {
      const progressBars = elements.skillsPanels[targetTab].querySelectorAll('.skill-card__progress');
      progressBars.forEach(bar => bar.classList.add('animate'));
    }
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
        <span class="project-card__category">${project.category === 'creze' ? 'Creze' : 'Quantum FL'}</span>
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
  const heroStats = document.querySelector('.hero__stats');
  if (!heroStats) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(elements.yearsExperience, yearsOfExperience);
        animateCounter(elements.projectsCount, projectsData.length);
        animateCounter(elements.clientsCount, 500); // Análisis crediticios realizados
        observer.disconnect();
      }
    });
  }, { threshold: 0.5 });

  observer.observe(heroStats);
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
    if (errorElement) errorElement.textContent = error;
    return false;
  } else {
    field.classList.remove('error');
    field.classList.add('success');
    if (errorElement) errorElement.textContent = '';
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
  if (elements.themeToggle) {
    elements.themeToggle.addEventListener('click', toggleTheme);
  }

  // Mobile menu
  if (elements.menuToggle) {
    elements.menuToggle.addEventListener('click', toggleMenu);
  }

  // Close menu when clicking nav links
  elements.navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (elements.nav && elements.nav.classList.contains('active') &&
        !elements.nav.contains(e.target) &&
        elements.menuToggle && !elements.menuToggle.contains(e.target)) {
      closeMenu();
    }
  });

  // Scroll events
  window.addEventListener('scroll', handleScroll);

  // About toggle
  if (elements.aboutToggle) {
    elements.aboutToggle.addEventListener('click', toggleAboutDetails);
  }

  // Skills tabs
  elements.skillsTabs.forEach(tab => {
    tab.addEventListener('click', () => switchSkillsTab(tab));
  });

  // Project filters
  elements.filterBtns.forEach(btn => {
    btn.addEventListener('click', () => filterProjects(btn));
  });

  // Back to top
  if (elements.backToTop) {
    elements.backToTop.addEventListener('click', scrollToTop);
  }

  // Form validation on input
  if (elements.contactForm) {
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
  }

  // Keyboard navigation for menu
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && elements.nav && elements.nav.classList.contains('active')) {
      closeMenu();
    }
  });
}

// ============================================
// Initialization
// ============================================

function init() {
  console.log('✅ CV de Jose Armando Mancilla Romero cargado correctamente');

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
