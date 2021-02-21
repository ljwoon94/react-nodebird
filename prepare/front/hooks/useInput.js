import { useState, useCallback } from 'react';

export default (initialValue = null) => {
    const [value, setValue] = useState(initialValue);
    const handler = useCallback((e) => {
        setValue(e.target.value);
    }, []);
    return [value, handler];
}

// 커스텀 훅으로 계속 반복되는 코드를 만들어둠