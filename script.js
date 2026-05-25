/* ===== Portfolio App v2.0 ===== */

const ASCII_LOGO = ` ███████╗ █████╗ ██╗  ██╗ ██╗     ██╗
 ██╔════╝██╔══██╗██║  ██║ ██║     ██║
 ╚██████╗ ███████║███████║ ██║     ██║
  ╚═══██╗ ██╔══██║██╔══██║ ██║     ██║
 ███████╗ ██║  ██║██║  ██║ ███████╗██║
 ╚══════╝ ╚═╝  ╚═╝╚═╝  ╚═╝ ╚══════╝╚═╝`;

const BOOT_MESSAGES = [
    'Loading kernel modules...',
    'Mounting portfolio filesystem...',
    'Compiling project index...',
    'Initializing matrix renderer...',
    'Starting interactive CLI...',
    'Establishing secure channels...',
    'All systems operational.'
];

const TYPING_MESSAGES = [
    'Hello, I\'m SAHIL...',
    'Full Stack Developer...',
    'Building digital experiences...',
    'Discord bots & web apps...',
    'Type "help" in the CLI below!'
];

const PROJECTS = [
    {
        title: 'SAVAGE Discord Bot',
        description: 'A comprehensive Discord bot with economy, games, and moderation features built with discord.py. Includes custom commands, user profiles, clan systems, and a thriving 18K+ member community and 300+ servers.',
        status: 'Active',
        tech: ['Python', 'discord.py', 'SQLite', 'REST API'],
        github: 'https://github.com/Savage404E',
        demo: '#'
    },
    {
        title: 'Terminal Portfolio v2',
        description: 'An advanced terminal-inspired portfolio with interactive CLI, command palette, matrix effects, project modals, and cyberpunk aesthetics.',
        status: 'Active',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'Canvas API'],
        github: 'https://github.com/Savage404E',
        demo: '#'
    },
    {
        title: 'Ai-Agent-stockmarket',
        description: 'AI stock agent for Indian markets. Live NSE prices via Yahoo Finance, 500+ stocks (NIFTY 50 & more). Search stocks, filter by P/E & dividends, view top gainers/losers, stock details & market summary.',
        status: 'Active',
        tech: ['Python', 'Yahoo Finance API', 'NSE', 'AI Agent'],
        github: 'https://github.com/Savage404E',
        demo: '#'
    },
    {
        title: 'Overall Internet intelligent System (OIIS)',
        description: 'JARVIS-style personal AI assistant. Talks, listens, and runs tasks for you — search the web, control apps, automate workflows, fetch info, and manage your digital life from one smart command center.',
        status: 'In Progress',
        tech: ['Python', 'AI / LLM', 'Voice', 'Automation'],
        github: 'https://github.com/Savage404E',
        demo: '#'
    }
];

const SKILLS = [
    { name: 'JavaScript', category: 'frontend', icon: 'fab fa-js' },
    { name: 'React', category: 'frontend', icon: 'fab fa-react' },
    { name: 'HTML5 / CSS3', category: 'frontend', icon: 'fab fa-html5' },
    { name: 'TypeScript', category: 'frontend', icon: 'fab fa-js' },
    { name: 'Node.js', category: 'backend', icon: 'fab fa-node-js' },
    { name: 'Python', category: 'backend', icon: 'fab fa-python' },
    { name: 'Express.js', category: 'backend', icon: 'fas fa-server' },
    { name: 'MongoDB', category: 'backend', icon: 'fas fa-database' },
    { name: 'Git', category: 'tools', icon: 'fab fa-git-alt' },
    { name: 'Docker', category: 'tools', icon: 'fab fa-docker' },
    { name: 'AWS', category: 'tools', icon: 'fab fa-aws' },
    { name: 'Figma', category: 'tools', icon: 'fab fa-figma' }
];

const EXPERIENCE = [
    {
        date: '2024 — Present',
        title: 'Full Stack Developer',
        org: 'Freelance & Personal Projects',
        desc: 'Building web applications, Discord bots, and automation tools. Managing an 18K+ member Discord community.'
    },
    {
        date: '2023 — 2024',
        title: 'Discord Bot Developer',
        org: 'Community Projects',
        desc: 'Developed economy systems, moderation tools, and game modules for large-scale Discord servers.'
    },
    {
        date: '2022 — 2023',
        title: 'Frontend Developer',
        org: 'Learning & Open Source',
        desc: 'Mastered React, modern CSS, and responsive design through portfolio projects and contributions.'
    }
];

