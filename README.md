# AUTH-CONNECT

**Developer:** Joel P Jacob 

**Role:** Front End Developer  

**Project:** Technical Evaluation for Sienti Solutions Pvt. Ltd.

**Project Overview:** This project was developed as part of the technical evaluation for the Front End Developer role at Sienti Solutions Pvt. Ltd. The goal is to create an interactive web application that enables users to authenticate using Google Single Sign-On (SSO) and view their profile information.

## Features

- **Google Login**: Allows users to authenticate via their Google accounts.
- **Profile Display**: After successful login, users can view their name, email, and profile picture.
- **Logout Functionality**: Users can log out and clear their session.
- **Error Handling**: Displays relevant error messages in case of login failures.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **react-google-login**: Library for implementing Google login functionality.
- **CSS**: For styling the application.

## Getting Started

To run the application locally, follow these steps:

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/auth-connect.git
   cd auth-connect

2. Install dependencies:
    ```bash
    npm install

3. Create a .env file in the root directory and add your Google Client ID:
    REACT_APP_GOOGLE_CLIENT_ID=your_client_id_here

4. Start the application:
    ```bash
    npm start

5. Open your browser and navigate to 

    ```bash
    http://localhost:3000.
    
### Usage

1. Click the "Login with Google" button to initiate authentication.
2. Upon successful login, your profile information will be displayed.
3. Use the "Logout" button to exit the session. 