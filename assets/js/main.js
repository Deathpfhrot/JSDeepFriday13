findFriday13 = (year) => {
    let heading = document.createElement('h1')
    let list = document.createElement('ul')
    let counter = 0;

    for (let i = 1; i <= 12; i++) {
        let date = new Date(year + ', ' + i + ', ' + 13);

        console.log(date);

        if (date.getDay() === 5) {
            let listItem = document.createElement('li')

            counter++;
            heading.textContent = `Das Jahr ${year} hat ${counter} Unglückstage.`
            document.body.appendChild(heading);
            document.body.appendChild(list);
            listItem.textContent = date;
            list.appendChild(listItem);
        }
    }
}

findFriday13(2020);
findFriday13(2016);
findFriday13(2015);