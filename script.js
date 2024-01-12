let btn = document.querySelector('#new-quote');
let quote  = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: "“I write only when inspiration strikes. Fortunately, it strikes every morning at nine o'clock sharp.”",
    person: "Somerset Maugham"
},
{
    quote: " “If you don't have time to read, you don't have the time (or the tools) to write. Simple as that.”",
    person: " Stephen King"
},
{
    quote: "“You should write because you love the shape of stories and sentences and the creation of different words on a page. Writing comes from reading, and reading is the finest teacher of how to write.”",
    person: " Annie Proulx"
},
{
    quote: "“Indeed, learning to write may be part of learning to read. For all I know, writing comes out of a superior devotion to reading.”",
    person: "Eudora Welty"
},
{
    quote: "“Read, read, read. Read everything  —  trash, classics, good and bad, and see how they do it. Just like a carpenter who works as an apprentice and studies the master. Read! You'll absorb it. Then write. If it's good, you'll find out. If it's not, throw it out of the window.” ",
    person: "William Faulkner"
},
{
    quote: "“I kept always two books in my pocket: one to read, one to write in.”",
    person: "Robert Louis Stevenson"
},
{
    quote: "“The Six Golden Rules of Writing: Read, read, read, and write, write, write.”",
    person: "Ernest Gaines"
},
{
    quote: "“The greatest part of a writer’s time is spent in reading, in order to write; a man will turn over half a library to make one book.”",
    person: " Samuel Johnson"
},
{
    quote: "“Read a thousand books, and your words will flow like a river.”",
    person: "Lisa See"
},
{
    quote: "“One sure window into a person’s soul is his reading list.”",
    person: "Mary B. W. Tabor"
},]
btn.addEventListener("click",function(){
    
    let random = Math.floor(Math.random() * quotes.length);
     
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})