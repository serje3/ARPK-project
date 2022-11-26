import { useCallback, useState } from "react";


export const ImageSlider = ({ images, maxWidth = 320, maxHeight = 300 }) => {

    const [active, setActive] = useState(0)

    const imageSlideStyle = {
        maxWidth: maxWidth
    }
    const imageStyle = {
        maxWidth: maxWidth,
        maxHeight: maxHeight
    }

    const navigateToImage = useCallback(
        () => {
            window.location.href = images[active] ? images[active].image : ''
        },
        [images, active]
    )

    const nextImage = useCallback(
        () => {
            setActive(prevState => images[prevState + 1] ? prevState + 1 : prevState)
        }, [])

    const prevImage = useCallback(
        () => {
            setActive(prevState => images[prevState - 1] ? prevState - 1 : prevState)
        }, [])

    const current = images[active] || null

    if (current === null) return null

    return (
        <div className="image-slider flex" style={imageSlideStyle}>
            <div className="previous flex" onClick={() => prevImage()}>{'<'}</div>
            <img src={current.image} className="current" alt="unnamed" onClick={navigateToImage} style={imageStyle}/>
            <div className="next flex" onClick={() => nextImage()}>{'>'}</div>
        </div>
    )
}