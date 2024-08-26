import React from 'react';
import { Label } from '../label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const FormSelect = React.forwardRef(({
    label,
    required = false,
    id,
    placeholder = "Select",
    items = [],
    error,
    onValueChange,
    value,
    ...props
}, ref) => {
    return (
        <div className="space-y-1">
            <Label htmlFor={id}>
                {label} {required && <span className="text-destructive">*</span>}
            </Label>
            <Select
                ref={ref}
                onValueChange={onValueChange}
                value={value}
                name={id}
                {...props}
            >
                <SelectTrigger>
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    {items.map((item) => (
                        <SelectItem value={item} key={item + id}>
                            {item}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            {error && <p className="text-destructive text-sm font-medium">{error}</p>}
        </div>
    );
});

FormSelect.displayName = 'FormSelect';

export default FormSelect;
