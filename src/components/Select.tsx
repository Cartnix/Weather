import { Select } from 'antd';

export default function SelectField(){

    const onChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    const onSearch = (value: string) => {
        console.log('search:', value);
    };

    return (
        <>
            <Select
                showSearch
                placeholder="Select your city"
                optionFilterProp="label"
                onChange={onChange}
                onSearch={onSearch}
                options={[
                    {
                        value: 'Pavlodar',
                        label: 'Pavlodar',
                    },
                    {
                        value: 'Moscow',
                        label: 'Moscow',
                    },
                    {
                        value: 'Astana',
                        label: 'Astana',
                    },
                ]}
            />
        </>
    )
}