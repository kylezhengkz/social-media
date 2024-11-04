import "./Header.css";

async function func1() {
    try {
        let response = await fetch("https://reqres.in/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "User 1"
            })
        });
        let data = await response.json();
        if (response.ok) {
            console.log(data);
        } else {
            console.log("Error");
        }
    } catch (err) {
        console.log("Catch error");
        throw err;
    }
}

function Header() {
    func1();

    return(
        <header>This is a header</header>
    );
}

export default Header;
