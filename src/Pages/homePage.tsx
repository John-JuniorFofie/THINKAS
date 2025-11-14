import Header from '../Components/Header';
import Hero from '../Components/hero';
import AboutSec from '../Components/AboutSec';
import Partners from '../Components/partners';
import Projects from '../Components/projects';
import Latest from '../Components/latest';
import Blog from '../Components/blog';
function Homepage() {
  return (
    <div>
        <Header />
        <Hero />
        <AboutSec />
        <Partners />
        <Projects />
        <Latest />
        <Blog />
    </div>
  );
}
export default Homepage;