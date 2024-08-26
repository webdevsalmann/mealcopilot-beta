import React from 'react';
import { Label } from '../label';
import { Input } from '../input';
import { Textarea } from '../textarea';

const FormInput = React.forwardRef(({
    label,
    textarea = false,
    required = false,
    type = "text",
    id,
    placeholder,
    error,
    ...props
}, ref) => {
    return (
        <div className="space-y-1">
            <Label htmlFor={id}>
                {label} {required && <span className="text-destructive">*</span>}
            </Label>
            {textarea
                ? <Textarea
                    className="w-full"
                    ref={ref}
                    type={type}
                    id={id}
                    name={id}
                    placeholder={placeholder}
                    {...props}
                    />
                    : <Input
                    ref={ref}
                    type={type}
                    id={id}
                    name={id}
                    placeholder={placeholder}
                    {...props}
                />
            }
            {error && <p className="text-destructive text-sm font-medium">{error}</p>}
        </div>
    );
});

FormInput.displayName = 'FormInput'; // Set displayName for better debugging

export default FormInput;
