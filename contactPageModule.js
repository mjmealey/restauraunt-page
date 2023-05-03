const contactPage = () => {
  const contentContainer = document.getElementById("contentContainer");

  const contactContent = () => {
    const contactsDiv = document.createElement("div")
    contactsDiv.id = "contactsDiv"
    const contactHeader = document.createElement("h2")
    contactHeader.textContent = "Feel free to contact any of these numbers at the available times to give feedback!"
    contactHeader.id = "contactHeader"
    contactsDiv.appendChild(contactHeader)
    const contactOneContainer = document.createElement("div")
    contactOneContainer.id = "contactOneContainer"
    const contactOneName = document.createElement("p")
    contactOneName.classList.add("containerOneContent")
    contactOneName.id = "contactOneName"
    contactOneName.textContent = "Manager Oat"
    contactOneContainer.appendChild(contactOneName)
    const contactOneAvailabilty = document.createElement("contactOneAvailability")
    contactOneAvailabilty.textContent = "8am-10pm Monday-Friday"
    contactOneAvailabilty.classList.add("containerOneAvailability")
    contactOneAvailabilty.id = "contactOneAvailability"
    contactOneContainer.appendChild(contactOneAvailabilty)
    const contactOneNumber = document.createElement("p")
    contactOneNumber.id = "contactOneNumber"
    contactOneNumber.classList.add("containerOneContent")
    contactOneNumber.textContent = "(123)-456-7890"
    contactOneContainer.appendChild(contactOneNumber)
    contentContainer.appendChild(contactsDiv)
    contentContainer.appendChild(contactOneContainer)
    const contactTwoContainer = document.createElement("div")
    contactTwoContainer.id = "contactTwoContainer"
    const contactTwoName = document.createElement("p")
    contactTwoName.id = "contactTwoName"
    contactTwoName.classList.add("contactTwoContent")
    contactTwoName.textContent = "Boss Oat Cookie"
    contactTwoContainer.appendChild(contactTwoName)
    const contactTwoAvailability = document.createElement("p")
    contactTwoAvailability.classList.add("contactTwoContent")
    contactTwoAvailability.textContent = "6am-10pm Monday-Sunday"
    contactTwoAvailability.id = "contactTwoAvailability"
    contactTwoContainer.appendChild(contactTwoAvailability)
    const contactTwoNumber = document.createElement("p")
    contactTwoNumber.classList.add("contactTwoContent")
    contactTwoNumber.id = "contactTwoNumber"
    contactTwoNumber.textContent = "(123)-546-7201"
    contactTwoContainer.appendChild(contactTwoNumber)
    contentContainer.appendChild(contactTwoContainer)
    const contactThreeContainer = document.createElement("div")
    contactThreeContainer.id = "contactThreeContainer"
    const contactThreeName = document.createElement("p")
    contactThreeName.id = "contactThreeName"
    contactThreeName.classList.add("contactThreeContent")
    contactThreeName.textContent = "Assistant Manager Oat Muffin"
    contactThreeContainer.appendChild(contactThreeName)
    const contactThreeAvailability = document.createElement("p")
    contactThreeAvailability.id = "contactThreeAvailability"
    contactThreeAvailability.classList.add("contactThreeContent")
    contactThreeAvailability.textContent = "8am-10pm Monday-Friday"
    contactThreeContainer.appendChild(contactThreeAvailability)
    const contactThreeNumber = document.createElement("p")
    contactThreeNumber.id = "contactThreeNumber"
    contactThreeNumber.classList.add("contactThreeContent")
    contactThreeNumber.textContent = "(823)-123-1243"
    contactThreeContainer.appendChild(contactThreeNumber)
    contentContainer.appendChild(contactThreeContainer)

    return{contactContent}
  }
  return{contactContent}
}

export default contactPage;
