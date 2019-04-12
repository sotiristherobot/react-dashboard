import React from 'react';
import Login from './Login';
import { createMount } from '@material-ui/core/test-utils';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<Login/>', () => {
  let mount;

  beforeEach(() => {
    mount = createMount();
  });

  afterEach(() => {
    mount.cleanUp();
  });

  it('should work', () => {
    const wrapper = mount(<Login/>)
  });

  it('should contain 2 text fields and a button', () => {
    const wrapper = mount(<Login/>);
    expect(wrapper.find('TextField').length).toBe(2);
    expect(wrapper.find('Button').length).toBe(1);
  });
});
