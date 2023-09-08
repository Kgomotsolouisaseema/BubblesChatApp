
// import React, { useEffect, useState } from "react";
// // import { Pressable } from "react-native";
// import { Button, TextInput, View , Text } from "react-native-web";




// function HomeScreen() {
//   const [name, setName] = useState("");
//   const [age, setAge] = useState(0);
//   const [books, setBooks] = useState(["The Secret", "The Art of War"]);

//   useEffect(()=>{
//     console.log('just mounted');
//     return()=>{
//       console.log('unmounting');
//     }
//   })

//   //function to add more books the the state of books which is an array
//   const addBook = (title) => {
//     setBooks((books) => {
//       return [...books, title.trim()];
//     });
//   };
//   //function to reset the state of the inputs
//   const clearState = () => {
//     setName("");
//     setAge(0);
//     setBooks(["The Secret", "The Art of War"]);
//   };

//   const removeBook = (i) =>{
//     if(books[i]){
//       const newBooks = [...books];
//       newBooks.splice(i ,1)
//       setBooks(newBooks)
//     }
//   }

//   useEffect(() => {
//     console.log(name);
//   }, [name]);

//   useEffect(() => {
//     console.log(age);
//   }, [age]);

//   useEffect(() => {
//     console.log(books);
//   }, [books]);

//   useEffect(()=>{

//   },[name,age,books])
  
//   return (
//     <View className="container">
//       {
//         books.map(item =>{
//           return(<Text>{item}</Text>) //display items on ui
//         }) 
        
//       }
//       <TextInput
//         placeholder="Enter name"
//         style={{ borderColor: "grey", borderWidth: 1, borderRadius: 5 }}
//         onChange={(ev) => setName(ev.target.value)}
//       />

//       <TextInput
//         placeholder="Enter age"
//         style={{ borderColor: "grey", borderWidth: 1, borderRadius: 5 }}
//         onChange={(ev) => setAge(ev.target.value)}
//       />
//       <TextInput
//         placeholder="Enter book "
//         style={{ borderColor: "grey", borderWidth: 1, borderRadius: 5 }}
//         onBlur={(ev) => addBook(ev.target.value)} //call the function and not the state setbooks func
//       />

//       <TextInput
        
//         style={{ borderColor: "grey", borderWidth: 1, borderRadius: 5 }}
//         onBlur={(ev) => removeBook(ev.target.value)} />
   

//       <Button
//         style={{
//           backgroundColor: "rgb(150 ,180 ,190)",
//           borderRadius: 5,
//           color: "#fff",
//         }}
//         onPress={() => {
//           clearState();
//         }}
//         title="Clear State"
//       />
//     </View>
//   );
// }

// export default HomeScreen;

