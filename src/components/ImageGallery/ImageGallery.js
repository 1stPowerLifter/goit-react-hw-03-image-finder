import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import * as SC from "./ImageGallery.styled";


export const ImageGallery = ({ imgs, imageClick }) => {
    return (
        <SC.ImageGallery>
            {imgs.map(img => <ImageGalleryItem onClick={imageClick} img={img} key={img.id} />)}
        </SC.ImageGallery>
    )
}