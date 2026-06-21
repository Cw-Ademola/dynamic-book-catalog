import { useState } from 'react'
import Bookcard from './Bookcard'

function App() {
  const books = [ 
    {
      image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPDdIgATcTReYGwKZp7M1xwIwozmvZViEDFl7uaK3m2Q&s",
      title: "Things Fall Apart",
      author: "Chinua Achebe",
      description:
         "A classic novel exploring Igbo culture and colonialism.",
      rating: 4.7,
      price: "3,500",
    },
    {
      image:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1740964781i/126381.jpg",
      title: "Purple Hibiscus",
      author: "Chimamanda Ngozi Adichie",
      description: 
      "A story of family, identity, and courage.",
      rating: 4.6,
      price: "3,800",
    },
    {
      image:
      "https://jamesclear.com/wp-content/uploads/2025/06/atomic-habits-dots.png",
      title: "Atomic Habits",
      author: "James Clear",
      description:
      "It offers practical strategies for forming good habits, breaking bad ones, and mastering the tiny behaviors that lead to remarkable results.",
      rating: 4.8,
      price: "8,500"
    },
    {
      image:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1757619021i/69571.jpg",
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      description:
      "A guide to financial independence and wealth building.",
      rating: 4.7,
      price: "6,500"
    },
    {
      image:
      "https://c8.alamy.com/comp/2NR971Y/cover-of-deep-work-by-cal-newport-2NR971Y.jpg",
      title: "Deep Work",
      author: "Cal Newport",
      description:
      "A guide to focused work and productivity.",
      rating: 4.6,
      price: "7,200"
    },
    {
      image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVW0pcnEx3xtcxoZ_rkTi32OHCEkewsiKscQ&s",
      title: "Half of a Yellow Sun",
      author: "Chimamanda Ngozi Adichie",
      description:
      "A story of family, identity, and courage.",
      rating: 4.8,
      price: "4,200"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className='text-4xl font-bold text-center mb-8'>
        Dynamic Novel Books
      </h1>

    <div className='grid md:grid-cols-3 gap-8'>
      {books.map((book, index) =>(
        <Bookcard
        key={index}
        image={book.image}
        title={book.title}
        author={book.author}
        description={book.description}
        rating={book.rating}
        price={book.price} />
      ))}
    </div>
    </div>
  );
}

export default App;
