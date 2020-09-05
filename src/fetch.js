/* let obj;

export function fetching() {
    fetch("http://localhost:3000/data.json")
        .then(resp => resp.json())
        .then(data => obj = data)
        .then((obj) => {
            return obj;
        })
        .catch((err) => {
            console.log("Something went wrong");
            console.log(err);
        })
        console.log(obj, "obj finns i funktionen ytters")
        return obj;
} */

export async function fetchAsync() {
    try {
        const response = await fetch("http://localhost:3000/data.json");
        const items = await response.json();
        return items;
    } catch (error) {
        console.error(error);
    }
}