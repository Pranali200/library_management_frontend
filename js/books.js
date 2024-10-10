async function addBook(title) {
    const token = localStorage.getItem('token');
    const res = await fetch('http://localhost:5000/api/books', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ title })
    });

    const data = await res.json();
    if (res.status === 200) {
        alert('Book added successfully');
    } else {
        alert(data.message);
    }
}

document.getElementById('add-book-btn').addEventListener('click', () => {
    const title = document.getElementById('book-title').value;
    addBook(title);
});

// Add similar functions for update and remove book
