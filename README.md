# Deliveroo Clone with REACT NATIVE!

![](https://img.shields.io/badge/Made%20with-React_Native-orange?style=for-the-badge&logo=React)



### :space_invader: Tech Stack

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://#/">Javascript</a></li>
    <li><a href="https://docs.expo.dev/workflow/expo-cli">Expo</a></li>
    <li><a href="https://reactnative.dev">React Native</a></li>
     <li><a href="https://tailwindcss.com/">TailwindCSS</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://www.sanity.io">Sanity</a></li>
  </ul>
</details>

<br />

<a href="#facebook"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="Facebook" width="30" height="30" /></a>
<a href="#instagram"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="Instagram" width="30" height="30" /></a>
<a href="#"><img src="https://user-images.githubusercontent.com/99184393/183095729-0ae04014-a62c-4013-93ff-6861fbff308e.png" alt="" width="30" height="30" /></a>
<a href="#"><img src="https://user-images.githubusercontent.com/99184393/179383376-874f547c-4e6f-4826-850e-706b009e7e2b.png" alt="" width="30" height="30" /></a>
<a href="#google"><img src="https://raw.githubusercontent.com/atulmy/oauth/master/web/public/images/social/google.svg" alt="Google" width="30" height="30" /></a>
<a href="#google"><img src="https://user-images.githubusercontent.com/99184393/180461713-76c02155-35f5-497e-b3a3-364fec13da39.png" alt="Google" width="30" height="30" /></a>
<a href="#google"><img src="https://user-images.githubusercontent.com/99184393/180462270-ea4a249c-627c-4479-9431-5c3fd25454c4.png" alt="Google" width="30" height="30" /></a>
<a href="#github"><img src="https://user-images.githubusercontent.com/99184393/182531543-22e5cec1-bf41-444c-80b0-c2b7205b99ca.png" alt="GitHub" width="30" height="30" /></a>
<a href="#github"><img src="https://user-images.githubusercontent.com/99184393/182531694-325c7651-c586-4b79-9304-9b7d39fd2a95.png" alt="GitHub" width="30" height="30" /></a>
<a href="#github"><img src="https://user-images.githubusercontent.com/99184393/182531879-62dd069e-d5aa-456c-874e-fb5303a5fa3c.png" alt="GitHub" width="30" height="30" /></a>
<a href="#github"><img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="GitHub" width="30" height="30" /></a>
<a href="#github"><img src="https://raw.githubusercontent.com/atulmy/oauth/master/web/public/images/tech/github.svg" alt="GitHub" width="30" height="30" /></a>
<a href="#github"><img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c520.png" alt="GitHub" width="30" height="30" /></a>


<!-- Screenshots -->
### :camera: Screenshots

 <hr />
<div style="display: inline_block" align="center"><br>
 <img align="center" alt="React"  width="180" src="https://user-images.githubusercontent.com/102186472/191342932-010013ae-990c-49cf-8d50-6f2d49d0732b.jpeg">
  <img align="center" alt="React"  width="180" src="https://user-images.githubusercontent.com/102186472/191343184-cce775d5-c350-4991-8aa6-24d78c64bbf9.jpeg">
  <img align="center" alt="React"  width="180" src="https://user-images.githubusercontent.com/102186472/191343237-628bb42e-cc65-459e-9067-bf58b794f4dd.jpeg">
    <img align="center" alt="React"  width="180" src="https://user-images.githubusercontent.com/102186472/191343349-a6a34daa-7aac-4d8f-b7ce-e9ca52cd6220.jpeg">
</div>

<br />

![](https://img.shields.io/badge/Deliveroo-00CCBC?style=for-the-badge&logo=Deliveroo&logoColor=white)

<br />

<hr />


![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)
![forthebadge](https://forthebadge.com/images/badges/for-you.svg)
![forthebadge](https://forthebadge.com/images/badges/powered-by-coffee.svg)

## 	:toolbox: Getting Started
### :bangbang: Prerequisites
- Sign up for a Sanity account <a href='https://www.sanity.io'>HERE</a>
- Install Node JS in your computer <a href='https://nodejs.org/en/'>HERE</a>

### :gear: Installation

![](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

Install my-project with expo

![](https://img.shields.io/badge/Expo-02569B?style=for-the-badge&logo=Expo&logoColor=white)

 Installing Expo CLI

```
npm install --global expo-cli
```
Initializing the project
```
npx create-expo-app deliveroo-clone 
```
```
cd deliveroo-clone
```

Install dependencies

### Setup Tailwind CSS

![](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

```
npm install tailwindcss-react-native
npm install --save-dev tailwindcss
```
Tailwindcss requires a ``tailwind.config.js`` file with the content section configured to include the paths to all of your components and any other source files that contain Tailwind class names.
```
// tailwind.config.js
module.exports = {
  content: [
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  // ...
};
```
Add ``TailwindProvider`` at the top level of your application. The ``TailwindProvider`` creates the context for reactive styles and the atomic style objects.
```
import { TailwindProvider } from "tailwindcss-react-native";

function MyAppsProviders({ children }) {
  return <TailwindProvider>{children}</TailwindProvider>;
}
```
##### Configure your babel.config.js
```
// babel.config.js
module.exports = {
  plugins: ["tailwindcss-react-native/babel"],
};
```

Install dependencies

<a href="https://github.com/cristianoprogramador/Deliveroo-clone/blob/main/package.json" target="_blank">🔶 Dependency Info</a>

<!-- Run Locally -->
### :running: Run Locally

![](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)

Clone the project

```bash
  git clone https://github.com/cristianoprogramador/Deliveroo-clone.git
```

Install dependencies

```bash
  npx expo install
```
Start the server

```bash
  npx expo start
```

<hr />

### Creating a Build
- Optimize the assets for speed - ``npx expo-optimize`` (formerly expo optimize)
- Bundle the project for production - ``npx expo export:web`` (``expo build:web`` in the legacy Expo CLI).
- Creates a production ready static bundle in the ``web-build/`` directory. Don't edit this folder directly.
- If you make any changes to your project, you'll need to re-build for production.
- For more help use ``npx expo export:web --help``
- <a href="https://docs.expo.dev/eas" target="_blank">More Info</a>

<!-- Deployment -->
### :triangular_flag_on_post: Deployment

To deploy this project run

#### Expo Publish

![](https://img.shields.io/badge/Expo-02569B?style=for-the-badge&logo=Expo&logoColor=white)

publish your project

```
expo publish
```
