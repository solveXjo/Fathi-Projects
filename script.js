document.addEventListener('DOMContentLoaded', function () {
    // Project Carousel
    const projects = [
        {
            title: "زدني",
            description: "Improved accessibility to Arabic research content...",
            image: "zednye.png",
            tags: ["Research", "Education", "Application Development"],
            link: "zadni.html"
        },
        {
            title: "Vital Guard",
            description: "Streamlined the appointment process...",
            image: "Vital Guard.png",
            tags: ["Healthcare Application", "Hospital Appointment", "Next.js"],
            link: "VitalGuard.html" 
        }
    ];

    let currentProject = 0;
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const indicators = document.querySelectorAll('.indicator');
    const projectImage = document.querySelector('.project-image img');
    const projectTitle = document.querySelector('.project-content h3');
    const projectDesc = document.querySelector('.project-content p');
    const projectTags = document.querySelector('.project-tags');
    const readMoreBtn = document.querySelector('.read-more');

    function updateProjectDisplay() {
        projectImage.src = projects[currentProject].image;
        projectTitle.textContent = projects[currentProject].title;
        projectDesc.textContent = projects[currentProject].description;
        projectTags.innerHTML = projects[currentProject].tags.map(tag => `<span>${tag}</span>`).join('');
        readMoreBtn.onclick = () => window.location.href = projects[currentProject].link;

        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentProject);
        });
    }

    // Initialize first project
    updateProjectDisplay();

    prevBtn.addEventListener('click', () => {
        currentProject = (currentProject - 1 + projects.length) % projects.length;
        updateProjectDisplay();
    });

    nextBtn.addEventListener('click', () => {
        currentProject = (currentProject + 1) % projects.length;
        updateProjectDisplay();
    });

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentProject = index;
            updateProjectDisplay();
        });
    });
    // Mobile Navigation Toggle
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const nav = document.querySelector('nav');

    mobileNavToggle.addEventListener('click', () => {
        nav.classList.toggle('open');
        const icon = mobileNavToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

   // Show loading screen
   const loadingScreen = document.getElementById('loading-screen');

   // Simulate loading delay (replace this with actual loading logic if needed)
   setTimeout(() => {
       loadingScreen.classList.add('hide');

       // Remove loading screen from the DOM after the transition
       setTimeout(() => {
           loadingScreen.remove();
       }, 500); // Match the transition duration in CSS
   }, 2000); // Simulate a 2-second loading time

   // Smooth Scroll
   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
       anchor.addEventListener('click', function (e) {
           e.preventDefault();
           const targetId = this.getAttribute('href');
           const targetElement = document.querySelector(targetId);

           if (targetElement) {
               window.scrollTo({
                   top: targetElement.offsetTop - 80, // Adjust for fixed header
                   behavior: 'smooth'
               });
           }
       });
   });

   // Navbar Disappear on Scroll
   let lastScroll = 0;
   const header = document.querySelector('header');

   window.addEventListener('scroll', () => {
       const currentScroll = window.scrollY;

       if (currentScroll > lastScroll) {
           // Scrolling down
           header.classList.add('hide');
       } else {
           // Scrolling up
           header.classList.remove('hide');
       }

       lastScroll = currentScroll;
   });

   // Section Animations
   const sections = document.querySelectorAll('section');
   const timelineItems = document.querySelectorAll('.timeline-item');

   function checkSections() {
       sections.forEach(section => {
           const sectionTop = section.getBoundingClientRect().top;
           const windowHeight = window.innerHeight;

           if (sectionTop < windowHeight * 0.8) {
               section.classList.add('visible');
           }
       });

       // Timeline Animation
       timelineItems.forEach((item, index) => {
           const itemTop = item.getBoundingClientRect().top;
           const windowHeight = window.innerHeight;

           if (itemTop < windowHeight * 0.8) {
               item.classList.add('visible');
           }
       });
   }

   // Check sections on load and scroll
   checkSections();
   window.addEventListener('scroll', checkSections);
});