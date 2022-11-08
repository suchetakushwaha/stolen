
import './App.css';
import Bike from './bike';
import StolenBike from './stolen-bike-info';
import cycle from './cycle.jpeg';
import Paginate from './paginate';


function App() {
  const description=[
    {
      title: "Specialized spec sirrus x 3.0",
      serial: "WSBC011024960S",
      PrimaryColors:"Black",
      stolendate:" Sep 2nd, 7pm",
      Location:"Leipzig, 04316, DE"
    },
    {
      title: "Specialized spec sirrus x 3.0",
      serial: "XTCD011024960S",
      PrimaryColors:"Blue",
      stolendate:" Sep 3nd, 6pm",
      Location:"Leipzig, 04316, DE"
    },
    {
      title: "Specialized spec sirrus x 3.0",
      serial: "XTCD011024960S",
      PrimaryColors:"Blue",
      stolendate:" Sep 3nd, 6pm",
      Location:"Leipzig, 04316, DE"
    },
    {
      title: "Specialized spec sirrus x 3.0",
      serial: "XTCD011024960S",
      PrimaryColors:"Blue",
      stolendate:" Sep 3nd, 6pm",
      Location:"Leipzig, 04316, DE"
    },

    {
      title: "Specialized spec sirrus x 3.0",
      serial: "XTCD011024960S",
      PrimaryColors:"Blue",
      stolendate:" Sep 3nd, 6pm",
      Location:"Leipzig, 04316, DE"
    },

    {
      title: "Specialized spec sirrus x 3.0",
      serial: "XTCD011024960S",
      PrimaryColors:"Blue",
      stolendate:" Sep 3nd, 6pm",
      Location:"Leipzig, 04316, DE"
    },

    {
      title: "Specialized spec sirrus x 3.0",
      serial: "XTCD011024960S",
      PrimaryColors:"Blue",
      stolendate:" Sep 3nd, 6pm",
      Location:"Leipzig, 04316, DE"
    },

    {
      title: "Specialized spec sirrus x 3.0",
      serial: "XTCD011024960S",
      PrimaryColors:"Blue",
      stolendate:" Sep 3nd, 6pm",
      Location:"Leipzig, 04316, DE"
    },


]
  return (
    <div className="App">
      <Bike/>
       {description.map((e)=>{
        return(
      <StolenBike title = {e.title} serial={e.serial} pcolor={e.PrimaryColors} stolen={e.stolendate} location={e.Location} image2 ={cycle}/>);}
     )}
     <Paginate/>
      </div>
  );
}

export default App;
