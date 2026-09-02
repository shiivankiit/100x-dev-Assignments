const inputel=document.querySelector('.input-class');
const btnel=document.querySelector('.btn-task');
const previewel=document.querySelector('.preview');

const progress_menu=document.querySelector('#progress-menu');
const difficulty_menu=document.querySelector('#difficulty-menu');

btnel.addEventListener('click',Appendtoscreen);


function Appendtoscreen(){
     const divel=document.createElement('div');
     divel.classList.add('task-item');

     const taskContent=document.createElement('div');
     taskContent.classList.add('task-content');

     const element=document.createElement('p');
     element.classList.add('task-title');
     element.textContent=inputel.value;
     taskContent.append(element);

     const taskMeta=document.createElement('div');
     taskMeta.classList.add('task-meta');

     const status=document.createElement('span');
     const progressValue = progress_menu.value;
     status.classList.add('task-progress', progressValue);
     if(progress_menu){
        const selectedText=progress_menu.options[progress_menu.selectedIndex].text;
        console.log(selectedText);
        
        status.textContent=selectedText;
     }
     
     taskMeta.append(status);

     const status1=document.createElement('span');
     const difficultyValue = difficulty_menu.value;
     status1.classList.add('task-difficulty', difficultyValue);
     if(difficulty_menu){
        const selectedText1=difficulty_menu.options[difficulty_menu.selectedIndex].text;
        console.log(selectedText1);
        
        status1.textContent=selectedText1;
     }
     taskMeta.append(status1);

     const inputid=document.querySelector('#date-class');
     const dateSpan=document.createElement('span');
     dateSpan.textContent='📅 ' + inputid.value;
     dateSpan.style.fontSize='14px';
     dateSpan.style.color='#666';
     taskMeta.append(dateSpan);

     taskContent.append(taskMeta);
     divel.append(taskContent);

     const deleteBtn=document.createElement('button');
     deleteBtn.classList.add('task-delete-btn');
     deleteBtn.textContent='Delete';
     deleteBtn.addEventListener('click', function(){
          divel.remove();
     });
     divel.append(deleteBtn);

     previewel.append(divel);
}
