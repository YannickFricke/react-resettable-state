import { useResettableState } from '..';
import { renderHook, act } from '@testing-library/react-hooks';

describe('useResettableState', () => {
    it('should return the initial state', () => {
        const {
            result: {
                current: [state],
            },
        } = renderHook(() => useResettableState(0));

        expect(state).toBe(0);
    });

    it('should reset the state', () => {
        const { result } = renderHook(() => useResettableState(0));

        let [state, resetState, setState] = result.current;

        expect(state).toBe(0);

        act(() => {
            setState(1);
        });

        state = result.current[0];

        expect(state).toBe(1);

        act(() => {
            resetState();
        });

        state = result.current[0];

        expect(state).toBe(0);
    });
});
