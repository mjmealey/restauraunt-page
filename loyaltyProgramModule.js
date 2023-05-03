const loyaltyProgramPage = () => {
  const loyaltyProgramContent = () => {
    const contentContainer = document.getElementById("contentContainer");
    const loyaltyProgramDiv = document.createElement("div");
    loyaltyProgramDiv.setAttribute("id", "loyaltyProgramDiv");
    contentContainer.appendChild(loyaltyProgramDiv);
    const loyaltyProgramHeader = document.createElement("h2");
    loyaltyProgramHeader.setAttribute("id", "loyaltyProgramHeader");
    loyaltyProgramHeader.innerHTML = "What is the loyalty program?";
    loyaltyProgramDiv.appendChild(loyaltyProgramHeader);
    const loyaltyProgramDesc = document.createElement("p");
    loyaltyProgramDesc.setAttribute("id", "loyaltyProgramDesc");
    loyaltyProgramDesc.innerHTML =
      "The Oatee's Oats Loyalty Program is a program that lets you start on a currency know as oat bucks. Oat bucks are given anytime you eat at Oatee's Oats and once you have 5 oat bucks you are eligible for a free meal. New customers who sign up for the loyalty program are eligible for a free meal! If you are interested in signing up, please look at the rules below prior to signing up.";
    loyaltyProgramDiv.appendChild(loyaltyProgramDesc);
    const loyaltyProgramHeaderTwo = document.createElement("h3");
    loyaltyProgramHeaderTwo.setAttribute("id", "loyaltyProgramHeaderTwo");
    loyaltyProgramHeaderTwo.innerHTML = "Rules";
    loyaltyProgramDiv.appendChild(loyaltyProgramHeaderTwo);
    const loyaltyProgramRules = document.createElement("ol");
    loyaltyProgramRules.setAttribute("id", "loyaltyProgramRules");
    loyaltyProgramDiv.appendChild(loyaltyProgramRules);
    const loyaltyProgramRuleOne = document.createElement("li");
    loyaltyProgramRuleOne.classList.add("loyaltyProgramRuleList");
    loyaltyProgramRuleOne.setAttribute("id", "loyaltyProgramRuleOne");
    loyaltyProgramRuleOne.innerHTML =
      "Don't write down a fake name. IDs will be checked anytime you come into the restaurant to assure an oat buck can be issued to the correct person. Your name will be placed in the official record. However, if your ID is found to be fake you will be permanently banned from the loyalty program and you will receive a month long ban from eating at the restaurant. Also, if you refuse to show your ID, you will not be allowed to participate in the program. If you are caught falsifying names you will be banned from the program. (The IDs that will be accepted include a driver's license, state ID, and birth certificate.";
    loyaltyProgramDiv.appendChild(loyaltyProgramRuleOne);
    const loyaltyProgramRuleTwo = document.createElement("li");
    loyaltyProgramRuleTwo.classList.add("loyaltyProgramRuleList");
    loyaltyProgramRuleTwo.setAttribute("id", "loyaltyProgramRuleTwo");
    loyaltyProgramRuleTwo.innerHTML =
      "Oat bucks are not allowed to be copied. You are required to scan your oat bucks when you go to redeem them. If you lose your oat bucks you will not be recompensated. However, if due to a natural disaster, or a theft you will be given a pass. Please keep your oat bucks someplace secure at all times and if the scanner does not work, please alert a staff member. Your ID will be checked and if the scanner is proven to be out of order, you wil be compensated accordingly.";
    loyaltyProgramDiv.appendChild(loyaltyProgramRuleTwo);
    const loyaltyProgramRuleThree = document.createElement("li");
    loyaltyProgramRuleThree.setAttribute("id", "loyaltyProgramRuleThree");
    loyaltyProgramRuleThree.classList.add("loyaltyProgramRuleList");
    loyaltyProgramRuleThree.innerHTML =
      "No roughhousing in the restaurant. This includes physical fights, food fights, and verbally attacking customers and/or staff. If you are caught doing so or if you are a witness to the incident and neglect to inform staff within 5-10 minutes of the incident occuring, you will be banned from the program.";
    loyaltyProgramDiv.appendChild(loyaltyProgramRuleThree);
    const interested = document.createElement("p");
    interested.setAttribute("id", "interested");
    interested.innerHTML = "Interested? Click here!";
    loyaltyProgramDiv.appendChild(interested);
    const signUpButton = document.createElement("button");
    signUpButton.setAttribute("id", "signUpButton");
    signUpButton.innerHTML = "Sign Up";
    loyaltyProgramDiv.appendChild(signUpButton);
    const signUpButtonStart = document.getElementById("signUpButton");
    signUpButtonStart.addEventListener("click", (e) => {
      if (e.target.id === "signUpButton") {
        if (confirm("If you click yes you will be directed to another page")) {
          loyaltyProgramDiv.style.display = "none";
          const loyaltyProgramFormDiv = document.createElement("div")
          loyaltyProgramFormDiv.id = "loyaltyProgramFormDiv"
          const loyaltyProgramForm = document.createElement("form");
          loyaltyProgramForm.setAttribute("id", "loyaltyProgramForm");
          loyaltyProgramFormDiv.appendChild(loyaltyProgramForm);
          const loyaltyProgramFormHeader = document.createElement("h2");
          loyaltyProgramFormHeader.setAttribute(
            "id",
            "loyaltyProgramFormHeader"
          );
          loyaltyProgramFormHeader.innerHTML = "Sign Up";
          loyaltyProgramForm.appendChild(loyaltyProgramFormHeader);
          const loyaltyProgramFirstNameLabel = document.createElement("label");
          loyaltyProgramFirstNameLabel.setAttribute(
            "for",
            "loyaltyProgramFirstName"
          );
          loyaltyProgramFirstNameLabel.setAttribute(
            "id",
            "loyaltyProgramFirstNameLabel"
          );
          loyaltyProgramFirstNameLabel.innerHTML = "First Name:";
          loyaltyProgramForm.appendChild(loyaltyProgramFirstNameLabel);
          const loyaltyProgramFirstName = document.createElement("input");
          loyaltyProgramFirstName.setAttribute("id", "loyaltyProgramFirstName");
          loyaltyProgramFirstName.setAttribute("pattern", "^[a-zA-Z]+$");
          loyaltyProgramForm.appendChild(loyaltyProgramFirstName);
          const loyaltyProgramLastNameLabel = document.createElement("label");
          loyaltyProgramLastNameLabel.setAttribute(
            "for",
            "loyaltyProgramLastName"
          );
          loyaltyProgramLastNameLabel.setAttribute(
            "id",
            "loyaltyProgramLastNameLabel"
          );
          loyaltyProgramLastNameLabel.innerHTML = "Last Name:";
          loyaltyProgramForm.appendChild(loyaltyProgramLastNameLabel);
          const loyaltyProgramLastName = document.createElement("input");
          loyaltyProgramLastName.setAttribute("id", "loyaltyProgramLastName");
          loyaltyProgramLastName.setAttribute("pattern", "^[a-zA-Z]+$");
          loyaltyProgramForm.appendChild(loyaltyProgramLastName);
          const loyaltyProgramPhoneNumberLabel =
            document.createElement("label");
          loyaltyProgramPhoneNumberLabel.setAttribute(
            "for",
            "loyaltyProgramPhoneNumber"
          );
          loyaltyProgramPhoneNumberLabel.setAttribute(
            "id",
            "loyaltyProgramPhoneNumberLabel"
          );
          loyaltyProgramForm.appendChild(loyaltyProgramPhoneNumberLabel);
          loyaltyProgramPhoneNumberLabel.innerHTML = "Phone Number:";
          const loyaltyProgramPhoneNumber = document.createElement("input");
          loyaltyProgramPhoneNumber.setAttribute(
            "pattern",
            "^(?d{3})?[-.s]?d{3}[-.s]?d{4}$"
          );
          loyaltyProgramPhoneNumber.setAttribute(
            "id",
            "loyaltyProgramPhoneNumber"
          );
          loyaltyProgramPhoneNumber.setAttribute(
            "placeholder",
            "(123)-456-7891"
          );
          loyaltyProgramForm.appendChild(loyaltyProgramPhoneNumber);
          const loyaltyProgramEmailLabel = document.createElement("label");
          loyaltyProgramEmailLabel.innerHTML = "Email Address:";
          loyaltyProgramEmailLabel.setAttribute(
            "id",
            "loyaltyProgramEmailLabel"
          );
          loyaltyProgramEmailLabel.setAttribute("for", "loyaltyProgramEmail");
          loyaltyProgramForm.appendChild(loyaltyProgramEmailLabel);
          const loyaltyProgramEmail = document.createElement("input");
          loyaltyProgramEmail.setAttribute("id", "loyaltyProgramEmail");
          loyaltyProgramEmail.setAttribute(
            "pattern",
            "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$"
          );
          loyaltyProgramEmail.setAttribute("placeholder", "example@gmail.com");
          loyaltyProgramForm.appendChild(loyaltyProgramEmail);
          const loyaltyProgramBirthDateLabel = document.createElement("label");
          loyaltyProgramBirthDateLabel.setAttribute(
            "for",
            "loyaltyProgramBirthDate"
          );
          loyaltyProgramBirthDateLabel.setAttribute(
            "id",
            "loyaltyProgramBirthDateLabel"
          );
          loyaltyProgramBirthDateLabel.innerHTML = "Date of Birth:";
          loyaltyProgramForm.appendChild(loyaltyProgramBirthDateLabel);
          const loyaltyProgramBirthDate = document.createElement("input");
          loyaltyProgramBirthDate.setAttribute("id", "loyaltyProgramBirthDate");
          loyaltyProgramBirthDate.setAttribute("type", "date");
          loyaltyProgramForm.appendChild(loyaltyProgramBirthDate);
          const dietaryInterestsLabel = document.createElement("label");
          dietaryInterestsLabel.setAttribute(
            "for",
            "loyaltyProgramDietaryInterestsLabel"
          );
          dietaryInterestsLabel.setAttribute("id", "dietaryInterestsLabel");
          dietaryInterestsLabel.innerHTML = "What are your dietary interests?";
          loyaltyProgramForm.appendChild(dietaryInterestsLabel);
          const dietaryInterestList = document.createElement("select");
          dietaryInterestList.setAttribute("id", "dietaryInterestList");
          loyaltyProgramFormDiv.appendChild(dietaryInterestList);
          const dietaryInterestOptionOne = document.createElement("option");
          dietaryInterestOptionOne.setAttribute(
            "id",
            "dietaryInterestOptionOne"
          );
          dietaryInterestOptionOne.innerHTML = "Select";
          dietaryInterestOptionOne.classList.add("dietaryInterestOption");
          dietaryInterestList.appendChild(dietaryInterestOptionOne);
          const dietaryInterestOptionTwo = document.createElement("option");
          dietaryInterestOptionTwo.setAttribute(
            "id",
            "dietaryInterestOptionTwo"
          );
          dietaryInterestOptionTwo.classList.add("dietaryInterestOptions");
          dietaryInterestOptionTwo.innerHTML = "Vegan";
          dietaryInterestList.appendChild(dietaryInterestOptionTwo);
          const dietaryInterestOptionThree = document.createElement("option");
          dietaryInterestOptionThree.setAttribute(
            "id",
            "dietaryInterestOptionThree"
          );
          dietaryInterestOptionThree.classList.add("dietaryInterestOptions");
          dietaryInterestOptionThree.innerHTML = "Vegetarian";
          dietaryInterestList.appendChild(dietaryInterestOptionThree);
          const dietaryInterestOptionFour = document.createElement("option");
          dietaryInterestOptionFour.setAttribute(
            "id",
            "dietaryInterestOptionFour"
          );
          dietaryInterestOptionFour.classList.add("dietaryInterestOptions");
          dietaryInterestOptionFour.innerHTML = "Gluten-free";
          dietaryInterestList.appendChild(dietaryInterestOptionFour);
        }
        const dietaryInterestOptionFive = document.createElement("option");
        dietaryInterestOptionFive.classList.add("dietaryInterestOptions");
        dietaryInterestOptionFive.setAttribute(
          "id",
          "dietaryInterestOptionFive"
        );
        dietaryInterestOptionFive.innerHTML = "Dairy-free";
        dietaryInterestList.appendChild(dietaryInterestOptionFive);
        const dietaryInterestOptionSix = document.createElement("option");
        dietaryInterestOptionSix.classList.add("dietaryInterestOptions");
        dietaryInterestOptionSix.setAttribute("id", "dietaryInterestOptionSix");
        dietaryInterestOptionSix.innerHTML = "Nut-free";
        dietaryInterestList.appendChild(dietaryInterestOptionSix);
        const dietaryInterestOptionSeven = document.createElement("option");
        dietaryInterestOptionSeven.classList.add("dietaryInterestOptions");
        dietaryInterestOptionSeven.setAttribute(
          "id",
          "dietaryInterestOptionSeven"
        );
        dietaryInterestOptionSeven.innerHTML = "Low-sugar";
        dietaryInterestList.appendChild(dietaryInterestOptionSeven);
        const dietaryInterestOptionEight = document.createElement("option");
        dietaryInterestOptionEight.classList.add("dietaryInterestOptions");
        dietaryInterestOptionEight.setAttribute(
          "id",
          "dietaryInterestOptionEight"
        );
        dietaryInterestOptionEight.innerHTML = "High-Protein";
        dietaryInterestList.appendChild(dietaryInterestOptionEight);
        const dietaryInterestOptionNine = document.createElement("option");
        dietaryInterestOptionNine.classList.add("dietaryInterestOptions");
        dietaryInterestOptionNine.setAttribute(
          "id",
          "dietaryInterestOptionNine"
        );
        dietaryInterestOptionNine.innerHTML = "Paleo";
        dietaryInterestList.appendChild(dietaryInterestOptionNine);
        const dietaryInterestOptionTen = document.createElement("option");
        dietaryInterestOptionTen.classList.add("dietaryInterestOptions");
        dietaryInterestOptionTen.setAttribute("id", "dietaryInterestOptionTen");
        dietaryInterestOptionTen.innerHTML = "Keto";
        dietaryInterestList.appendChild(dietaryInterestOptionTen);
        const dietaryInterestOptionEleven = document.createElement("option");
        dietaryInterestOptionEleven.classList.add("dietaryListOptions");
        dietaryInterestOptionEleven.setAttribute(
          "id",
          "dietaryInterestOptionEleven"
        );
        dietaryInterestOptionEleven.innerHTML = "Low-Carb";
        dietaryInterestList.appendChild(dietaryInterestOptionEleven);
        const dietaryInterestOptionTwelve = document.createElement("option");
        dietaryInterestOptionTwelve.classList.add("dietaryInterestOptions");
        dietaryInterestOptionTwelve.id = "dietaryInterestOptionTwelve";
        dietaryInterestOptionTwelve.textContent = "Low-Fat";
        dietaryInterestList.appendChild(dietaryInterestOptionTwelve);
        const dietaryInterestOptionThirteen = document.createElement("option");
        dietaryInterestOptionThirteen.id = "dietaryInterestOptionThirteen";
        dietaryInterestOptionThirteen.classList.add("dietaryListOptions");
        dietaryInterestOptionThirteen.textContent = "Whole Food";
        dietaryInterestList.appendChild(dietaryInterestOptionThirteen);
        const dietaryInterestOptionFourteen = document.createElement("option");
        dietaryInterestOptionFourteen.id = "dietaryInterestOptionFourteen";
        dietaryInterestOptionFourteen.classList.add("dietaryInterestOptions");
        dietaryInterestOptionFourteen.textContent = "Plant-Based";
        dietaryInterestList.appendChild(dietaryInterestOptionFourteen);
        const visitingFrequencyLabel = document.createElement("label");
        visitingFrequencyLabel.id = "visitingFrequencyLabel";
        visitingFrequencyLabel.textContent = "Visiting Frequency:";
        loyaltyProgramForm.appendChild(visitingFrequencyLabel);
        const visitingFrequency = document.createElement("select");
        visitingFrequency.id = "visitingFrequency";
        loyaltyProgramForm.appendChild(visitingFrequency);
        const visitingFrequencyOptionOne = document.createElement("option");
        visitingFrequencyOptionOne.classList.add("visitingFrequencyOptions");
        visitingFrequencyOptionOne.id = "visitingFrequencyOptionOne";
        visitingFrequencyOptionOne.textContent = "Select";
        visitingFrequency.appendChild(visitingFrequencyOptionOne);
        const visitingFrequencyOptionTwo = document.createElement("option");
        visitingFrequencyOptionTwo.classList.add("visitingFrequencyOptions");
        visitingFrequencyOptionTwo.id = "vistingFrequencyOptionTwo";
        visitingFrequencyOptionTwo.textContent = "Everyday";
        visitingFrequency.appendChild(visitingFrequencyOptionTwo);
        const visitingFrequencyOptionThree = document.createElement("option");
        visitingFrequencyOptionThree.classList.add("visitingFrequencyOptions");
        visitingFrequencyOptionThree.id = "visitingFrequencyOptionThree";
        visitingFrequencyOptionThree.textContent = "Once a week";
        visitingFrequency.appendChild(visitingFrequencyOptionThree);
        const visitingFrequencyOptionFour = document.createElement("option");
        visitingFrequencyOptionFour.classList.add("visitingFrequencyOptions");
        visitingFrequencyOptionFour.textContent = "Once Every Two Weeks";
        visitingFrequencyOptionFour.id = "visitingFrequencyOptionFour";
        visitingFrequency.appendChild(visitingFrequencyOptionFour);
        const visitingFrequencyOptionFive = document.createElement("option");
        visitingFrequencyOptionFive.classList.add("visitingFrequencyOptions");
        visitingFrequencyOptionFive.id = "visitingFrequencyOptionFive";
        visitingFrequencyOptionFive.textContent = "Once Every Three Weeks";
        visitingFrequency.appendChild(visitingFrequencyOptionFive);
        const visitingFrequencyOptionSix = document.createElement("option");
        visitingFrequencyOptionSix.classList.add("visitingFrequencyOptions");
        visitingFrequencyOptionSix.id = "visitingFrequencyOptionSix";
        visitingFrequencyOptionSix.textContent = "Once a month";
        visitingFrequency.appendChild(visitingFrequencyOptionSix);
        const visitingFrequencyOptionSeven = document.createElement("option");
        visitingFrequencyOptionSeven.classList.add("visitingFrequencyOptions");
        visitingFrequencyOptionSeven.id = "visitingFrequencyOptionSeven";
        visitingFrequencyOptionSeven.textContent = "Other";
        visitingFrequency.appendChild(visitingFrequencyOptionSeven);
        const checkRules = document.createElement("input");
        checkRules.type = "checkbox";
        checkRules.id = "checkRules";
        loyaltyProgramForm.appendChild(checkRules);
        const checkRulesLabel = document.createElement("label");
        checkRulesLabel.id = "checkRulesLabel";
        checkRulesLabel.textContent =
          "Do you agree with the rules listed in the previous page?";
        loyaltyProgramForm.appendChild(checkRulesLabel);
        const loyaltyProgramFormSubmit = document.createElement("button");
        loyaltyProgramFormSubmit.type = "submit";
        loyaltyProgramFormSubmit.id = "loyaltyProgramFormSubmit";
        loyaltyProgramFormSubmit.textContent = "Submit";
        loyaltyProgramForm.appendChild(loyaltyProgramFormSubmit);
        return { loyaltyProgramContent };
      }
    });
    return { loyaltyProgramContent };
  };

  return { loyaltyProgramContent };
};

export default loyaltyProgramPage;
