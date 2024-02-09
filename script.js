const firebaseConfig = {
  apiKey: "AIzaSyBRa82_1Ki8nYjkgtTqBPQHbOaspmmVxZA",
  authDomain: "portfolio-form-data-393a1.firebaseapp.com",
  databaseURL: "https://portfolio-form-data-393a1-default-rtdb.firebaseio.com",
  projectId: "portfolio-form-data-393a1",
  storageBucket: "portfolio-form-data-393a1.appspot.com",
  messagingSenderId: "286072788276",
  appId: "1:286072788276:web:f96184d2aea3b5d61d4161",
  measurementId: "G-VHMZVFW4EX"
};

// initialize firebase 
firebase.initializeApp(firebaseConfig);

// refernce your database
var contactFormDB = firebase.database().ref('contactform');

document.getElementById('contactForm').addEventListener("submit" , submitForm);

function submitForm(e){
  e.preventDefault();
  var name = getElemntsVal('name'); 
  var email = getElemntsVal('email');
  var message = getElemntsVal('message');

  // console.log(name , email , message);
  SaveMessages(name , email , message);

  //enable alert
  if (name !== '' && email !== '' && message !== '') {
    document.querySelector('.alert').style.display = 'block';

    setTimeout(() => {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);
} else {
    document.querySelector('.error-msg').style.display = 'block';

    setTimeout(() => {
        document.querySelector('.error-msg').style.display = 'none';
    }, 2000);
}


  // // remove alert message

  // setTimeout(() => {
  //   document.querySelector('.alert').style.display = "none";
  // } , 3000);

  // reset the for
 
  document.getElementById('contactForm').reset();
}

const SaveMessages = (name , email  ,message) =>{
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name : name,
    email : email,
    message:message
  });
};

const getElemntsVal = (id) => {
  return document.getElementById(id).value;
}

var typeData = new Typed(".role", {
    strings: [
      "Full Stack Developer",
      "Web Developer",
      "UI-UX Designer",
      "Backend Developer",
      "Coder",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
  });

  const btn = document.getElementById('btn-resume');

  function viewPdf(){
    window.open('https://drive.google.com/file/d/1YTeZNKUmJ12B33XYMnvT8lB3e3frCxM9/view?usp=sharing');
  };

  btn.addEventListener('click' , viewPdf);
