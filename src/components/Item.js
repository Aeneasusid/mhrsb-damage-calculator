import React from 'react';
import { Select, Tag , Divider, Tooltip} from 'antd';

const options = [
    {value: 'gold',},
    {value: 'lime',},
    {value: 'green',},
    {value: 'cyan',},
];

const tagRender = (props) => {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };
    return (
        <Tag
            color={value}
            onMouseDown={onPreventMouseDown}
            closable={closable}
            onClose={onClose}
            style={{
                marginRight: 3,
            }}
        >
            {label}
        </Tag>
    );
};

function Item() {
    return (
        <div>
            <Divider />
            <Tooltip title="Choose Items here:">
                <Select
                    mode="multiple"
                    showArrow
                    tagRender={tagRender}
                    defaultValue={['gold', 'cyan']}
                    style={{
                        width: '100%',
                    }}
                    options={options}
                />
            </Tooltip>
        </div>
    );
}

export default Item;