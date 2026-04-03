# DNK Media - Certificate Verification Portal

This is the official Certificate Verification Portal for [DNK Media](https://www.dnkmedia.in). It allows students and employers to verify the authenticity of certificates issued by DNK Media using a unique Reference Number.

## 🚀 Features

- **Branded UI**: Perfectly matches the primary DNK Media website design system.
- **Instant Verification**: Fast, interactive search with a premium "verifying" experience.
- **Glassmorphism Design**: Modern, clean, and professional interface.
- **Responsive**: Optimized for Desktop, Tablet, and Mobile devices.
- **Easy Data Management**: Student records are managed via a simple `data/certificates.json` file.

## 📁 File Structure

- `index.html`: Main portal page.
- `style.css`: Premium styling and layout.
- `script.js`: Verification logic and UI interactions.
- `images/`: Brand assets including logo and favicon.
- `data/certificates.json`: Database of verified students.

## 🛠️ How to Add Students

To add a new student, simply append a new object to the array in `data/certificates.json`:

```json
{
    "id": "YOUR_REF_NO",
    "name": "STUDENT_NAME",
    "course": "COURSE_NAME",
    "duration": "START_DATE to END_DATE",
    "status": "Verified",
    "issued_by": "SIYADNK SOFTWARE PRIVATE LIMITED"
}
```

## 🌐 Deployment

This is a static website and can be deployed instantly on:
- **Vercel** (Recommended)
- **GitHub Pages**
- **Netlify**

---
© 2026 DNK MEDIA. All rights reserved.