const SKILL_ICONS = {
    JavaScript: 'fab fa-js', React: 'fab fa-react', Python: 'fab fa-python',
    'Node.js': 'fab fa-node-js', Git: 'fab fa-git-alt', Docker: 'fab fa-docker'
};

const delay = (ms) => new Promise((r) => setTimeout(r, ms));

/* ===== Boot Loader ===== */
class TerminalLoader {
    constructor() {
        this.loader = document.getElementById('terminalLoader');
        this.bootCommand = document.getElementById('bootCommand');
        this.bootOutput = document.getElementById('bootOutput');
        this.bootProgress = document.getElementById('bootProgressBar');
        this.asciiArt = document.getElementById('asciiArt');
    }

    async start() {
        if (this.asciiArt) this.asciiArt.textContent = ASCII_LOGO;
        const total = BOOT_MESSAGES.length;
        for (let i = 0; i < total; i++) {
            const msg = BOOT_MESSAGES[i];
            await this.typeLine(msg);
            this.bootOutput.innerHTML += `<div class="boot-line">${msg}</div>`;
            if (this.bootProgress) {
                this.bootProgress.style.width = `${((i + 1) / total) * 100}%`;
            }
            await delay(500);
        }
        await delay(600);
        this.hide();
    }

    async typeLine(text) {
        this.bootCommand.textContent = '';
        for (const ch of text) {
            this.bootCommand.textContent += ch;
            await delay(18);
        }
    }

    hide() {
        this.loader.classList.add('hidden');
        setTimeout(() => { this.loader.style.display = 'none'; }, 600);
    }
}

/* ===== Matrix Background ===== */
class MatrixBackground {
    constructor() {
        this.canvas = document.getElementById('matrixCanvas');
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン01';
        this.fontSize = 15;
        this.columns = 0;
        this.drops = [];
        this.running = true;
        this.init();
    }

    init() {
        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.loop();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.columns = Math.floor(this.canvas.width / this.fontSize);
        this.drops = Array(this.columns).fill(1);
    }

    loop() {
        if (!this.running) return;
        this.ctx.fillStyle = 'rgba(5, 8, 15, 0.06)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.font = `${this.fontSize}px monospace`;

        for (let i = 0; i < this.columns; i++) {
            const char = this.chars[Math.floor(Math.random() * this.chars.length)];
            const x = i * this.fontSize;
            const y = this.drops[i] * this.fontSize;
            const brightness = Math.random();
            this.ctx.fillStyle = brightness > 0.95
                ? '#ffffff'
                : `rgba(0, ${180 + Math.floor(Math.random() * 75)}, ${120 + Math.floor(Math.random() * 80)}, ${0.4 + brightness * 0.6})`;
            this.ctx.fillText(char, x, y);

            if (y > this.canvas.height && Math.random() > 0.975) this.drops[i] = 0;
            this.drops[i]++;
        }
        requestAnimationFrame(() => this.loop());
    }

    toggle() {
        this.running = !this.running;
        this.canvas.classList.toggle('off', !this.running);
        if (this.running) this.loop();
    }
}

/* ===== Scroll & Cursor ===== */
class ScrollEffects {
    constructor() {
        this.progress = document.getElementById('scrollProgress');
        this.glow = document.getElementById('cursorGlow');
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => {
            const h = document.documentElement.scrollHeight - window.innerHeight;
            const pct = h > 0 ? (window.scrollY / h) * 100 : 0;
            if (this.progress) this.progress.style.width = `${pct}%`;
        });

        if (this.glow && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.addEventListener('mousemove', (e) => {
                this.glow.style.left = `${e.clientX}px`;
                this.glow.style.top = `${e.clientY}px`;
            });
        }

