# Claude Code Prompts for MenuDesk Website

Paste these into Claude Code (in your project root) when you want to iterate.

---

## Initial setup (run once)

```
Install dependencies and verify the dev server starts:
  npm install
  npm run dev

Confirm both routes render:
  - http://localhost:3000   (English)
  - http://localhost:3000/th  (Thai)

Fix any errors that appear. Do not change any visible copy or layout.
```

---

## If you want to swap the launch date

```
The hero badge currently shows "Coming Q3 2026" / "เปิดตัวไตรมาส 3 ปี 2026".
Change both messages/en.json and messages/th.json to instead show
"Launching August 2026" / "เปิดตัวสิงหาคม 2026" (or whatever I pass next).
Do not touch component code — only the JSON files.
```

---

## If you want to add an email waitlist later

```
Add a waitlist email capture below the Hero feature cards.

Requirements:
- Single email input + submit button
- Use Resend (or whatever I have configured) via a /app/api/waitlist/route.ts handler
- Validate email format client-side and server-side
- Show inline success state ("You're on the list — we'll be in touch")
- Show inline error state with a friendly message
- Translate strings via messages/en.json and messages/th.json under a new "waitlist" namespace
- Match the existing visual style: rounded-2xl, white/70 background, ember accent on the button
- Mobile-first; the form should stack on narrow screens
```

---

## If you want to add the /login button when app.auraseaos.com is ready

```
In components/Header.tsx, add a "Login" / "เข้าสู่ระบบ" button next to the language switcher.
- Link target: https://app.auraseaos.com
- Style: solid aurasea-deep background, menudesk-cream text, rounded-full, px-4 py-1.5
- Add the strings under nav.login in both messages/en.json and messages/th.json
- Hide on mobile (md:flex) to keep header clean — or move to a mobile menu if you'd prefer
```

---

## If you want to replace POS names with real logos

```
In components/Integrations.tsx, replace the text-only POS names with logo images.
- Place SVG logos in public/integrations/{foodstory,loyverse,storehub,square}.svg
- Use Next.js Image component with explicit width/height
- Keep the "coming soon" chip below each logo
- Maintain grayscale + opacity-60 treatment, full-color on hover
```

---

## If you want to add JSON-LD schema (per Aurasea SEO strategy doc)

```
Add SoftwareApplication structured data to app/[locale]/page.tsx.

Requirements:
- Use a <Script type="application/ld+json"> block
- Include: name, description, applicationCategory: "BusinessApplication",
  operatingSystem: "Web", offers (with priceCurrency THB), and url
- Pull name + description from the meta translations
- Place it inside the page component, before <Header />
```
