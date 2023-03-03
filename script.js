//data
const Quotes=[
    {
        quote:`life is what happens when you're busy making other plans`,
        author:'anu'
    },  
    {
        quote:`Friendship always benefits; love sometimes injures.`,
        author:'seneca'
    }, 
    {
        quote:`The best thing about the future is that it comes one day at a time.`,
        author:'abraham lincoln'
    }, 
    {
        quote:`A successful marriage requires falling in love many times, always with the same person.`,
        author:'mignon mclaughlin'
    }, 
    {
        quote:`Work is against human nature. The proof is that it makes us tired.`,
        author:'michel tournier'
    },  
] 
//access the elements
const DisplayElem=document.getElementById('display');
const AuthorElem=document.getElementById('Author');
const Btn=document.getElementById('generate');
//function to generate different quotes
//normal function 
//function RandomQuote(){}
//arrow function
const RandomQuote=()=>{
    //logic to generate random quotes
   let index=Math.floor(Math.random()*(Quotes.length))
   //to display the output of the quote
   DisplayElem.innerHTML=Quotes[index].quote
   //to display the output of the author
   AuthorElem.innerHTML='~'+Quotes[index].author
}
//button functionality
//Btn.onclick=RandomQuote
Btn.addEventListener('click',RandomQuote)
