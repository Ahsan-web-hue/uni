// import Products_data from '../data/Products_data';
// // Student Data
// const Student = {
//     name: 'John Doe',
//     age: 25,
//     city: 'New York',
//     grade: 'A',
//     subjects: ['Math', 'Science', 'English'],
//     address: {
//         street: '123 Main St',
//         city: 'New York',
//         state: 'NY',
//         zip: '10001'
//     },
//     academicHistory: ['A+', 'C', 'B', 'D', 'B+', 'A']
// };


// // Main StudentDetails Component
// export default function StudentDetails() {

//     return (
//         <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
//             <h1 className="text-center text-3xl font-bold text-red-500 mb-6">Student Details</h1>

//             <div className="mb-4">
//                 <p className="text-lg"><span className="font-semibold">Name:</span> {Student.name}</p>
//                 <p className="text-lg"><span className="font-semibold">Age:</span> {Student.age}</p>
//                 <p className="text-lg"><span className="font-semibold">City:</span> {Student.city}</p>
//                 <p className="text-lg"><span className="font-semibold">Grade:</span> {Student.grade}</p>
//             </div>

//             <div className="mb-4">
//                 <h2 className="text-2xl font-semibold text-gray-700 mb-2">Subjects:</h2>
//                 <ul className="list-disc list-inside">
//                     {Student.subjects.map((subject, index) => (
//                         <li key={index} className="text-gray-600">{subject}</li>
//                     ))}
//                 </ul>
//             </div>

//             <div className="mb-4">
//                 <h2 className="text-2xl font-semibold text-gray-700 mb-2">Address:</h2>
//                 <p className="text-lg"><span className="font-semibold">Street:</span> {Student.address.street}</p>
//                 <p className="text-lg">
//                     <span className="font-semibold">City:</span> {Student.address.city}, 
//                     <span className="font-semibold"> State:</span> {Student.address.state}, 
//                     <span className="font-semibold"> Zip:</span> {Student.address.zip}
//                 </p>
//             </div>

//             <div className="mb-6">
//                 <h2 className="text-2xl font-semibold text-gray-700 mb-2">Academic History:</h2>
//                 <ul className="list-disc list-inside">
//                     {Student.academicHistory.map((academicHistory, index) => (
//                         <li key={index} className="text-gray-600">{academicHistory}</li>
//                     ))}
//                 </ul>
//             </div>

//         </div>
//     );
// }
// export default function Home() {
//     return (
//       <div className="container mx-auto p-4">
//         {Products_data.map((product, index) => (
//           <div key={index} className="bg-white shadow-md rounded-lg p-6 mb-6">
//             <h2 className="text-xl font-bold mb-2">{product.title}</h2>
//             <p className="text-gray-600 mb-1">
//               <span className="font-semibold">Category:</span> {product.category}
//             </p>
//             <p className="text-gray-600 mb-4">
//               <span className="font-semibold">Price:</span> ${product.price}
//             </p>
//             <img
//               src={product.image}
//               alt={product.title}
//               className="w-24 h-24 object-cover rounded"
//             />
//           </div>
//         ))}
//       </div>
//     );
//   }
  
    // const  isMarried = false;
    // const City = "Lahore";
    // // Objects 
    // const Person = {
    //     name: "John Doe",
    //     age: 25,
    //     address: {
    //         street: "123 Main St",
    //         city: "New York"
    //     },
    //     hobbies: ["Reading", "Traveling", "Cooking"]

    // }

    // return(
    //     <div>
    //         <h1 className='text-center'>Home Page</h1>
    //         <p> {isMarried ? "YES I'm Married": "NO I'm not Married"} </p>
    //         <p> {City=="Lahore"? "Location is in Map" : "No location "} </p>
    //         <h2>Person Details</h2>
    //         <p>Name: {Person.name}</p>
    //         <p>Age: {Person.age}</p>
    //         <p>Street: {Person.address.street}</p>
    //         <p>City: {Person.address.city}</p>
    //         <h3>Hobbies</h3>
    //         <ul className="list-disc list-inside">
    //             { Person.hobbies.map((hobbies,index)=>(
    //                     <li key={index} className="text-gray-600">{hobbies}</li>

    
    //             ))}
    //         </ul>
    //     </div>

    // );