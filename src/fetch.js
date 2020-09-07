
export function fetching() {
    return fetch("http://localhost:3000/data.json")
        .then(resp => resp.json())
        .catch((err) => {
            console.log("Something went wrong");
            console.log(err);
        })
}

export async function fetchAsync() {
    try {
        const response = await fetch("http://localhost:3000/data.json");
        const items = await response.json();
        return items;
    } catch (error) {
        console.error(error);
    }
}