        document.querySelectorAll('.section-reveal').forEach((el) => {
            const obs = new IntersectionObserver(([e]) => {
                if (e.isIntersecting) {
                    el.classList.add('visible');
                    obs.unobserve(el);
                }
            }, { threshold: 0.08 });
            obs.observe(el);
        });
    }
}

/* ===== Navigation ===== */
class Navigation {
    constructor() {
        this.navLinks = document.querySelectorAll('.nav-link');
        this.menuToggle = document.getElementById('menuToggle');
        this.navMenu = document.getElementById('navMenu');
        this.themeToggle = document.getElementById('themeToggle');
        this.matrixToggle = document.getElementById('matrixToggle');
        this.init();
    }

    init() {
        this.navLinks.forEach((link) => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const id = link.getAttribute('href').slice(1);
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                this.navMenu?.classList.remove('open');
            });
        });

        const sections = document.querySelectorAll('section[id]');
        const obs = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.navLinks.forEach((l) => l.classList.remove('active'));
                    document.querySelector(`.nav-link[href="#${entry.target.id}"]`)?.classList.add('active');
                }
            });
        }, { threshold: 0.35, rootMargin: '-80px 0px' });
        sections.forEach((s) => obs.observe(s));

        this.menuToggle?.addEventListener('click', () => {
            this.navMenu?.classList.toggle('open');
        });

        this.themeToggle?.addEventListener('click', () => {
            document.body.classList.toggle('light-theme');
            const icon = this.themeToggle.querySelector('i');
            const dark = document.body.classList.contains('light-theme');
            icon.className = dark ? 'fas fa-sun' : 'fas fa-moon';
            localStorage.setItem('theme', dark ? 'light' : 'dark');
        });

        if (localStorage.getItem('theme') === 'light') {
            document.body.classList.add('light-theme');
            this.themeToggle?.querySelector('i')?.classList.replace('fa-moon', 'fa-sun');
        }

        this.matrixToggle?.addEventListener('click', () => {
            window.portfolioMatrix?.toggle();
        });
    }
}

/* ===== Typing Hero ===== */
class TypingAnimation {
    constructor() {
        this.el = document.getElementById('typingText');
        if (!this.el) return;
        this.messages = TYPING_MESSAGES;
        this.msgIdx = 0;
        this.charIdx = 0;
        this.deleting = false;
        this.type();
    }

    type() {
        const current = this.messages[this.msgIdx];
        if (this.deleting) {
            this.el.textContent = current.substring(0, this.charIdx - 1);
            this.charIdx--;
        } else {
            this.el.textContent = current.substring(0, this.charIdx + 1);
            this.charIdx++;
        }

        let speed = this.deleting ? 40 : 80;
        if (!this.deleting && this.charIdx === current.length) {
            speed = 2200;
            this.deleting = true;
        } else if (this.deleting && this.charIdx === 0) {
            this.deleting = false;
            this.msgIdx = (this.msgIdx + 1) % this.messages.length;
            speed = 400;
        }
        setTimeout(() => this.type(), speed);
    }
}

/* ===== Stats Counter ===== */
class StatsCounter {
    constructor() {
        this.cards = document.querySelectorAll('.stat-number');
        this.init();
    }

    init() {
        const obs = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.animate(entry.target);
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        this.cards.forEach((c) => obs.observe(c));
    }

    animate(el) {
        const target = parseInt(el.dataset.target, 10);
        const duration = 2000;
        const start = performance.now();
        const tick = (now) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            const val = Math.floor(eased * target);
            el.textContent = target >= 1000 ? val.toLocaleString() + '+' : val + (target === 999 ? '+' : '');
            if (p < 1) requestAnimationFrame(tick);
            else el.textContent = target >= 1000 ? target.toLocaleString() + '+' : target + (target === 999 ? '+' : '');
        };
        requestAnimationFrame(tick);
    }
}

/* ===== Projects ===== */
class ProjectsManager {
    constructor() {
        this.grid = document.getElementById('projectsGrid');
        this.filters = document.querySelectorAll('.filter-btn');
        this.modal = document.getElementById('projectModal');
        this.modalBody = document.getElementById('modalBody');
        this.modalTitle = document.getElementById('modalTitle');
        this.activeFilter = 'all';
        this.init();
    }

