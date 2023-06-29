export function nextStep(index) {
    const steps = document.querySelectorAll('.steps__item');

    // Remove active class from all steps
    steps.forEach((step) => {
        step.classList.remove('steps__item--active');
    });

    // Add active class to section
    steps[index].classList.add('steps__item--active');
}