'use client'

import { ImgPortafolio } from '@/app/models'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

interface Props {
    images: ImgPortafolio[],
    autoPlay?: boolean,
    showButtons?: boolean,
    titulo?: string,
    descripcionSkils?: string[],
    delayAutoPlay?: number
}

function Carrousel(props: Props) {
    const prevImageRef = useRef<HTMLDivElement | undefined>();
    const imageSelectRef = useRef<HTMLImageElement | undefined>();

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(props.images[0].url);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (props.autoPlay || !props.showButtons) {
            const interval = setInterval(() => {
                selectNewImage(selectedIndex, props.images);
            }, props.delayAutoPlay || 3500);
            return () => clearInterval(interval);
        }
    });

    const selectNewImage = (index: number, images: ImgPortafolio[], next = true) => {
        setLoaded(false);
        setTimeout(() => {
            const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
            const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1;
            setSelectedImage(images[nextIndex].url);
            setSelectedIndex(nextIndex);

            if (prevImageRef.current && imageSelectRef.current) {
                const prevImageRefCurrent = prevImageRef.current;
                const imageSelectRefCurrent = imageSelectRef.current;
                const contenedorWidth = imageSelectRef.current.offsetWidth * props.images.length;

                let positionActual = 0;

                if (next) {
                    if (index === 0 || index === props.images.length-1) {
                        positionActual = -imageSelectRefCurrent.offsetWidth;
                    } else {
                        positionActual = prevImageRefCurrent.scrollLeft;
                    }
                
                    prevImageRefCurrent.scrollTo({
                        left: positionActual + imageSelectRefCurrent.offsetWidth,
                        behavior: 'smooth',
                    });
                } else {
                    if (index === 0 || index === props.images.length-1) {
                        positionActual = contenedorWidth;
                    } else {
                        positionActual = prevImageRefCurrent.scrollLeft;
                    }
                
                    prevImageRefCurrent.scrollTo({
                        left: positionActual - imageSelectRefCurrent.offsetWidth,
                        behavior: 'smooth',
                    });
                }
            }
        }, 500);
    };

    const previous = () => {
        selectNewImage(selectedIndex, props.images, false);
    };

    const next = () => {
        selectNewImage(selectedIndex, props.images);
    };

    const selectImage = (index: number) => {
        const images = props.images;

        setLoaded(false);
        setTimeout(() => {
            setSelectedImage(images[index].url)
            setSelectedIndex(index);
        }, 500);
    }

    return (
        <div className='content-carrousel'>
            {props.titulo && <h3>{props.titulo}</h3>}
            <div className='content-img-principal'>
                {props.showButtons &&
                    <div className='content-buttons-arrow'>
                        <Image className='arrow-left' width={1800} height={980} src={'/img/arrow-left-white.svg'} alt='arrow-left' onClick={previous} />
                        <Image className='arrow-right' width={1800} height={980} src={'/img/arrow-right-white.svg'} alt='arrow-right' onClick={next} />
                    </div>
                }
                <Image src={selectedImage}
                    width={1200} height={600} alt="Interfaz del Portafolio"
                    className={loaded ? "loaded" : "onloaded"}
                    onLoad={() => setLoaded(true)}
                />
            </div>
            {props.descripcionSkils &&
                <div className='carrousel-descripcion'>
                    {props.descripcionSkils.map(icon => (
                        <Image key={`${icon}`} height="10" width="10" src={`/img/icons-skills/${icon}.svg`} alt={`${icon}`} />
                    ))}
                </div>
            }
            {props.showButtons &&
                <div className='content-buttons-img' ref={prevImageRef as React.RefObject<HTMLDivElement>}>
                    {props.images.map((image, index) => (
                        <Image className={index === selectedIndex ? 'active' : ' '}
                            width={400} height={200} key={`${image.id}`}
                            src={`${image.url}`} alt={`${image.id}`}
                            onClick={() => selectImage(index)}
                            ref={imageSelectRef as React.RefObject<HTMLImageElement>}
                        />
                    ))}
                </div>
            }
        </div>
    )
}

export default Carrousel