    init() {
        this.render();
        this.filters.forEach((btn) => {
            btn.addEventListener('click', () => {
                this.filters.forEach((b) => b.classList.remove('active'));
                btn.classList.add('active');
                this.activeFilter = btn.dataset.filter;
                this.filterCards();
            });
        });
        document.getElementById('modalClose')?.addEventListener('click', () => this.closeModal());
        this.modal?.addEventListener('click', (e) => {
            if (e.target === this.modal) this.closeModal();
        });
    }

    render() {
        if (!this.grid) return;
        this.grid.innerHTML = '';
        PROJECTS.forEach((p, i) => {
            const card = document.createElement('article');
            card.className = 'project-card';
            card.dataset.status = p.status;
            card.style.transitionDelay = `${i * 0.05}s`;
            card.innerHTML = `
                <div class="project-header">
                    <h3 class="project-title">${p.title}</h3>
                    <span class="project-status" data-status="${p.status}">${p.status}</span>
                </div>
                <p class="project-description">${p.description}</p>
                <div class="project-tech">${p.tech.map((t) => `<span class="tech-tag">${t}</span>`).join('')}</div>
                <div class="project-links">
                    <a href="${p.github}" class="project-link" target="_blank" rel="noopener" onclick="event.stopPropagation()"><i class="fab fa-github"></i> Code</a>
                    <a href="${p.demo}" class="project-link" target="_blank" rel="noopener" onclick="event.stopPropagation()"><i class="fas fa-external-link-alt"></i> Demo</a>
                </div>
                <span class="view-hint"><i class="fas fa-expand"></i> click for details</span>
            `;
            card.addEventListener('click', () => this.openModal(p));
            this.grid.appendChild(card);
        });
        this.observeCards();
    }

    filterCards() {
        document.querySelectorAll('.project-card').forEach((card) => {
            const show = this.activeFilter === 'all' || card.dataset.status === this.activeFilter;
            card.classList.toggle('hidden-card', !show);
        });
    }

    openModal(p) {
        if (!this.modal) return;
        this.modalTitle.textContent = `project@${p.title.replace(/\s+/g, '_').toLowerCase()}`;
        this.modalBody.innerHTML = `
            <span class="modal-status project-status" data-status="${p.status}">${p.status}</span>
            <h3>${p.title}</h3>
            <p>${p.description}</p>
            <div class="modal-tech">${p.tech.map((t) => `<span class="tech-tag">${t}</span>`).join('')}</div>
            <div class="modal-links">
                <a href="${p.github}" target="_blank" rel="noopener"><i class="fab fa-github"></i> View on GitHub</a>
                <a href="${p.demo}" target="_blank" rel="noopener"><i class="fas fa-external-link-alt"></i> Live Demo</a>
            </div>
        `;
        this.modal.hidden = false;
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        this.modal.hidden = true;
        document.body.style.overflow = '';
    }

    observeCards() {
        const obs = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) {
                    e.target.style.opacity = '1';
                    e.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.project-card').forEach((c) => {
            c.style.opacity = '0';
            c.style.transform = 'translateY(24px)';
            c.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            obs.observe(c);
        });
    }
}

/* ===== Skills ===== */
class SkillsManager {
    constructor() {
        this.grid = document.getElementById('skillsGrid');
        this.categories = document.querySelectorAll('.skill-category');
        this.active = 'all';
        this.init();
    }

    init() {
        this.categories.forEach((cat) => {
            cat.addEventListener('click', () => {
                this.categories.forEach((c) => c.classList.remove('active'));
                cat.classList.add('active');
                this.active = cat.dataset.category;
                this.render();
            });
        });
        this.render();
    }

    render() {
        if (!this.grid) return;
        this.grid.innerHTML = '';
        const filtered = this.active === 'all'
            ? SKILLS
            : SKILLS.filter((s) => s.category === this.active);

        filtered.forEach((skill) => {
            const card = document.createElement('div');
            card.className = 'skill-card';
            card.innerHTML = `
                <div class="skill-header">
                    <div class="skill-name-wrap">
                        <i class="${skill.icon} skill-icon"></i>
                        <span class="skill-name">${skill.name}</span>
                    </div>
                </div>
            `;
            this.grid.appendChild(card);
        });
    }
}

