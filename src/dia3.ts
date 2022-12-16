import { readFile } from 'fs/promises'

async function main(part: 1 | 2) {
    const data = await readFile("./inputs/3.txt", "utf8")

    const input = data.split("\n")

    const priorty = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    let result = 0
    //PARTE 1
    if (part == 1) {
        input.forEach((rucksack) => {
            let firstComp = rucksack.substring(0, rucksack.length / 2);
            let secondComp = rucksack.substring(rucksack.length / 2, rucksack.length);
            let charArray: string[] = []

            for (let char of firstComp) {
                if (secondComp.includes(char) && !charArray.includes(char)) {
                    charArray.push(char)
                }
            }

            charArray.forEach((char) => {
                result += priorty.indexOf(char) + 1
            })
        })


        // PARTE 2
    } else {
        let counter = 0
        let packRucksack: string[][] = []
        let arrayRucksack: string[] = []

        input.forEach((rucksack) => {
            arrayRucksack.push(rucksack)
            counter++
            if (counter == 3) {
                packRucksack.push(arrayRucksack)
                arrayRucksack = []
                counter = 0
            }
        })

        for (let rucksack of packRucksack) {    
            let charArray: string[] = []
            if (rucksack[0] != null) {
                for (let char of rucksack[0]) {
                    if (rucksack[1]?.includes(char) && rucksack[2]?.includes(char) && !charArray.includes(char)) {
                        charArray.push(char)
                    }
                }
            }

            charArray.forEach((char) => {
                result += priorty.indexOf(char) + 1
            })
        }
    }

    console.log(result)
}

main(2);
