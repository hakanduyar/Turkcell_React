import React from 'react';

function User({data, friends}) { 
  return (
    <div>
      Kişi
      <div>İsim : {data.name}</div>
      <div>Yaş :  {data.age}</div>
      <div>Şehir :  {data.city}</div>

      <h3>Arkadaşları</h3>
      {friends.map((friend, i) =>(
        <div key={i}>{friend}</div>
      ) 
      )}

      <hr/>
    </div>
  );
}

// function User({data: { name, age, city} }) {
//   console.log(props);
//   return (
//     <div>
//       User
//       <div>İsim : {props.data.name}</div>
//       <div>Yaş :  {props.data.age}</div>
//       <div>Şehir :  {props.data.city}</div>

//       <hr/>
//     </div>
//   );
// }


export default User;