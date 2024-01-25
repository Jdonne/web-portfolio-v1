import memoryImg from "../../../images/projects/memory.png";
import resturantImg from "../../../images/projects/restaurant.png";
import shoppiesImg from "../../../images/projects/shoppies.png";
import portfolioImg from "../../../images/projects/portfolio.png";
const portfolio = {
  title: "Portfolio",
  content: (
    <div>
      <div className="mb-3">
        <span>
          Portfolio that uses react router to direct pages and bootstrap for
          general styling. It consists of a main page, projects page,
          photography page, about page and contact page. Notably the photography
          page has state managed toggles, to render and display various film
          albums. A card component is used throughout portfolio with
          conditionally rendered content fields to accomodate different use
          cases.
        </span>
      </div>
      <div>
        Application is hosted and can be visited at{" "}
        <a href="" target="_blank">
          dummy text for now
        </a>
      </div>
    </div>
  ),
  img: portfolioImg,
};

const memory = {
  title: "Memory Game",
  content: (
    <div>
      <div className="mb-3">
        React App: Profile images of NBA players will be displayed. The Goal of
        the game is to click on all the images without clicking the same image
        twice. Highscore tracker included!
      </div>
      <div>
        Application is hosted and can be visited at{" "}
        <a
          href="https://jdonne.github.io/memory-card/"
          target="_blank"
          rel="noreferrer">
          https://jdonne.github.io/memory-card/
        </a>
      </div>
    </div>
  ),
  img: memoryImg,
};
const shoppies = {
  title: "Shoppies",
  content: (
    <div>
      <div className="mb-3">
        This is a submission to the UX Developer Intern and Web Developer Intern
        Challenge - (Summer 2021) at Shopify. It allows the user to save their
        favourite films they feel should be up for nomination from the OMDB API(
        <a href="http://www.omdbapi.com/" target="_blank" rel="noreferrer">
          http://www.omdbapi.com/
        </a>
        ). When 5 nominees have been selected they will be notified they're
        finished.
      </div>
      <div className="mb-3">
        Application is hosted and can be visited at{" "}
        <a
          href="http://jdonne.github.io/shoppies"
          target="_blank"
          rel="noreferrer">
          http://jdonne.github.io/shoppies
        </a>
      </div>

      <div>
        <h3>Fuctionalities Include:</h3>
        <ul>
          <li>Live search OMDB and display the results (movies only)</li>
          <li>Add a movie from the search results to our nomination list</li>
          <li>View the list of films already nominated</li>
          <li>Remove a nominee from the nomination list</li>
          <li>Each movie title will link to the corresponding imDB page</li>
        </ul>
      </div>
    </div>
  ),
  img: shoppiesImg,
};
const restaurant = {
  title: "Restaurant Search",
  content: (
    <div>
      <div className="mb-3">
        This is an app that let's you input a city to return top rated
        restaurants within that city. There is also a refine option to further
        narrow down your search with any keyword.
      </div>
      <div>
        <div>
          This app uses the zomato api:{" "}
          <a
            href="https://developers.zomato.com/api\"
            target="_blank"
            rel="noreferrer">
            https://developers.zomato.com/api\
          </a>
        </div>
        <div className="mb-3">
          Application is hosted and can be visited at{" "}
          <a
            href="http://jdonne.github.io/restaurant-search"
            target="_blank"
            rel="noreferrer">
            http://jdonne.github.io/restaurant-search
          </a>
        </div>
        <div>
          <div className="">
            <strong>note:</strong> zomato api is no longer supported, therefore
            application will return error message on search. To look at code
            implementation please visit:{" "}
            <a
              href="https://github.com/Jdonne/restaurant-search"
              target="_blank"
              rel="noreferrer">
              https://github.com/Jdonne/restaurant-search
            </a>
          </div>
        </div>
      </div>
    </div>
  ),
  img: resturantImg,
};
const projectContent = [portfolio, memory, shoppies, restaurant];

export default projectContent;
