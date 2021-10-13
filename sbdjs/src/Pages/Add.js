import React from 'react';
import '../App.css';
import AddBot from '../addAction/AddBot';

function List() {
  return (
     <div>
        <h1 className="inline-flex py-2.5 px-5 rounded-lg text-3xl font-bold my-12 bg-gray-100">Ajouter un Bot</h1>
        <AddBot />
    </div>
  );
}

export default List;
