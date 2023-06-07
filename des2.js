// const data = {
//   "results": [
//     {
//       "gender": "female",
//       "name": {
//         "title": "miss",
//         "first": "mia",
//         "last": "sutton"
//       }
//     }
//   ]
// };

// // declare a const variable named firstItem that holds the first element of the array
// const { results: [firstItem] } = data;
// // You could event destructure the content of this first array item like this
// const { results: [{ gender, name }] } = data;
// // or go deeper like this
// const { results: [{ name: { title, first, last } }] } = data;

// console.log(firstItem);
// console.log(gender);
// console.log(name);
// console.log(title, first, last);

const research = {
  id: 445,
  data: "2019-05-13T00:00:00",
  otherContent: "...",
  acf: {
      relatedStaff: [{
          staffLevel: 'Supervisors',
          users: [{
              name: { first: 'Bob', last: 'Weichler' }
          },{
              name: { first: 'Jane', last: 'Doe' }
          }]
      },{
          staffLevel: 'Reseachers',
          users: [{
              name: { first: 'John', last: 'Doe' }
          }]
      }]
  },
}
let result=[]
const getRelatedUsers = ( result = [] ) => {
  const { acf: { relatedStaff } } = research;
  relatedStaff.map(({ users }) => {
      users.map(({ name: { first, last } }) => {
          result.push(`${first} ${last}`);
      });
  });
  return result;
}
console.log(result);