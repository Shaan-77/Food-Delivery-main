#🍔 Zubee – Online Food Delivery Website
<br />
Zubee is a responsive and user-friendly food delivery web application that allows users to browse restaurants, view menus, place online orders, and get food delivered to their doorstep.


## Demo

- User Panel: [https://food-delivery-main-frontend-dzea.onrender.com/](https://food-delivery-main-frontend-dzea.onrender.com)
- Admin Panel: [https://food-delivery-main-admin-hdnn.onrender.com/](https://food-delivery-main-admin-hdnn.onrender.com/)

## Features

- User Panel
- Admin Panel
- JWT Authentication
- Password Hashing with Bcrypt
- Stripe Payment Integration
- Login/Signup
- Logout
- Add to Cart
- Place Order
- Order Management
- Products Management
- Filter Food Products
- Login/Signup
- Authenticated APIs
- REST APIs
- Role-Based Identification
- Beautiful Alerts

## Screenshots
**- Hero Section!**
![Hero)](https://github.com/user-attachments/assets/faf1cbfa-c21f-439f-ae49-8ccaad025420)

**- Products Section**
![Products](https://github.com/user-attachments/assets/4b54e997-0a0c-4da5-a2a4-2ae783609924)

**- Cart Page**
![Cart](https://github.com/user-attachments/assets/c728bbd5-1809-4743-8f94-696e62d65548)

**- Login/signup Popup**
![ Login/signup Popup](https://github.com/user-attachments/assets/70b70c18-4883-4337-8311-803aa7d6bcbc)

**- Admin Panel**
![Admin Panel](https://github.com/user-attachments/assets/c48dc4c2-ddf4-4a9f-ae80-4195101fa2fa)

**-Admin Order Control**
![Admin Order Control](https://github.com/user-attachments/assets/5ef81e75-d682-4103-961a-772d2d3dc2ad)

## Run Locally

Go to the project directory

```bash
    cd Food-Delivery-main
```

Install dependencies (frontend)

```bash
    cd frontend
    npm install
```

Install dependencies (admin)

```bash
    cd admin
    npm install
```

Install dependencies (backend)

```bash
    cd backend
    npm install
```

Setup Environment Vaiables

```Make .env file in "backend" folder and store environment Variables
  JWT_SECRET=YOUR_SECRET_TEXT
  SALT=YOUR_SALT_VALUE
  MONGO_URL=YOUR_DATABASE_URL
  STRIPE_SECRET_KEY=YOUR_KEY
```

Setup the Frontend and Backend URL

- App.jsx in Admin folder
  const url = YOUR_BACKEND_URL
- StoreContext.js in Frontend folder
  const url = YOUR_BACKEND_URL

- orderController in Backend folder
  const frontend_url = YOUR_FRONTEND_URL

Start the Backend server

```bash
    nodemon server.js
```

Start the Frontend server

```bash
    npm start
```

Start the Backend server

```bash
    npm start
```

## Tech Stack

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/en)
- [Express.js](https://expressjs.com/)
- [Mongodb](https://www.mongodb.com/)
- [Stripe](https://stripe.com/)
- [JWT-Authentication](https://jwt.io/introduction)
- [Multer](https://www.npmjs.com/package/multer)

## Deployment

The application is deployed on Render.

## Contributing

Contributions are always welcome!
Just raise an issue, and we will discuss it.


