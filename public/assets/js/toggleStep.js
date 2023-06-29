export function toggleStep() {
    const steps = document.querySelectorAll('.step');

    steps.forEach((step, index) => {
        step.addEventListener('click', () => {
            event.preventDefault();

            // Remove active class from all steps
            steps.forEach((step) => {
                step.classList.remove('step--active');
                step.querySelector('.step__tip').classList.remove('step__tip--active');
            });

            step.querySelector('.step__tip').classList.toggle('step__tip--active');

            // Add active class to section
            toggleSection(index);
        });
    });
}


function toggleSection(index) {
    document.querySelectorAll('.steps__item').forEach((section) => {
        section.classList.remove('steps__item--active');
    });

    document.querySelectorAll('.steps__item')[index].classList.add('steps__item--active');
}