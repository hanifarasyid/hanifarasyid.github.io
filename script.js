function showContent(sectionId, event) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
      section.style.display = 'none';
    });
  
    const activeSection = document.getElementById(sectionId);
    activeSection.style.display = 'block';
  
    const links = document.querySelectorAll('.navbar ul li a');
    links.forEach(link => {
      link.classList.remove('active');
    });
  
    event.target.classList.add('active');
  }
  