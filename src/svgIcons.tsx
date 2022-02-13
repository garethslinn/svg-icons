import { svgObj } from "./svgConfig";

export const SvgIcon = (
    obj: {
        className?: string,
        height?: string,
        width?: string,
        viewBox?: string,
        fill?: string,
        stroke?: string,
        title: string
    }
) => {

    const {
        className,
        height,
        width,
        viewBox,
        fill,
        stroke,
        title
    } = obj;

    const el: any = svgObj.find((item: { title: string }) => item.title === title.toLowerCase());
    let Element = el.element

    return (
        <Element
            className={className || ''}
            height={height || '24'}
            width={width || '24'}
            viewBox={viewBox || '0,0,24,24'}
            fill={fill || 'transparent'}
            stroke={stroke || 'black'}
            tite={title || ''}
        />
    )
};