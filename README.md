# The Wild Oasis

The Wild Oasis is a beginner-friendly Next.js application designed to showcase essential concepts of Next.js development. It includes modern features like authentication, database integration, and responsive UI/UX design, making it a great starting point for full-stack development enthusiasts.

## Features

- 🌟 **Luxury Cabins Listing:** View detailed listings of luxury cabins with descriptions, pricing, and guest capacity.
- 🔍 **Cabin Filtering:** Filter cabins based on the number of guests (e.g., 2-3 guests, 4-7 guests).
- 🗓️ **Cabin Reservation:** Integrated calendar to book cabins for specific dates with pricing updates.
- 🔑 **Authentication:** Google authentication powered by NextAuth.
- 👤 **Guest Area:**
  - 📝 View all reservations made by the user.
  - ✏️ Edit or delete reservations.
  - 🔄 Update user profile details.
- 📂 **Database Integration:** Uses Supabase for storing and retrieving data.
- 🎨 **Beautiful Icons:** Enhanced UI with visually appealing icons for easy navigation.
- 📱 **Responsive Design:** Optimized for mobile, tablet, and desktop screens.
- 📘 **Beginner-Friendly Codebase:** Clear structure and concise comments for easy understanding.
- 🤝 **Connect with Us:** Includes links to connect with the creator on LinkedIn and other platforms.

## Tech Stack

- ⚛️ **Frontend:** Next.js, React
- 🔙 **Backend:** Next.js API routes
- 🔐 **Authentication:** NextAuth.js
- 🗄️ **Database:** Supabase
- 🎨 **Styling:** Tailwind CSS
- 🖼️ **Icons:** React Icons

## Screenshots

### Home Page
![Home](https://github.com/user-attachments/assets/e20806b5-9287-4093-b7fd-f15a9fceb5cc)

### Cabins Listing
![screencapture-localhost-3000-cabins-2025-01-01-21_28_55](https://github.com/user-attachments/assets/dd6e7880-9c62-4b14-95f4-d9fff49c1df9)

### Cabin Reservation
![screencapture-localhost-3000-cabins-1-2025-01-01-20_58_36](https://github.com/user-attachments/assets/55878699-3dd3-426e-8fdd-a9d5f7a99855)

### Guest Area
<div style="display: flex; justify-content: space-around;">
  <img src="https://github.com/user-attachments/assets/36424b53-db36-4d26-869f-c3b41ebe8ded" alt="Image 1" width="30%" />
  <img src="https://github.com/user-attachments/assets/7f5f77c6-df28-477d-b1c4-a0a73890b8d4" alt="Image 2" width="30%" />
  <img src="https://github.com/user-attachments/assets/48d250f2-c306-4987-9cd6-c79decfb129b" alt="Image 3" width="30%" />
</div>

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- 📦 Node.js installed
- 🛠️ Supabase account for database configuration
- 🔑 Google API credentials for authentication

### Installation

1. 📥 Clone the repository:
   ```bash
   git clone https://github.com/your-username/wild-oasis.git
   cd wild-oasis
   ```
2. 📂 Install dependencies:
   ```bash
   npm install
   ```
3. 📝 Set up environment variables:
   Create a `.env.local` file and add your credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   NEXTAUTH_URL=http://localhost:3000
   ```
4. 🚀 Run the development server:
   ```bash
   npm run dev
   ```
5. 🌐 Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

The app can be deployed to platforms like Vercel for seamless hosting. Ensure environment variables are set up in the hosting platform's settings.

## Connect with Us

- 💼 LinkedIn: [Moazzam Shabbir](https://www.linkedin.com/in/moazzamshabbir/)

## Contributing

Feel free to fork the repository and submit pull requests to improve the project. Suggestions and feedback are welcome!

