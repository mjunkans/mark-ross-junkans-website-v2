import sharp from 'sharp';
import { writeFileSync, mkdirSync } from 'fs';
import { dirname } from 'path';

const WIDTH = 1200;
const HEIGHT = 630;

// Colors
const BG = '#1a1a1a';
const GOLD = '#c4a24d';
const CREAM = '#f5f0e8';

// Constellation nodes (left half, centered vertically)
const cx = 250; // center of constellation
const cy = 315; // center vertically
const r = 140;  // radius of triangle

// Triangle vertices
const faith = { x: cx, y: cy - r, label: 'Faith' };
const tech = { x: cx - r * Math.cos(Math.PI/6), y: cy + r * Math.sin(Math.PI/6) + 40, label: 'Technology' };
const ventures = { x: cx + r * Math.cos(Math.PI/6), y: cy + r * Math.sin(Math.PI/6) + 40, label: 'Ventures' };
const center = { x: (faith.x + tech.x + ventures.x) / 3, y: (faith.y + tech.y + ventures.y) / 3 };

// Scatter stars
const stars = [];
for (let i = 0; i < 30; i++) {
  stars.push({
    x: 40 + Math.random() * 420,
    y: 60 + Math.random() * 510,
    r: 1 + Math.random() * 1.5,
    opacity: 0.15 + Math.random() * 0.25,
  });
}

function line(x1, y1, x2, y2, opacity, width = 0.8) {
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${GOLD}" stroke-width="${width}" opacity="${opacity}" />`;
}

function dot(x, y, radius, color = GOLD, opacity = 1) {
  return `<circle cx="${x}" cy="${y}" r="${radius}" fill="${color}" opacity="${opacity}" />`;
}

function label(x, y, text, anchor = 'middle') {
  return `<text x="${x}" y="${y}" fill="${CREAM}" font-family="Georgia, 'Times New Roman', serif" font-size="13" text-anchor="${anchor}" opacity="0.85">${text}</text>`;
}

// Render text with letter-spacing via SVG attribute
function styledText(x, y, text, fontSize, letterSpacing, fontFamily, opacity = 1) {
  return `<text x="${x}" y="${y}" fill="${CREAM}" font-family="${fontFamily}" font-size="${fontSize}" letter-spacing="${letterSpacing}" opacity="${opacity}">${text}</text>`;
}

const svg = `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${GOLD}" stop-opacity="0.6"/>
      <stop offset="50%" stop-color="${GOLD}" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="${GOLD}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="bigGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${GOLD}" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="${GOLD}" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="${BG}" />

  <!-- Subtle ambient glow behind constellation -->
  <circle cx="${cx}" cy="${cy}" r="220" fill="url(#bigGlow)" />

  <!-- Background star dots -->
  ${stars.map(s => dot(s.x, s.y, s.r, GOLD, s.opacity)).join('\n  ')}

  <!-- Triangle lines (outer edges) -->
  ${line(faith.x, faith.y, tech.x, tech.y, 0.4, 0.8)}
  ${line(tech.x, tech.y, ventures.x, ventures.y, 0.4, 0.8)}
  ${line(ventures.x, ventures.y, faith.x, faith.y, 0.4, 0.8)}

  <!-- Lines to center -->
  ${line(faith.x, faith.y, center.x, center.y, 0.2, 0.5)}
  ${line(tech.x, tech.y, center.x, center.y, 0.2, 0.5)}
  ${line(ventures.x, ventures.y, center.x, center.y, 0.2, 0.5)}

  <!-- Center glow -->
  <circle cx="${center.x}" cy="${center.y}" r="28" fill="url(#glow)" />
  ${dot(center.x, center.y, 4, GOLD, 0.9)}

  <!-- Node dots -->
  ${dot(faith.x, faith.y, 6, GOLD, 0.95)}
  ${dot(tech.x, tech.y, 6, GOLD, 0.95)}
  ${dot(ventures.x, ventures.y, 6, GOLD, 0.95)}

  <!-- Small halos around nodes -->
  <circle cx="${faith.x}" cy="${faith.y}" r="12" fill="none" stroke="${GOLD}" stroke-width="0.5" opacity="0.3" />
  <circle cx="${tech.x}" cy="${tech.y}" r="12" fill="none" stroke="${GOLD}" stroke-width="0.5" opacity="0.3" />
  <circle cx="${ventures.x}" cy="${ventures.y}" r="12" fill="none" stroke="${GOLD}" stroke-width="0.5" opacity="0.3" />

  <!-- Node labels -->
  ${label(faith.x, faith.y - 22, 'Faith')}
  ${label(tech.x, tech.y + 28, 'Technology')}
  ${label(ventures.x, ventures.y + 28, 'Ventures')}

  <!-- Right side text -->
  <!-- Name -->
  ${styledText(604, 280, 'MARK ROSS JUNKANS', 36, 4, "Georgia, 'Times New Roman', serif")}

  <!-- Gold divider line -->
  <line x1="604" y1="305" x2="724" y2="305" stroke="${GOLD}" stroke-width="1" opacity="0.7" />

  <!-- Subtitle -->
  <text x="604" y="340" fill="${CREAM}" font-family="'Helvetica Neue', Arial, sans-serif" font-size="17" opacity="0.65" letter-spacing="0.5">Author · Entrepreneur · Restless Thinker</text>

</svg>`;

const outPath = new URL('../public/images/og-image.png', import.meta.url).pathname;
mkdirSync(dirname(outPath), { recursive: true });

await sharp(Buffer.from(svg))
  .resize(WIDTH, HEIGHT)
  .png()
  .toFile(outPath);

console.log(`✅ OG image generated: ${outPath}`);
