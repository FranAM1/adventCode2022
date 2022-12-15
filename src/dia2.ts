import { readFile } from 'fs/promises'

const RPS =[
    {
        name: "rock",
        beats: "scissors",
        points: 1,
        player1: "A",
        player2: "X"
    },
    {
        name: "paper",
        beats: "rock",
        points: 2,
        player1: "B",
        player2: "Y"
    },
    {
        name: "scissors",
        beats: "paper",
        points: 3,
        player1: "C",
        player2: "Z"
    }
]

async function main(part: 1 | 2) {
    const data = await readFile("./inputs/2.txt", "utf8")

    const input = data.split("\n")

    let result = 0
    // PARTE 1
    if (part == 1) {
        input.forEach((row) => {
            const [player1, player2] = row.split(" ")

            const player1Play = RPS.find((rps) => rps.player1 == player1)
            const player2Play = RPS.find((rps) => rps.player2 == player2)
            
            if(player1Play != undefined && player2Play != undefined){
                result += player2Play.points

                if(player2Play.beats == player1Play.name){
                    result+=6
                }else if(player1Play.name == player2Play.name){
                    result+=3
                }
            }
        })
            

    // PARTE 2
    } else {
        input.forEach((row) => {
            const [player1, player2] = row.split(" ")

            const player1Play = RPS.find((rps) => rps.player1 == player1)
            const player2Play = RPS.find((rps) => rps.player2 == player2)
            
            if(player1Play != undefined && player2Play != undefined){
                if(player2Play.player2 == "X"){
                    result += RPS.find((rps) => rps.name == player1Play.beats)!.points

                }else if(player2Play.player2 == "Y"){
                    result += player1Play.points + 3

                }else if(player2Play.player2 == "Z"){
                    result += RPS.find((rps) => rps.beats == player1Play.name)!.points + 6
                }
            }
        })
    }

    console.log(result)
}




main(2);
