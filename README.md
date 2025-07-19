React Redux is a state management library. It helps manage and centralize the application state for large-scale React apps.
Redux follows a unidirectional data flow:

UI Component → calls → Action

Action → goes to → Reducer

Reducer → updates the Store

UI Component subscribes to the Store and re-renders



Redux Usage – 3 Key Points:
Centralized State Management
Redux keeps all app data (like user info, cart items, settings) in one global store.

Avoids Prop Drilling
Components can access and update state directly without passing props through many levels.

Predictable State Updates
State changes happen through pure functions (reducers), making the app easier to debug and test.



Add:Action and state
<img width="1115" height="633" alt="image" src="https://github.com/user-attachments/assets/a2312239-74aa-4698-8077-53f29df1dc72" />
<img width="806" height="704" alt="image" src="https://github.com/user-attachments/assets/76fe017e-9cc1-4a8f-b4c9-7f1fa801fbc7" />


Delete:
<img width="1692" height="475" alt="image" src="https://github.com/user-attachments/assets/a021e5d2-c4ff-4bb1-92f4-6144d8be3cac" />


