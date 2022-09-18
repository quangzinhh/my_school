 import 'react-awesome-slider/dist/styles.css';
import styles from './Contact.module.css'

function Contact() {
  return (
    <>
      <div className={styles.form}>
        <div className={styles.titlePage}><h1>CONTACT WITH US</h1></div>
<div className={styles.fish} id="fish"></div>
<div className={styles.fish} id="fish2"></div>

<form id="waterform" method="post" className={styles.form}>

  <div className={styles.formgroup} id="name-form">
      <label for="name">Your name <div className={styles.mustFill}>*</div></label>
      <input type="text" id="name" name="name" />
  </div>

  <div className={styles.formgroup} id="email-form">
      <label for="email">Your e-mail <div className={styles.mustFill}>*</div></label>
      <input type="email" id="email" name="email" />
  </div>

  <div className={styles.formgroup} id="message-form">
      <label for="message">Your message</label>
      <textarea id="message" name="message"></textarea>
  </div>
    <div className={styles.containerBtn}><input type="submit" value="Send your message!" /></div>
    
</form>
</div>
    </> 
  );
}
export default Contact;
