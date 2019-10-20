document.addEventListener('DOMContentLoaded', () => {
  const introductionScreen = document.querySelector('#introduction-screen');
  const nano = document.querySelector('#nano');
  const textContainer = document.querySelector('#text-container');
  const bottomMenu = document.querySelector('#bottom-menu');
  const decisionText = document.querySelector('#decision-text');
  const tellHim = document.querySelector('#tell-him');
  const notSay = document.querySelector('#not-say');
  const submit = document.querySelector('#submit');
  const welcomeMessage = document.querySelector('#welcome-message');
  const welcomeText = document.querySelector('#welcome-text');
  const anyKey = document.querySelector('#any-key');

  introductionScreen.classList.add('black-screen');


  // show the elements on the page in delay
  setTimeout(() => {
    nano.classList.remove('opaque');
    textContainer.classList.remove('opaque');
    bottomMenu.classList.remove('opaque');
  },
  1800);

  // typewriter effect introduction page
  // eslint-disable-next-line no-undef
  new TypeIt('#typed-txt-first', {
    speed: 50,
    startDelay: 2300,
    cursor: false,
  })
    .type('Hi, my name\'s Vojtech. I\'m a web developer.')
    .pause(300)
    .delete(20)
    .pause(250)
    .type('What\'s your name?')
    .pause(750)
    .go();

  // show decision menu in delay
  setTimeout(() => {
    decisionText.classList.remove('opaque');
  },
  7000);

  // decision time

  // fade out to next phase and show welcome message
  const toAbout = () => {
    welcomeText.classList.add('opaque');
    anyKey.classList.add('opaque');
    setTimeout(() => {
      window.location.href = 'about.html';
    },
    2000);
  };

  const wipeScreen = () => {
    nano.classList.add('opaque');
    textContainer.classList.add('opaque');
    bottomMenu.classList.add('opaque');
    setTimeout(() => {
      introductionScreen.classList.add('none');
      welcomeMessage.classList.remove('none');
    },
    1500);
  };

  const welcomeUser = () => {
    const userName = document.querySelector('#user-name').value;
    wipeScreen();

    if (userName === '') {
      welcomeText.innerHTML = 'Nice to meet you, anonymous';
    } else {
      welcomeText.innerHTML = `Nice to meet you, ${userName}`;
    }

    setTimeout(() => {
      welcomeText.classList.remove('opaque');
    },
    2000);

    setTimeout(() => {
      anyKey.classList.remove('opaque');
      document.addEventListener('keydown', toAbout);
      document.addEventListener('touchstart', toAbout);
    },
    3500);
  };

  const showNameWindow = () => {
    const nameWindow = document.querySelector('#name-window');
    nameWindow.classList.remove('opaque');
    document.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        welcomeUser();
      }
    });
  };

  tellHim.addEventListener('click', showNameWindow);
  submit.addEventListener('click', welcomeUser);
  notSay.addEventListener('click', welcomeUser);
});
