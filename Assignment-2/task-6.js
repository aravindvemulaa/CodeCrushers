// Given	an	array,	add	10	to	all	the	elements	in	the	array
//      Input Expected          	Output
//      [2,3,5,7]                   [12,13,15,17]
//      [23,25]                     [33,35]

function add10toAllElements(arr){
    for(let i=0; i<arr.length;i++){
        arr[i]=arr[i]+10;
    }
    console.log(arr);
}
add10toAllElements( [2,3,5,7] );



