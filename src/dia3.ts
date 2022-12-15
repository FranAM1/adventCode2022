import { readFile } from 'fs/promises'

async function main(part: 1 | 2) {
    const data = await readFile("./inputs/3.txt", "utf8")

    const input = data.split("\n")

    // const priorty = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    //     'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    let result = 0
    //PARTE 1
    if (part == 1) {
        input.forEach((rucksack) => {
            let firstComp = rucksack.substring(0, rucksack.length / 2);
            let secondComp = rucksack.substring(rucksack.length / 2, rucksack.length);
            
            for(let char of firstComp){
                if(!item.includes(char)){
                    
                }
            }
        })


        // PARTE 2
    } else {


    }

    console.log(result)
}

main(1);
