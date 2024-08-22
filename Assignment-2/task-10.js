function remo(arr1, arr2){
let arr1_Sum=0;
let arr2_Sum=0;

for(i=0;i<arr1.length;i++){
    arr1_Sum=arr1_Sum+arr1[i];
}

for(j=0;j<arr2.length;j++){
    arr2_Sum=arr2_Sum+arr2[j];
}
console.log(arr1_Sum>arr2_Sum ?'big1' : arr1_Sum<arr2_Sum ? 'big2' :"Equal");
}
remo([1,2,3], [10,20,30]);  
remo([2,4,6,8], [20]);




