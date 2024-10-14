let btn = document.querySelector("button");

async function getColleges(url, state) {
  try {
    const res = await axios.get(url);
    // res.data is array of colleges of country
    const filteredData = res.data.filter((item) => {
      // state colleges filtered array

      return item["state-province"] === state;
    });
    
    console.log("Successful");
    return filteredData;
  } catch (e) {
    console.log("Failed");
    return [];
  }
}

function showColleges(arr) {
  let list = document.querySelector("#list");
  list.innerText = "";

  for (e of arr) {
    let li = document.createElement("li");
    li.innerText = e.name;
    list.appendChild(li);
  }
}

btn.addEventListener("click", async () => {
  const country = document.querySelector("#country").value;
  const state = document.querySelector("#state").value;

  const url = `http://universities.hipolabs.com/search?country=${country}`;

  let collArr = await getColleges(url, state);
  showColleges(collArr);
});
