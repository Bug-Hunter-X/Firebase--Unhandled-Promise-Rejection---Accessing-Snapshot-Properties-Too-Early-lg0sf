# Firebase Snapshot Property Access Before Load

This repository demonstrates a common error when working with Firebase document snapshots: attempting to access properties before the data has fully loaded. This often results in unexpected `undefined` values or errors.

The `bug.js` file shows the problematic code. The `bugSolution.js` file demonstrates the correct approach using promises or async/await for handling asynchronous operations.

**Problem:** Asynchronous operations in JavaScript don't guarantee immediate results.  If you attempt to access a snapshot's properties immediately after fetching data, the properties might not yet be populated. 

**Solution:**  Always handle Firebase asynchronous operations properly, ensuring data is loaded before accessing properties. Use `.then()` for promises or `async/await` for a more readable approach.