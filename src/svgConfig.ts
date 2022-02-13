import { ReactComponent as Checked} from './images/checked.svg';
import { ReactComponent as Error} from './images/error.svg';
import { ReactComponent as Help} from './images/help.svg';

export const svgObj: {
    find(param: (item: { title: string, element: any }) => boolean): unknown;
} = [
    { title: 'checked', element:  Checked },
    { title: 'help', element:  Help },
    { title: 'error', element:  Error}
];