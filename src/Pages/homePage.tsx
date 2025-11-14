import Header from '../Components/Header';
import Hero from '../Components/hero';
import AboutSec from '../Components/AboutSec';
import Partners from '../Components/partners';
import Projects from '../Components/projects';
function Homepage() {
  return (
    <div>
        <Header />
        <Hero />
        <AboutSec />
        <Partners />
        <Projects />
    </div>
  );
}
export default Homepage;