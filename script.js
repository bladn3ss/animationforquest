window.onload = function () {
    const starsContainer = document.querySelector('.stars');
    const snowContainer = document.querySelector('.snow');
    const branches = document.querySelectorAll('.branch');
    const gift = document.querySelector('.gift');
    const toy = document.getElementById('giftItem');
    const happyText = document.getElementById('happyText');
    const shootingStar = document.createElement('div');
    const numberOfStars = 200;
    const numberOfSnowflakes = 100;

    // Генерация звёзд
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = star.style.height = Math.random() * 2 + 'px';
        starsContainer.appendChild(star);
    }

    // Генерация снежинок
    for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = Math.random() * 100 + '%';
        snowflake.style.animationDuration = Math.random() * 3 + 4 + 's';
        snowflake.style.animationDelay = Math.random() * 5 + 's';
        snowContainer.appendChild(snowflake);
    }

    // Функция перемещения подарка в центр
    function moveGiftToCenter() {
        gift.classList.add('gift-move');
        setTimeout(zoomInOnGift, 2000);
    }

    // Функция увеличения подарка
    function zoomInOnGift() {
        gift.classList.add('gift-zoom');
        setTimeout(showToy, 2000);
    }

    // Функция показа игрушки
    function showToy() {
        const toyImage = document.querySelector('.toy img');
        toyImage.style.opacity = '1';
        toy.style.opacity = '1';
        toy.style.transform = 'scale(1)';
        setTimeout(hideGiftAndToy, 3000);
    }

    // Функция скрытия подарка и игрушки
    function hideGiftAndToy() {
        gift.style.transition = 'opacity 1s ease';
        toy.style.transition = 'opacity 1s ease';
        gift.style.opacity = '0';
        toy.style.opacity = '0';

        // После исчезновения подарка и игрушки, вызываем функцию появления текста
        setTimeout(showHappyText, 1000); // Текст появляется спустя 1 секунду после исчезновения
    }

    // Функция показа текста "Happy New Year"
    function showHappyText() {
        happyText.style.opacity = '1'; // Текст появляется после исчезновения подарка
    }

    // Функция анимации падающей звезды
    function shootingStarAnimation() {
        shootingStar.classList.add('shooting-star');
        shootingStar.style.top = Math.random() * 50 + '%';
        shootingStar.style.left = '-10%';
        starsContainer.appendChild(shootingStar);
        shootingStar.style.animation = 'shoot 2s linear';
    }

    setTimeout(moveGiftToCenter, 1000);

    // Функция появления падающей звезды
    function showShootingStar() {
        shootingStar.style.animation = 'shootStar 2s linear forwards';
        shootingStar.style.opacity = 1;
    }

    setTimeout(() => {
        showShootingStar();
    }, 5000);
};