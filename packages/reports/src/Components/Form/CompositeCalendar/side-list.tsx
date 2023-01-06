import React from 'react';
import { toMoment } from '@deriv/shared';
import ListItem from './list-item.jsx';

type TItem = {
    value: string;
    label: string;
    onClick: () => void;
    duration: number;
};

type TSideList = {
    from: number;
    items: Array<TItem>;
    to: number;
};

const isActive = (from: number, to: number, flag: number) => {
    if (flag === 0) {
        return toMoment().endOf('day').unix() === to && from === null;
    }
    return Math.ceil(to / 86400) - Math.ceil(from / 86400) === flag;
};

const SideList = ({ items, from, to }: TSideList) => (
    <ul className='composite-calendar__prepopulated-list'>
        {items.map(item => {
            const { duration, ...rest_of_props } = item;
            const is_active = isActive(from, to, duration);
            return <ListItem key={duration} is_active={is_active} {...rest_of_props} />;
        })}
    </ul>
);

export default SideList;
