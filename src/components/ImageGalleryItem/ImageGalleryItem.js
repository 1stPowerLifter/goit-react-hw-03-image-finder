import * as SC from "./ImageGalleryItem.styled";
import { Component } from 'react';
import { Modal } from "components/Modal/Modal";

export class ImageGalleryItem extends Component {
    state = {
        showModal: false
    }

    modalChanger = () => this.setState(({ showModal }) => ({ showModal: !showModal }))
        
    render() {
        const { webformatURL, largeImageURL, tags } = this.props.img
        const {showModal} = this.state

        return (
            <SC.ImageGalleryItem >
                <img src={webformatURL} alt={tags}
                    onClick={this.modalChanger}
                />
                {showModal &&
                    <Modal src={largeImageURL}
                        alt={tags}
                        modalChanger={this.modalChanger}/>
                }
            </SC.ImageGalleryItem>
        )
    }
}