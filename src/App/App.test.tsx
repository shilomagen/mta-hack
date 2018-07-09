import {mount} from 'enzyme';
import * as React from 'react';
import {App} from './App';

describe('Application starter', () => {
  const wrapper = mount(<App/>);
  const titleText = wrapper.find('[data-hook="app-title"]').text();
  expect(titleText).toBe('MTA Hack');
});