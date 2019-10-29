/* eslint-disable no-restricted-syntax */
document.addEventListener('DOMContentLoaded', () => {
  let currentPage = 'about';
  const aboutContainer = document.querySelector('#about-container');
  const aboutButton = document.querySelector('#about');
  const portfolioButton = document.querySelector('#portfolio');
  const contactButton = document.querySelector('#contact');
  const aboutPage = document.querySelector('#about-page');
  const portfolioPage = document.querySelector('#portfolio-page');
  const contactPage = document.querySelector('#contact-page');
  const techImgDesc = document.querySelector('#tech-img-description');
  const techImgArr = document.querySelectorAll('.tech-img');

  setTimeout(() => {
    aboutContainer.classList.remove('opaque');
  },
  1);

  // display images one by one
  for (let i = 1; i <= 10; i += 1) {
    setTimeout(() => {
      document.querySelector(`#tech${i}`).classList.remove('opaque');
    },
    i * 300);
  }

  // switching between parts of the website
  const wipeScreen = () => {
    aboutPage.classList.add('opaque');
    portfolioPage.classList.add('opaque');
    contactPage.classList.add('opaque');
    setTimeout(() => {
      aboutPage.classList.add('none');
      portfolioPage.classList.add('none');
      contactPage.classList.add('none');
      techImgDesc.innerHTML = 'Select any picture';
    },
    500);
  };

  // show chosen page
  const appear = (page) => {
    setTimeout(() => {
      // eslint-disable-next-line no-param-reassign
      page.classList.remove('none');
    },
    501);
    setTimeout(() => {
      page.classList.remove('opaque');
    },
    1000);
  };

  aboutButton.addEventListener('click', () => {
    if (currentPage === 'about') {
      return;
    }
    currentPage = 'about';
    wipeScreen();
    appear(aboutPage);
  });

  portfolioButton.addEventListener('click', () => {
    if (currentPage === 'portfolio') {
      return;
    }
    currentPage = 'portfolio';
    wipeScreen();
    appear(portfolioPage);
  });

  contactButton.addEventListener('click', () => {
    if (currentPage === 'contact') {
      return;
    }
    currentPage = 'contact';
    wipeScreen();
    appear(contactPage);
  });

  // tech img description show


  const showDescription = (event) => {
    techImgDesc.classList.add('opaque');
    setTimeout(() => {
      techImgDesc.innerHTML = event.path[0].alt;
      techImgDesc.classList.remove('opaque');
    },
    250);
  };

  for (const techImg of techImgArr) {
    techImg.addEventListener('click', showDescription);
  }
});
