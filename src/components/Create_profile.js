// import React, {useState} from 'react'
//
// const NewProfile = (props) => {
//   let emptyProfile = {image: '', name: '', age: '', fav_console: '',}
//   let [profile, setProfile] = useState(emptyProfile)
//
//   const handleChange = (event) => {
//     setProfile({...profile, [event.target.name]:event.target.value})
//   }
//
//   const handleSubmit = (event) => {
//     event.preventDefault()
//     props.handleCreate(profile)
//     console.log(profile);
//   }
//
//   return(
//     <>
//       <br />
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="image">Image: </label>
//         <input type="url" name="image" onChange={handleChange}/>
//       <br />
//         <label htmlFor="name">Name: </label>
//         <input type="text" name="name" onChange={handleChange}/>
//       <br />
//         <label htmlFor="age">Age: </label>
//         <input type="text" name="age" onChange={handleChange}/>
//       <br />
//         <label htmlFor="fav_console">Favorite Console: </label>
//         <input type="text" name="fav_console" onChange={handleChange}/>
//       <br />
//         <input type="submit"/>
//       </form>
//     </>
//   )
//
// }
//
// export default NewProfile
