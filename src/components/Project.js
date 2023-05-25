import AboutMe from './nav-components/AboutMe';
import Contact from './nav-components/Contact';
import Resume from './nav-components/Resume';
import Portfolio from './nav-components/Portfolio';

function Project(props) {
  let page;
  const { currentPage } = props;
  console.log(currentPage);
  switch (currentPage) {
    case 'about':
      page = <AboutMe />;
      break;
    case 'contact':
      page = <Contact />;
      break;
    case 'resume':
      page = <Resume />;
      break;
    case 'portfolio':
      page = <Portfolio />;
      break;
    default:
      page = null;
  }
  return(
    <div>
      {page}
    </div>
  );
}

export default Project;