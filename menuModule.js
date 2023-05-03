
const menuPage = (() => {
  const imageOne = document.createElement("img");
  imageOne.src = "./images/oatmealDish.jpg";
  const menuContent = () => {
    const contentContainer = document.getElementById("contentContainer");
    const menuDiv = document.createElement("div");
    menuDiv.setAttribute("id", "menuDiv");
    contentContainer.appendChild(menuDiv);
    const menuHeader = document.createElement("h2");
    menuHeader.innerHTML = "Menu";
    menuHeader.setAttribute("id", "menuHeader");
    menuHeader.classList.add("menuContent");
    menuDiv.appendChild(menuHeader);
    imageOne.setAttribute("id", "imageOne");
    menuDiv.appendChild(imageOne);
    const oatmealHeader = document.createElement("h3");
    oatmealHeader.setAttribute("id", "oatmealHeader");
    oatmealHeader.innerHTML = "Oatmeal";
    menuDiv.appendChild(oatmealHeader);
    const oatmealDesc = document.createElement("p");
    oatmealDesc.classList.add("menuContent");
    oatmealDesc.setAttribute("id", "oatmealDesc");
    oatmealDesc.innerHTML =
      "Oatmeal is a classic dish in the world of oats. Our oatmeal comes in different sizes ranging from small to large. Toppings include a fruit of your choice, peanut butter, greek yogurt, and cottage cheese.";
    menuDiv.appendChild(oatmealDesc);
    const imageTwo = document.createElement("img");
    imageTwo.src = "./images/oatcake.jpg";
    imageTwo.setAttribute("id", "imageTwo");
    menuDiv.appendChild(imageTwo);
    const oatcakeHeader = document.createElement("h3");
    oatcakeHeader.setAttribute("id", "oatcakeHeader");
    oatcakeHeader.innerHTML = "Oatcakes";
    menuDiv.appendChild(oatcakeHeader);
    const oatcakeDesc = document.createElement("p");
    oatcakeDesc.setAttribute("id", "oatcakeDesc");
    oatcakeDesc.innerHTML =
      "Served as a side, oatcakes are a type of flatbread that originated in scotland. You have the option of having this dish in triangles or circles.  Toppings include butter, cheese, and jam.";
    menuDiv.appendChild(oatcakeDesc);
    const imageThree = document.createElement("img");
    imageThree.src = "./images/oatPanCakes.jpg";
    imageThree.setAttribute("id", "imageThree");
    menuDiv.appendChild(imageThree);
    const oatPanCakesHeader = document.createElement("h3");
    oatPanCakesHeader.setAttribute("id", "oatPanCakesHeader");
    oatPanCakesHeader.innerHTML = "Oat Pancakes";
    menuDiv.appendChild(oatPanCakesHeader);
    const oatMealPanCakesDesc = document.createElement("p");
    oatMealPanCakesDesc.setAttribute("id", "oatmealPanCakesDesc");
    oatMealPanCakesDesc.innerHTML =
      "A healthier take on a staple dish, oatmeal pancakes are pancakes mixed with oatmeal! Toppings include maple syrup, honey, whipped cream, and a fruit of your choice. ";
    menuDiv.appendChild(oatMealPanCakesDesc);
    const imageFour = document.createElement("img");
    imageFour.src = "./images/oatmealCookies.jpg";
    imageFour.setAttribute("id", "imageFour");
    menuDiv.appendChild(imageFour);
    const oatmealCookiesHeader = document.createElement("h3");
    oatmealCookiesHeader.setAttribute("id", "oatmealCookiesHeader");
    oatmealCookiesHeader.innerHTML = "Oatmeal Cookies";
    menuDiv.appendChild(oatmealCookiesHeader);
    const oatmealCookiesDesc = document.createElement("p");
    oatmealCookiesDesc.setAttribute("id", "oatmealCookiesDesc");
    oatmealCookiesDesc.innerHTML =
      "A healthier take on a classic pastry, oatmeal cookies are a chewy delight. We have a variety of oatmeal cookies including raisin, chocolate chip, and banana.";
    menuDiv.appendChild(oatmealCookiesDesc);
    const imageFive = document.createElement("img");
    imageFive.src = "./images/oatmealMuffins.jpg";
    imageFive.setAttribute("id", "imageFive");
    menuDiv.appendChild(imageFive);
    const oatmealMuffinsHeader = document.createElement("h3");
    oatmealMuffinsHeader.setAttribute("id", "oatmealMuffinsHeader");
    oatmealMuffinsHeader.innerHTML = "Oatmeal Muffins";
    menuDiv.appendChild(oatmealMuffinsHeader);
    const oatmealMuffinsDesc = document.createElement("p");
    oatmealMuffinsDesc.setAttribute("id", "oatmealMuffinsDesc");
    oatmealMuffinsDesc.innerHTML =
      "Served as a side dish, oatmeal muffins are breakfast muffins but with oats mixed in! We have a variety of oatmeal muffins including chocolate chip, nuts, and fruit. fruit.";
    menuDiv.appendChild(oatmealMuffinsDesc);
    console.log(contentContainer)
    

    return { menuContent };
  };
 
  return{menuContent}
}) 

export default menuPage;
