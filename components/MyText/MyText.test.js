import renderer from 'react-test-renderer';
import React from 'react';

import MyText from './MyText';

it('renders correctly', () => {
    const tree = renderer
        .create(
            <MyText />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
