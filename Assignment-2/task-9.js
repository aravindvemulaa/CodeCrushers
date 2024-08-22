/* Given	an	array	of	numbers	as	input,	find	out	which	of	the	first	or	last	element	is	
larger.	If	the	first	is	larger	print	FIRST,	if	the	last	is	larger	print	LAST.	If	they	are	
equal	print	EQUAL.	Also	print	the	value.

    Test	Cases
    Input                           Expected Output
    [4,8,12,20,6]                   LAST:6
    [10,8,6,4,2,0]                  FIRST:10
    [15,15]                         EQUAL:15
    [40]                            EQUAL:40
    [2,4,6,8,6,4,2]                 EQUAL:2       */


function check(arr) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                console.log(`EQUAL: ${arr[i]}`);
                return;
            }
        }
    }
    if (arr.length === 1) {
        console.log(`EQUAL: ${arr[0]}`);
        return;
    }
    const newArr= arr[0]>arr[arr.length - 1];
        console.log(newArr ? `FIRST: ${arr[0]}` : `LAST: ${arr[arr.length - 1]}`)
}

check([15,15] )
check([10,8,6,4,2,0])
check([40])
check([4,8,30,3,6])


