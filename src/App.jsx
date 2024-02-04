import React from "react";
function App(){
    let currDate=new Date();
     currDate=currDate.getHours();
     let greeting="";
     const cssStyle={};
     if(currDate>=1&&currDate<12){
        greeting="Good Morning";
        cssStyle.color="green";
     }
     else if(currDate>=12&&currDate<19){
        greeting="Good Afternoon";
        cssStyle.color="yellow";
     }
     else if(currDate>19){
        greeting="Good Night";
        cssStyle.color="Black";
     }
    return(
        <>
            <div><h1>Hello Mam, <span style={cssStyle}>{greeting}</span></h1></div>
        </>
     );
}
export default App;