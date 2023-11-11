export const userPutFetch = async (editedUserName, token) => {
    try {
        await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json", 
            },
            body: JSON.stringify({ userName: editedUserName }),
        });
    } catch (error) {
        console.error(error);
    }
}
