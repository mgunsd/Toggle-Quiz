# Toggle Quiz Component Demo App

## [DEMO](https://mgunsd.github.io/Toggle-Quiz-Card/)

## Features

- [x] Quiz data and state managed by context sys. It fetches data from local json, ready to make an external http req to get data from remote.
- [x] the component is reusable, can handle different options, and the number of options changing.

<details><summary><h3>Log</h3></summary>

- `npx create-react-app toggle-quiz typescript`
- `yarn add styled-components`
- `yarn add @types/styled-components gh-pages --dev`

```
"compilerOptions": {
  ...
    "baseUrl": "src"
  },
```

- `git commit -am "Project started based on CRA-typescript"`
- `git commit -am "Absolute path configured at tsconfig.json"`
- `git commit -m "Helper packages and devDependencies installed: styled-components gh-pages"`
- `git commit -m "Reusable containers constructed"`
- `git commit -m "Quiz Context & Theme Context constructed"`
- `git commit -m "Data quiz.json handled by QuizContext"`
- `git commit -m "Toggle switch animation featute added"`

</details>

<details><summary><h3>Task Detail</h3></summary>

## Coding Task

The task is to make a component using React. I video of how the component should work is attached.
The link to the zeplin project is here (you can use this to get styles for the component):[link](zpl.io/aR3rr0b)

### Requirements:

- [x] the component should be responsive down to 320px

- [x] some form of type checking should be used e.g. flow, propTypes, typescript

- the solution should lock once the correct answer is reached so the toggles can no longer be switched

- [x] the component should be reusable i.e. It should be designed so it can easily support the data presented changing e.g. a different scenario in which the question is: "What are the ideal conditions inside an office?" With toggle options of, for instance, (good pay, bad pay). (lot of meetings, less meetings), (free coffee, expensive coffee), (bear in office, dog in office). I.e. the options, and the number of options changing.
- [x] Ignore the navbar or footer just the toggles component itself
- [x] the toggles should animate between the two states (see attached video)
- [x] the background color should change in proportion to how "correct" the answer is (see video attached)

</details>

<details>
<summary> <h2>How to Run ?</h2>
</summary>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

</details>
