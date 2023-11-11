import {setFirstName, setLastName, setUserName} from "../reducer/reducerJs"

export const userPostFetch = () => async (dispatch) => {
    const token = localStorage.getItem('token');
try {
    const reponse = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "content-Type": "application/json",
        },
        body: JSON.stringify(),
    }); 

    if (reponse.ok) {
        const data = await reponse.json()
        .then (data => {
            dispatch(setFirstName(data.body.firstName))
            dispatch(setLastName(data.body.lastName))
            dispatch(setUserName(data.body.userName))
            
        })
        return data;
    } else {
        throw new Error("Utilisateur non trouvé !")
    }
    } catch (error) {
        console.error(error);
}

}