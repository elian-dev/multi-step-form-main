export function RegisterObserver(target) {
    let flag = false;

    const options = {
        root: document.querySelector('.main-card'),
        rootMargin: '10px 0px', // like css property
        threshold: 1.0
    }

    const observer = new IntersectionObserver((entries, observer) => {
        if (entries[0].isIntersecting) {
            console.log('intersecting');
            flag = true;
        } else {
            console.log('not intersecting');
        }
    }, options);

    observer.observe(target);

    return flag;
}