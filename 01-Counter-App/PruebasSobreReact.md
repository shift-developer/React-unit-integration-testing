[Volver al Readme principal](../README.md)

# Prueba sobre componentes de React

Utilizando Jest precargado en create-react-app:

```javascript
import React from 'react';
import {render} from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';

describe("Pruebas en <PrimeraApp/>", () => {
    test("Debe de mostrar el mensaje 'Hola Soy Juan'", () => {

        const saludo = "Hola soy Juan";
        const {getByText} = render(<PrimeraApp saludo={saludo}/>)

        expect(getByText(saludo)).toBeInTheDocument();

    })
})
```




# Enzyme - Testing unit

La recomendación es usar [Enzyme](https://enzymejs.github.io/enzyme/) en vez de Jest, junto con [Enzyme-to-JSON](https://github.com/adriantoine/enzyme-to-json).

```javascript
// setupTests.js
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {createSerializer} from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

```

En el caso de estar usando React ^17.0.0 tenemos que usar un adapter.
[Enzyme React adapter v 17](https://github.com/wojtekmaj/enzyme-adapter-react-17).


```javascript
// setupTests.js
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'; // modificamos esto

import {createSerializer} from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));
```

Al escribir nuestra prueba
```javascript
import React from 'react';
import {shallow} from 'enzyme'
import '@testing-library/jest-dom';

import PrimeraApp from '../PrimeraApp';

describe("Pruebas en <PrimeraApp/>", () => {
    test("Debe mostrar <PrimeraApp/> correctamente", () => {

        const saludo = "Hola soy Juan";
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>);

        expect(wrapper).toMatchSnapshot();

    })
})
```

Vamos a notar que se genera una carpeta dentro de tests llamada **__snapshots__** donde vamos a encontrar el JSON del componente renderizado usada en **_expect(wrapper).toMatchSnapshot();_**

