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

** react-scripts test ** viene con React y lo podemos ejecutar usando el comando

```
npm run test
```

Este comando nos viene precargado para hacer pruebas con [Jest](https://jestjs.io/) en React.
