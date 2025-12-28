# Full Stack Realtime Chat App 




###  Unique Feature: Dynamic Mood Experience

Unlike any other chat app, **HappyChat feels what you feel**. The entire application interface adapts in real-time based on the sentiment of your conversation.

-   **Mood Themes**: Type "happy", "love", "angry", or "sad", and watch the colors change instantly!
    -    **Happy**: Faded Yellow background with Pale Gold bubbles.
    -    **Love**: Romantic Pink themes.
    -    **Angry**: Intense Faded Red background.
    -    **Sad**: Melancholic Blue-Grey.

-   **Floating Background Emojis**: The background comes alive with floating animations!
    -   Laughing faces and suns for happiness.
    -   Floating hearts for romance.
    -   Rain and tears for sadness.
    -   Fire and rage symbols for anger.

*Experience a chat that's alive.*

##  Project Structure

```bash
📦 HappyChat
 ┣ 📂 backend                 # Express Server & API
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📂 controllers         # Logic for Auth & Messages
 ┃ ┃ ┣ 📂 lib                 # DB, Socket.io, Cloudinary setup
 ┃ ┃ ┣ 📂 middleware          # Auth protection middleware
 ┃ ┃ ┣ 📂 models              # Mongoose Schemas (User, Message)
 ┃ ┃ ┣ 📂 routes              # API Endpoints
 ┃ ┃ ┗ 📜 index.js            # Server entry point
 ┃ ┗ 📜 package.json
 ┣ 📂 frontend                # React + Vite Client
 ┃ ┣ 📂 public                # Static assets
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📂 components          # Reusable UI (Navbar, ChatContainer, MoodBackground)
 ┃ ┃ ┣ 📂 lib                 # Utilities & Axios instance
 ┃ ┃ ┣ 📂 pages               # Full pages (Home, Login, Profile)
 ┃ ┃ ┣ 📂 store               # Zustand Global State
 ┃ ┃ ┣ 📜 App.jsx             # Main Component
 ┃ ┃ ┗ 📜 main.jsx            # React Entry
 ┃ ┣ 📜 tailwind.config.js    # Custom Theme Configuration
 ┃ ┗ 📜 vite.config.js
 ┗ 📜 README.md
```

Highlights:

-  Tech stack: MERN + Socket.io + TailwindCSS + Daisy UI
-  Authentication && Authorization with JWT
-  Real-time messaging with Socket.io
-  Online user status
-  Global state management with Zustand
-  Error handling both on the server and on the client
-  At the end Deployment like a pro for FREE!
-  And much more!

### Setup .env file

```js
MONGODB_URI=...
PORT=5001
JWT_SECRET=...

CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...

NODE_ENV=development
```

### Build the app

```shell
npm run build
```

### Start the app

```shell
npm start
```
