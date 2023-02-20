const quotes = [
    {
        quote:'Strive not to be a success, but rather to be of value.',
        author: 'Albert Einstein'
    },
    {
        quote:'Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it.',
        author: 'Bruce Lee'
    },
    {
        quote:'Success is the sum of small efforts - repeated day in and day out.',
        author: 'Robert Collier'
    },
    {
        quote:'Always bear in mind that your own resolution to succeed is more important than any other.',
        author: 'Abraham Lincoln'
    },
    {
        quote:"Desire is the key to motivation, but it's determination and commitment to an unrelenting pursuit of your goal - a commitment to excellence - that will enable you to attain the success you seek.",
        author: 'Mario Andretti'
    },
    {
        quote:'Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome.',
        author: 'Booker T. Washington'
    },
    {
        quote:'Happiness lies in the joy of achievement and the thrill of creative effort.',
        author: 'FDR'
    },
    {
        quote:'Success is how high you bounce when you hit bottom.',
        author: 'General George Patton'
    },    
    {
        quote:'There is little success where there is little laughter.',
        author: 'Andrew Carnegie'
    },
    {
        quote:'Life is too short for long-term grudges.',
        author: 'Elon Musk'
    },

];

const quote = document.querySelector('#quotes span:first-child')
const author = document.querySelector('#quotes span:last-child')


const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)]

quote.innerText = todaysQuote.quote
author.innerText = '\n-'+todaysQuote.author