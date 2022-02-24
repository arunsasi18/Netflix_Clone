
import './App.css';
import { action,orginals,horror,romance,documentry,comedy } from './urls';
import Banner from './components/banner/Banner';
import NavBar from './components/navBar/NavBar';
import RowPoster from './components/rowPosters/RowPoster';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <RowPoster url={orginals} title="Netflix Orginals"/>
     <RowPoster url={action} title="Action Movies" isSmall />
     <RowPoster url={romance} title="Romance Movies" isSmall />
     <RowPoster url={horror} title="Horror Movies" isSmall />
     <RowPoster url={comedy} title="Comedy Movies" isSmall />
     <RowPoster url={documentry} title="Documentaries" isSmall />
    </div>
  );
}

export default App;