/* ===== Experience Timeline ===== */
class ExperienceTimeline {
    constructor() {
        this.container = document.getElementById('timeline');
        if (!this.container) return;
        EXPERIENCE.forEach((exp) => {
            const item = document.createElement('div');
            item.className = 'timeline-item';
            item.innerHTML = `
                <div class="timeline-date">${exp.date}</div>
                <div class="timeline-title">${exp.title}</div>
                <div class="timeline-org">${exp.org}</div>
                <p class="timeline-desc">${exp.desc}</p>
            `;
            this.container.appendChild(item);
        });
    }
}

/* ===== Command Palette ===== */
class CommandPalette {
    constructor() {
        this.overlay = document.getElementById('cmdPaletteOverlay');
        this.input = document.getElementById('cmdPaletteInput');
        this.list = document.getElementById('cmdPaletteList');
        this.btn = document.getElementById('cmdPaletteBtn');
        this.selected = 0;
        this.commands = [
            { cmd: 'home', desc: 'Go to hero section', action: () => this.go('home') },
            { cmd: 'about', desc: 'View stats', action: () => this.go('about') },
            { cmd: 'projects', desc: 'Browse projects', action: () => this.go('projects') },
            { cmd: 'skills', desc: 'View skills', action: () => this.go('skills') },
            { cmd: 'experience', desc: 'Work timeline', action: () => this.go('experience') },
            { cmd: 'contact', desc: 'Get in touch', action: () => this.go('contact') },
            { cmd: 'github', desc: 'Open GitHub', action: () => window.open('https://github.com/Savage404E', '_blank') },
            { cmd: 'discord', desc: 'Join Discord server', action: () => window.open('https://discord.gg/besavage', '_blank') },
            { cmd: 'theme', desc: 'Toggle light/dark', action: () => document.getElementById('themeToggle')?.click() },
            { cmd: 'matrix', desc: 'Toggle matrix rain', action: () => window.portfolioMatrix?.toggle() },
            { cmd: 'terminal', desc: 'Focus CLI', action: () => window.portfolioCLI?.focus() },
            { cmd: 'clear', desc: 'Clear CLI output', action: () => window.portfolioCLI?.runCommand('clear') }
        ];
        this.init();
    }

    init() {
        this.btn?.addEventListener('click', () => this.open());
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                this.overlay?.hidden ? this.open() : this.close();
            }
            if (e.key === 'Escape') this.close();
        });
        this.overlay?.addEventListener('click', (e) => {
            if (e.target === this.overlay) this.close();
        });
        this.input?.addEventListener('input', () => this.filter());
        this.input?.addEventListener('keydown', (e) => this.handleKeys(e));
    }

    open() {
        this.overlay.hidden = false;
        this.input.value = '';
        this.selected = 0;
        this.filter();
        setTimeout(() => this.input?.focus(), 50);
    }

    close() {
        this.overlay.hidden = true;
    }

    go(id) {
        this.close();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }

    filter() {
        const q = (this.input?.value || '').toLowerCase();
        const matches = this.commands.filter(
            (c) => c.cmd.includes(q) || c.desc.toLowerCase().includes(q)
        );
        this.list.innerHTML = matches.map((c, i) => `
            <li class="cmd-palette-item ${i === 0 ? 'selected' : ''}" data-idx="${i}">
                <span>${c.cmd}</span>
                <span>${c.desc}</span>
            </li>
        `).join('');
        this.filtered = matches;
        this.selected = 0;
        this.list.querySelectorAll('.cmd-palette-item').forEach((item) => {
            item.addEventListener('click', () => {
                const idx = parseInt(item.dataset.idx, 10);
                this.filtered[idx]?.action();
                this.close();
            });
        });
    }

    handleKeys(e) {
        const items = this.list?.querySelectorAll('.cmd-palette-item');
        if (!items?.length) return;
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            this.selected = (this.selected + 1) % items.length;
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            this.selected = (this.selected - 1 + items.length) % items.length;
        } else if (e.key === 'Enter') {
            e.preventDefault();
            this.filtered[this.selected]?.action();
            this.close();
            return;
        } else return;
        items.forEach((el, i) => el.classList.toggle('selected', i === this.selected));
    }
}

