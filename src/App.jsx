import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function App() {
  const [friends, setFriends] = useState([])
  const [picture, setPicture] = useState('')
  const [name, setName] = useState('')

  const getSavedFriends = async () => {
    const res = await axios.get('/api/friends')
    setFriends(res.data)
  }

  useEffect(() => {
    getSavedFriends()
  }, [])


  const addFriend = () => {
    setFriends([...friends, {picture: picture, name: name}])
    setName('') 
    setPicture('') 
  }
  const friendInfo = friends.map((friend) => {
    return (<div key={friend}>
      <img src={ friend.picture } alt={ friend.name }></img>
      <br/>
      <span>{ friend.name }</span>
    </div>)
  })
  return <div>
    <label htmlFor="URL">Picture URL: </label>
    <input id="URL" value={ picture } onChange={(e) => setPicture(e.target.value)}/>
    <p>{ picture }</p>
    <br />
    <label htmlFor="personName">Name: </label>
    <input id="personName" value={ name } onChange={(e) => setName(e.target.value)}/>
    <br />
    <button onClick={addFriend}>Add Friend</button>
    {friendInfo}
  </div>;
}

// const exampleInfo = [{name: "Tommy", picture: "someURL"} ,{name: "Tomathanian", picture: "someURL"}, {name: "Tomerson", picture: "someURL"}, {name: "Tom", picture: "someURL"}, ]
// const resultArr = [];

// exampleInfo.map -> {
//   // do a thing to the value of exampleInfo[0]
//   resultArr.push(exampleInfo[0] + 5)
//   resultArr.push(exampleInfo[1] + 5)
// }


// const result = exampleInfo.map((element) => {
//   // make html for each element of exampleInfo array, and push that html to a new array
//   // make html for element 1 of exampleInfo and push it to a new array
//   // make html for element 2 of example info and push it to a new array
// })

// console.log(result)
// result[0] // html for for element
// result[1] // html for next element,