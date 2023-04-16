import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/Product';

const Home = () => {

  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);

    try{
      const res = await fetch(API_URL);
      const data = await res.json();
      
      setPosts(data);

    } catch(error){
      console.log("error")
      setPosts([]);
    }
    setLoading(false);
  };

  useEffect( () => {
    fetchProductData();
  }, []);

  return (
    <div>
      {
        loading ? (<Spinner/>) :
        (posts.length > 0 ? (
          <div>
            {
              posts.map( (post) => {
                return <Product key={post.id} post={post} />
              })
            }
          </div>
        ) :
        (<div>
            No Data Found
          </div>))
      }
    </div>
  )
}

export default Home