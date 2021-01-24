/*
    Creating custom input hook
*/

import { useState } from "react";
export const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    return {
        value, // Value of the current state
        setValue, // Update State Method
        reset: () => setValue(""), // Reset Method
        bind: { 
            value,
            onChange: event => {
                setValue(event.target.value);
            }
        }
    }
}