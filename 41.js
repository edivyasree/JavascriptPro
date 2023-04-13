// Find itinerary from the given list of departure and arrival airports

// Given a list of departure and arrival airports, find the itinerary in order. It may be assumed that departure is scheduled from every airport except the final destination,
//  and each airport is visited only once, i.e., there are no cycles in the route.

// Input: 
// HKG —> DXB
// FRA —> HKG
// DEL —> FRA
 
// Output: DEL —> FRA —> HKG —> DXB



let arr=['HKG','DXB','FRA','HKG','DEL','FRA']
let arr1=[],arr2=[]
for(let i in arr){
    if(i%2==0){
        arr1.push(arr[i])
    }
    else if(i==1){
        arr2.push(arr[i])
    }
}
arr1.reverse();
let arr3=[...arr1,...arr2].join('->')
console.log(arr3);