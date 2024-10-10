async function viewMembers() {
    const token = localStorage.getItem('token');
    const res = await fetch('http://localhost:5000/api/members', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    const data = await res.json();
    if (res.status === 200) {
        let membersHTML = '<ul>';
        data.forEach(member => {
            membersHTML += `<li>${member.username}</li>`;
        });
        membersHTML += '</ul>';
        document.getElementById('members-list').innerHTML = membersHTML;
    } else {
        alert('Failed to load members');
    }
}

document.getElementById('view-members-btn').addEventListener('click', viewMembers);

async function viewHistory() {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const res = await fetch(`http://localhost:5000/api/members/${userId}/history`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    const data = await res.json();
    if (res.status === 200) {
        let historyHTML = '<ul>';
        data.forEach(item => {
            historyHTML += `<li>${item.book.title} - Borrowed at ${item.borrowedAt} - Returned at ${item.returnedAt || 'Not Returned'}</li>`;
        });
        historyHTML += '</ul>';
        document.getElementById('history-list').innerHTML = historyHTML;
    } else {
        alert('Failed to load history');
    }
}

document.getElementById('view-history-btn').addEventListener('click', viewHistory);
