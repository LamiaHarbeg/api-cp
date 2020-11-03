import React, {useState, useEffect} from 'react'
import axios from "axios"
import "./UserList.css" 

function UserList() {
    const [users, setUsers] = useState([])
useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
   .then(res =>{
       console.log(res)
       setUsers(res.data)
   })
   .catch(err =>{
       console.log(err)
   })
},[])


    return (
        <>
          <section id="team" className="pb-5">
        <h5 className="section-title h1">USERS LIST</h5>
    <div  >
        <div className="row">
                     { users.map((user,id) =>
               <div  key={id}>
               <div className="image-flip" >
                   <div className="mainflip">
                       <div className="frontside">
                           <div className="card">
                               <div className="card-body text-center">
                                   <p><img className=" img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTx5jGnGmUJTRFT6CKyT_3FWDawwiS5vZd7DQ&usqp=CAU" alt="profil_image"/></p>
                                   <h4 className="card-title"> {user.name}</h4>
                     <p>Email : {user.email} <br/> Address : {user.address.street} Street {user.address.suite} Suite, {user.address.city} City / Zipcode: {user.address.zipcode}</p>
                     <p>Location : Latitude = {user.address.geo.lat} & <br/> Longitude = {user.address.geo.lng} </p>
                                   <a href="hover" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                               </div>
                           </div>
                       </div>
                       <div className="backside">
                           <div className="card">
                               <div className="card-body text-center mt-4">
                     <h4 className="card-title">Username :  {user.username}</h4>
                     <p className="card-text">Website : {user.website}</p>
                     <p className="card-text">Phone :  {user.phone}</p>
                     <h4 className="card-title">Company</h4>
                     <p className="card-text">Name :  {user.company.name}</p>
                     <p className="card-text">CatchPhrase :  {user.company.catchPhrase}</p>
                     <p className="card-text">BS :  {user.company.bs}</p>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
        )}
        </div>
        </div>
        </section>
                        </>
    )
}

export default UserList;
