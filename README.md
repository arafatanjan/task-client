# React + Vite

#Prerequisites
Node.js and npm installed on your machine
MongoDB set up locally or using a cloud service like MongoDB Atlas
A Firebase account (for authentication)
A Stripe or SSLCommerz account (for payment processing)
#Step-by-Step Setup

#Clone the Repository. Install Dependencies. Set Up Firebase Authentication

Go to the Firebase Console and create a new project.
Set up Authentication and enable Email/Password sign-in.
Copy the Firebase config object and add it to your React app (src/firebaseConfig.js).

# Authentication
Sign Up: Navigate to the sign-up page and create a new account.
Log In: Use the credentials to log in to the dashboard.
Log Out: Click the log-out button to end the session.

# Dashboard Features
View Products: See the list of products on the dashboard.
Add Products: Use the form to add new products (name, description, price, image).
Edit Products: Edit the details of your products.
Delete Products: Remove your products from the list.
Purchase Products: Buy products from other users and see the stock decrease.
#Payment Integration
Make Payments: Use Stripe or SSLCommerz to make secure payments for products.
Update Stock: Ensure that purchasing a product decreases its stock count

# Security Measures
JWT Authentication: Secure user operations with JWT.
XSS and CSRF Protection: Implement measures to protect against these common vulnerabilities
