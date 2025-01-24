# Personal Portfolio Website

## Overview
This project is a responsive and modern personal portfolio website built using Tailwind CSS. It showcases sections like Header, Hero, About Me, Projects, Contact, and Footer. The website is fully responsive and features a custom theme and interactive elements.
Check out the live website here: [Live Demo](https://html-css-js-portfolio-beryl.vercel.app/)

## Features
### 1. **Header Section**
- Contains the website logo or name on the left.
- A navigation bar with links to "Home", "About Me", "Projects", and "Contact".
- Navigation bar aligns to the right and converts to a hamburger menu on small screens.
- Sticky header that remains visible while scrolling.

### 2. **Hero Section**
- Full-screen section with a background image.
- Displays a heading with your name or title.
- Includes a short tagline or description.
- A call-to-action button to scroll to the Projects section.

### 3. **About Me Section**
- Introduces you with a brief bio.
- Displays a circular profile picture using Tailwind's `rounded-full` utility.
- Lists key skills in a grid or flexbox layout.
- Fully responsive and visually appealing on mobile devices.

### 4. **Projects Section**
- Showcases at least three projects with the following details:
  - Title
  - Description
  - Image or screenshot
  - Link to the project (placeholder links can be used).
- Projects are displayed in a grid layout, stacking neatly on smaller screens.

### 5. **Contact Section**
- A functional contact form with fields for Name, Email, and Message.
- Submit button with hover effects.
- Social media links (LinkedIn, GitHub, Twitter) displayed horizontally.

### 6. **Footer Section**
- Contains a copyright notice.
- Links to "Privacy Policy" and "Terms of Service".
- Central alignment and responsive design.

### 7. **Responsive Design**
- Navigation bar collapses into a hamburger menu on small screens.
- Grid-based Projects section adapts to different screen sizes.
- Content is well-aligned and spaced appropriately for desktop, tablet, and mobile devices.

### 8. **Custom Styles**
- Custom color scheme defined in `tailwind.config.js`.
- Tailwind's hover effects, transitions, and animations used to enhance interactivity.

## Requirements
### Deliverables
1. **HTML File**: A single `index.html` file containing all sections.
2. **Tailwind CSS**: Use Tailwind’s utility classes for styling and responsiveness.
3. **Tailwind Config File**: A custom `tailwind.config.js` file for theme customization (colors, fonts, etc.).
4. **Screenshots**: Capture screenshots of the website on desktop, tablet, and mobile.
5. **Demo Link (Optional)**: Host the website online using GitHub Pages or Netlify.

## Setup Instructions
### Prerequisites
- Node.js and npm installed.

### Installation Steps
1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd [repository-folder]
   ```
2. Install Tailwind CSS via npm:
   ```bash
   npm install -D tailwindcss
   npx tailwindcss init
   ```
3. Configure the `tailwind.config.js` file to include custom colors and fonts.
4. Create the `index.html` file and link the compiled Tailwind CSS file.
5. Build the Tailwind CSS file:
   ```bash
   npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
   ```
6. Open `index.html` in your browser to view the website.

## Evaluation Criteria
- **Design and Aesthetics**: Consistent and professional design across all sections.
- **Responsive Design**: Proper layout and functionality on all screen sizes.
- **Use of Tailwind CSS**: Efficient utility usage for spacing, colors, typography, etc.
- **Functionality**: Working navigation bar and contact form.
- **Creativity**: Unique style and personalization.

## Bonus Features
- **Animation**: Smooth animations using Tailwind’s `animate-` utilities (e.g., fade-in effects).
- **Dark Mode**: Implemented using Tailwind's `dark:` prefix.

## Screenshots
Include screenshots demonstrating the website’s layout on different screen sizes (desktop, tablet, and mobile).
## Screenshots
Below are the screenshots of the portfolio website:

### Desktop View
![Desktop Screenshot](./screenSnapshot/desktop-view.png "Desktop View")

### Tablet View
![Tablet Screenshot](./screenSnapshot/tablet-view.png "Tablet View")

### Mobile View
![Mobile Screenshot](./screenSnapshot/mobile-view.png "Mobile View")


## Demo Link
If hosted online, provide the link here.

## License
This project is open-source and available under the [MIT License](LICENSE).
