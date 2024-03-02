let slideIndex1 = 0;
        showSlides();

        function plusSlides(n) {
            showSlides(slideIndex1 += n);
        }

        function currentSlide(n) {
            showSlides(slideIndex1 = n);
        }

        function showSlides() {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            let dots = document.getElementsByClassName("dot");

            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }

            slideIndex1++;

            if (slideIndex1 > slides.length) {
                slideIndex1 = 1;
            }

            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }

            slides[slideIndex1 - 1].style.display = "block";
            dots[slideIndex1 - 1].className += " active";

            setTimeout(showSlides, 5000); // Change image every 2 seconds
        }