import { readFile } from 'fs/promises'

async function main(part: 1 | 2) {
    const data = await readFile("./inputs/4.txt", "utf8")

    const input = data.split("\n")

    let result = 0

    //PARTE 1
    if (part == 1) {
        input.forEach((row) => {
            const [first, second] = row.split(",")

            const firstNumbers = first?.split("-").map((n) => parseInt(n))
            const secondNumbers = second?.split("-").map((n) => parseInt(n))

        })
        // PARTE 2
    } else {

    }
}

main(1);
