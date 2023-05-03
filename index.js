import oateesOatsMainPage from "./oateesOatsMainModule.js";
import contactPage from "./contactPageModule.js";
import menuPage from "./menuModule.js";
import ".//styles.css";

const newOateesOatsMainPage = oateesOatsMainPage();
const newMenuPage = menuPage();

const newContactPage = contactPage();

newOateesOatsMainPage.oateesOatsMainContent();
newOateesOatsMainPage.mainPage();
newMenuPage.menuContent();
newContactPage.contactContent();
function removeItems() {
  const contentContainer = document.getElementById("contentContainer");
  const frontPageDiv = document.getElementById("frontPageDiv");
  const menuDiv = document.getElementById("menuDiv");
  const loyaltyProgramDiv = document.getElementById("loyaltyProgramDiv");
  const contactDiv = document.getElementById("contactDiv");
  const loyaltyProgram = document.getElementById("loyaltyProgram");
  const contact = document.getElementById("contact");
  const frontPage = document.getElementById("frontPage");
  const menu = document.getElementById("menu");
  const signUpButton = document.getElementById("signUpButton");
  const loyaltyProgramForm = document.getElementById("loyaltyProgramForm");
  const loyaltyProgramFormDiv = document.getElementById(
    "loyaltyProgramFormDiv"
  );
  const thankYouDiv = document.getElementById("thankYouDiv");
  const contactForm = document.getElementById("contactForm");
  const backToHomePage = document.getElementById("backToHomePage");
  const contactHeader = document.getElementById("contactHeader");
  const contactsDiv = document.getElementById("contactsDiv");
  const contactOneContainer = document.getElementById("contactOneContainer");
  const contactTwoContainer = document.getElementById("contactTwoContainer");
  const contactThreeContainer = document.getElementById(
    "contactThreeContainer"
  );

  let currentPage = "";

  menuDiv.style.display = "none";
  contactsDiv.style.display = "none";
  contactOneContainer.style.display = "none";
  contactTwoContainer.style.display = "none";
  contactThreeContainer.style.display = "none";

  document.addEventListener("click", (e) => {
    if (e.target.id === "frontPage") {
      currentPage = "frontPage";
      if (currentPage === "frontPage") {
        frontPage.style.backgroundColor = "bisque";
        menu.style.backgroundColor = "burlywood";
        contact.style.backgroundColor = "burlywood";
      }
      frontPageDiv.style.display = "block";
      menuDiv.style.display = "none";
      contactOneContainer.style.display = "none";
      contactTwoContainer.style.display = "none";
      contactThreeContainer.style.display = "none";
    } else if (e.target.id === "menu") {
      currentPage = "menu";
      if (currentPage === "menu") {
        menu.style.backgroundColor = "bisque";
        frontPage.style.backgroundColor = "burlywood";
        contact.style.backgroundColor = "burlywood";
      }
      frontPageDiv.style.display = "none";
      menuDiv.style.display = "block";
      contactOneContainer.style.display = "none";
      contactTwoContainer.style.display = "none";
      contactThreeContainer.style.display = "none";
    } else if (e.target.id === "contact") {
      currentPage = "contact";
      if (currentPage === "contact") {
        contact.style.backgroundColor = "bisque";
        menu.style.backgroundColor = "burlywood";
        frontPage.style.backgroundColor = "burlywood";

        frontPageDiv.style.display = "none";
        menuDiv.style.display = "none";
        contactOneContainer.style.display = "block";
        contactTwoContainer.style.display = "block";
        contactThreeContainer.style.display = "block";
      }
    }
  });

  if (currentPage === "") {
    frontPageDiv.style.display = "block";
  }
}

removeItems();
