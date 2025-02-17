
# Depo - Deployment Guide

## Overview

This guide provides steps for deploying both the **frontend** and **backend** of the **Depo** project. It also covers the steps required to deploy the **Solana smart contracts** to the blockchain.

### Deployment Requirements

- **Node.js**: Required for backend deployment.
- **npm or yarn**: For managing dependencies.
- **Solana CLI**: Required for interacting with the Solana blockchain.
- **Heroku / AWS / DigitalOcean / Netlify / Vercel**: Options for hosting the backend and frontend.

---

## 1. Deploying the Backend

### Step 1: Clone the Repository

Start by cloning the **Depo** repository:

```bash
git clone https://github.com/yourusername/depo.git
cd depo/backend
```

### Step 2: Set Up the Environment

Create a `.env` file in the `backend/` directory and configure the following variables:

```
SOLANA_RPC_URL=https://api.devnet.solana.com
SENDGRID_API_KEY=your_sendgrid_api_key
```

### Step 3: Install Dependencies

Install the required dependencies:

```bash
npm install
```

### Step 4: Run the Backend Locally

To run the backend server locally, use the following command:

```bash
npm start
```

Visit `http://localhost:5000` to access the backend API.

### Step 5: Deploy the Backend

To deploy the backend, you can use a cloud service like **Heroku** or **AWS**.

#### Using Heroku:
1. Install the **Heroku CLI**.
2. Log in to Heroku using the CLI: `heroku login`
3. Initialize a new Heroku app:
   ```bash
   heroku create
   ```
4. Deploy the backend to Heroku:
   ```bash
   git push heroku master
   ```

#### Using AWS / DigitalOcean:
- Follow the platform-specific instructions for deploying a Node.js app.

---

## 2. Deploying the Frontend

### Step 1: Clone the Repository

Clone the repository and navigate to the `frontend/` directory:

```bash
git clone https://github.com/yourusername/depo.git
cd depo/frontend
```

### Step 2: Set Up the Frontend

Create a `.env` file in the `frontend/` directory and set the following:

```
REACT_APP_API_URL=http://localhost:5000/api  # Replace with your deployed backend URL
```

### Step 3: Install Dependencies

Install the necessary dependencies:

```bash
npm install
```

### Step 4: Run the Frontend Locally

To run the frontend locally:

```bash
npm start
```

Visit `http://localhost:3000` to access the frontend.

### Step 5: Deploy the Frontend

To deploy the frontend, you can use **Netlify** or **Vercel**.

#### Using Netlify:
1. Install the **Netlify CLI**.
2. Deploy the frontend using:
   ```bash
   netlify deploy
   ```

#### Using Vercel:
1. Install **Vercel CLI**.
2. Deploy the frontend with:
   ```bash
   vercel
   ```

---

## 3. Deploying the Solana Contracts

### Step 1: Install Solana CLI

If you haven’t already, install the **Solana CLI**:

```bash
sh -c "$(curl -sSfL https://release.solana.com/stable/install)"
```

### Step 2: Deploy the Smart Contract

To deploy a smart contract on Solana:

1. Navigate to the **contracts/** directory.
2. Compile and deploy the contract using **Anchor** (or your preferred framework):

```bash
anchor build
anchor deploy
```

Ensure your **Solana wallet** and **devnet** environment are correctly configured.

---

## Conclusion

This guide walks you through the steps required to deploy both the **frontend**, **backend**, and **Solana smart contracts** for the **Depo** project. After deployment, your platform will be accessible by users for token minting and joining the waitlist.
