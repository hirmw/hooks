import {useState} from "react";

export const useForm = initialValues => {
    const [values, setValues] = useState(initialValues)

    
    return [
        values, e => {
            //when setvalues is called just function out the event no need for parameters
            setValues(e.target.value);
    }
    ];
};