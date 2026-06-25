const restaurantInfo = {
  hours: [
    "Monday - Friday: 11:00 AM - 10:00 PM",
    "Saturday: 12:00 PM - 11:00 PM",
    "Sunday: Closed"
  ],
  contact: {
    phone: "312-555-0192",
    email: "service@thebearchicago.com"
  },
  location: "648 W. Orleans St, Chicago, IL 60610"
};

const createInfo = () => {
  const infoContainer = document.createElement('div');
  infoContainer.classList.add('info-container');

  const hoursSection = document.createElement('div');
  hoursSection.classList.add('info-section');

  const hoursTitle = document.createElement('h3');
  hoursTitle.textContent = "Hours";
  hoursSection.appendChild(hoursTitle);

  restaurantInfo.hours.forEach((day) => {
    const hoursParagraph = document.createElement('p');
    hoursParagraph.textContent = day;
    hoursSection.appendChild(hoursParagraph);
  });
  infoContainer.appendChild(hoursSection);

  const contactSection = document.createElement('div');
  contactSection.classList.add('info-section');
  
  const contactTitle = document.createElement('h3');
  contactTitle.textContent = "Contact Us";
  contactSection.appendChild(contactTitle);

  const phoneParagraph = document.createElement('p');
  phoneParagraph.textContent = `Phone: ${restaurantInfo.contact.phone}`;
  contactSection.appendChild(phoneParagraph);

  const emailParagraph = document.createElement('p');
  emailParagraph.textContent = `Email: ${restaurantInfo.contact.email}`;
  contactSection.appendChild(emailParagraph);

  infoContainer.appendChild(contactSection);


  const locationSection = document.createElement('div');
  locationSection.classList.add('info-section');

  const locationTitle = document.createElement('h3');
  locationTitle.textContent = "Location";
  locationSection.appendChild(locationTitle);

  const locationParagraph = document.createElement('p');
  locationParagraph.textContent = restaurantInfo.location;
  locationSection.appendChild(locationParagraph);

  infoContainer.appendChild(locationSection);

  return infoContainer;
};

export default createInfo;