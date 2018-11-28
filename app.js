(()=>{
    'use strict';
    let lis = document.getElementsByClassName('small-photo');
    for (let i = 0; i < lis.length; i++) {
        lis[i].style.position = 'relative';
        let span = document.createElement('span');
        span.style.cssText = 'position:absolute;left:0;top:0';
        span.innerHTML = i + 1;
        lis[i].appendChild(span);
    }
    let width = 130;
    let counCar = 3;
    let carousel = document.getElementById('carousel');
    let list = carousel.querySelector('ul');
    let listElems = carousel.querySelectorAll('li');

    let position = 0;

    carousel.querySelector('.prev').onclick = function () {
        position = Math.min(position + width * counCar, 0);
        list.style.marginLeft = position + 'px';
    };

    carousel.querySelector('.next').onclick = function () {
        position = Math.max(position - width * counCar, -width * (listElems.length - counCar));
        list.style.marginLeft = position + 'px';
    };
//dropdown
    let dropDown = document.getElementById('drop-link');
    let my_dropdown = document.getElementById('mydropdown');
    dropDown.addEventListener('mouseover', () => {
        my_dropdown.classList.add('show');
        if (triangle.classList.contains('triangle-down')) {
            triangle.classList.remove('triangle-down');
            triangle.classList.add('triangle-up');
        }
        else {
            triangle.classList.remove('triangle-up');
            triangle.classList.add('triangle-down');
        }
    });
    let triangle = document.getElementById('triangle');
    dropDown.addEventListener('mouseout', () => {
        my_dropdown.classList.remove('show');
        if (triangle.classList.contains('triangle-up')) {
            triangle.classList.remove('triangle-up');
            triangle.classList.add('triangle-down');
        }
        else {
            triangle.classList.remove('triangle-down');
            triangle.classList.add('triangle-up');
        }
    });
    my_dropdown.addEventListener('mouseover', () => {
        my_dropdown.classList.add('show');
    });
    my_dropdown.addEventListener('mouseout', () => {
        my_dropdown.classList.remove('show');
    });
//keyboard
    let personal_data = document.getElementById('personal_data');
    let education = document.getElementById('education');
    let experience = document.getElementById('experience');
    let summary = document.getElementById('summary');
    let tools = document.getElementById('tools');

    function scrolling(elem) {
        $('html, body').animate({
            scrollTop: $(elem).offset().top
        }, 800);
    }

    document.onkeydown = function (e) {
        if (e.shiftKey && e.keyCode === 49) {
            scrolling(personal_data);
            return false;
        }
        if (e.shiftKey && e.keyCode === 50) {
            scrolling(education);
            return false;
        }
        if (e.shiftKey && e.keyCode === 51) {
            scrolling(experience);
            return false;
        }
        if (e.shiftKey && e.keyCode === 52) {
            scrolling(summary);
            return false;
        }
        if (e.shiftKey && e.keyCode === 53) {
            scrolling(tools);
            return false;
        }
    }

//FancyBox
    let masofGallery = document.getElementsByClassName('big-photo');
    let fancyBox = document.getElementById('fancy-wrapper');
    let overlay = document.getElementById('fancyBox-overlay');
    let close = document.getElementById('fancy-close');
    let fancyImg;
    let content = document.getElementById('fancy-content');
    let left_arrow = document.getElementById('arrow-left');
    let right_arrow = document.getElementById('arrow-right');
    let count = 0;

    function closePic() {
        fancyBox.classList.remove('show-fancy-box');
        overlay.classList.remove('fancy-box-overlay');
    }

    for (let i = 0; i < masofGallery.length; i++) {
        masofGallery[i].addEventListener('click', () => {

            count = i;
            fancyBox.classList.add('show-fancy-box');
            overlay.classList.add('fancy-box-overlay');
            fancyImg = document.createElement('img');
            fancyImg.classList.add('sizing');
            fancyImg.src = masofGallery[i].src;
            content.appendChild(fancyImg);

            for (let j = 0; j < lis.length; j++) {
                lis[j].addEventListener('click', (() => {
                    count = j;
                    fancyImg.src = masofGallery[j].src;
                    fancyImg.setAttribute('src', fancyImg.src);
                    content.appendChild(fancyImg);
                }));
            }

        });
    }

    left_arrow.addEventListener('click', () => {
        count--;
        if (count < 0) {
            count = masofGallery.length - 1;
            fancyImg.src = masofGallery[count].src;
            fancyImg.setAttribute('src', fancyImg.src);
        }
        else {
            fancyImg.src = masofGallery[count].src;
            fancyImg.setAttribute('src', fancyImg.src);
        }
    });
    right_arrow.addEventListener('click', () => {
        count++;
        if (count > masofGallery.length - 1) {
            count = 0;
            fancyImg.src = masofGallery[count].src;
            fancyImg.setAttribute('src', fancyImg.src);
        }
        else {
            fancyImg.src = masofGallery[count].src;
            fancyImg.setAttribute('src', fancyImg.src);
        }
    });
    close.addEventListener('click', () => {
        closePic();
        fancyImg.remove();
        let gallery_mas = document.getElementsByClassName("gallery-block");
        while (gallery_mas[0]) {
            gallery_mas[0].parentNode.removeChild(gallery_mas[0]);
        }
    });
    overlay.addEventListener('click', () => {
        closePic();
        fancyImg.remove();
        let gallery_mas = document.getElementsByClassName("gallery-block");
        while (gallery_mas[0]) {
            gallery_mas[0].parentNode.removeChild(gallery_mas[0]);
        }
    });
//Navbar
    let info = document.getElementById('info');
    let educate = document.getElementById('study');
    let exper = document.getElementById('work');
    let summ = document.getElementById('sum');
    info.addEventListener('click', () => {
        scrolling(personal_data);
    });
    educate.addEventListener('click', () => {
        scrolling(education);
    });
    exper.addEventListener('click', () => {
        scrolling(experience);
    });
    summ.addEventListener('click', () => {
        scrolling(summary);
    });
//Body Fade
    $('body').fadeIn(1000);
//Navbar
    let navbar = document.getElementById('navbar');
    let nav_brand = document.getElementById('main-item');
    let lightItems = document.getElementsByClassName('light-item');
    let navItems = document.getElementsByClassName('navigation-item');
    let countImg = 0;
    let navCoords = navbar.getBoundingClientRect().bottom + window.pageYOffset;
    window.onscroll = (() => {
        if (window.pageYOffset < navCoords && navbar.classList.contains('fixed')) {
            let littlePhoto = document.getElementById('mini-photo');
            nav_brand.classList.remove('unshow');
            navbar.classList.remove('fixed');
            littlePhoto.remove();
            countImg = 0;
            for (let i = 0; i < navItems.length; i++) {
                navItems[i].classList.remove('margin');
            }
        }
        else if (window.pageYOffset > navCoords) {
            nav_brand.classList.add('unshow');
            navbar.classList.add('fixed');
            for (let i = 0; i < navItems.length; i++) {
                navItems[i].classList.add('margin');
            }

            if (countImg === 0) {
                let photo = document.createElement('img');
                photo.src = "images/mee.jpg";
                photo.id = "mini-photo";
                photo.classList.add('mini-photo');
                navbar.insertBefore(photo, navbar.children[0]);
                countImg++;
            }
        }

        for (let i = 0; i < lightItems.length; i++) {
            if (window.pageYOffset > lightItems[i].getBoundingClientRect().bottom + window.pageYOffset) {
                navItems[i].classList.add('light-items');
                if (i !== 0) {
                    navItems[i - 1].classList.remove('light-items');
                }
            }
            else if (window.pageYOffset < lightItems[i].getBoundingClientRect().bottom + window.pageYOffset) {
                navItems[i].classList.remove('light-items');
            }
        }
    });
})();
