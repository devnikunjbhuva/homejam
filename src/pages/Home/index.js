import './home.less';
import MainInfo from './MainInfo';
import Reviews from './Reviews';
import UpcomingShows from './UpcomingShows';

function Home() {
  return (
    <div className="home-container">
      <MainInfo />
      <div className="main-content">
        <UpcomingShows />
        <Reviews />
      </div>
    </div>
  );
}

export default Home;
