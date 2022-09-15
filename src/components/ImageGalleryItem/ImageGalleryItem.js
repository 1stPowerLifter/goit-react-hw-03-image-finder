import * as SC from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({img, onClick}) => {
    const { webformatURL, largeImageURL, tags } = img
    
    return (
        <SC.ImageGalleryItem data-url={largeImageURL} >
            <img src={webformatURL} alt={tags} onClick={onClick} />
        </SC.ImageGalleryItem>
    )
}