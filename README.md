# 🚀 XtremReels

XtremReels is a full-stack Reels sharing platform built with modern web technologies like **Next.js**, **MongoDB**, **ImageKit**, and **NextAuth**. Users can create, upload, and share short-form videos with real-time performance and sleek UI.

<!-- ![XtremReels Banner](https://ik.imagekit.io/your-imagekit-id/banner.png) -->

---

## 🧰 Tech Stack

* **Frontend**: [Next.js](https://nextjs.org/), [TailwindCSS](https://tailwindcss.com/), [DaisyUI](https://daisyui.com/)
* **Authentication**: [NextAuth.js](https://next-auth.js.org/)
* **Media Management**: [ImageKit.io](https://imagekit.io/)
* **Database**: [MongoDB Atlas](https://www.mongodb.com/atlas)

---

## ✨ Features

* 🔐 Secure user authentication with Google / Email
* 📦 Upload and optimize videos/images using ImageKit
* 🧵 Responsive, themeable UI with TailwindCSS + DaisyUI
* 🗃️ Store user and media data in MongoDB
* 📱 Mobile-first design with smooth UX
* 🚀 Optimized for performance and scalability

---

## 📁 Project Structure

```bash
.
├── components/
├── pages/
│   ├── api/
│   └── auth/
├── styles/
├── utils/
├── lib/
├── models/
└── public/
```

---

## ⚙️ Getting Started

1. **Clone the repo**

   ```bash
   git clone https://github.com/TayyabXtreme/XtremReels.git
   cd XtremReels
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Add environment variables**

   Create a `.env.local` file:

   ```env
   MONGODB_URI=your_mongodb_uri
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000

   IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
   IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
   IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_id/
   ```

4. **Run the dev server**

   ```bash
   npm run dev
   ```

---

<!-- ## 🖼️ Screenshots (Optional)

| Auth Page                                        | Feed                                             | Upload                                               |
| ------------------------------------------------ | ------------------------------------------------ | ---------------------------------------------------- |
| ![Auth](https://ik.imagekit.io/your-id/auth.png) | ![Feed](https://ik.imagekit.io/your-id/feed.png) | ![Upload](https://ik.imagekit.io/your-id/upload.png) | -->

---

## 🧠 Learnings

* ImageKit real-time image/video transformation
* Integrating authentication with NextAuth
* Building reusable UI with Tailwind + DaisyUI
* Full-stack integration with MongoDB and Next.js API routes

---

## 📜 License

This project is licensed under the MIT License.

---

## 🔗 Connect

Made with 💻 by [Tayyab](https://github.com/TayyabXtreme)
