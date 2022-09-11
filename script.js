// Photos by Lance Reis on Unsplash (https://unsplash.com/@lancereis?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

const forward = document.querySelector('.arrow-forward');
const back = document.querySelector('.arrow-back');
const slider = document.querySelector('.slider');
const img = document.getElementById('slider-img');
const images = [
  {
    src: './images/img-1.jpg',
    id: 1,
  },
  {
    src: './images/img-2.jpg',
    id: 2,
  },
  {
    src: './images/img-3.jpg',
    id: 3,
  },
  {
    src: './images/img-4.jpg',
    id: 4,
  },
];

let i = 0;

const onLoad = () => {
  const nav = document.querySelector('.nav');
  for (let image of images) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.setAttribute('id', `${image.id}`);
    nav.appendChild(dot);
  }

  const active = nav.firstChild;
  active.classList.add('active');
};

onLoad();

const navDots = document.querySelectorAll('.dot');

navDots.forEach(dot =>
  dot.addEventListener('click', e => {
    const element = e.target;
    const id = element.getAttribute('id');
    for (let image of images) {
      if (`${image.id}` === id) {
        img.setAttribute('src', `${image.src}`);
        element.classList.add('active');
      }
    }
    navDots.forEach(dot => {
      if (dot !== element) {
        dot.classList.remove('active');
      }
    });
  })
);

const toggleActive = () => {
  navDots.forEach(dot => {
    const id = dot.getAttribute('id');
    if (id === `${images[i].id}`) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
};

const next = () => {
  if (i === images.length - 1) {
    i = 0;
  } else {
    i++;
  }
  img.setAttribute('src', `${images[i].src}`);
  toggleActive();
};

const previous = () => {
  if (i === 0) {
    i = images.length - 1;
  } else {
    i--;
  }
  img.setAttribute('src', `${images[i].src}`);
  toggleActive();
};

setInterval(next, 5000);

forward.addEventListener('click', next);
back.addEventListener('click', previous);
