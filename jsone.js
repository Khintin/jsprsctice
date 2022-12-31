/* question 1:*/

let cat = {
    complain: () => console.log("meow!"),

};

/*Question 2:*/

let heading = document.querySelector("h3");
heading.innerHTML = "Update heading";

/*Question 3:*/

heading.style.fontSize = "2em";

/*Question 4:*/

heading.classList.add = "subheading";

/*Question 5:*/

let paragraphs = document.querySelectorAll("p");
paragraphs.forEach((paragraph) => {
    paragraph.style.color = "red";
});

/*Question 6:*/

let resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph<p>";
resultsContainer.style.backgroundColor = "yellow";

/*Question 7:*/

const cats = [
    {
        name: "Bob",
        age: 10,
    },
    {
        name: "Harold"
    },
    {
        name: "Blurt",
        age: 21,
    },
];

function logNames(list) {
    list.forEach((cat) => {
        console.log(cat.name);
    });
}

logNames(cats);

/*Question 8:*/

function createCats(cats) {
    let html = "";

    for (let i = 0; i < cat.length; i++) {
        const cat = cats[i];

        let wrapper = document.createElement("div");
        let name = document.createElement("h5");
        let age = document.createElement("p");

        name.innerText = cat.name;

        if (cat.age) age.innerText = cat.age;
        else age.innerText = "AGE UNKNOWN";

        wrapper.append(name, age);
        html += wrapper.outerHTML;

    }
    return html;

}

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = createCats(cats);


