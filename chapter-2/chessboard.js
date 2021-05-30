// for(let filas = 0; filas < 8; filas++){
//     let chessboard = "";
//     for(let columna=0; columna < 8; columna++)
//     {
//         if(columna % 2 === 0)
//         {
//            chessboard += filas % 2 === 0 ? " " : "#";
//         } else{
//            chessboard += filas % 2 === 0 ? "#" : " ";
//         }
//     }    
//     console.log(chessboard);   
// }
// console.log("JAKE MATE tisher");

// contarFs = (str) =>{
//     let conteo = 0;
//  for(let i=0; i< str.length; i++)
//  {
//     if(str[i] === "F") conteo++;
//  } 
//  return conteo; 
// };
// console.log(contarFs("Fuerte"));


contarCaracteres = (str,char) =>{
   let conteo = 0;
for(let i=0; i< str.length; i++)
{
   if(str[i] === char) conteo++;
} 
return conteo; 
};

contarFs = (str,char) =>{
   let conteo = 0;
   return contarCaracteres(str, char);
}
console.log(contarFs("Fuerte", "f"));
