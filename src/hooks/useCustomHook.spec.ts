import { act, renderHook } from '@testing-library/react-hooks';
import { useCustomHookSpec } from './useCustomHook';

const setUp = () => renderHook(() => useCustomHookSpec<number>(0));

describe('useCustomHookSpec hook', () => {
  let renderedHook: ReturnType<typeof setUp>;
  beforeEach(() => {
    renderedHook = setUp();
  })
  it('начальное значение должно равняться 0', () => {
    expect(renderedHook.result.current.value).toBe(0);
  });
  it('значение должно поменяться на 10 через 1.1с', async () => {
    renderedHook.result.current.setByTimeOut(10, 1000)
    // await act(() => {
    //
    //   return new Promise(resolve => setTimeout(resolve, 1000))
    // });
    await renderedHook.waitForNextUpdate({ timeout: 1100 });
    expect(renderedHook.result.current.value).toBe(10);
  });
});
