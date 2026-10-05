# Web Development Practice

A hands-on learning journal in HTML, CSS and vanilla JavaScript. It holds five small projects and four graded practice sets, all linked from one landing site, **"Divya | Web Development Journey"**. There are no frameworks and no build step. Everything runs by opening a file in the browser.

## What's inside

```
web-development-practice/
├── index.html, style.css, script.js   # Landing site that links to everything
├── digital-clock/                     # Live clock + New Year countdown
├── image-gallery/                     # Image grid with a lightbox
├── portfolio/                         # Personal portfolio page
├── Weather-App/                       # SkyCast, powered by OpenWeatherMap
├── Student-Management-Dashboard/      # StudentHub: CRUD + analytics (4 pages)
├── practice_Set1/                     # HTML fundamentals
├── practice_Set2/                     # CSS fundamentals
├── practice_Set3/                     # JavaScript basics
└── practice_Set4/                     # localStorage, fetch, validation, ES6
```

## Landing site

The root `index.html` is a welcome screen followed by a single-page site with project and practice-set sections.

- Welcome screen with a "Start My Journey" button
- Dark mode toggle, remembered between visits with `localStorage`
- Smooth-scroll navigation with active-section highlighting
- Scroll-reveal animations using `IntersectionObserver`
- Responsive layout with Google Fonts (DM Sans, Playfair Display)

## Projects

| Project | What it does | Key concepts |
|---|---|---|
| **[Digital Clock](digital-clock/)** | Shows the current time in `HH:MM:SS` and a live countdown (days, hours, minutes, seconds) to the next New Year. | `Date`, `setInterval`, string formatting |
| **[Image Gallery](image-gallery/)** | Grid of 8 images. Clicking one opens it in a full-screen lightbox. | DOM events, CSS Flexbox/Grid |
| **[Portfolio](portfolio/)** | Single-page portfolio with about, education, skills, experience, projects, certifications, profile links and a contact form. | Semantic HTML, CSS layout, form handling |
| **[SkyCast Weather App](Weather-App/)** | Search any city for temperature, conditions, feels-like, humidity, wind and pressure, with an emoji icon for the conditions. Keeps your 5 most recent searches. | `fetch`, `async/await`, REST APIs, error handling, `localStorage` |
| **[StudentHub Dashboard](Student-Management-Dashboard/)** | Multi-page student manager (Home, Students, Analytics, About). Add, edit and delete students, then search and filter them. The analytics page shows overall figures and a department-wise breakdown. | CRUD, array methods, form validation, `localStorage`, XSS-safe rendering |

### SkyCast: setup

The weather app needs a free [OpenWeatherMap API key](https://openweathermap.org/api).

1. Create an account and copy your API key.
2. Open `Weather-App/script.js` and set it on the first line:
   ```js
   const API_KEY = "your_api_key_here";
   ```
3. Open `Weather-App/index.html` in your browser.

The app handles an unknown city (404), an invalid key (401) and rate limiting (429) with friendly messages.

> **Note:** Don't commit a real API key to a public repo. This is a client-side app, so any key in `script.js` is visible to anyone who opens the page. Use a free-tier key and rotate it if it leaks.

### StudentHub: details

- **Fields:** name, roll number, department (ISE, CSE, ECE, ME, AIML), semester (1–8), CGPA and email.
- **Validation:** all fields are required, and CGPA must be between 0 and 10.
- **Search and filter:** search by name or roll number, and filter by department and semester.
- **Persistence:** data is stored in the browser under the `studentHubStudents` key, so no backend is needed. Clearing site data resets it.

## Practice sets

| Set | Focus | Exercises |
|---|---|---|
| **[Set 1](practice_Set1/)** | HTML | First web page, student marks table, registration form, and a multi-page "Sweet Treats" cake shop (home, about, contact) |
| **[Set 2](practice_Set2/)** | CSS | Backgrounds and fonts, Flexbox centering, CSS Grid, hover effects |
| **[Set 3](practice_Set3/)** | JavaScript basics | Even/odd checker, colour changer, calculator, today's date |
| **[Set 4](practice_Set4/)** | Browser APIs and ES6 | "Remember Me" with `localStorage`, random quote with `fetch` (dummyjson.com), email format validation, number filter with arrow functions |

## Run it locally

No installation is required.

```bash
git clone https://github.com/Divya-kumari18/web-development-practice.git
cd web-development-practice
```

Then either open `index.html` directly in a browser, or serve the folder (recommended, since `fetch` calls behave more reliably over HTTP):

```bash
# Python
python3 -m http.server 8000

# or Node
npx serve .
```

Visit `http://localhost:8000`.

## Deploy with GitHub Pages (optional)

1. Go to **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**, then select `main` and `/ (root)`.
3. The site will be live at `https://divya-kumari18.github.io/web-development-practice/`.

## Tech stack

- **HTML5**: semantic structure, forms, tables
- **CSS3**: Flexbox, Grid, custom properties, responsive design, hover and scroll animations
- **JavaScript (ES6+)**: DOM manipulation, `async/await`, `fetch`, `localStorage`, `IntersectionObserver`
- **External services:** OpenWeatherMap API, dummyjson.com quotes API, Google Fonts

## What I practised

- Structuring multi-page sites and linking them cleanly
- Building responsive layouts without a framework
- Reading and validating user input
- Persisting state in the browser
- Calling third-party APIs and handling failures gracefully
- Organising CSS and JS in separate files per project

## Possible next steps

- Add screenshots or a GIF for each project
- Move the weather API call behind a small serverless proxy so the key isn't exposed
- Add charts to the StudentHub analytics page
- Add keyboard navigation (arrow keys and Esc) to the image gallery lightbox
- Add an MIT licence file

## Author

**Divya Kumari**
GitHub: [@Divya-kumari18](https://github.com/Divya-kumari18)
