export const getAllPhotos = () => (
    $.ajax({
        method: "GET",
        url: "/api/photos"
    })
);