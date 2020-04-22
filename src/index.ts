import React, { useState, SetStateAction } from 'react';

export const useResettableState = <T>(
    initialState: T
): [T, () => void, React.Dispatch<SetStateAction<T>>] => {
    const [state, setState] = useState<T>(initialState);

    const resetState = () => setState(initialState);

    return [state, resetState, setState];
};
