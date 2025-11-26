function writeCarousel(imageArray) {
    
  imageArray.forEach((image) => {
    const nextImage = document.createElement("img");
    nextImage.src = image;
    document.body.appendChild(nextImage);
  });
}

export default writeCarousel;
