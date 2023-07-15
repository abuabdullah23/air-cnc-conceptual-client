// save a user to database
export const saveUser = user => {
    const currentUser = {
        email: user.email,
        name: user.displayName,
        photo: user.photoURL
    }

    fetch(`${import.meta.env.VITE_API_URL}/users/${user?.email}`, {
        method: "PUT",
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser),
    })
        .then(res => res.json())
        .then(data => console.log(data))
}


// become a host
export const becomeHost = email => {
    const currentUser = {
        role: 'host',
    }

    return fetch(`${import.meta.env.VITE_API_URL}/users/${email}`, {
        method: "PUT",
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser),
    })
        .then(res => res.json())
}


// get user role
export const getRole = async email => {
    const response = await fetch (`${import.meta.env.VITE_API_URL}/user/${email}`)
    const user = await response.json()
    return user?.role;
}