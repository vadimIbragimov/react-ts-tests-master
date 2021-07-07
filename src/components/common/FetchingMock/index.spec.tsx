import React from 'react';
import { shallow, render, mount } from 'enzyme';
import { MockedProvider,  } from '@apollo/client/testing';
import { FetchingMock, GET_TEXT_QUERY } from './index';
import { act } from 'react-dom/test-utils';

const mocks = [
  {
    request: {
      query: GET_TEXT_QUERY,
      variables: {
        name: 'qwe'
      }
    },
    result: {
      data: {
        getText: {
          text: 'qweqwe'
        }
      }
    }
  }
];

describe('FetchingMock component', () => {
  it('должен загружаться текст', async () => {
    const component = await mount(
      <MockedProvider mocks={mocks}>
        <FetchingMock />
      </MockedProvider>
    );
    await act(() => new Promise(resolve => setTimeout(resolve)));
    expect(component.find('span').text()).toEqual('qweqwe');
  });
});
