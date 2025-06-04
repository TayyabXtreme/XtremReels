# 🚀 XtremReels

XtremReels is a full-stack video sharing platform built with modern web technologies. It allows users to create, upload, and share short-form videos (similar to Instagram Reels or TikTok) with real-time performance and a sleek, responsive UI. The platform features secure authentication, optimized media handling, and a mobile-first design approach.

<!-- ![XtremReels Banner](https://ik.imagekit.io/your-imagekit-id/banner.png) -->

---

## 🧰 Tech Stack

### Frontend
* **Framework**: [Next.js 15](https://nextjs.org/) with App Router
* **UI**: [TailwindCSS 4](https://tailwindcss.com/) for styling
* **Components**: Custom React components with responsive design
* **Form Handling**: [React Hook Form](https://react-hook-form.com/) for efficient form validation
* **Icons**: [Lucide React](https://lucide.dev/) for beautiful, consistent icons

### Backend
* **API Routes**: Next.js API routes for serverless functions
* **Authentication**: [NextAuth.js 4](https://next-auth.js.org/) with Credentials provider
* **Database**: [MongoDB](https://www.mongodb.com/atlas) with [Mongoose](https://mongoosejs.com/) ODM
* **Media Management**: [ImageKit.io](https://imagekit.io/) for video/image storage, optimization, and delivery

### Development
* **Language**: [TypeScript 5](https://www.typescriptlang.org/) for type safety
* **Linting**: ESLint for code quality
* **Build Tool**: Turbopack for faster development experience

---

## ✨ Features

* **User Authentication**
  * Secure credential-based authentication with email and password
  * Protected routes with NextAuth.js session management
  * User registration with password hashing via bcrypt

* **Video Management**
  * Upload videos directly to ImageKit.io
  * Real-time upload progress tracking
  * Video transformation and optimization
  * Custom video player with controls

* **User Interface**
  * Responsive design that works on mobile, tablet, and desktop
  * Dark mode support with system preference detection
  * Beautiful UI with gradients, animations, and transitions
  * Grid-based video feed with hover effects

* **Performance**
  * Optimized media delivery through ImageKit CDN
  * Server-side rendering for improved SEO and initial load
  * Efficient data fetching with Next.js data fetching patterns

---

## 📁 Project Structure

```
.
├── app/                      # Next.js App Router structure
│   ├── api/                  # API routes for backend functionality
│   │   ├── auth/             # Authentication endpoints
│   │   │   ├── [...nextauth] # NextAuth.js configuration
│   │   │   ├── imagekit-auth # ImageKit authentication endpoint
│   │   │   └── register      # User registration endpoint
│   ├── components/           # Reusable React components
│   ├── login/                # Login page
│   ├── register/             # Registration page
│   ├── upload/               # Video upload page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout component
│   └── page.tsx              # Home page component
├── lib/                      # Utility functions and shared logic
│   ├── api-client.ts         # API client for frontend-backend communication
│   ├── auth.ts               # Authentication configuration
│   └── db.ts                 # Database connection setup
├── models/                   # Mongoose models for database
│   ├── User.ts               # User model definition
│   └── Video.ts              # Video model definition
├── public/                   # Static assets
└── middleware.ts             # Next.js middleware for auth protection
```

---

## ⚙️ Getting Started

### Prerequisites

* Node.js 18.17 or later
* npm or yarn package manager
* MongoDB Atlas account (or local MongoDB instance)
* ImageKit.io account

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/xtremreels.git
   cd xtremreels
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory with the following variables:

   ```env
   # MongoDB Connection
   MONGO_URI=your_mongodb_connection_string
   
   # NextAuth Configuration
   NEXTAUTH_SECRET=your_nextauth_secret_key
   NEXTAUTH_URL=http://localhost:3000
   
   # ImageKit Configuration
   NEXT_PUBLIC_PUBLIC_KEY=your_imagekit_public_key
   PRIVATE_KEY=your_imagekit_private_key
   NEXT_PUBLIC_URL_ENDPOINT=https://ik.imagekit.io/your_imagekit_id/
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

### Building for Production

```bash
# Build the application
npm run build
# or
yarn build

# Start the production server
npm run start
# or
yarn start
```

---

## 🧪 Key Implementation Details

### Authentication Flow

The application uses NextAuth.js with a Credentials provider for authentication. The flow works as follows:

1. User registers with email and password (password is hashed using bcrypt)
2. User logs in with credentials
3. NextAuth.js verifies credentials against the database
4. On successful authentication, a session is created
5. Protected routes check for valid session using middleware

### Video Upload Process

1. User fills out video details (title, description)
2. User selects a video file using the FileUpload component
3. Video is uploaded directly to ImageKit.io with progress tracking
4. On successful upload, video metadata is stored in MongoDB
5. User is redirected to the video page or home feed

### Responsive Design

The application uses Tailwind CSS for a mobile-first responsive design approach:

- Fluid typography and spacing
- Grid layouts that adapt to different screen sizes
- Conditional rendering of UI elements based on screen size
- Touch-friendly interactions for mobile users

---

## 🔧 Customization

### Styling

The application uses Tailwind CSS for styling. You can customize the design by modifying:

- `globals.css` for global styles and Tailwind directives
- Component-level styles using Tailwind classes
- `postcss.config.mjs` for PostCSS plugins

### Environment Variables

Customize the application behavior using environment variables in `.env.local`:

- Database connection
- Authentication settings
- ImageKit configuration
- API endpoints and keys

---

## 📚 Useful Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [NextAuth.js Documentation](https://next-auth.js.org/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)
- [ImageKit Documentation](https://docs.imagekit.io/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Hook Form Documentation](https://react-hook-form.com/get-started)

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🔗 Connect

Made with 💻 by [Tayyab](https://github.com/TayyabXtreme)
