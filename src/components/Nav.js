import { capitalizeFirstLetter } from "../utils/helpers";
import {useEffect} from 'react';



function Nav(props) {
  const categories = props.categories
  console.log(categories)
  useEffect(() => {
    document.title = capitalizeFirstLetter(props.currentCategory.name);
    console.log(document.title)
  }, [props.currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"> 📸</span> Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => props.setContactSelected(false)}>
              About me
            </a>
          </li>
          <li className={`mx-2 ${props.contactSelected && 'navActive'}`}>
            <span onClick={() => props.setContactSelected(true)} >Contact</span>
          </li>
          {categories.map(category => (
            <li
              className={`mx-1 ${
                props.currentCategory.name === category.name && !props.contactSelected && 'navActive'
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  props.setCurrentCategory(category)
                  props.setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}


export default Nav;