# Mechanical Keyboard Switch Tier List

A simple, interactive web app for creating and sharing your own mechanical keyboard switch tier lists. Built with plain HTML, CSS, and JavaScript, and powered by Firebase Realtime Database for dynamic switch data.

## Features
- Drag-and-drop tier list for mechanical keyboard switches
- Searchable switch pool with images
- Export your tier list as an image
- Data loaded from Firebase Realtime Database

## Getting Started

### 1. Clone the Repository
```sh
# Using git
git clone <your-repo-url>
cd tieringSwitches
```

### 2. Set Up Firebase
- Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
- Enable Realtime Database and set your database rules (see below for recommended rules).
- Add your switch data to the `/switches` path in the database. Example structure:

```
/switches
  |- switch1
      |- name: "Gateron Red"
      |- img: "https://..."
  |- switch2
      |- name: "Kailh Box Jade"
      |- img: "https://..."
  ...
```

### 3. Configure Your Firebase Credentials
Create an `env.js` file in the project root with your Firebase config:

```js
window.ENV = {
  FIREBASE_API_KEY: "your-api-key",
  FIREBASE_AUTH_DOMAIN: "your-auth-domain",
  FIREBASE_PROJECT_ID: "your-project-id",
  FIREBASE_APP_ID: "your-app-id",
  FIREBASE_DATABASE_URL: "your-database-url"
};
```

> **Note:** Do not share your `env.js` publicly. The config is safe for client-side use, but keep your project private if you wish.

### 4. Run the App Locally
Just open `index.html` in your browser. No build step or server required!

## Usage
- Drag switches from the right panel into the tier slots.
- Use the search bar to filter switches.
- Click "Export as Image" to save your tier list as a PNG.
- Click "Reset" to clear your tier list.

## Deployment
You can deploy this app as a static site. Here are some easy options:

### GitHub Pages
1. Commit your code (including `env.js` with your config).
2. Push to GitHub.
3. In your repo settings, enable GitHub Pages for the `main` branch.

### Netlify / Vercel / Firebase Hosting
- Drag and drop your folder (with `index.html`, `env.js`, etc.) into the provider's dashboard.
- Or use their CLI tools to deploy.

## Recommended Firebase Realtime Database Rules
```json
{
  "rules": {
    ".read": true,
    ".write": "auth != null"
  }
}
```
- Anyone can read switch data.
- Only authenticated users can write (edit/add switches).

## License
MIT

---

Enjoy making and sharing your own keyboard switch tier lists!
