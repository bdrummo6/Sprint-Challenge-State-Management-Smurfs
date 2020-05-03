1. What problem does the context API help solve?

The context API allows us to share certain data between components that is harder to pass down in the typical top-down way by using props.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known
 as a 'single source of truth' in a redux application?
 
- actions: Actions are methods that dispatch types of actions to the reducer so that the reducer function can 

- reducers: Reducers are functions that take two arguments – the current state and action – and return a new, updated state object based on both arguments.

- store: Everything that changes within your application is represented by a single JavaScript Object known as the store. The store contains our state for our application.

- The store is that 'single source of truth' in a redux application, because it is the location where the state data for an entire application is held and updated.  
 
3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is the state data for an entire application's data, but component state is just the current state data within a component. 
Application state is good to use for large applications with many components. 

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

`redux-thunk` is a middleware that provides the ability to handle asynchronous operations inside our action creators.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

- My favorite state management system is redux, because it is a pretty simple way to manage the state data of an application
in one location the redux store.
