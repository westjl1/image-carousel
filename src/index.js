import forestImage from "./images/forest/forest.jpeg";
import forest2Image from "./images/forest/forest2.jpeg";
import forest3Image from "./images/forest/forest3.jpeg";
import forest4Image from "./images/forest/forest4.jpeg";

import oceanImage from "./images/ocean/ocean.jpeg";
import ocean2Image from "./images/ocean/ocean2.jpeg";
import ocean3Image from "./images/ocean/ocean3.jpeg";
import ocean4Image from "./images/ocean/ocean4.jpeg";

import mountainImage from "./images/mountain/mountain.jpeg";
import mountain2Image from "./images/mountain/mountain2.jpeg";
import mountain3Image from "./images/mountain/mountain3.jpeg";
import mountain4Image from "./images/mountain/mountain4.jpeg";

import "./styles.css";
import writeCarousel from "./carousel";

const forestImages = [forestImage, forest2Image, forest3Image, forest4Image];
const oceanImages = [oceanImage, ocean2Image, ocean3Image, ocean4Image];
const mountainImages = [
  mountainImage,
  mountain2Image,
  mountain3Image,
  mountain4Image,
];

const imageTypeDropdown = document.createElement("select");

const optionForest = document.createElement("option");
optionForest.value = "forest";
optionForest.textContent = "Forest";

const optionOcean = document.createElement("option");
optionOcean.value = "ocean";
optionOcean.textContent = "Ocean";

const optionMountain = document.createElement("option");
optionMountain.value = "mountain";
optionMountain.textContent = "Mountain";

imageTypeDropdown.appendChild(optionForest);
imageTypeDropdown.appendChild(optionOcean);
imageTypeDropdown.appendChild(optionMountain);

imageTypeDropdown.addEventListener("change", (e) => {
  if (e.target.value === "forest") {
    writeCarousel(forestImages);
  } else if (e.target.value === "mountain") {
    writeCarousel(mountainImages);
  } else if (e.target.value === "ocean") {
    writeCarousel(oceanImages);
  }
});

document.body.appendChild(imageTypeDropdown);

writeCarousel(forestImages);
