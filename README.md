# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).


## How to Run Locally

1. Clone the repository:

```bash
git clone <your-repo-link>
cd <project-folder>
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Run on device/emulator:

* Press `a` for Android emulator
* Press `w` for web
* Scan the Expo QR code using the Expo Go app on your phone

---

## Key Technical Decisions

* Used React Native with Expo for faster development and easier cross-platform support.
* Organized the project into reusable components to keep the code maintainable and scalable.
* Used REST APIs for data communication between frontend and backend services.
* Chose a simple and clean UI approach to prioritize usability and faster performance.
* Implemented modular folder structure for better readability and future expansion.

---

## What’s Incomplete and Why

* Some advanced UI polish and animations are incomplete due to limited development time.
* Error handling for a few edge cases can still be improved.
* Authentication and persistent backend storage are partially implemented/not fully production-ready.
* Testing coverage is limited because priority was given to building the core functionality first.

---

## One Thing I Would Do Differently With More Time

With more time, I would improve the overall architecture by adding a more scalable state management solution, stronger backend integration, and a complete testing setup to make the application more production-ready and easier to maintain long term.


## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

### Other setup steps

- To set up ESLint for linting, run `npx expo lint`, or follow our guide on ["Using ESLint and Prettier"](https://docs.expo.dev/guides/using-eslint/)
- If you'd like to set up unit testing, follow our guide on ["Unit Testing with Jest"](https://docs.expo.dev/develop/unit-testing/)
- Learn more about the TypeScript setup in this template in our guide on ["Using TypeScript"](https://docs.expo.dev/guides/typescript/)

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
