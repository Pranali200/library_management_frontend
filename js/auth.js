document.getElementById('login').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    try {
        const res = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        const data = await res.json();

        if (res.status === 200) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('role', data.role);
            loadDashboard(data.role);
        } else {
            document.getElementById('login-message').innerText = data.message;
        }
    } catch (error) {
        console.error('Error logging in:', error);
    }
});

document.getElementById('signup').addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    const role = document.getElementById('role').value;

    try {
        const res = await fetch('http://localhost:5000/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password, role })
        });

        const data = await res.json();

        if (res.status === 201) {
            alert('Signup successful. Please login.');
            showLoginForm();
        } else {
            document.getElementById('signup-message').innerText = data.message;
        }
    } catch (error) {
        console.error('Error signing up:', error);
    }
});

function loadDashboard(role) {
    document.getElementById('login-form').classList.add('d-none');
    document.getElementById('signup-form').classList.add('d-none');

    if (role === 'LIBRARIAN') {
        document.getElementById('librarian-dashboard').classList.remove('d-none');
    } else if (role === 'MEMBER') {
        document.getElementById('member-dashboard').classList.remove('d-none');
    }
}

function showSignupForm() {
    document.getElementById('login-form').classList.add('d-none');
    document.getElementById('signup-form').classList.remove('d-none');
}

function showLoginForm() {
    document.getElementById('signup-form').classList.add('d-none');
    document.getElementById('login-form').classList.remove('d-none');
}

document.getElementById('show-signup-form').addEventListener('click', (e) => {
    e.preventDefault();
    showSignupForm();
});

document.getElementById('show-login-form').addEventListener('click', (e) => {
    e.preventDefault();
    showLoginForm();
});

function logout() {
    localStorage.clear();
    window.location.reload();
}

document.getElementById('logout-btn').addEventListener('click', logout);
document.getElementById('logout-btn-member').addEventListener('click', logout);
