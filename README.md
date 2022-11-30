<h2>Motivation</h2>
Play with vitest for next.js


<h2>Setup</h2>

cmd project root
```
npm i -D vitest @testing-library/jest-dom @testing-library/react @testing-library/user-event
```


package.json
add under scripts
```json
    "test": "vitest",
    "coverage": "vitest run --coverage"
```