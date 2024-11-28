# RideXChange 🚗

Welcome to **RideXChange**, your one-stop solution for buying and selling cars online. This platform is built with modern technologies to provide a seamless experience for users, enabling them to browse, list, and manage cars with ease.

## 🚀 Live Demo  
Check out the deployed project: [RideXChange on Vercel](https://ride-x-change.vercel.app/)

---

## ✨ Features

### User Features:
- **User Authentication**: Login and register securely via email, Google, or phone number using Clerk.  
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices.  
- **Car Listings**: View detailed car information, including mileage, fuel type, transmission, and price.  
- **Browse by Category**: Quickly filter cars by clicking on car brand logos.  
- **Add Listings**: Upload car details and images to create new listings.  
- **User Profile**: Manage personal information and view your car listings.  
- **Detailed View**: Click on a car card to access complete details.  

---

## 🛠️ Technologies Used

### Frontend:
- **React.js** (with Vite)  
- **Tailwind CSS**  
- **Shadcn/UI** and **NextUI** for reusable components  

### Backend:
- **Drizzle ORM** with **PostgreSQL** (hosted on Neon.tech)  

### Authentication:
- **Clerk** for secure user authentication  

### Storage:
- **Firebase Storage** for car images  

### Deployment:
- Hosted on **Vercel**

---

## 📂 Project Structure
```plaintext
├── .gitignore
├── components.json
├── cors-config.json
├── drizzle.config.js
├── eslint.config.js
├── index.html
├── jsconfig.json
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── vite.config.js
├── public
│   ├── bmw.png
│   ├── farari.jpg
│   ├── vite.svg
├── src
│   ├── add-listing
│   │   └── components
│   │       └── index.jsx
│   ├── assets
│   ├── components
│   ├── lib
│   ├── listing-details
│   │   ├── [id]
│   │   │   └── components
│   │   │       ├── Description.jsx
│   │   │       ├── Features.jsx
│   │   │       ├── HeaderDetail.jsx
│   │   │       ├── ImageGallery.jsx
│   │   │       ├── Pricing.jsx
│   │   │       └── Specification.jsx
│   ├── Profile
│   │   └── components
│   │       └── index.jsx
│   ├── search
│   │   ├── [category]
│   │   │   └── index.jsx
│   ├── Shared
│   │   ├── carDetails.json
│   │   ├── CarSpecification.jsx
│   │   ├── Data.jsx
│   │   ├── FakeData.jsx
│   │   ├── features.json
│   │   └── Service.jsx
│   ├── Home
│   │   └── index.jsx
│   ├── index.css
│   ├── main.jsx
│   └── .env.local
```

---

## 🚀 Getting Started

### Prerequisites:
- Node.js (v14 or later)
- NPM or Yarn package manager

### Steps to Run Locally:
1. Clone the repository:  
   ```bash
   git clone <repository-url>
   cd React-Project-RideXChange

2. Install dependencies:
    ```bash
   npm install
3. Add environment variables:
   ```bash
   VITE_FIREBASE_API_KEY=<your-firebase-api-key>
   VITE_CLERK_FRONTEND_API=<your-clerk-api-key>
   DATABASE_URL=<your-database-url>
4. Start the development server:
   ```bash
   npm run dev
6. Open your browser and navigate to:
   ```bash
   http://localhost:5173

## 🛡️ Security
- **Encrypted Authentication**: User credentials are securely managed via Clerk.
- **HTTPS**: Ensures all data exchanges are secure.

---

## 🤝 Future Enhancements
- Real-time notifications for users.
- Chat functionality between buyers and sellers.
- Advanced filtering and sorting options for cars.
- Analytics dashboard for car sellers.

---

## 🧑‍💻 Contributors
- **Sudip Kumar Das** - Developer and Maintainer

---

## 📞 Contact
Have any feedback, suggestions, or questions? Feel free to reach out!

- **Email**: [sudeepdasdas17815@gmail.com](mailto:your-sudeepdasdas17815@gmail.com)
- **GitHub**: [Developer9985]([https://github.com/your-github-profile](https://github.com/Developer9985))



