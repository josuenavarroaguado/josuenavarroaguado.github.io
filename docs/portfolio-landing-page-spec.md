# Spec: CTO Portfolio Landing Page

## Assumptions I Am Making
1. This is a single-page static website (no backend application).
2. The page will be implemented with HTML and CSS first, with minimal JavaScript only when strictly needed.
3. Existing images inside public/ are approved for use in the page.
4. Main target audience is recruiters, founders, CTO peers, and potential B2B partners.
5. Primary language is English.
6. Deployment target is static hosting (GitHub Pages, Vercel static, Netlify static, or similar).

Please correct any of these assumptions before implementation.

## Objective
Build a high-performance, professional portfolio landing page that positions Josue Navarro as a CTO focused on technology strategy, scalable systems, and AI-driven architecture.

The page must:
- Present a clear executive-level value proposition above the fold.
- Communicate leadership scope, technical depth, and business impact.
- Showcase selected experience, certifications, top skills, and partner/client logos.
- Maximize discoverability in traditional search engines and AI/chatbot search experiences.
- Load fast on mobile and desktop while preserving visual quality.

## Target Users
- Hiring managers and executive recruiters evaluating CTO fit.
- Startup founders and business leaders looking for strategic technology leadership.
- Partners/clients validating credibility and domain expertise.

## Tech Stack
- HTML5 (semantic structure)
- CSS3 (custom properties, responsive layout, reduced-motion support)
- Optional vanilla JavaScript (only for non-blocking progressive enhancements)
- No framework required for v1 to minimize runtime overhead

## Commands
Development and verification commands for local work:

- Dev server:
  python3 -m http.server 4173 --directory public

- Quick mobile/desktop Lighthouse audit (if Node.js is available):
  npx --yes lighthouse http://localhost:4173/index.html --only-categories=performance,seo,accessibility,best-practices --preset=desktop --output=html --output-path=./reports/lighthouse-desktop.html

- Mobile Lighthouse audit:
  npx --yes lighthouse http://localhost:4173/index.html --only-categories=performance,seo,accessibility,best-practices --preset=perf --output=html --output-path=./reports/lighthouse-mobile.html

- Optional HTML validation:
  npx --yes html-validate public/index.html

## Project Structure
Planned file layout:

