import { act, renderHook } from '@testing-library/react-hooks';
import { useCustomHookSpec } from './useCustomHook';

const setUp = () => renderHook(() => useCustomHookSpec<number>(0));

describe('useCustomHookSpec hook', () => {
  let wrapper: ReturnType<typeof setUp>;
  beforeEach(() => {
    wrapper = setUp();
  })
  it('начальное значение должно равняться 0', () => {
    expect(wrapper.result.current.value).toBe(0);
  });
  it('значение должно поменяться на 10 через 1.1с', async () => {
    wrapper.result.current.setByTimeOut(10, 1000);
    await wrapper.waitForNextUpdate({ timeout: 1100 });
    expect(wrapper.result.current.value).toBe(10);
  });
});
