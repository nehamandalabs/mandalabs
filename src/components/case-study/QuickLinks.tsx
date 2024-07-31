import React, { useEffect, useState } from 'react';

const links = [
  'Background',
  'The Opportunity',
  'The Challenge',
  'The Process',
  'Co-sourcing with Mandalabs',
];

const QuickLinks: React.FC = () => {
  const [currentHash, setCurrentHash] = useState('');

  useEffect(() => {
    const updateCurrentHash = () => {
      setCurrentHash(window.location.hash);
    };

    // Set initial hash value
    updateCurrentHash();

    // Add event listener to update hash on hash change
    window.addEventListener('hashchange', updateCurrentHash);

    return () => {
      window.removeEventListener('hashchange', updateCurrentHash);
    };
  }, []);

  const handleClick = (linkHash: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector(linkHash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      window.history.pushState(null, '', linkHash); // Update URL without triggering hashchange event
      setCurrentHash(linkHash); // Manually update the current hash
    }
  };

  return (
    <aside className="w-[20rem] p-4 h-auto overflow-y-auto">
      <h2 className="text-xl font-semibold mt-4 mb-10 tracking-[3px]">Quick Links</h2>
      <ul className="space-y-10 text-base ">
        {links.map((link, index) => {
          const linkHash = `#${link.replace(/\s+/g, '-').toLowerCase()}`;
          const isActive = currentHash === linkHash || (currentHash === '' && index === 0);
          return (
            <li key={index}>
              <a
                href={linkHash}
                onClick={handleClick(linkHash)}
                className={`hover:text-yellow-500 hover:underline hover:underline-offset-8 ${isActive ? "text-yellow-500 underline underline-offset-8" : "text-black"}`}
              >
                {index + 1}. {link}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default QuickLinks;
