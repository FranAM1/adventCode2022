import {readFile} from 'fs/promises'

async function main(part:1|2) {
  const data = await readFile("input.txt", "utf8")

  const array = data.split("\n\n")

  const input = array.map((row) => {
    return row.split("\n").map((number) => {
      return parseInt(number);
    })
  })

  // PARTE 1
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

  // PARTE 2
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
