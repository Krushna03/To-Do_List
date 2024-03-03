
const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

 function todoTask() {
   if( inputBox.value === '' ){
      alert('Enter Some Task')
   }
   else {
   let newLi = document.createElement('li');
   newLi.innerHTML = inputBox.value
   listContainer.appendChild(newLi);

   let editSpan = document.createElement('p');
   editSpan.innerHTML = '\u270E'; // Unicode character for edit icon (✎)
   editSpan.className = 'edit';
   newLi.appendChild(editSpan);

   let deleteSpan = document.createElement('span');
   deleteSpan.innerHTML = '\u00d7'; // Unicode character for close icon (×)
   deleteSpan.className = 'close';
   newLi.appendChild(deleteSpan);
   }

   inputBox.value = '';
    saveData()
 }

   document.getElementById('btn').addEventListener('click' , () => {
      todoTask();
   }, false);

   listContainer.addEventListener('click' , (e)=>{
      //  console.log(e);
       if(e.target.tagName === 'LI'){
          e.target.classList.toggle('checked');
         saveData()
       }
       else if(e.target.tagName === 'SPAN'){
         e.target.parentElement.remove();
         saveData()
       }
       else if (e.target.className === 'edit') {
         let taskText = e.target.parentElement.firstChild;
         let newText = prompt('Edit task:', taskText.textContent);
         if (newText !== null && newText !== '') {
             taskText.textContent = newText;
            saveData()
         }
     }
   }, false);


   function saveData(){
      localStorage.setItem('data' , listContainer.innerHTML);
   }

   function showData(){
      listContainer.innerHTML = localStorage.getItem('data');
   }
   showData();

   // localStorage.clear();