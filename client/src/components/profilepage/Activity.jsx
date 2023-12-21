import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Activity() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/ttt'); // Replace with your JSON server URL
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className=''>
      <div className='container mx-auto  w-3/4 mt-4 shadow-lg  rounded-[2rem] bg-bg-white md:h-auto'>


        <div className='flex flex-raw text-dark-color '>
          <p className=' font-semibold text-2xl m-4'>Activity</p>
          <button className="border border-1 border-dark-color rounded-2xl text-s text-center p-2 font-medium h-8 mt-4 ml-[900px]">create post</button>
        </div>
        <div className='pb-4'> 

          <a class="flex flex-col p-4 items-center bg-none border max-w-3/4 border-light-color rounded-[2rem] shadow md:flex-row   m-4  h-40">
            <img class=" w-12 h-12 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLzXD140wCYEKBSqQq9hBF1QEVY3YZ39GqEA&usqp=CAU" alt="" />
            {data.map((user) => (
              <div key={user.id} className="bg-white p-4  flex flex-col gap-2 rounded-b-lg">
                <p className='mt-6  font-bold' > {user.name}</p>
                <p className=' ' > {user.about}</p>
              </div>
            ))}
          </a>
          {/* <a class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl ml-4 mt-4 mb-4 h-40 ">
            <img class=" w-40 h-28 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLzXD140wCYEKBSqQq9hBF1QEVY3YZ39GqEA&usqp=CAU" alt="" />
            {data.map((user) => (
              <div key={user.id} className="bg-white p-4  flex flex-col gap-2 rounded-b-lg">
                <p className='mt-6 ml-2 font-bold' > {user.name}</p>
                <p className=' ml-2' > {user.about}</p>
              </div>
            ))}
          </a>
          <a class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl ml-4 mt-4 mb-4 h-40  ">
            <img class=" w-40 h-28 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLzXD140wCYEKBSqQq9hBF1QEVY3YZ39GqEA&usqp=CAU" alt="" />
            {data.map((user) => (
              <div key={user.id} className="bg-white p-4  flex flex-col gap-2 rounded-b-lg">
                <p className='mt-6 ml-2 font-bold' > {user.name}</p>
                <p className=' ml-2' > {user.about}</p>
              </div>
            ))}
          </a> */}
        </div>


      </div>
    </div>


  )
}

export default Activity
