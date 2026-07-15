<script>
// =======================
// Навігація між сторінками
// =======================

const pageButtons = document.querySelectorAll('.site-nav .nav-btn');
const sections = document.querySelectorAll('.page-section');

pageButtons.forEach(button => {
    button.addEventListener('click', () => {

        pageButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const target = button.dataset.target;

        sections.forEach(section => {
            section.classList.toggle(
                'active-section',
                section.id === target
            );
        });

    });
});


// =======================
// Фільтр галереї
// =======================

const galleryButtons = document.querySelectorAll('.gallery-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

galleryButtons.forEach(button => {

    button.addEventListener('click', () => {

        galleryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const category = button.dataset.cat;

        galleryItems.forEach(item => {

            if (item.classList.contains(category)) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }

        });

    });

});


// =======================
// Модальне вікно
// =======================

const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.modal-close');

galleryItems.forEach(item => {

    const img = item.querySelector('img');

    img.addEventListener('click', () => {

        modal.style.display = 'flex';
        modal.setAttribute('aria-hidden', 'false');

        modalImg.src = img.src;
        modalImg.alt = img.alt;

    });

});

function closeModal() {

    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');

}

closeBtn.addEventListener('click', closeModal);

modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
});


// =======================
// Початкова категорія
// =======================

// Якщо хочеш відкривати одразу Anthro
document.querySelector('[data-cat="anthro"]').click();
</script>
