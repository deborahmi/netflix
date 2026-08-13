document.addEventListener('DOMContentLoaded', () => {
    // 1. FAQ Accordion Click Handler
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const currentItem = question.parentElement;

            // Close all other FAQ items except the current one
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== currentItem) {
                    item.classList.remove('active');
                }
            });

            // Toggle active state on clicked item
            currentItem.classList.toggle('active');
        });
    });

    // 2. Hide Preloader when page is ready
    const loader = document.getElementById('loader-wrapper');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hide');
        }, 500);
    }
});