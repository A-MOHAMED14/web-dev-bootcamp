// TODO: Add a comment explaining how we are able to extract the key value pairs from props
// By destructing the props object

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange("Home")}
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for
          // Conditional ternary operator.
          // Checks if the current page is Home.
          // If it is, we set the current page to nav-link-active, otherwise we set it to nav-link

          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange("About")}
          //  TODO: Add a comment explaining what this logic is doing
          // Checks if the current page is About.
          // If it is, we set the current page to nav-link-active, otherwise we set it to nav-link

          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#blog"
          onClick={() => handlePageChange("Blog")}
          //  TODO: Add a comment explaining what this logic is doing
          // Checks if the current page is Blog.
          // If it is, we set the current page to nav-link-active, otherwise we set it to nav-link

          className={currentPage === "Blog" ? "nav-link active" : "nav-link"}
        >
          Blog
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          //  TODO: Add a comment explaining what this logic is doing
          // Checks if the current page is Contact.
          // If it is, we set the current page to nav-link-active, otherwise we set it to nav-link
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
