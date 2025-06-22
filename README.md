# <img src="src/assets/pizza-logo.png" alt="Pizza Logo" width="30" height="30" style="vertical-align: middle; margin-left: 10px;"> Pedro's Pizzeria - React Website

A responsive pizza restaurant website built with React, in aim to explore it

## ✨ Features

- **🍕 Interactive Menu**: Browse through pizzeria selection
- **🧭 Navigation**: Navigation between Home, Menu, About, and Contact pages

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd pizza
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the website in action!

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🏗 Project Structure

```
pizza/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and media files
│   │   ├── Navbar.jsx     # Navigation component
│   │   ├── Footer.jsx     # Footer component
│   │   └── MenuItem.jsx   # Individual menu item
│   ├── pages/             # Page components
│   │   ├── Home.jsx       # Homepage
│   │   ├── Menu.jsx       # Menu page
│   │   ├── About.jsx      # About page
│   │   └── Contact.jsx    # Contact page
│   ├── styles/            # CSS files for each component
│   ├── utils/             # Utility functions
│   │   └── MenuList.js    # Menu data
│   ├── App.jsx            # Main app component
│   └── main.jsx           # App entry point
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## 🛠 Technologies Used

- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing
- **Material-UI** - UI component library
- **CSS3** - Custom styling and animations
- **ESLint** - Code linting and formatting

## 📸 Screenshots

### Home Page

![Home Page](src/assets/example_home_page.png)

### Menu Page

![Menu Page](src/assets/example_menu_page.png)

### About Page

![About Page](src/assets/example_about_page.png)

### Contact Page

![Contact Page](src/assets/example_contact_page.png)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
