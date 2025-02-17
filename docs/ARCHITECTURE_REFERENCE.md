
# Depo - Architecture Overview

## Overview

**Depo** integrates **Solana blockchain** for token minting and a **waitlist system**. It consists of three components:

1. **Frontend (React)**: Handles user interaction with the platform.
2. **Backend (Node.js/Express)**: Manages business logic, interacts with external services (GitHub, Arweave), and communicates with the blockchain.
3. **Contracts (Solana)**: Smart contracts for token minting and waitlist management deployed on **Solana**.

## High-Level Architecture

### 1. **Frontend**
The frontend is built with **React** and allows users to:
- Submit wallet addresses to join the waitlist.
- Mint tokens once approved.
- Track transaction status.

### 2. **Backend**
The backend, built with **Node.js**, handles:
- Token minting and waitlist logic.
- API endpoints for communication with the frontend.
- Integration with external services like **Solana**, **GitHub**, and **Arweave**.

### 3. **Contracts (Solana)**
Solana smart contracts:
- Handle the actual minting of tokens.
- Manage the waitlist process.

## Component Interaction

1. **Frontend** communicates with **Backend** via API calls (e.g., `/api/tokens/mint`).
2. **Backend** interacts with **Solana** for minting and waitlist management.
3. **External services** (GitHub, Arweave) are used for data storage and repository access.

## Security Considerations

- Use **JWT** or other mechanisms to secure API routes.
- Store **private keys** and sensitive data securely using environment variables.
