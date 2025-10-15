import { Select } from 'antd';
import { useState } from 'react';

interface SelectFieldProps {
    value?: string | null;
    onChange?: (value: string) => void;
}

export default function SelectField({ value: controlledValue = null, onChange }: SelectFieldProps) {
    const [internalValue, setInternalValue] = useState<string | null>(null);
    const value = controlledValue !== null ? controlledValue : internalValue;

    const handleChange = (val: string) => {
        if (onChange) onChange(val);
        else setInternalValue(val);
    };

    return (
        <Select
            showSearch
            placeholder="Select your city"
            optionFilterProp="label"
            onChange={handleChange}
            value={value ?? undefined}
            className="w-60 border-2 border-[#000] text-bold"
            options={[
                { value: 'Pavlodar', label: 'Pavlodar' },
                { value: 'Astana', label: 'Astana' },
                { value: 'Almaty', label: 'Almaty' },
                { value: 'Moscow', label: 'Moscow' },
                { value: 'Saint Petersburg', label: 'Saint Petersburg' },
                { value: 'London', label: 'London' },
                { value: 'New York', label: 'New York' },
                { value: 'Tokyo', label: 'Tokyo' },
                { value: 'Paris', label: 'Paris' },
                { value: 'Berlin', label: 'Berlin' },
                { value: 'Dubai', label: 'Dubai' },
                { value: 'Istanbul', label: 'Istanbul' },
                { value: 'Beijing', label: 'Beijing' },
                { value: 'Seoul', label: 'Seoul' },
                { value: 'Los Angeles', label: 'Los Angeles' },
                { value: 'Toronto', label: 'Toronto' },
                { value: 'Singapore', label: 'Singapore' },
                { value: 'Bangkok', label: 'Bangkok' },
                { value: 'Sydney', label: 'Sydney' },
                { value: 'Rome', label: 'Rome' },
            ]}
        />
    );
}
