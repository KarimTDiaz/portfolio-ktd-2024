import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export const useTextReveal = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    let parentHeight;

    document
      .querySelectorAll('.lineHeroHome .textRevealHeroHome')
      .forEach(el => {
        parentHeight = (el.parentNode as HTMLElement).clientHeight;
      });

    tl.from('.lineHeroHome .textRevealHeroHome', {
      y: parentHeight,
      ease: 'power4.out',
      duration: 1,
      stagger: 0.2,
      delay: 1
    });
    gsap.from('.lineTitleAboutHome .titleRevealAboutHome', {
      y: '100px',
      ease: 'power4.out',
      duration: 1.5,
      stagger: 0.2,
      delay: 1,
      scrollTrigger: {
        trigger: '.aboutContainerHome',
        start: 'top 90%',
        toggleActions: 'play none none none'
      }
    });
    gsap.from('.lineTitleProjectsHome .titleRevealProjectsHome', {
      y: '100px',
      ease: 'power4.out',
      duration: 1.5,
      stagger: 0.2,
      delay: 1,
      scrollTrigger: {
        trigger: '.projectsCarrouselContainer',
        start: 'top 10%',
        toggleActions: 'play none none none'
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
/*
useGSAP(() => {
  gsap.fromTo(
    '.heroTitle',
    { y: 0, scale: 1 },
    {
      y: 0,
      scale: 1.1,
      opacity: 0,
      scrollTrigger: {
        trigger: '.trigger',
        start: 'top top',
        end: 'bottom center',
        toggleActions: 'play none none reset',
        scrub: true
      }
    }
  );
}, {});
useGSAP(() => {
  gsap.fromTo(
    '.heroData',
    { y: 0 },
    {
      y: 200,
      opacity: 0,
      scrollTrigger: {
        trigger: '.trigger',
        start: 'top top',
        end: 'bottom center',
        toggleActions: 'play none none reset',
        scrub: true
      }
    }
  );
}, {});
useGSAP(() => {
  gsap.fromTo(
    '.heroDate',
    { x: 0 },
    {
      x: -40,
      opacity: 0,
      scrollTrigger: {
        trigger: '.trigger',
        start: 'top top',
        end: 'bottom center',
        toggleActions: 'play none none reset',
        scrub: true
      }
    }
  );
}, {});
useGSAP(() => {
  gsap.fromTo(
    '.model',
    { x: 100 },
    {
      x: -200,
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
  gsap.fromTo(
    '.model',
    { x: 0 },
    {
      x: 100,
      rotate: -35,
      scrollTrigger: {
        trigger: '.homeTrigger',
        start: 'top 50vh',
        end: 'bottom bottom',
        toggleActions: 'play none none reset',
        scrub: true
      }
    }
  );
}, {});

useGSAP(() => {
  gsap.fromTo(
    '.aboutSpan',
    { x: 0, opacity: 0 },
    {
      opacity: 1,
      scrollTrigger: {
        trigger: '.aboutTrigger',
        start: 'top 50vh',
        end: 'bottom -50vh',
        toggleActions: 'play none none reset',
        scrub: true,
        pin: true
      }
    }
  );
}, {});
 */
