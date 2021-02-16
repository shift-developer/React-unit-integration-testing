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