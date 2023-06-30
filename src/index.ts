import React, { useState, SetStateAction, useCallback } from 'react';

export const useResettableState = <T>(
    initialState: T
): [T, () => void, React.Dispatch<SetStateAction<T>>] => {
    const [state, setState] = useState<T>(initialState);

    const resetState = useCallback(() => setState(initialState), [initialState])

    return [state, resetState, setState];
};
