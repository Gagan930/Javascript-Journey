// Working with Objects

// Create an object representing a book with properties like title, author, and pages.
// Add a method to the book object that prints a summary of the book (e.g., "Title: [title], Author: [author], Pages: [pages]").
// Call the method to print the book summary.


const book = {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    pages: 208,

    summary: ()=>{
        console.log("Title: "+book.title+", Author : "+book.author+", Pages: "+book.pages);
    }   
    
};


book.summary();