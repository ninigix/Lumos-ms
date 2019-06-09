import renderer from 'react-test-renderer';
import React from 'react';

import IconButton from './IconButton';

it('renders correctly', () => {
    const tree = renderer
        .create(
            <IconButton />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
