# React-Hooks-Tutorial

This project was generated with [Create React App](https://reactjs.org/docs/create-a-new-react-app.html) is a tool (built by developers at Facebook) 

## Give a Star! :star:
If you like or are using this project to learn or start your solution, please give it a star. Thanks!

## Table of Contents

- [About React Hooks](#About-React-Hooks)
- [Sending Feedback](#sending-feedback)
- Sample application with each labs
    - Introduction
        - [Lab 1 - Running first react application](#Lab-1---Running-first-react-application)
    - [useState Hook](#useState-Hook)
        - [Lab 2 - useState Hook](#Lab-2---useState-Hook)
        - [Lab 3 - useState with previous state](#Lab-3---useState-with-previous-state)
        - [Lab 4 - useState with object](#Lab-4---useState-with-object)
        - [Lab 5 - useState with array](#Lab-5---useState-with-array)
    - [useEffect Hook](#useEffect-Hook)
        - [Lab 6 - useEffect Hook](#)
        - [Lab 6 - useEffect after render](#)
        - [Lab 7 - conditional run effects](#)
        - [Lab 8 - run effects only once](#)
        - [Lab 9 - run effects with cleanup](#)
        - [Lab 10 - run effects with incorrect deps](#)
        - [Lab 11 - run effects fetching data 1](#)
        - [Lab 12 - run effects fetching data 2](#)
        - [Lab 13 - run effects fetching data 3](#)
    - useContext 

## About React Hooks

Hooks are a new feature additiona in React version 16.8 which allow you to use React features without having to write a class

Previously we have to use state only in Class component
Hooks works on functional component and cannot be use inside class component

### Why Hooks?

#### Rules 1
* Understanding how **this** keyword works in Javascript
* Remember to bind event handlers in class components
* Classes don't minify very well and make reloading unreliable

#### Rules 2
* Stateful component logic can't be reuse
* HOC and render props patterns solve above problem but complex coding

#### Rules 3
* Related code is not organised in Class component, for complex scenarios such as data fetching and subscribing to events
* eg: Data fetching - In componentDidMount and sometimes in componentDidUpdate
* eg: Event listeners - subscribe in componentDidMount and unsubscribe in componentWillUnmount
* Because of this logic it cannot be breakdown into smaller logic

## Prerequisite to react-hook

*  Knowledge on basic react <br/>
*  Install Node and npm latest version <br/> 
*  Install Visual Studio Code <br/>

## Feedback

Having any issues or troubles getting started? Drop a mail to amit.naik8103@gmail.com or [Raise a Bug or Feature Request](https://github.com/Amitpnk/React-Hooks-Tutorial/issues/new). Always happy to help.

## Sample application with each labs

### Lab 1 - Running first react application

#### Prerequisite 

Knowledge on basic react <br/>
Functional and class components, props, state, etc

To create a project, run below command line prompt

```
// For creating react application
$ npx create-react-app react-hook-tutorial

// For changind directory to other folder
$ cd customer-app

// To open application in VS code editor  
$ code .

// To run application
$ npm run start

```

## useState Hook

useState hook lets you add state to function components

### Lab 2 - useState Hook

* Call Hooks at top level (not inside loops, conditions or nested functions)
* Call hooks form react functions only


 Below type is Array destructuring in es6 
```js
const [count, setCount] = useState(0);
```

```js
import React, { useState } from 'react'

function HookCounter() {

    const [count, setCount] = useState(0);

    return (
        <div>
            <div>Functional component</div>
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
        </div>
    )
}

export default HookCounter

```

### Lab 3 - useState with previous state


```js
import React, { useState } from 'react'

function HookCounterPrevious() {
    const initialState = 0;
    const [count, setCount] = useState(initialState);

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            // setCount(count + 1)
            setCount(prevCount => prevCount + 1)

        }
    }

    return (
        <>
            Count: {count}
            <button onClick={() => setCount(initialState)} >Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)} >Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)} >Decrement</button>
            <button onClick={incrementFive} >Increment five</button>
        </>
    )
}

export default HookCounterPrevious

```
### Lab 4 - useState with object

* Use spread operator while using object

```jsx
import React, { useState } from 'react'

function HookCounterObject() {
    const [name, setName] = useState({ firstName: '', lastName: '' });
    return (
        <form>
            <input type="text" value={name.firstName} onChange={e => setName({ ...name, firstName: e.target.value })} />
            <input type="text" value={name.lastName} onChange={e => setName({ ...name, lastName: e.target.value })} />
            <h2>Your first name is - {name.firstName}</h2>
            <h2>Your last name is - {name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2>
        </form>
    )
}

export default HookCounterObject
```

### Lab 5 - useState with array

```jsx
import React, { useState } from 'react'

function HookCounterArray() {

    const [items, setItems] = useState([]);


    const addItem = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }

    return (
        <div>
            <button onClick={addItem} >Add number</button>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.value}</li>
                ))}

            </ul>
        </div>
    )
}

export default HookCounterArray
```