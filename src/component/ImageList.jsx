import React from 'react';

const ImageList = props => {
    return (
        props.images.map(({urls,id,message}) => <img src={urls.small} key={id} alt={message} />
        )
    )
}
export default ImageList;