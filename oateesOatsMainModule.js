const oateesOatsMainPage = () => {
  const oateesOatsMainContent = () => {
    const name = document.createElement("h1");
    name.setAttribute("id", "name");
    name.innerHTML = "Oatee's Oats";
    headerContainer.appendChild(name);
    const frontPage = document.createElement("button");
    frontPage.classList.add("button");
    frontPage.setAttribute("id", "frontPage");
    frontPage.innerHTML = "Homepage";
    sectionContainer.appendChild(frontPage);
    const menu = document.createElement("button");
    menu.classList.add("button");
    menu.setAttribute("id", "menu");
    menu.innerHTML = "Menu";
    sectionContainer.appendChild(menu);
    const contact = document.createElement("button");
    contact.classList.add("button");
    contact.setAttribute("id", "contact");
    contact.innerHTML = "Contact Us";
    sectionContainer.appendChild(contact);

    return { oateesOatsMainContent };
  };

  const mainPage = () => {
    const contentContainer = document.getElementById("contentContainer")
    const frontPageDiv = document.createElement("div");
    frontPageDiv.id = "frontPageDiv";
    contentContainer.appendChild(frontPageDiv);
    const slogan = document.createElement("h2");
    slogan.classList.add("headerContent");
    slogan.setAttribute("id", "slogan");
    slogan.innerHTML = "An Oat-standing Place to Start and End Your Day!";
    frontPageDiv.appendChild(slogan);
    const wonderful = document.createElement("p");
    wonderful.classList.add("statement");
    wonderful.setAttribute("id", "wonderful");
    wonderful.innerHTML =
      "Located in Farms of Oats, Wisconsin, Oatee's Oats takes an oat-h to providing customers with a glimpse into the vast world of oats! From dusk to dawn, our employees are determined to satisfy every customer with exceptional service and oat flavored goodies! Whether it is your first time trying oats or your millionth time we will prove there is always new possibilities for oats! Come check oat our menu!  ";
    frontPageDiv.appendChild(wonderful);
    const schedule = document.createElement("p");
    schedule.setAttribute("id", "schedule");
    schedule.innerHTML =
      "We are open daily from 6am-12pm! Feel free to stop by!";
    frontPageDiv.appendChild(schedule);
    const firstTime = document.createElement("p");
    firstTime.setAttribute("id", "firstTime");
    firstTime.style.fontStyle = "italic";
    firstTime.innerHTML =
      "First time customers who sign up for the loyalty program get a free meal!";
    frontPageDiv.appendChild(firstTime);

    return{mainPage}
  }

  return { oateesOatsMainContent, mainPage };
};

export default oateesOatsMainPage;
