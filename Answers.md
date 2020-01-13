1. What problem does the context API help solve?

Prop drilling. Data can be stored on a context object and retrieved within components.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store contains the state for the entire application. State is never changed directly within the store. Reducers are pure functions that take in two arguments and return a newly-updated state object. Actions inform the reducer what changes have occurred (type) and what to update on state (payload).

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is available for the entire application, while component state is created within the specific component and can be passed down, but not up. A good use of application state is having a component that updates state, and this change is reflected elsewhere in the application (that is not a child component).

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Middleware (redux-thunk is a type) allows us to perform asynchronous operations in redux by intercepting actions returned by the action creator and dispatching one or more different actions to the reducer.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Writing redux requires more lines of code than just passing props where needed, but I like the way it forces you to stay organized. It's helpful to have actions and reducers (and state) nicely contained.
