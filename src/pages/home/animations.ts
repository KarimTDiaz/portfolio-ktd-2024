import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export const useTextReveal = () => {
  useGSAP(() => {
    gsap.from('.lineHeroHome .textRevealHeroHome', {
      y: '200px',
      ease: 'power4.out',
      duration: 1,
      stagger: 0.2,
      delay: 1
    });
    gsap.from('.lineTitleAboutHome .titleRevealAboutHome', {
      y: '100px',
      ease: 'power4.out',
      duration: 1,
      stagger: 0.2,
      delay: 0.5,
      scrollTrigger: {
        trigger: '.aboutContainerHome',
        start: 'top 90%',
        toggleActions: 'play none none reset'
      }
    });
    gsap.from('.lineTitleProjectsHome .titleRevealProjectsHome', {
      y: '100px',
      ease: 'power4.out',
      duration: 1,
      stagger: 0.2,
      delay: 0.5,
      scrollTrigger: {
        trigger: '.projectsCarrouselContainer',
        start: 'top 10%',
        toggleActions: 'play none none reset'
      }
    });
  }, {});
};

export const useHeroDataTrigger = () => {
  useGSAP(() => {
    gsap.fromTo(
      '.heroTitleHome',
      { y: 0, scale: 1 },
      {
        y: 0,
        scale: 1.1,
        opacity: 0,
        scrollTrigger: {
          trigger: '.heroContainerHome',
          start: 'top top',
          end: 'bottom center',
          toggleActions: 'play none none reset',
          scrub: true
        }
      }
    );
    gsap.fromTo(
      '.heroDataHome',
      { y: 0 },
      {
        y: 200,
        opacity: 0,
        scrollTrigger: {
          trigger: '.heroContainerHome',
          start: 'top top',
          end: 'bottom center',
          toggleActions: 'play none none reset',
          scrub: true
        }
      }
    );
    gsap.fromTo(
      '.heroDateHome',
      { x: 0 },
      {
        x: -40,
        opacity: 0,
        scrollTrigger: {
          trigger: '.heroContainerHome',
          start: 'top top',
          end: 'bottom center',
          toggleActions: 'play none none reset',
          scrub: true
        }
      }
    );
  }, {});
};

export const useTransparentSpan = () => {
  useGSAP(() => {
    gsap.fromTo(
      '.aboutSpanHome',
      { x: 0, opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: '.aboutContainerHome',
          start: 'top 50vh',
          end: 'bottom 100vh',
          toggleActions: 'play none none reset',
          scrub: true,
          pin: true
        }
      }
    );
  }, {});
};
export const useModelTrigger = () => {
  useGSAP(() => {
    gsap.fromTo(
      '.modelHome',
      { x: 0 },
      {
        x: 100,
        rotate: -35,
        scrollTrigger: {
          trigger: '.homeContainerTop',
          start: 'top 50vh',
          end: 'bottom bottom',
          toggleActions: 'play none none reset',
          scrub: true
        }
      }
    );
    gsap.fromTo(
      '.modelHome',
      { x: 100, y: 0 },
      {
        x: -200,
        y: 50,
        rotate: 55,
        scrollTrigger: {
          trigger: '.trigger-2',
          start: 'top center',
          end: 'bottom bottom',
          toggleActions: 'play none none reset',
          scrub: true
        }
      }
    );
  }, {});
};

export const useMarqueeTrigger = () => {
  useGSAP(() => {
    gsap.to('.homeMarqueeLogo', {
      xPercent: -100,
      scrollTrigger: {
        trigger: '.homeMarqueeContainer',
        start: 'top bottom',
        scrub: 1
      }
    });
  }, {});
};
export const useButtonTrigger = () => {
  useGSAP(() => {
    gsap.fromTo(
      '.moreAboutButton',
      {
        y: 100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: '.aboutContainerHome',
          start: '20vh 80vh',
          end: 'bottom bottom',
          toggleActions: 'play none none reset',
          scrub: true
        }
      }
    );
  });
};
