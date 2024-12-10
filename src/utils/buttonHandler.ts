import type { AboutElements } from '@/types/Elements';
import { showSection, initializeDefaultSection } from '@/utils/showElements';

export const initializeAboutHandlers = (): void => {
  const elements: AboutElements = {
    experience: {
      button: document.getElementById('my-experience') as HTMLButtonElement,
      section: document.getElementById('experience') as HTMLElement
    },
    philosophy: {
      button: document.getElementById('my-philosophy') as HTMLButtonElement,
      section: document.getElementById('philosophy') as HTMLElement
    },
    search: {
      button: document.getElementById('my-search') as HTMLButtonElement,
      section: document.getElementById('search') as HTMLElement
    }
  };

  Object.entries(elements).forEach(([key, element]) => {
    if (!element.button || !element.section) {
      throw new Error(`Element ${key} or its section not found in the DOM`);
    }
  });

  elements.experience.button.addEventListener('click', () => {
    showSection(elements.experience.section);
  });

  elements.philosophy.button.addEventListener('click', () => {
    showSection(elements.philosophy.section);
  });

  elements.search.button.addEventListener('click', () => {
    showSection(elements.search.section);
  });

  initializeDefaultSection();
};