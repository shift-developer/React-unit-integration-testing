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
"dependencies": {
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.3.2",
    "@testing-library/user-event": "^7.1.2",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "react-scripts": "3.4.1"
  },
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

Este comando nos viene precargado para hacer pruebas con [Jest](https://jestjs.io/) en React y podemos ver que toda la lógica ya viene instalada en las dependencies.

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

###### Agreguemos un error a nuestro test:

```javascript
    test( 'Debe ser true', () => {
        const isActive = false;

        if(!isActive) {
            throw new Error("No está activo");
        }

    })
```

Al forzar el error veamos como responde Jest:

```
 FAIL  src/tests/demo.test.js
  ✕ Debe ser true (1ms)

  ● Debe ser true

    No está activo

      4 |
      5 |     if(!isActive) {
    > 6 |         throw new Error("No está activo");
        |               ^
      7 |     }
      8 |     
      9 | })

      at Object.<anonymous> (src/tests/demo.test.js:6:15)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        0.595s, estimated 1s
Ran all test suites related to changed files.

Watch Usage: Press w to show more.
```

## Expect - toBe

```javascript
describe("Prueba 1", () => {
     test("Deben de ser iguales los string", () => {

        // 1. Inicialización
        const mensaje = "Hola mundo";

        // 2. Estímulo
        const mensaje2 = `Hola mundo`;

        // 3. Observar el comportamiento
        expect(mensaje).toBe(mensaje2);
        

    })
})
   
```


## toEqual

```javascript
    import '@testing-library/jest-dom'; 
    // nos permite visualizar todas las funciones que tenemos disponibles en Jest con ayuda de VS Code

    import { getUser } from '../ejemplo/funcion';

    describe("Pruebas en funciones", () => {
        test("getUser debe retornar un objeto", () => {

            const userTest = {
                id: 1,
                user: "Prueba01"
            };

            const user = getUser();

            expect(user).toEqual(userTest);
        })
    })


```


[Pruebas sobre React](./PruebasSobreReact.md)