import Trending from '../../components/Trending/Trending';
import Discover from '../../components/Discover/Discover';
import Popular from '../../components/Popular/Popular';
import WatchFree from '../../components/WacthFree/WacthFree';
import Unete from '../../components/Unete/Unete';
import Welcome from '../../components/Welcome/Welcome';

const Home = () => {
  return (
    <div>
      <Welcome />
      <Trending />
      <Discover />
      <Popular />
      <Unete />
      <WatchFree />
    </div>
  );
};

export default Home;
