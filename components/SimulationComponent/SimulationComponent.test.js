import renderer from 'react-test-renderer';
import React from 'react';

import SimulationComponent from './SimulationComponent';

it('renders correctly', () => {
    const tree = renderer
        .create(
            <SimulationComponent />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
