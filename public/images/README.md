# Images Folder

Place your event images in this folder. The following filenames are expected by the website:

## Hero Section Slideshow
- `poster1.jpg` — Event Poster 1 (for slide 1)
- `poster2.jpg` — Event Poster 2 (for slide 2)
- `poster3.jpg` — Event Poster 3 (for slide 3)

## Speaker Photos
- `speaker-menon.jpg` — Dr. M.N. Menon (President, IMA Kerala)
- `speaker-gcc.jpg` — GCC Experienced Doctor
- `speaker-startup.jpg` — Kerala Startup Doctor
- `speaker4.jpg` — MD/MS Specialist
- `speaker5.jpg` — AI in Healthcare Expert
- `speaker6.jpg` — European Medicine Expert

## Background Images (Optional)
- `career-bg.jpg` — Background for career paths section (semi-transparent overlay)

## Tips
- Recommended image size: **800×600px** or larger for speaker photos
- Poster images: **1920×1080px** (landscape) work best for the hero slideshow
- All images are displayed with CSS `object-fit: cover` so any aspect ratio works
- If an image is missing, the site gracefully falls back to a gradient/emoji placeholder

## IMA Logo
To use the actual IMA logo, place it as `logo.png` in this folder and update the `Navbar.jsx` and `Footer.jsx` files to use `<img src="/images/logo.png" />`.
