
// Function to add animation class when element is in view
const elements = document.querySelectorAll('.box1, .skill, .project, .internship');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('active');
        }
    });
});

elements.forEach(el => observer.observe(el));
