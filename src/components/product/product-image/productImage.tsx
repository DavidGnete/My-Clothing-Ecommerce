import Image from 'next/image'


interface Props {
    src?: string,
    alt: string,
    className?: React.StyleHTMLAttributes<HTMLImageElement>['className'];
    style?: React.StyleHTMLAttributes<HTMLImageElement>['style'];
    width: number;
    height: number;
}

export const ImageProducts = ( {src, alt, className, width, height, style}:Props) => {

    const localSRC = (src )
    ? src?.startsWith('http')
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
        />
  )
}
