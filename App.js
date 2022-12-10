import React from "react";
import facebooklogo from './facebook.png';
class mainclass extends React.Component{
  render(){
    return(
      <div style={{backgroundColor:"white",height:"600px",width:"100%"}}>
<div>
<img src={facebooklogo} alt="" style={{marginTop:"11%",marginLeft:"22%",height:"60px",paddingBottom:"1%"}} ></img>
<p style={{marginLeft:"22.5%",marginTop:"-1%",fontSize:"23px"}}>Facebook helps you connect and share</p>
 <p style={{marginLeft:"22.5%",marginTop:"-2%",fontSize:"23px"}}>with the people in your life.</p>

</div>
<div style={{height:"270px",width:"330px",backgroundColor:"white",marginLeft:"55%",marginTop:"-12%",borderRadius:"5px",fontSize:"16px",border: '3px solid blue'}}>
<input type="text" placeholder="Email addres or phone number" style={{height:"15%",width:"92%",borderRadius:"5px",marginLeft:"9px",marginTop:"8px"}}></input>
<input type="password" placeholder="Password" style={{height:"15%",width:"92%",borderRadius:"5px",marginLeft:"9px",marginTop:"8px"}}></input>
<button style={{cursor:"pointer",backgroundColor:"blue",borderRadius:"5px",height:"16%",width:"94%",marginLeft:"9px",marginTop:"8px",fontSize:"15px",color:"white"}}>Log in</button>
<h6 style={{color:"blue",textDecoration:"underline",cursor:"pointer",textAlign:"center",marginTop:"4%",marginBottom:"5%"}}>Foregotten password?</h6>
<hr style={{backgroundColor:"grey",height:"1px", marginLeft:"10px",marginRight:"10px"}}></hr>
<button style={{width:"50%",height:"15%",marginLeft:"25.5%",backgroundColor:"green",color:"white",borderRadius:"5px",cursor:"pointer"}}>Create New Account</button>


</div>
<div >
<h6 style={{marginLeft:"58%",cursor:"pointer"}}>Create  a Page</h6>
<p style={{marginTop:"-2.6%",marginLeft:"63%",fontSize:"12px"}}> for a celebrity, brand or business.</p>

</div>
  </div>

    );
  }
}

export default mainclass 