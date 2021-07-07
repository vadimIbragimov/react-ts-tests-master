import React, { ReactChildren, useContext } from 'react';
import { act, renderHook, WrapperComponent } from '@testing-library/react-hooks';
import { SomeContext, SomeContextProvider, setSomeValue } from './index';

const setUp = (wrapper: WrapperComponent<any>) => renderHook(
  () => useContext(SomeContext), { wrapper: wrapper }
);

describe('useCustomHookSpec hook', () => {
  let renderedHook: ReturnType<typeof setUp>;
  beforeEach(() => {
    renderedHook = setUp(SomeContextProvider);
  });
  it('начальное значение должно равняться undefinded', () => {
    expect(renderedHook.result.current.state.someValue).toBeUndefined();
  });
  it('значение должно поменяться на "Qwe" после диспатча', async () => {
    // act(() => renderedHook.result.current.dispatch?.(setSomeValue('Qwe')));
    renderedHook.result.current.dispatch?.(setSomeValue('Qwe'));
    await new Promise(resolve => setTimeout(resolve));
    expect(renderedHook.result.current.state.someValue).toEqual('Qwe');
  });
});
