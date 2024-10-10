
# Library Management System Frontend

This is the frontend for the Library Management System that interacts with the backend API for managing books and members. It provides a simple interface for users to sign up, log in, and perform actions based on their role (Librarian or Member).

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [API Integration](#api-integration)
- [License](#license)

---

## Features

- **User Authentication**: Users can sign up and log in using their username and password.
- **Role-Based Access**:
  - **Librarian**: Can manage books and members.
  - **Member**: Can borrow and return books, as well as view their borrowing history.
- **Responsive Design**: Built using Bootstrap for a clean and responsive UI.

---

## Requirements

- A modern web browser (Chrome, Firefox, Edge, etc.)
- Internet connection (for accessing hosted resources)

---

## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/library-management-system-frontend.git
    cd library-management-system-frontend
    ```

2. **Open `index.html` in your browser**: You can do this by double-clicking the `index.html` file or right-clicking and selecting "Open with" to choose your web browser.

---

## Usage

1. **Sign Up**: Users can sign up as either a **LIBRARIAN** or **MEMBER**. After successful signup, they will be prompted to log in.

2. **Log In**: Users can log in with their credentials to access their respective dashboards.

3. **Librarian Dashboard**: Librarians can add, update, and remove books and manage members.

4. **Member Dashboard**: Members can view available books, borrow and return books, and view their borrowing history.

5. **Navigation**: The application includes links to toggle between the login and signup forms.

---

## File Structure

```
/library-system
    /css
        - styles.css
    /js
        - auth.js
        - books.js
        - members.js
        - utils.js
    index.html

```

---

## API Integration

The frontend interacts with the backend API hosted at `http://localhost:5000`. Make sure your backend is running before accessing the frontend.

### API Endpoints Used:

- **Authentication**:
  - POST `/api/auth/signup` for user registration.
  - POST `/api/auth/login` for user authentication.

- **Books** (for Librarian):
  - GET `/api/books` to retrieve all books.
  - POST `/api/books` to add a new book.
  - PUT `/api/books/:id` to update an existing book.
  - DELETE `/api/books/:id` to delete a book.

- **Members** (for Librarian):
  - GET `/api/members` to retrieve all members.
  - POST `/api/members` to add a new member.
  - PUT `/api/members/:id` to update an existing member.
  - DELETE `/api/members/:id` to delete a member.

- **Borrow/Return** (for Member):
  - PUT `/api/books/:id/borrow` to borrow a book.
  - PUT `/api/books/:id/return` to return a book.

- **History**:
  - GET `/api/members/:id/history` to retrieve borrowing history for a member.

---
