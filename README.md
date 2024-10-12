# eCommerce Store 🛒

[![Netlify Status](https://api.netlify.com/api/v1/badges/76578210-c851-4321-8b36-301320e51040/deploy-status)](https://app.netlify.com/sites/jsframeworkcahah98/deploys)

Welcome to the **eCommerce Store**, a fully responsive online shopping platform built with **React**. It includes product listing, cart functionality, checkout, and more to demonstrate proficiency in frontend development.

## 📜 Description

This project is an eCommerce web application designed like a small online shop. It includes the following key features:

- 🏠 **Homepage**: Displays a list of products fetched from an API with a search bar for filtering products by name in the header.
- 📄 **Individual Product Page**: Shows detailed information for each product including price, discount, and reviews.
- 🛒 **Cart Page**: Lists items added to the cart with a total price.
- ✅ **Checkout Success Page**: Confirms successful order placement and clears the cart.
- 📝 **Contact Page**: Features a contact form with client-side validation.
- 🔍 **Search Functionality**: Auto-complete search bar that helps users find products quickly in the header.
  
### Pages

- **Homepage**: Lists all available products and allows users to filter them using a search bar.
- **Product Page**: Displays individual product details, including name, description, price, and reviews.
- **Cart Page**: Displays products added to the cart, the total price, and an option to checkout.
- **Checkout Success Page**: Confirms the user’s purchase and clears the cart.
- **Contact Page**: Contains a contact form with validation for fields like Full Name, Email, Subject, and Message.

## 🛠️ Built With

This project is built using the following technologies:

- ⚛️ **React**
- 🧰 **React Router**
- 🎨 **CSS Modules**
- 🛍️ **Context API**
- 🌐 **Fetch API**

## 🚀 Live Demo

You can view the live version of the project here:

[eCommerce Store](https://jsframeworkcahah98.netlify.app/)

## 📦 Getting Started

To run this project locally, follow these steps:

### 🔽 Cloning the Repository

```bash
git clone git@github.com:hah98/Javascript-Framework-CA.git
cd ecommerce-store
```
## 📄 Features

- **Product List**: Displays all products with a search bar for filtering.
- **Product Details**: Each product has a dedicated page showing more detailed information.
- **Cart Management**: Users can add items to their cart and proceed to checkout.
- **Checkout Success**: Confirms successful orders and resets the cart.
- **Form Validation**: Built-in form validation on the contact page.
- **Responsive Design**: Fully responsive for desktop, tablet, and mobile screens.

## 📑 How It Works

### Product Search
Users can search for products using the search bar on the homepage. As the user types, the list of products filters based on matching titles. This is achieved by fetching product data from the API and filtering the results based on the user's input.

### Cart Functionality
Products can be added to the cart from the product page. The cart icon in the header shows the number of items in the cart. The cart contents can be viewed and managed on the Cart page, where users can also proceed to checkout.

### Contact Form
The contact page features a form where users can input their details (Full Name, Email, Subject, and Message). Form validation ensures all fields are filled correctly before submission.

## 🖥️ API Reference

This project fetches product data from the Noroff API:

- **API Endpoint**: [https://v2.api.noroff.dev/online-shop](https://v2.api.noroff.dev/online-shop)

To retrieve individual product details, append the product ID to the URL (e.g., `https://v2.api.noroff.dev/online-shop/{product-id}`).

## 📞 Contact

Feel free to reach out if you have any questions or suggestions:

- **GitHub**: [your-username](https://github.com/your-username)
- **Email**: your.email@example.com

---

Hope you enjoy using this eCommerce Store project! 😊