/* ===== Interactive CLI ===== */
class InteractiveCLI {
    constructor() {
        this.dock = document.getElementById('cliDock');
        this.output = document.getElementById('cliOutput');
        this.form = document.getElementById('cliForm');
        this.input = document.getElementById('cliInput');
        this.history = [];
        this.historyIdx = -1;
        this.commands = {
            help: () => this.cmdHelp(),
            about: () => this.cmdAbout(),
            whoami: () => this.cmdAbout(),
            projects: () => this.cmdProjects(),
            skills: () => this.cmdSkills(),
            contact: () => this.cmdContact(),
            experience: () => this.cmdExperience(),
            github: () => { window.open('https://github.com/Savage404E', '_blank'); return 'Opening GitHub...'; },
            linkedin: () => { window.open('https://www.linkedin.com/in/sahil-kadam-473096383/', '_blank'); return 'Opening LinkedIn...'; },
            discord: () => { window.open('https://discord.gg/besavage', '_blank'); return 'Opening Discord server...'; },
            email: () => { window.location.href = 'mailto:sahil22kadam@gmail.com'; return 'Opening mail client...'; },
            clear: () => { this.output.innerHTML = ''; return null; },
            theme: () => { document.getElementById('themeToggle')?.click(); return 'Theme toggled.'; },
            matrix: () => { window.portfolioMatrix?.toggle(); return 'Matrix effect toggled.'; },
            home: () => { this.scroll('home'); return 'Navigating to home...'; },
            ls: () => this.cmdLs(),
            date: () => new Date().toString(),
            echo: (args) => args.join(' ') || '',
            sudo: () => 'Nice try. Visitor privileges only. 😄',
            hack: () => 'Access denied. But nice enthusiasm!',
            coffee: () => '☕ Brewing... 999 cups and counting.',
            neofetch: () => this.cmdNeofetch()
        };
        this.init();
    }

