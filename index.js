import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
function reverseSentence(sentence) {const data = [
  [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 }
  ],
  [
    { name: 'Bob', age: 35 },
    { name: 'Alice', age: 28 }
  ]
];

// Extract names from the nested data array
const names = data.flatMap(innerArray => innerArray.map(item => item.name));

console.log(names); // Output: ["John", "Jane", "Bob", "Alice"]turn (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <textarea
        style={{ width: '50%', height: '200px', marginBottom: '20px' }}
        value={markdown}
        onChange={handleChange}
      />
      <div style={{ width: '50%', border: '1px solid #ddd', padding: '10px' }}>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownEditor;

