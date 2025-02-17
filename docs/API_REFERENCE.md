
# Depo - API Reference

## Base URL

```
http://localhost:5000/api
```

### 1. **POST /api/tokens/mint**
- **Description**: Mints a token for the specified Solana wallet address.
- **Request Body**:
    ```json
    {
        "walletAddress": "your_wallet_address"
    }
    ```
- **Response**:
    ```json
    {
        "message": "Token minted successfully!",
        "transactionSignature": "transaction_signature",
        "tokenAddress": "wallet_address",
        "status": "Token minted successfully"
    }
    ```
- **Error Response**:
    ```json
    {
        "error": "Invalid wallet address"
    }
    ```

---

### 2. **POST /api/tokens/waitlist**
- **Description**: Adds the wallet address to the waitlist.
- **Request Body**:
    ```json
    {
        "walletAddress": "your_wallet_address"
    }
    ```
- **Response**:
    ```json
    {
        "message": "Added to waitlist successfully!",
        "transactionSignature": "transaction_signature",
        "waitlistAccount": "waitlist_account",
        "status": "Waitlist added successfully"
    }
    ```
- **Error Response**:
    ```json
    {
        "error": "Invalid wallet address"
    }
    ```

---

### 3. **GET /api/tokens/status**
- **Description**: Retrieve the status of a token minting or waitlist operation.
- **Query Parameters**:
    - `transactionSignature`: (Optional) For checking the status of a token minting transaction.
    - `walletAddress`: (Optional) For checking the waitlist status.
- **Response**:
    ```json
    {
        "status": "pending",
        "message": "Your token minting is still being processed.",
        "transactionSignature": "transaction_signature",
        "waitlistPosition": 5
    }
    ```

