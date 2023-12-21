import React, { useEffect, useState } from "react";
import axios from "axios";
function Connections({ title = "osama Raed Alnobani " }) {
  const [pending, setPending] = useState([]);
  const [conniction, setConniction] = useState([])
  const [flag , setFlag] =useState(false)
  const fetchPendingUsers = async (user_id) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/${user_id}/pendingConnections`
      );
      // console.log(response.data);
      // console.log(response.data[0]._id);

      setPending(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchConniction = async (user_id) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/${user_id}/acceptedConnections`
      );
      console.log(response.data);
      setConniction(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // const 

  // /connections/:connectionId/reject
  // /connections/:connectionId/accept

  const reject =async (connectionId)=>{
    try {
      const response = await axios.put(
        `http://localhost:8000/connections/${connectionId}/reject`
      );
      setFlag(!flag);
    } catch (error) {
      console.log(error);
    }
  }
  const accept =async (connectionId)=>{
    try {
      const response = await axios.put(
        `http://localhost:8000/connections/${connectionId}/accept`
      );
      setFlag(!flag);
    } catch (error) {
      console.log(error);
    }
  }



  useEffect(() => {
    fetchPendingUsers("6581e28a329f8f5eb85d2f95");
    fetchConniction("6581e28a329f8f5eb85d2f95")
  }, [flag]);

  const data = [];

  return (
    <div className="flex justify-center pt-24 ">
      <div className="p-4 w-full bg-gray-50 rounded-lg border shadow-md sm:p-8 m-4 ">
        <div className="max-w-2xl mx-auto px-4">
          <div className="items-start justify-between sm:flex ">
            <div>
              <h4 className="text-gray-800 text-xl font-semibold">{title}</h4>
              <p className="mt-2 text-gray-600 text-base sm:text-sm">{title}</p>
            </div>
          </div>

          <ul className="mt-12 divide-y">
            {pending.map((member, id) => (
              <li key={id} className="py-5 flex items-start justify-between">
                <div className="flex gap-3">
                  <img
                    src={
                      member.picture !== null
                        ? "https://i.pinimg.com/564x/02/59/54/0259543779b1c2db9ba9d62d47e11880.jpg"
                        : "https://i.pinimg.com/564x/02/59/54/0259543779b1c2db9ba9d62d47e11880.jpg"
                    }
                    className="flex-none w-12 h-12 rounded-full"
                  />
                  <div>
                    <span className="block text-sm text-gray-700 font-semibold">
                      {}
                    </span>
                    <span className="block text-sm text-gray-600">
                      {member.user1.firstName} {" "} {member.user1.lastName} 
                    </span>
                  </div>
                </div>
                <div className="flex flex-row gap-2 mt-2">
                  <button
                  // member._id
                    onClick={() => {accept(member._id)}}
                    href="javascript:void(0)"
                    className=" text-sm border text-white rounded-lg px-3 py-2 duration-150 bg-dark-color hover:bg-dark-color/75 "
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => {reject(member._id)}}
                    href="javascript:void(0)"
                    className=" text-sm border border-red-600 text-red-600 rounded-lg px-3 py-2 duration-150 bg-white hover:bg-red-700 hover:text-white"
                  >
                    Reject
                  </button>
                </div>
              </li>
            ))}
          </ul>
<hr></hr>
          <ul className=" divide-y">
            {conniction.map((member, id) => (
              <li key={id} className="py-5 flex items-start justify-between">
                <div className="flex gap-3">
                  <img
                    src={
                      member.picture !== null
                        ? "https://i.pinimg.com/564x/02/59/54/0259543779b1c2db9ba9d62d47e11880.jpg"
                        : "https://i.pinimg.com/564x/02/59/54/0259543779b1c2db9ba9d62d47e11880.jpg"
                    }
                    className="flex-none w-12 h-12 rounded-full"
                  />
                  <div>
                    <span className="block text-sm text-gray-700 font-semibold">
                      {}
                    </span>
                    <span className="block text-sm text-gray-600">
                    {member.user1.firstName} {" "} {member.user1.lastName} 
                    </span>
                  </div>
                </div>
                <div className="flex flex-row gap-2 mt-2">
                <button
                    onClick={() => {}}
                    href="javascript:void(0)"
                    className=" text-sm border border-dark-color text-dark-color rounded-lg px-3 py-2 duration-150 bg-white hover:bg-dark-color hover:text-white"
                  >
                    message
                  </button>
    
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Connections;