    init() {
        this.form?.addEventListener('submit', (e) => {
            e.preventDefault();
            const cmd = this.input.value.trim();
            if (cmd) {
                this.history.push(cmd);
                this.historyIdx = this.history.length;
                this.runCommand(cmd);
            }
            this.input.value = '';
        });

        this.input?.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowUp' && this.history.length) {
                e.preventDefault();
                this.historyIdx = Math.max(0, this.historyIdx - 1);
                this.input.value = this.history[this.historyIdx] || '';
            } else if (e.key === 'ArrowDown' && this.history.length) {
                e.preventDefault();
                this.historyIdx = Math.min(this.history.length, this.historyIdx + 1);
                this.input.value = this.history[this.historyIdx] || '';
            }
        });

        document.getElementById('cliMinimize')?.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleMinimized();
        });

        document.getElementById('cliMaximize')?.addEventListener('click', (e) => {
            e.stopPropagation();
            this.dock?.classList.toggle('expanded');
            this.updateCliControls();
        });

        document.getElementById('cliHeader')?.addEventListener('click', () => {
            if (this.dock?.classList.contains('minimized')) {
                this.open();
            }
        });

        document.getElementById('openTerminalBtn')?.addEventListener('click', () => this.focus());
        this.updateCliControls();
    }

    open() {
        this.dock?.classList.remove('minimized');
        this.updateCliControls();
        const status = this.dock?.querySelector('.cli-status');
        if (status) status.textContent = '● live';
    }

    toggleMinimized() {
        if (this.dock?.classList.contains('minimized')) {
            this.open();
        } else {
            this.dock?.classList.add('minimized');
            this.dock?.classList.remove('expanded');
            this.updateCliControls();
            const status = this.dock?.querySelector('.cli-status');
            if (status) status.textContent = '● click to open';
        }
    }

    updateCliControls() {
        const btn = document.getElementById('cliMinimize');
        const icon = btn?.querySelector('i');
        const minimized = this.dock?.classList.contains('minimized');
        if (icon) icon.className = minimized ? 'fas fa-chevron-up' : 'fas fa-chevron-down';
        if (btn) btn.title = minimized ? 'Open terminal' : 'Close terminal';
    }

    focus() {
        this.open();
        this.input?.focus();
        this.dock?.scrollIntoView({ behavior: 'smooth' });
    }

    runCommand(raw) {
        const parts = raw.trim().split(/\s+/);
        const cmd = parts[0].toLowerCase();
        const args = parts.slice(1);

        this.print(`<span class="cmd-echo">visitor@SAHIL:~$ ${raw}</span>`, 'cli-line');

        const handler = this.commands[cmd];
        if (handler) {
            const result = handler(args);
            if (result !== null && result !== undefined) {
                this.print(result, typeof result === 'string' && result.includes('denied') ? 'error' : 'success');
            }
        } else if (cmd) {
            this.print(`Command not found: ${cmd}. Type <code>help</code> for available commands.`, 'error');
        }
        this.output.scrollTop = this.output.scrollHeight;
    }

    print(html, cls = 'cli-line') {
        const text = String(html).replace(/\n/g, '<br>');
        const line = document.createElement('div');
        line.className = `cli-line ${cls}`;
        line.style.whiteSpace = 'pre-wrap';
        line.innerHTML = text;
        this.output.appendChild(line);
    }

    scroll(id) {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }

    cmdHelp() {
        return `Available commands:
  help, about, whoami, projects, skills, experience
  contact, github, linkedin, discord, email, home, ls
  theme, matrix, clear, date, echo, neofetch
  sudo, hack, coffee  (easter eggs)`;
    }

    cmdAbout() {
        return `SAHIL — Full Stack Developer
Location: Pune, Maharashtra, India
Role: Creative Solutions & Automation
Status: ● Available for work
Community: 18,000+ Discord members`;
    }

    cmdProjects() {
        this.scroll('projects');
        return PROJECTS.map((p) => `  [${p.status}] ${p.title}`).join('\n');
    }

    cmdSkills() {
        this.scroll('skills');
        return SKILLS.map((s) => `  • ${s.name}`).join('\n');
    }

    cmdContact() {
        this.scroll('contact');
        return 'Email: sahil22kadam@gmail.com | Commands: email, github, linkedin, discord';
    }

    cmdExperience() {
        this.scroll('experience');
        return EXPERIENCE.map((e) => `  ${e.date} — ${e.title} @ ${e.org}`).join('\n');
    }

    cmdLs() {
        return `home/  about/  projects/  skills/  experience/  contact/  cli/`;
    }

    cmdNeofetch() {
        return `       ███████╗ █████╗ ██╗   ██╗
       OS: Portfolio Linux v2.0
       Host: SAHIL-Dev-Machine
       Location: Pune, India
       Shell: interactive-bash
       Uptime: ${Math.floor(performance.now() / 1000)}s since load
       Projects: ${PROJECTS.length} | Skills: ${SKILLS.length}`;
    }
}

/* ===== Card tilt on hover ===== */
function initCardTilt() {
    document.addEventListener('mousemove', (e) => {
        document.querySelectorAll('.project-card:not(.hidden-card), .skill-card, .stat-card').forEach((card) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const inBounds = x >= 0 && x <= rect.width && y >= 0 && y <= rect.height;
            if (inBounds) {
                const cx = (x / rect.width - 0.5) * 8;
                const cy = (y / rect.height - 0.5) * -8;
                card.style.transform = `perspective(600px) rotateY(${cx}deg) rotateX(${cy}deg) translateY(-4px)`;
            } else {
                card.style.transform = '';
            }
        });
    });
}

/* ===== Init ===== */
document.addEventListener('DOMContentLoaded', async () => {
    const loader = new TerminalLoader();
    await loader.start();

    window.portfolioMatrix = new MatrixBackground();
    new ScrollEffects();
    new Navigation();
    new TypingAnimation();
    new StatsCounter();
    new ProjectsManager();
    new SkillsManager();
    new ExperienceTimeline();
    new CommandPalette();
    window.portfolioCLI = new InteractiveCLI();
    initCardTilt();

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.getElementById('projectModal').hidden = true;
            document.body.style.overflow = '';
            document.getElementById('cmdPaletteOverlay').hidden = true;
        }
    });
});
