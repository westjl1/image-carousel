import "./styles.css";
import writeCarousel from "./carousel";

//How webpack will bundle images more dynamically
function importAll(r) {
  let images = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const allImages = importAll(
  require.context("./images", true, /\.(png|jpe?g|svg)$/)
);

let forestImages = [];
let oceanImages = [];
let mountainImages = [];

Object.keys(allImages).forEach((key) => {
  // console.log(`Key ${key} for ${allImages[key]}`);
  if (key.startsWith("forest/")) {
    forestImages.push(allImages[key]);
  }
  if (key.startsWith("ocean/")) {
    oceanImages.push(allImages[key]);
  }
  if (key.startsWith("mountain/")) {
    mountainImages.push(allImages[key]);
  }
});

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
