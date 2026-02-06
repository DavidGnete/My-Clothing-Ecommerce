import Image from 'next/image'


interface Props {
    src?: string,
    alt: string,
    className?: React.StyleHTMLAttributes<HTMLImageElement>['className'];
    style?: React.StyleHTMLAttributes<HTMLImageElement>['style'];
    width: number;
    height: number;
    onMouseEnter?:React.MouseEventHandler<HTMLImageElement>;
    onMouseLeave?:React.MouseEventHandler<HTMLImageElement>;
}

export const ImageProducts = ( {src, alt, className, width, height, style, onMouseEnter, onMouseLeave}:Props) => {

    const localSRC = (src )
    ? src.trim().startsWith('http')
     ? src
     :`/products/${src}`
     :'/imgs/placeholder.jpg';

  return (
        <Image
            src={ localSRC }
            width={width}
            height={height}
            alt={alt }
            className={className}
            style={style}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        />
  )
}
