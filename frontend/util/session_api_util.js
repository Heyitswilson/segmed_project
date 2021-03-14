// ajax connects to the backend routes

export const signup = (user) => (
    $.ajax({
        method: "POST",
        url: "/api/users",
        data: { user }
    })
);

export const login = (user) => (
    $.ajax({
        method: "POST",
        url: "/api/sessions",
        data: { user }
    })
);

export const logout = (id) => (
    $.ajax({
        method: "DELETE",
        url: `/api/sessions/${id}`
    })
);