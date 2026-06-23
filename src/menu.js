const menuItems = [
  { name: "Italian Beef Sandwich", price: "$12", description: "Juicy shaved beef, giardiniera, au jus, on French bread." },
  { name: "Lemon Pepper Chicken", price: "$18", description: "Crispy skin, intense lemon pepper glaze, roasting jus." },
  { name: "The Berf Cannoli", price: "$6", description: "Homemade ricotta filling, orange zest, chocolate chips." }
];

const createMenu = () => {
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');

  menuItems.forEach((item) => {
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-item');

    const plateTitle = document.createElement('h3');
    plateTitle.classList.add('plate-name');
    plateTitle.textContent = `${item.name} - ${item.price}`;
    menuDiv.appendChild(plateTitle);

    const plateDescription = document.createElement('p');
    plateDescription.classList.add('plate-description');
    plateDescription.textContent = item.description;

    menuContainer.appendChild(menuDiv);
  });

  return menuContainer;
};

export default createMenu;