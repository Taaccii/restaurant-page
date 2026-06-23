const createHomepage = () => {
  const homeDiv = document.createElement('div');
  homeDiv.classList.add('home-container');

  const title = document.createElement('h1');
  title.textContent = "THE BEAR";
  title.classList.add('title');
  homeDiv.appendChild(title);

  const subTitle = document.createElement('h2');
  subTitle.textContent = "Every Second Counts."
  subTitle.classList.add('subtitle');
  homeDiv.appendChild(subTitle);

  const description = document.createElement('p');
  description.textContent = `No shortcuts, no distractions.
In the heart of The Bear's kitchen, we combine the intensity of Chicago street food with the precision of contemporary fine dining.
Thoughtful dishes, bold flavors, and a touch of healthy madness. Welcome to our team: sit down, order, and enjoy the controlled chaos.`

  description.classList.add('description');
  homeDiv.appendChild(description);

  return homeDiv;
};

export default createHomepage;