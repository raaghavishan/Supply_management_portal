var firebase=require("firebase");
(function () {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDv-m3RgUIEu2bnGs4JRZuUBwFnC3Hy_kE",
    authDomain: "supply-e5fa2.firebaseapp.com",
    databaseURL: "https://supply-e5fa2.firebaseio.com",
    projectId: "supply-e5fa2",
    storageBucket: "supply-e5fa2.appspot.com",
    messagingSenderId: "602032928837"
  };
  firebase.initializeApp(config);

  //firebase.initializeApp(config);
//getting elements
const txtemail=document.getElementById('txtemail');
const txtpassword=document.getElementById('txtpassword');
const btnlogin=document.getElementById('btnlogin');
const btnsignup=document.getElementById('btnsignup');
const btnlogout=document.getElementById('btnlogout');
// add login event 
btnlogin.addEventListener('click',e => {
//get email and pass
const email=txtemail.value;
const pass=txtpassword.value;
const auth =firebase.auth();
//sign in 
const promise=auth.signInWithEmailAndPassword(email,pass);
 promise.catch(e => console.log(e.message));
});

// add signup event
btnsignup.addEventListener('click', e => {
	const email=txtemail.value;
const pass=txtpassword.value;
const auth =firebase.auth();
//sign up 
const promise=auth.createUserWithEmailAndPassword(email,pass);
 promise.catch(e => console.log(e.message));
});

btnlogout.addEventListener('click',e =>{
	firebase.auth().signOut();
});

// add a realtime listener
firebase.auth().onAuthStateChanged(firebaseUser => {
	if(firebaseUser)
	{
		console.log(firebaseUser);
	    btnlogout.classList.remove('hide');
	}
	else{
		console.log('not logged in');
		btnlogout.classList.add('hide');
	}
});


}();