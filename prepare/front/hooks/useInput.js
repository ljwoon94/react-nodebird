import { useState, useCallback } from 'react';

export default (initValue = null) => {
    const [value, setter] = useState(initValue);
    const handler = useCallback((e) => {
        setter(e.target.value);
    }, []);
    return [value, handler, setter];
};

// import { useState, useCallback } from 'react';

// const useInput = (initialValue = null) => {
//     const [value, setValue] = useState(initialValue);
//     const handler = useCallback((e) => {
//         setValue(e.target.value);
//     }, []);
//     return [value, handler, setValue];
// }

// // 커스텀 훅으로 계속 반복되는 코드를 만들어둠
// export default useInput;