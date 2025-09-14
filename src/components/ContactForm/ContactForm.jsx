import styles from "./ContactForm.module.css"
import Button from "../Button/Button"
import { MdCall } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { useState } from "react";



const ContactForm = () => {

  const[name,setName]=useState(" ");
  const[email,setEmail]=useState(" ");
  const[text,setText]=useState(" ");


  



const onSubmit = (event) =>{

  event.preventDefault();


  setName(event.target[0].value);
  setEmail(event.target[1].value);
  setText(event.target[2].value);

}

  return (
    <>
    <div className={styles.contact_form}>

<div className={styles.buttonandform}>
    <div className={styles.top_buttons}>

    <Button text="VIA SUPPORT CHAT" icon={<MdOutlineMessage fontSize="24px" /> } />
    <Button text="VIA CALL"  icon={<MdCall fontSize="24px" /> }/>
</div>


<div className={styles.bottom_button}>
   <Button isOutline={true} text="VIA EMAIL FORM"  icon={<MdEmail fontSize="24px" />} />
</div>
     
 

     <form onSubmit={onSubmit} className={styles.form_container}>

     <div className={styles.form_inputs}>

     <label htmlFor="name">Name</label>
     <input type="text" name="name"></input>
      
     </div>

      

     <div className={styles.form_inputs}>

      <label htmlFor="email">Email</label>
     <input type="email" name="email"></input>

     </div>

      
     <div className={styles.form_inputs}>

      <label htmlFor="text">Text</label>
       <textarea  name="text" rows="8"></textarea>

     </div>

         <div className={styles.submit_button}  
      style={{
              display: "flex",
              justifyContent: "end",
            }}>
      
      <Button text="SUBMIT " type="submit" />

     </div>

 <div className={styles.output}>
       {name + " " + email + " " + text}
     </div>

     
 
 
     </form>

     
    

      </div>  



     <div className={styles.image}>
      <img src="./images/contact.svg"/>
     </div>




    </div>

    </>
  )
}

export default ContactForm
