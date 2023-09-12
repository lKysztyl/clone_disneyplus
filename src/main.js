

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const sectionHero = document.querySelector('.hero');
    const hightHero = sectionHero.clientHeight;

    window.addEventListener('scroll', function() {
        const atualPosition = window.scrollY;

        if (atualPosition < hightHero) {
            hiddenElementsHeader();
        } else {
            showElementsHeader();
        }
    })

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(btn) {
            const abaAlvo = btn.target.dataset.tabButton
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);

            hiddenAllTabs();
            aba.classList.add('shows__list--is-active');

            removeButtonActive();
            btn.target.classList.add('shows__tabs__button--is-active');
        })
    }

    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', showOrClose);
    };
});

function hiddenElementsHeader() {
    const header = document.querySelector('.header');

    header.classList.add('header--is-hidden');
}

function showElementsHeader() {
    const header = document.querySelector('.header');

    header.classList.remove('header--is-hidden');
}

function showOrClose(el) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = el.target.parentNode;

    elementoPai.classList.toggle(classe);
}

function removeButtonActive() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function hiddenAllTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active')
    }
}