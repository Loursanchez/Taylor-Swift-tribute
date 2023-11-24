document.addEventListener('DOMContentLoaded', function () {
    for (let i = 1; i <= 4; i++) {
        addClickListener(i);
    }

    function addClickListener(index) {
        var content = document.querySelector('.era-text-mobile-' + index);
        var readMoreBtn = document.getElementById('read-more-' + index);

        readMoreBtn.addEventListener('click', function () {
            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'flex';
                readMoreBtn.textContent = 'Read Less';
            } else {
                content.style.display = 'none';
                readMoreBtn.textContent = 'Read More';
            }
        });
    }
});