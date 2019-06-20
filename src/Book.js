import React from 'react'

function Book({book}) {
  return (
    <div className="Book">
      {book.title}
    </div>
  );
}

export default Book