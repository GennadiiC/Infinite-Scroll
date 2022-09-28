import { useEffect } from "react"
import { setLimit } from "../redux/scrollSlice";
import { useDispatch } from "react-redux";
import { Table } from "./Table";
import { Header } from './Header'

function App() {

  const dispatch = useDispatch()
 
  // effect implementing infinite scroll
  useEffect(() => {
    const handleScroll = e => {
      if (window.innerHeight + e.target.documentElement.scrollTop >= e.target.documentElement.scrollHeight) {
        dispatch(setLimit(10))
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  


  return (
    <div className="container-fluid">
      <Header />
      <Table />
    </div>
  );
}

export default App;
