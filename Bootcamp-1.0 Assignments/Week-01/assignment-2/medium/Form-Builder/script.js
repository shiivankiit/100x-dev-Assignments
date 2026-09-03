const fieldel=document.querySelector('.field');
const btnel=document.querySelector('.add-field');
const selectel=document.querySelector('#field-type');
const previewel = document.querySelector(".preview");


btnel.addEventListener('click',createform);


function createform(){
   const divel=document.createElement('div');

   if(selectel.value === 'text'){
      const labelel=document.createElement('label');
      labelel.textContent=fieldel.value;

      const input=document.createElement('input');
      input.type='text';

      divel.append(labelel);
      divel.append(input);
   }
   previewel.append(divel);
}