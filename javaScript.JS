const myLibrary=[];//decerations
class Book  {
    constructor(title,author,pages,read){
    this.title=title
    this.author=author
    this.pages=pages
    this.read=read
    }

}
const theHobbit= new Book('The Hobbit', 'J.R.R Tolien','295 pages','not read yet')//place holder books.
addBookToLIbrary(theHobbit)
const asafTu=new Book('Big Poop', 'Asaf Tzubery','100 pages','read');
addBookToLIbrary(asafTu)
const lol=document.getElementById('lol');//these lines are the web page
const table=document.createElement('table');
const add=document.getElementById('add');
lol.append(table);
//functions


function addBookToLIbrary(book){
myLibrary.push(book);
}
function destroy(e){  //to destroy card
    const closedtCard= e.target.closest('.card')
    closedtCard.remove();
}
/*function changeToRead(e){
    card.textContent=book.title+' by '+book.author+", "+book.pages+', '+' read';
    e.target.remove();
}*/
function showInfo(book) { //this is how we make cards
    const card=document.createElement('card');
   card.classList.add('card')
   card.textContent=book.title+' by '+book.author+", "+book.pages+', '+book.read;
   const Delete=document.createElement('button');//creating delte button
   Delete.textContent='delete'
   if(book.read=='not read yet')
   {
   const readOrNot=document.createElement('button');//creatin read toogle button
   readOrNot.textContent='have read';
   card.append(readOrNot);
   readOrNot.addEventListener('click',function()
   {card.textContent=book.title+' by '+book.author+", "+book.pages+', '+' read';
    card.append(Delete);
   }); 
   
}
   card.append(Delete);
   table.append(card);
   Delete.addEventListener('click',destroy);
   }


//the code
myLibrary.map(showInfo);
add.addEventListener('click',function(){//checks new book
const title=prompt('enter the name of the book','spider-man');
if(title!==null){
const author=prompt('enter the autor','Asaf T');
if(author!==null){
const pages=prompt('enter number of pages','100');
if(pages!==null){
let read=prompt('enter if you read it','not read yet');
while (read!='read'&&read!='not read yet'&&read!==null) {
    read=prompt('read or not read yet','not read yet');
console.log(read);  }
if(read!==null)
{const book=new Book(title,author,pages,read);
    addBookToLIbrary(book);
    showInfo(book);
}
    
}
}}});







