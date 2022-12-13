const { maxHeaderSize } = require("http");

const fs = require("fs").promises;

async function main(part) {
  const data = await fs.readFile("input.txt", "utf8")

  const array = data.split("\n\n")

  const input = array.map((row) => {
    return row.split("\n").map((number) => {
      return parseInt(number);
    })
  })

  if (part == 1) {
    let mostCalories = 0;

    input.forEach((row) => {
      let total = 0;
      row.forEach((number) => {
        total += number;
      });

      if (total > mostCalories) mostCalories = total;
    });

    console.log(mostCalories);

  }else{
    let mostCalories = [0, 0, 0];

    input.forEach((row) => {
      let total = 0;
      row.forEach((number) => {
        total += number;
      });

      let min = Math.min(...mostCalories)
      if(total > min){
        mostCalories[mostCalories.indexOf(min)] = total
      }
    })

    let totalCalories = 0

    mostCalories.forEach(number => {
      totalCalories += number
    })

    console.log(totalCalories);
  }
}

main(2);
