
// Given	an array,print	the count and the numbers greater than	21	in	the	array.
//            Input 				         Expected Output
//            [5,18,26,30,40,6] 		     Count = 3
//            				                 Values = 26,30,40,
//            [100,200,10,20,50,64] 	     Count = 4
//            				                 Values = 100,200,50,64,     


let arr=[5,18,26,30,40,6];
let count=0;
let values=[];
for(let i=0;i<arr.length;i++){
    if(arr[i]>20){
        count++;
        values.push(arr[i]);
    }
}
console.log(`Count : ${count} \n Values: ${values}`);