# React resettable state

## About the project

Do you ever was in the situation where you want to reset your React.js state?

This project got you covered!

## How to use?

Now you want to see this small package in action? No problem!

1. Install the package:

-   npm: `npm i react-resettable-state`
-   yarn: `yarn add react-resettable-state`

2. Import the package

```js
const { useResettableState } = require('react-resettable-state');
```

3. Use the package

```jsx
const App = () => {
    const [counter, resetCounter, setCounter] = useResettableState(0);

    return (
        <div>
            <div>Counter: {counter}</div>
            <button
                onClick={() => setCounter((currentCount) => currentCount + 1)}
            >
                Increment
            </button>
            <button onClick={resetCounter}>Reset</button>
        </div>
    );
};
```

## Typings?

Since this package is written in TypeScript it also ships with type definitions!

It doesn't matter if you are using JavaScript or TypeScript directly, any good IDE will show the type hints for this custom hook.
