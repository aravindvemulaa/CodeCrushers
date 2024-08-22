
//Given	an	array,	print	the	sum	and	count	of	the	multiples	of	3	in	the	array

let arr=[1,2,3,4,5,6,7,8,9,10];
let count=0;
let sum=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]%3===0){
        count++;
        sum=sum+arr[i];
    }
}
console.log(` The sum of multiples of 3 is : ${sum} \n Num of Multiles of 3 in arrray : ${count}`);
