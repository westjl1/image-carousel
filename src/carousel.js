function writeCarousel(imageArray) {
  let currentImageIndex = 0;

  if (document.getElementById("carousel")) {
    document.getElementById("carousel").remove();
  }

  const carouselDiv = document.createElement("div");
  carouselDiv.id = "carousel";

  const allImagesDiv = document.createElement("div");
  allImagesDiv.className = "all-images";

  const navDotDiv = document.createElement("div");
  navDotDiv.id = "nav-dots";

  imageArray.forEach((image, index) => {
    const nextNavDot = document.createElement("span");
    nextNavDot.className = "nav-dot";
    nextNavDot.id = "navDot_" + index;
    nextNavDot.addEventListener("click", (e) => {
      let start = e.target.id.indexOf("_") + 1;
      currentImageIndex = parseInt(e.target.id.slice(start));
      showImage(currentImageIndex);
    });
    navDotDiv.appendChild(nextNavDot);

    const nextImage = document.createElement("img");
    nextImage.classList.add("an-image", "fade");
    nextImage.src = image;
    nextImage.id = "image_" + index;
    allImagesDiv.appendChild(nextImage);
  });

  carouselDiv.appendChild(allImagesDiv);

  const prevLink = document.createElement("a");
  prevLink.className = "prev";
  prevLink.innerHTML = "&#10094;";
  prevLink.addEventListener("click", () => {
    const nextImageIndex = currentImageIndex - 1;
    if (nextImageIndex < 0) {
      currentImageIndex = imageArray.length - 1;
    } else currentImageIndex -= 1;
    showImage(currentImageIndex);
  });

  const nextLink = document.createElement("a");
  nextLink.className = "next";
  nextLink.innerHTML = "&#10095;";
  nextLink.addEventListener("click", () => {
    const nextImageIndex = currentImageIndex + 1;
    if (nextImageIndex > imageArray.length - 1) {
      currentImageIndex = 0;
    } else currentImageIndex += 1;
    showImage(currentImageIndex);
  });

  carouselDiv.appendChild(prevLink);
  carouselDiv.appendChild(nextLink);

  carouselDiv.appendChild(navDotDiv);

  document.body.appendChild(carouselDiv);

  //start by showing the first image
  showImage(currentImageIndex);

  setInterval(() => {
    console.log(currentImageIndex);
    const nextImageIndex = currentImageIndex + 1;
    if (nextImageIndex > imageArray.length - 1) {
      currentImageIndex = 0;
    } else currentImageIndex = nextImageIndex;
    showImage(currentImageIndex);
  }, 5000);
}

function showImage(imageIndex) {
  const domImages = document.getElementsByClassName("an-image");
  const navDots = document.getElementsByClassName("nav-dot");

  Object.keys(domImages).forEach((key) => {
    const imageElement = domImages[key];
    if (imageElement) {
      if (imageElement.id === `image_${imageIndex}`) {
        imageElement.style.display = "block";
      } else imageElement.style.display = "none";
    }
  });

  Object.keys(navDots).forEach((key) => {
    const navDotElement = navDots[key];
    if (navDotElement) {
      if (navDotElement.id === `navDot_${imageIndex}`) {
        navDotElement.classList.add("active");
      } else navDotElement.classList.remove("active");
    }
  });
}

// setInterval(() => {
//   console.log("yep")

// }, 2000)

export default writeCarousel;
