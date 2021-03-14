// ajax connects to the backend routes

export const getAllPhotos = () => (
    $.ajax({
        method: "GET",
        url: "/api/photos"
    })
);