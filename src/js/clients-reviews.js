const slider = document.getElementById("slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const reviews = document.querySelectorAll(".review");

let slideIndex = 0;
const totalReviews = reviews.length;
const reviewsPerSlideMobile = 1;
const reviewsPerSlideTablet = 2;

prevBtn.addEventListener("click", showPrevReview);
nextBtn.addEventListener("click", showNextReview);

function showPrevReview() {
    slideIndex = (slideIndex - 1 + totalReviews) % totalReviews;
    updateReviewsSlider();
}

function showNextReview() {
    slideIndex = (slideIndex + 1) % totalReviews;
    updateReviewsSlider();
}

function updateReviewsSlider() {
    const windowWidth = window.innerWidth;

    reviews.forEach((review, index) => {
        let isVisible = false;

        if (windowWidth >= 768 && windowWidth < 1440) {
            const offset = (index - slideIndex + totalReviews) % totalReviews;
            isVisible = offset === 0 || offset === 1;
        } else if (windowWidth >= 1440) {
            isVisible = index === slideIndex || index === (slideIndex + 1) % totalReviews;
        } else {
            isVisible = index === slideIndex;
        }

        review.classList.toggle("active", isVisible);
    });
}

// Оновлення слайдера під час зміни розміру вікна
window.addEventListener("resize", () => {
    updateReviewsSlider();
    slideIndex = 0;
});

// Запуск оновлення слайдера при завантаженні сторінки
updateReviewsSlider();