//Bubble Sort
let arr=[8,7,8,6,2,4,3]
let temp=0;
    for(var i = 0; i < arr.length; i++){   
      for(var j = 0; j < ( arr.length-i -1 ); j++){
        if(arr[j] > arr[j+1]){
           temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j+1] = temp
          console.log(temp+"dhfh");
        }
      }}
      console.log(arr);