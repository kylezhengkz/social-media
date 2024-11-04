import "./Header.css";

function add(number) {
    return ++number;
}
 
function Header() {

    let p = new Promise((resolve, reject) => {
        let a = 1 + 1 + 1
        if (a == 2) {
            resolve("Success");
        } else {
            reject("Fail");
        }
    });

    p.then((message) => {
        console.log("This is in the then " + message);
    }).catch((message) => {
        console.log("This is in the catch " + message);
    });

    return(
        <header>This is a header</header>
    );
}

export default Header;
