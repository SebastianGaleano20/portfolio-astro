export const hideAllSections = (): void => {
    const sections = document.querySelectorAll<HTMLElement>('#experience, #philosophy-section, #search');
    sections.forEach((section) => {
      section.classList.add('hidden');
    });
  };
  
  export const showSection = (section: HTMLElement): void => {
    hideAllSections();
    section.classList.remove('hidden');
  };
  
  export const initializeDefaultSection = (): void => {
    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
      showSection(experienceSection);
    }
  };