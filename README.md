---

## 🎯 Build Goals

### ✅ Design Specs
- **Background**: `#0a192f` (dark navy)
- **Text**: `#ccd6f6` (light slate)
- **Accent**: `#64ffda` (neon green)
- **Fonts**: Inter, Space Grotesk, and monospace (for terminal effect)
- **Nav**: Sticky sidebar on desktop, topnav on mobile

---

## 🖼️ Screenshot References (For Cursor AI)

| File                                             | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ |
| `Hero section with terminal-inspired header.png` | Use for homepage hero layout & font style        |
| `background.png`                                 | SVG/animated lines in background (CSS or canvas) |
| `experience.png`                                 | Timeline layout for About page                   |
| `Footer or contact prompt.mp4` (describe layout) | Full-width contact CTA with social links         |

> ☑️ AI: Use these for layout, spacing, and animation decisions.

---

## 🧩 Pages & Components Breakdown

### 🏠 `Home`

- 3D scene with SVG background
- CTA to scroll or explore

### 👤 `About`

- Timeline layout (from `experience.png`)
- Left: dates, Right: role & tech badges

### 🧪 `Projects`

- Hoverable cards (neon glow)
- GitHub / Live buttons
- Modal with image carousel

### 📝 `Writeups`

- MDX blog posts
- Entry/exit animation
- Tag filtering

### 📬 `Contact`

- Name/email/message form
- Styled CTA footer (based on `Footer prompt`)

### 🔐 `Dashboard` (optional)

- Login-protected
- CRUD UI for Projects and Blog

---

## ⚙️ Functional Features

| Feature            | Tool                                    |
| ------------------ | --------------------------------------- |
| Markdown Rendering | `MDX`, `contentlayer`                   |
| Animations         | `Framer Motion`, `GSAP`, `TypewriterJS` |
| 3D Hero Scene      | `react-three-fiber` + `drei`            |
| Auth (Optional)    | `Clerk` or `NextAuth`                   |
| Database           | `Prisma + PostgreSQL` or `Supabase`     |
| Deployment         | `Vercel`, `GitHub CI/CD`                |
| Accessibility      | ARIA, semantic HTML                     |

---

## 🧠 AI Checkpoints for Cursor

### 📍 Stage 1: Layout Setup

- [ ] `app/layout.tsx` and `globals.css`
- [ ] Set up sidebar nav (desktop) and top nav (mobile)
- [ ] Create base pages: `about`, `projects`, `writeups`, `contact`

### 📍 Stage 2: Hero Section

- [ ] Implement `Hero.tsx` using `Hero section with terminal-inspired header.png`
- [ ] Add SVG or canvas background animation from `background.png`
- [ ] Add typewriter animation

### 📍 Stage 3: About Timeline

- [ ] Build `Timeline.tsx` layout using `experience.png`
- [ ] Use scroll-triggered animations on each entry

### 📍 Stage 4: Projects Page

- [ ] `ProjectCard.tsx` with hover glow animation
- [ ] `ProjectModal.tsx` with carousel

### 📍 Stage 5: Blog/Writeups

- [ ] Integrate `MDX` for rendering content
- [ ] Animate route transitions
- [ ] Add tag-based filtering

### 📍 Stage 6: Contact Page

- [ ] Build `ContactForm.tsx` with stylized layout
- [ ] Add footer with social links (use `Footer or contact prompt` as visual reference)

### 📍 Stage 7: Admin Dashboard (Optional)

- [ ] Auth integration (`Clerk` or `NextAuth`)
- [ ] Dashboard layout + forms for upload/edit/delete

---

## 📄 Personal Data Prefill (For AI)

```json
{
  "github": "https://github.com/yourusername",
  "linkedin": "https://linkedin.com/in/yourusername",
  "bio": "I’m a creative developer passionate about interactive design, React ecosystems, and 3D visual storytelling.",
  "resume": "To be uploaded",
  "projects": "Will be added via dashboard"
}
```
