import { useEffect } from 'react';

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll = ({ children }: SmoothScrollProps) => {
  useEffect(() => {
    // Add smooth scrolling CSS
    const style = document.createElement('style');
    style.textContent = `
      html {
        scroll-behavior: smooth;
      }
      
      body {
        overflow-x: hidden;
      }
      
      * {
        scrollbar-width: thin;
        scrollbar-color: #00aaff #f1f1f1;
      }
      
      *::-webkit-scrollbar {
        width: 8px;
      }
      
      *::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 10px;
      }
      
      *::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom, #00aaff, #00d4aa);
        border-radius: 10px;
      }
      
      *::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(to bottom, #0088cc, #00b894);
      }
    `;
    document.head.appendChild(style);

    // Enhanced smooth scroll implementation
    let isScrolling = false;
    
    const handleSmoothScroll = (e: Event) => {
      e.preventDefault();
      const target = e.target as HTMLAnchorElement;
      const href = target.getAttribute('href');
      
      if (href && href.startsWith('#')) {
        const element = document.querySelector(href);
        if (element) {
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - 80; // Account for header
          
          if (!isScrolling) {
            isScrolling = true;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
            
            setTimeout(() => {
              isScrolling = false;
            }, 1000);
          }
        }
      }
    };

    // Add smooth scroll to all anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      document.head.removeChild(style);
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;