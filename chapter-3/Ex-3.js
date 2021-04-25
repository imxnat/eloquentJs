/* BEAN COUNTING */

            //     * **** One *** * */
// const countBs = (s = "Beans") =>{
// let cant = 0;
//  for(let i=0; i < s.length; i++)
//  {
//     if(s[i] === "B") cant++;
//  } return cant;
// };

//console.log(countBs());

        /* **** TWO **** */

// const countBs = (str,fnd) =>{
//     let cant = 0;
//      for(let i=0; i < str.length; i++)
//      {
//         if(str[i] === fnd) cant++;
//      } return cant;
//     };
    
//     console.log(countBs("love","lo"));

const countChar = (str,char) =>{
    let count = 0;
    for(let i=0; i < str.length; i++)
    {
        if(str[i] === char) count++;
    }
    return count;
}
 const countBs = (str) =>{
     return countChar(str, "b");
 }

 console.log(countBs("Beloved"));
