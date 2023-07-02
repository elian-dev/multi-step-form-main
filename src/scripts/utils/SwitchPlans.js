export function switchPlans(event) {
    if (event.target.checked) {
        // Span with data-category="monthly"
        document.querySelector('span[data-category="monthly"]').classList.remove('switch-plan__label--active');

        // Span with data-category="yearly"
        document.querySelector('span[data-category="yearly"]').classList.add('switch-plan__label--active');
    } else {
        // Span with data-category="yearly"
        document.querySelector('span[data-category="yearly"]').classList.remove('switch-plan__label--active');

        // Span with data-category="monthly"
        document.querySelector('span[data-category="monthly"]').classList.add('switch-plan__label--active');
    }
}