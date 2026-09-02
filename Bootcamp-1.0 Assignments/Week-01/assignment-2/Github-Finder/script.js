//First we will fetch the input value from the input elem 
const inputel=document.querySelector('#profile-search');
const btnel=document.querySelector('.search');

let avatar=document.querySelector('.avatar');
let realname=document.querySelector('.name');
let profile_name=document.querySelector('.username');
let bio=document.querySelector('.bio');
let followers=document.querySelector('.followers');
let following=document.querySelector('.following');
let repo=document.querySelector('.repositories');
let url_link=document.querySelector('.profile-url');
let card_details=document.querySelector('.profile-card');
let error_display=document.querySelector('.error-msg');

inputel.addEventListener("keydown",(event)=>{
  if(event.key === 'Enter'){
    event.preventDefault();
    btnel.click();
  }
})


btnel.addEventListener('click',function(){
  const username=inputel.value;

  //Now we need to understand how to get data through api using async/await.
//So first integrate it.

//First we will insert the link inside fetch.

  async function getuser() {
  try{
     const response= await fetch(`https://api.github.com/users/${username}`);

     if(!response.ok){
       error_display.textContent='Username not found!';
       return;
     }
     const data=await response.json();
     console.log(data);

    

     avatar.src=data.avatar_url;
     realname.innerText=data.name;
     profile_name.innerText=data.login;
     bio.innerText=data.bio;
     followers.innerText=data.followers;
     following.innerText=data.following;
     repo.innerText=data.public_repos;
     url_link.href=data.html_url;
     url_link.textContent='View your profile'
     card_details.classList.add("show");
  }
  //If any error occurs in this
  catch(error){
    console.log(error);
  }
}
getuser();

})

