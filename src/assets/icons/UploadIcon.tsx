import {FC} from 'react';
import { IconProps } from '../../types/commonTypes';

export const UploadIcon: FC<IconProps> = props => {
    const {
        className,
        color = '#555555',
        height = 32,
        width = 32,
        onClick
    } = props;
    return(
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H12M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.5 21L17.5 15M17.5 15L20 17.5M17.5 15L15 17.5" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    );
}



