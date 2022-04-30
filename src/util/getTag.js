const getTag = (stock, tag) => {
  let badge = "";
  if (stock == 0) {
    badge = "Out Of Stock";
  } else if (stock < 10 && !tag) {
    badge = "Limited";
  } else if (tag === "popular") {
    badge = "Popular";
  } else if (tag === "new") {
    badge = "New";
  }
  return badge;
};

export default getTag;
