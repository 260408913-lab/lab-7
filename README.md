
# Online Shop - Lab 7

## Project Description

This is a multi-page online shop built using React and Vite.
It allows users to browse products, search and filter products,
view product details, and manage a shopping cart.

## Technologies Used

- React
- Vite
- React Router
- Context API
- useReducer
- Zustand
- Custom Hooks
- Fetch API
- localStorage
- CSS

## Features

- Home page
- Product catalogue
- Product search and category filtering
- Product detail pages
- Shopping cart
- Add and remove products
- Update product quantities
- Cart persistence using localStorage
- Demo login and logout
- Protected cart route
- Light and dark themes
- 404 Not Found page

## Demo Login

- Email: YOUR_STUDENT_EMAIL
- Password: demo123456

Replace YOUR_STUDENT_EMAIL with your actual student email.

## How to Run

Install dependencies:

npm install

Start the development server:

npm run dev

Build the project:

npm run build

## API

Products are retrieved from DummyJSON:

https://dummyjson.com/products?limit=100

## Project Structure

src/
- api/
- hooks/
- context/
- store/
- components/
- pages/
- App.jsx
- main.jsx

## State Management

Context API and useReducer manage authentication.
Zustand manages the shopping cart.
localStorage saves the cart and theme preference.

## Reflection

React Router helped me organize the application into multiple pages.
Context API and useReducer helped me manage authentication.
Zustand helped me manage cart state separately.
Custom hooks helped me reuse data-fetching and localStorage logic.

## Challenges and Learning

Write about the actual challenges you encountered while building
the project and how you solved them.
