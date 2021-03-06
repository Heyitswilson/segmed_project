// ajax connects to the backend routes

export const createFavorite = (favorite) => (
    $.ajax({
        method: "POST",
        url: "/api/favorites",
        data: { favorite }
    })
);

export const getAllFavorites = (userId) => (
    $.ajax({
        method: "GET",
        url: `/api/favorites/${userId}`
    })
);
export const deleteFavorite = (id) => (
    $.ajax({
        method: "DELETE",
        url: `/api/favorites/${id}`
    })
);