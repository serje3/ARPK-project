import { ImageSlider } from "../../common/ImageSlider";


export const ServiceImages = (props) => {
    return (
        <>
            <ImageSlider images={props.images} maxHeight={600} maxWidth={'100%'}/>
        </>
    )
}