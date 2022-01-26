import { useState, useEffect } from 'react';
import Nav from '../../components/Nav';
import Card from '../../components/Card';

export default function Cities() {

  const [cities, setCities] = useState([])

  const fetchCities = async () => {
    const response = await fetch('/api/cities');
    const data = await response.json();
    setCities(data);
  }

    useEffect(() => {
      fetchCities();
    }, [])
  

  return (
    <div>
        <Nav />
    </div>
  );
}

