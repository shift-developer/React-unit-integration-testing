[Volver al Readme principal](../README.md)

# Primera prueba

Un patrón de diseño recomendado para la estructura de las carpetas es el siguiente:

```
src
 |_ components o cualquier otra carpeta
 |_ tests
      |_ demo.test.js
```

La razón de hacerlo en una carpeta por separado es para facilitar el trabajo al desarrollador.

Como vamos a estar trabajando con un proyecto de React, vamos a clonar el siguiente:
[React Counter App](https://github.com/shift-developer/Counter-React-App)

Vamos a poder observar en el package.json de la raiz del proyecto lo siguiente:

```
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
}
```

**react-scripts test** viene con React y lo podemos ejecutar usando el comando

```
npm run test
```

Este comando nos viene precargado para hacer pruebas con [Jest](https://jestjs.io/) en React.

Antes de correr el comando escribimos el primer test básico que no tiene condición para ver como trabaja Jest.

Dentro del archivo demo.test.js escribimos:

```javascript
    test( 'Este string es el nombre del test', () => {})
```

Ejecutamos el comando para correr el test y obtenemos lo siguiente:

```
 PASS  src/tests/demo.test.js
  ✓ Este string es el nombre del test (1ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.655s
Ran all test suites related to changed files.

Watch Usage
 › Press a to run all tests.
 › Press f to run only failed tests.
 › Press q to quit watch mode.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press Enter to trigger a test run.
```

Estas opciones que podemos ver en la parte inferior de la CLI (Command Line Interface) son sumamentes útiles.

