document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.count');
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = target / 200;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });

  const decreasingCounters = document.querySelectorAll('.count-decrease');
  decreasingCounters.forEach(counter => {
    const start = +counter.getAttribute('data-start');
    const end = +counter.getAttribute('data-end');

    const updateCount = () => {
      const count = +counter.innerText;
      const decrement = (start - end) / 200;

      if (count > end) {
        counter.innerText = Math.floor(count - decrement);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = end;
      }
    };

    updateCount();
  });

  const goToTopButton = document.querySelector('.go-to-top');
  goToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
// Counter animations for increasing and decreasing numbers
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.count');
  counters.forEach((counter) => {
    counter.innerText = '0';

    const updateCounter = () => {
      const target = +counter.getAttribute('data-target');
      const current = +counter.innerText;
      const increment = target / 100;

      if (current < target) {
        counter.innerText = `${Math.ceil(current + increment)}`;
        setTimeout(updateCounter, 30);
      }
    };

    updateCounter();
  });

  const decreasingCounters = document.querySelectorAll('.count-decrease');
  decreasingCounters.forEach((counter) => {
    const start = +counter.getAttribute('data-start');
    const end = +counter.getAttribute('data-end');
    counter.innerText = start;

    const updateCounter = () => {
      const current = +counter.innerText;

      if (current > end) {
        counter.innerText = `${current - 1}`;
        setTimeout(updateCounter, 30);
      }
    };

    updateCounter();
  });
});
