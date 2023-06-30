export function nextStep(index) {
    const steps = document.querySelectorAll('.steps__item');
    const stepsBar = document.querySelectorAll('.step');

    // Remove active class from all steps
    steps.forEach((step) => {
        step.classList.remove('steps__item--active');
    });

    // Remove active class from all steps
    stepsBar.forEach((step) => {
        step.querySelector('.step__tip').classList.remove('step__tip--active');
    });

    // Add active class to section
    stepsBar[index].querySelector('.step__tip').classList.add('step__tip--active');
    steps[index].classList.add('steps__item--active');
}