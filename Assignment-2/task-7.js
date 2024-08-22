// Given	an	array,	add	Hello	to	all	the	elements	in	the	array.	Also,	print	the	array.
//         Input                           Expected	Output
//         ['Jack',	'Mary']          ['Hello	Jack', 'Hello	Mary']
//         ['Jack']                  ['Hello	Jack']


function addElement(arr){
    for(let i=0; i<arr.length; i++){
        arr[i]=`Hello ${arr[i]}`;
    }
    console.log(arr)
}
addElement(['Jack',	'Mary']);
addElement([]);


