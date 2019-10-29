/* eslint-disable no-restricted-syntax */
document.addEventListener('DOMContentLoaded', () => {
  // switching between pictures
  const upArrow = document.querySelector('#up-arrow');
  const downArrow = document.querySelector('#down-arrow');
  const portfolioIds = [
    '#portfolio-item-1',
    '#portfolio-item-2',
    '#portfolio-item-3',
  ];
  let currItem = 0;

  const wipeScreen = () => {
    for (const item of portfolioIds) {
      document.querySelector(item).classList.add('opaque');
      setTimeout(() => {
        document.querySelector(item).classList.add('none');
      },
      500);
    }
  };

  const incrementCurrItem = () => {
    if (currItem === portfolioIds.length - 1) {
      currItem = 0;
    } else {
      currItem += 1;
    }
  };

  const decrementCurrItem = () => {
    if (currItem === 0) {
      currItem = portfolioIds.length - 1;
    } else {
      currItem -= 1;
    }
  };

  const showCurrentItem = () => {
    setTimeout(() => {
      document.querySelector(portfolioIds[currItem]).classList.remove('none');
    },
    501);
    setTimeout(() => {
      document.querySelector(portfolioIds[currItem]).classList.remove('opaque');
    },
    750);
  };

  const switchPic = (direction) => {
    wipeScreen();
    if (direction === 'up') {
      incrementCurrItem();
    } else {
      decrementCurrItem();
    }
    showCurrentItem();
  };

  upArrow.addEventListener('click', () => {
    switchPic('up');
  });

  downArrow.addEventListener('click', () => {
    switchPic('down');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
      switchPic('up');
    }
    if (e.key === 'ArrowDown') {
      switchPic('down');
    }
  });
});
