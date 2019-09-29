document.addEventListener('DOMContentLoaded', () => {
  const introductionScreen = document.querySelector('#introduction-screen');
  const nano = document.querySelector('#nano');
  const textContainer = document.querySelector('#text-container');
  const bottomMenu = document.querySelector('#bottom-menu');
  const typedTxtFirst = document.querySelector('#typed-txt-first');
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
  const firstTypewriterEffect = new Typewriter(typedTxtFirst, {
    loop: false,
    delay: 50,
  });

  firstTypewriterEffect.start()
    .pauseFor(3000)
    .typeString('Hi, my name is Vojtech. Welcome to my portfolio site.')
    .pauseFor(500)
    .changeDeleteSpeed(10)
    .deleteChars(30)
    .pauseFor(400)
    .typeString(' What is your name?');

  // show decision menu in delay
  setTimeout(() => {
    decisionText.classList.remove('opaque');
  },
  10000);

  // decision time
  const showNameWindow = () => {
    const nameWindow = document.querySelector('#name-window');
    nameWindow.classList.remove('opaque');
  };

  tellHim.addEventListener('click', showNameWindow);

  // fade out to next phase and show welcome message
  const wipeScreen = () => {
    nano.classList.add('opaque');
    textContainer.classList.add('opaque');
    bottomMenu.classList.add('opaque');
    setTimeout(() => {
      introductionScreen.style.display = 'none';
      welcomeMessage.style.display = 'flex';
    },
    1500);
  };

  const welcomeAnonymous = () => {
    wipeScreen();
    welcomeText.innerHTML = 'Nice to meet you, anonymous';

    setTimeout(() => {
      welcomeText.classList.remove('opaque');
    },
    2000);

    setTimeout(() => {
      anyKey.classList.remove('opaque');
    },
    3500);
  };

  const welcomeUser = () => {
    const userName = document.querySelector('#user-name').value;
    wipeScreen();
    welcomeText.innerHTML = `Nice to meet you, ${userName}`;

    setTimeout(() => {
      welcomeText.classList.remove('opaque');
    },
    2000);

    setTimeout(() => {
      anyKey.classList.remove('opaque');
    },
    3500);
  };

  submit.addEventListener('click', welcomeUser);
  notSay.addEventListener('click', welcomeAnonymous);
});