- public/index.html -> Main landing page
- public/styles.css -> All styles for v1
- public/main.js -> Optional, deferred progressive enhancement only
- public/robots.txt -> Crawler directives
- public/sitemap.xml -> Canonical page discovery
- public/llms.txt -> AI crawler guidance and concise site summary
- public/site.webmanifest -> Existing web app metadata
- public/*.png|*.jpg|*.webp|*.jpeg -> Images and logos already provided
- docs/portfolio-landing-page-spec.md -> This specification

## Content Plan (From data.txt)
- Hero: Name, CTO headline, short strategic statement, location (Greater Madrid Metropolitan Area).
- Value proposition: Technology strategy, scalable systems, cloud leadership, AI integration.
- Core outcomes section: Scalability, reliability, architecture modernization, delivery acceleration.
- Experience highlights:
  - CTO at Rasmia Alianza Tecnologica S.L. (current)
  - Solutions Architect at Rasmia (previous)
  - Lead Full-Stack Web Developer at Grupo Atisa
- Skills and methods: DDD, Clean Architecture, cloud-native systems, event-driven design, CI/CD.
- Certifications and language proficiency.
- Contact section: email, LinkedIn, portfolio link.

## Visual Direction
- Professional, executive tone (clean, high-contrast, minimal visual noise).
- Strong typography hierarchy and clear scanning path.
- Hero image usage from public/banner.jpeg and/or public/me.jpeg.
- Logo strip for relevant brands/partners using provided assets in public/.
- Responsive design first, with optimized mobile readability and tap targets.

## Code Style
Use semantic, readable markup with accessibility-first patterns.

```html
<section class="experience" aria-labelledby="experience-title">
  <h2 id="experience-title">Experience</h2>
  <article class="role">
    <h3>CTO - Rasmia Alianza Tecnologica S.L.</h3>
    <p>Defining technology strategy, architecture principles, and scalable platform foundations.</p>
  </article>
</section>
```

Conventions:
- Semantic landmarks: header, main, section, article, footer.
- One H1 only; descending heading order without skips.
- CSS variables under :root for color, spacing, typography scale.
- Avoid layout shifts by declaring width/height (or aspect-ratio) for images.
- Load non-critical scripts with defer.

## Performance Strategy
- Keep initial page weight lean (target <= 400 KB compressed for first view).
- Use modern image formats where available (prefer .webp for large visual assets).
- Set explicit image dimensions and lazy-load below-the-fold imagery.
- Inline only critical CSS if needed; keep render-blocking resources minimal.
- Avoid heavy third-party scripts and webfont bloat.

## SEO Strategy
- Unique title and meta description tuned for CTO profile and technology leadership.
- Canonical URL and Open Graph/Twitter metadata.
- Structured data (JSON-LD): Person, Organization (where applicable), WebSite.
- robots.txt and sitemap.xml included from v1.
- Descriptive alt text and semantic heading structure.
- Internal anchor navigation for section jump links.

## Chatbot Search Engine Optimization (AI Search)
- Publish llms.txt with concise factual profile summary and key URLs.
- Include structured, explicit facts in page copy (role, years, focus areas, cloud stack).
- Add an FAQ section with direct Q/A phrasing likely used in AI queries.
- Use entity-rich wording (CTO, technology strategy, cloud architecture, AI integration).
- Keep claims verifiable and concrete (avoid vague marketing language).

## Accessibility Requirements
- WCAG 2.1 AA baseline for contrast and keyboard navigation.
- Logical focus order and visible focus styles.
- Reduced-motion handling via prefers-reduced-motion.
- Alt text for all non-decorative images.

## Testing Strategy
- Manual checks:
  - Responsive layout at 360px, 768px, 1024px, 1440px.
  - Keyboard-only navigation across all interactive elements.
  - Screen reader landmarks and heading order sanity check.

- Automated checks:
  - Lighthouse performance, SEO, accessibility, best practices.
  - HTML validation for structural correctness.

Acceptance thresholds:
- Lighthouse Performance >= 95 (mobile and desktop)
- Lighthouse SEO = 100 target, >= 95 minimum
- Lighthouse Accessibility >= 95
- No console errors in production build

## Boundaries
- Always:
  - Preserve factual accuracy from data.txt.
  - Optimize for speed and semantic HTML first.
  - Keep content professional and executive-level.

- Ask first:
  - Adding external JS/CSS dependencies or analytics trackers.
  - Introducing multilingual support.
  - Replacing key profile wording or positioning strategy.

- Never:
  - Add fabricated achievements or unverifiable claims.
  - Ship with missing meta tags or broken structured data.
  - Include secrets, tokens, or personal data not provided by user.

## Success Criteria
1. A polished, professional CTO landing page exists at public/index.html with responsive styling.
2. Page includes sections for hero, outcomes, experience, skills, certifications, logos, and contact.
3. Core SEO artifacts exist and are valid: title/meta/canonical, robots.txt, sitemap.xml, JSON-LD.
4. AI search optimization artifacts exist: llms.txt and FAQ content.
5. Lighthouse targets are met or exceeded per thresholds above.
6. No critical accessibility issues in keyboard and landmark checks.

## Open Questions
1. Preferred final domain for canonical URL and sitemap (currently unknown).
2. Should page include a contact form, or only direct email/LinkedIn links?
3. Which logos from public/ should be considered mandatory versus optional?
4. Should English remain the only language for v1, or do you want Spanish toggled in v2?
5. Do you want downloadable CV/PDF linked in the hero section?
