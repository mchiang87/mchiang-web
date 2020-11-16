import {
  gsap,
  TimelineMax as Timeline,
  // Power1,
} from 'gsap';

const getDefaultTimeline = (node: HTMLElement, delay: number): Timeline => {
  const timeline = gsap.timeline({ paused: true });
  const content = node.querySelector('.content');
  const contentInner = node.querySelector('.content--inner');

  if (node && content && contentInner) {
    timeline
      .from(node, {
        duration: 0.3,
        display: 'none',
        autoAlpha: 0,
        delay,
        ease: 'power1.in',
      })
      .from(content, {
        duration: 0.15,
        autoAlpha: 0,
        y: 25,
        ease: 'power1.inOut',
      })
      .from(contentInner, {
        duration: 0.15,
        autoAlpha: 0,
        delay: 0.15,
        ease: 'power1.in',
      });
  }

  return timeline;
};

const getHomeTimeline = (node: HTMLElement, delay: number): Timeline => {
  const timeline = gsap.timeline({ paused: true });
  const texts = node.querySelectorAll('h1 > div');

  timeline
    .from(node, {
      duration: 0,
      display: 'none',
      autoAlpha: 0,
      delay,
    })
    .from(texts, {
      duration: 0.4,
      autoAlpha: 0,
      x: -25,
      ease: 'power1.out',
      stagger: 0.125,
    });

  return timeline;
};

export const play = (pathname: string, node: HTMLElement, appears: boolean): void => {
  const delay = appears ? 0 : 0.5;
  let timeline: Timeline;

  if (pathname === '/') {
    timeline = getHomeTimeline(node, delay);
  } else {
    timeline = getDefaultTimeline(node, delay);
  }

  window.loadPromise
    .then(() => requestAnimationFrame(() => timeline.play()))
    .catch(() => 'err');
};

export const exit = (node: HTMLElement): void => {
  const timeline = gsap.timeline({ paused: true });

  timeline.to(node, {
    duration: 10.15,
    autoAlpha: 0,
    ease: 'power1.out',
  });
  timeline.play();
};
