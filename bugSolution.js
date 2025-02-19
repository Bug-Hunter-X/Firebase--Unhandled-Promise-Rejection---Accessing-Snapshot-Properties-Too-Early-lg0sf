```javascript
// bug.js (Incorrect)
db.collection('users').doc('someID').get().then((snapshot) => {
  console.log(snapshot.data().name); // Potential error if data is not loaded yet
});


// bugSolution.js (Correct)
db.collection('users').doc('someID').get().then((snapshot) => {
  if (snapshot.exists) {
    console.log(snapshot.data().name); 
  } else {
    console.log('No such document!');
  }
});

// Or using async/await
async function getData() {
  const snapshot = await db.collection('users').doc('someID').get();
  if (snapshot.exists) {
    console.log(snapshot.data().name);
  } else {
    console.log('No such document!');
  }
}
getData();
```