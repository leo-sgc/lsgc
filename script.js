
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const body = header.nextElementSibling;
        const isActive = body.style.display === 'block';
        document.querySelectorAll('.accordion-body').forEach(body => body.style.display = 'none');
        body.style.display = isActive ? 'none' : 'block';
    });
});
