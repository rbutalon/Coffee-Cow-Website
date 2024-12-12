document.addEventListener('DOMContentLoaded', () => {
    const starsContainer = document.querySelector('.starsContainer');
    const starTemplate = document.querySelector('.star');

    for (let i = 0; i < 5; i++) {
      const clonedStar = starTemplate.cloneNode(true);
      starsContainer.appendChild(clonedStar);
    }

    starTemplate.remove(); 

    const stars = document.querySelectorAll('.star');
    let selectedRating = 0;

    stars.forEach((star, index) => {
      star.addEventListener('click', () => {
        if (selectedRating === index + 1) {
            selectedRating = 0;
            updateStars(selectedRating);
          } else {
            selectedRating = index + 1;
            updateStars(selectedRating);
          }
      });

      star.addEventListener('mouseover', () => {
        updateStars(index);
      });

      star.addEventListener('mouseout', () => {
        updateStars(selectedRating); 
      });
    });

    function updateStars(rating) {
      stars.forEach((star, index) => {
        if (index < rating) {
          star.classList.add('selected');
        } else {
          star.classList.remove('selected');
        }
      });
    }
  });