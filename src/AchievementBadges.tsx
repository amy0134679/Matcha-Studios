// Save as src/AchievementBadges.tsx
// Your three Figma stickers drawn as one inline SVG, laid out like your Frame 1.
// Text uses Karla (Bold). Add this to index.html <head> so it loads:
//   <link href="https://fonts.googleapis.com/css2?family=Karla:wght@700&display=swap" rel="stylesheet">

const FONT = "Karla, 'DM Sans', Arial, sans-serif"

export default function AchievementBadges() {
  return (
    <div className="mt-6" role="group" aria-label="Achievements">
      <style>{`
        .stk-hover { transform-box: fill-box; transform-origin: center; transition: transform 0.2s ease; }
        .stk-hover:hover { transform: scale(1.05); }
        .stk-scene { display: block; width: 100%; max-width: 500px; height: auto; overflow: visible; }
        @media (min-width: 768px) { .stk-scene { width: 108%; max-width: 540px; } }
        @media (prefers-reduced-motion: reduce) { .stk-hover { transition: none; } }
      `}</style>
      <svg
        viewBox="32 76 618 220"
        role="img"
        aria-label="5k+ cups sold. Each cup handcrafted. Canadian business."
        fontFamily={FONT}
        className="stk-scene"
      >
<defs>
<mask id="stampHoles" maskUnits="userSpaceOnUse" x="-12" y="-12" width="190.51" height="140.61"><rect x="-12" y="-12" width="190.51" height="140.61" fill="#fff"/><ellipse cx="0.00" cy="0.00" rx="8.125" ry="7.645" fill="#000"/><ellipse cx="0.00" cy="116.61" rx="8.125" ry="7.645" fill="#000"/><ellipse cx="23.79" cy="0.00" rx="8.125" ry="7.645" fill="#000"/><ellipse cx="23.79" cy="116.61" rx="8.125" ry="7.645" fill="#000"/><ellipse cx="47.57" cy="0.00" rx="8.125" ry="7.645" fill="#000"/><ellipse cx="47.57" cy="116.61" rx="8.125" ry="7.645" fill="#000"/><ellipse cx="71.36" cy="0.00" rx="8.125" ry="7.645" fill="#000"/><ellipse cx="71.36" cy="116.61" rx="8.125" ry="7.645" fill="#000"/><ellipse cx="95.15" cy="0.00" rx="8.125" ry="7.645" fill="#000"/><ellipse cx="95.15" cy="116.61" rx="8.125" ry="7.645" fill="#000"/><ellipse cx="118.94" cy="0.00" rx="8.125" ry="7.645" fill="#000"/><ellipse cx="118.94" cy="116.61" rx="8.125" ry="7.645" fill="#000"/><ellipse cx="142.72" cy="0.00" rx="8.125" ry="7.645" fill="#000"/><ellipse cx="142.72" cy="116.61" rx="8.125" ry="7.645" fill="#000"/><ellipse cx="166.51" cy="0.00" rx="8.125" ry="7.645" fill="#000"/><ellipse cx="166.51" cy="116.61" rx="8.125" ry="7.645" fill="#000"/><ellipse cx="0.00" cy="23.32" rx="8.125" ry="7.645" fill="#000"/><ellipse cx="166.51" cy="23.32" rx="8.125" ry="7.645" fill="#000"/><ellipse cx="0.00" cy="46.64" rx="8.125" ry="7.645" fill="#000"/><ellipse cx="166.51" cy="46.64" rx="8.125" ry="7.645" fill="#000"/><ellipse cx="0.00" cy="69.97" rx="8.125" ry="7.645" fill="#000"/><ellipse cx="166.51" cy="69.97" rx="8.125" ry="7.645" fill="#000"/><ellipse cx="0.00" cy="93.29" rx="8.125" ry="7.645" fill="#000"/><ellipse cx="166.51" cy="93.29" rx="8.125" ry="7.645" fill="#000"/></mask>
<filter id="stampShadow" x="-20%" y="-25%" width="140%" height="155%"><feDropShadow dx="0" dy="2" stdDeviation="6" floodColor="#000" floodOpacity="0.25"/></filter>
<filter id="softShadow" x="-20%" y="-30%" width="140%" height="170%"><feDropShadow dx="0" dy="4" stdDeviation="2" floodColor="#000" floodOpacity="0.25"/></filter>
<filter id="ovalInset" x="-10%" y="-10%" width="120%" height="120%"><feComponentTransfer in="SourceAlpha"><feFuncA type="table" tableValues="1 0"/></feComponentTransfer><feGaussianBlur stdDeviation="2"/><feOffset dy="4" result="shadow"/><feFlood floodColor="#000" floodOpacity="0.25"/><feComposite in2="shadow" operator="in"/><feComposite in2="SourceAlpha" operator="in" result="inner"/><feMerge><feMergeNode in="SourceGraphic"/><feMergeNode in="inner"/></feMerge></filter>
<radialGradient id="canGlow" cx="50%" cy="50%" r="50%"><stop offset="0" stopColor="#fff" stopOpacity="0.2"/><stop offset="0.9471" stopColor="#fff" stopOpacity="0"/></radialGradient>
<clipPath id="canClip"><rect width="140.32" height="82.61" rx="10"/></clipPath>
<filter id="canGrain" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="4"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1.2 0 0 0 -0.45"/></filter>
</defs>
        <g transform="translate(-20 0)"><g className="stk-hover"><g transform="matrix(1 0.04 -0.05 1 83 131.27)" filter="url(#stampShadow)"><rect width="166.51" height="116.61" fill="#EB8DDE" mask="url(#stampHoles)"/></g>
<g transform="matrix(1 0.04 -0.05 1 83 131.27)"><rect x="20.3" y="19.5" width="125.9" height="78.38" fill="#FFDAFA" filter="url(#softShadow)"/></g>
<text transform="translate(114.6 193.5) rotate(2.73)" fontSize="40" fontWeight="700" fill="#1D4030">5k+</text>
<text transform="translate(116.6 212.5) rotate(2.82)" fontSize="20" fontWeight="700" fill="#000">cups sold</text></g></g>
        <g transform="translate(44 -6)"><g className="stk-hover"><g transform="rotate(-11.53 491.69 164.73)"><ellipse cx="491.69" cy="164.73" rx="105" ry="70" fill="#FAFFFA" filter="url(#softShadow)"/><ellipse cx="491.69" cy="164.73" rx="100" ry="65" fill="#5C7A60" filter="url(#ovalInset)"/></g>
<text transform="translate(491.7 164.7) rotate(-13.48)" textAnchor="middle" fontSize="20" fontWeight="700" fill="#fff"><tspan x="0" y="-4.5">EACH CUP</tspan><tspan x="0" y="18.5">HANDCRAFTED</tspan></text></g></g>
        <g transform="translate(-8 -4) translate(341.85 240.9) scale(1.12) translate(-341.85 -240.9)"><g className="stk-hover"><g transform="matrix(1 -0.1 0.1 1 267.56 206.6)"><rect width="140.32" height="82.61" rx="10" fill="#BB0639" filter="url(#softShadow)"/><rect width="140.32" height="82.61" rx="10" fill="url(#canGlow)"/><rect width="140.32" height="82.61" fill="#fff" opacity="0.6" filter="url(#canGrain)" clipPath="url(#canClip)"/></g>
<text transform="translate(341.85 240.9) rotate(-6.3)" textAnchor="middle" fontSize="20" fontWeight="700" fill="#fff"><tspan x="0" y="-4.5">Canadian</tspan><tspan x="0" y="18.5">Business</tspan></text></g></g>
      </svg>
    </div>
  )
}