// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names

const navOptions = ['Home', 'About', 'Blog', 'Contact', 'Resume'];

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      {navOptions.map((option) => ( 
        <li className="nav-item">
          <a
            href={`#${option.toLowerCase()}`}
            onClick={() => handlePageChange(option)}
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === option ? 'nav-link active' : 'nav-link'}
          >
            {option}
          </a>
        </li>
      ))  
      }

    </ul>
  );
}

export default NavTabs;
