# Learning-Redux
#### Created with CodeSandbox

[React-Redux](https://react-redux.js.org/introduction/getting-started) is an open-source JavaScript library for managing and centralizing application states.

## Basics

### Action:
It is a plain Javascript object that has got two properties: 
```bash
{
   type: "counter/incrementByAmount",
   payload: 2
}
```
- "counter" points to the feature or category name.
- "incrementByAmount" points to the specific thing that is happening.

### Reducer:
It is a function that receives the current state and an action object and decides how to update the state if necessary.

#### Rules
- They should only calculate the new state value based on the state and action argument.
- They are not allowed to modify the existing state. Instead, they should make an immutable update (it makes a copy of the current object/array and modifies the copies).
- They must not do any asynchronous logic, calculate random values or cause other side effects.

### Store:
The current Redux application state lives in an object called the store.
It has a method called "getState()" that returns the current state value.
```bash
Store.getState();
```

### Dispatch:
The only way to update the store is to call dispatch() and pass in an action object. you can consider it as "Triggering an event".

### Selectors:
They are functions that know how to extract specific pieces of information from a store state value.
