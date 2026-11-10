<template>
    <div class="flex flex-col minesweeper-skeleton h-full">
        <div>
            <div class="flex justify-end absolute top-[120px] left-[114px] w-[48px]">
                <h1 class="font-vt323 text-red-600">
                    {{flaggedMines}}
                </h1>
            </div>
            <div class="flex justify-end absolute top-[120px] left-[312px] w-[48px]">
                <h1 class="font-vt323 text-red-600">
                    {{Math.min(seconds,999)}}
                </h1>
            </div>
        </div>
        <div 
            class="absolute face top-[124px] left-[184px]"
            :style="{'--facePath': `url('sprites/minesweeper/face_${face}.png')`}"
            @click="restartGame"
        >
        </div>
        <div class="flex flex-col absolute top-[200px] left-[52px] gap-0">
            <div
                v-for="(row, r) in board"
                :key="r"
                class="flex"
            >
                <div
                    v-for="(cell, c) in row"
                    :key="c"
                    class="cell"
                    :style="{'--cellPath': `url('sprites/minesweeper/cell_${cell.appearance === 'open' ? cell.value : cell.appearance}.png')`}"
                    @click="() => { if(canClick) clickCell(cell, [r, c])}"
                    @contextmenu.prevent="() => { if(canClick) flagCell([r, c])}"
                >
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useStopwatch } from 'vue-timer-hook'
const { hours, minutes, seconds, start, pause, reset } = useStopwatch(0, true)
import type { CellRealValue, MineSweeperCell } from '~/types/computer';
import type { MineSweeperFace } from '~/types/computer';
const ROWS = 8;
const COLS = 8;
const board = ref<MineSweeperCell[][]>(createBoard())
const face = ref<MineSweeperFace>()
const minePositions = ref<[number, number][]>([])
const clickedFirstTime = ref<boolean>(false);
const canClick = ref<boolean>(true);
let remainingCells:number = ROWS * COLS;
let winTarget:number = 10;
const flaggedMines = ref<number>(10);
let explodeMinesCoroutine:ReturnType<typeof setTimeout>;
let resetToHappyFaceCoroutine:ReturnType<typeof setTimeout>;


//Set smiley face and populate with normal cells. After first click, mines are placed
onMounted(() => {
    face.value = 'happy';
})

function createBoard() : MineSweeperCell[][] {
    return Array.from({ length: ROWS}, () =>
        Array.from({ length: COLS}, () => ({
            appearance: 'hidden',
            value: 'nothing'
        }))
    )
}

function restartGame() {
    face.value = 'happy';
    board.value = createBoard();
    clickedFirstTime.value = false;
    canClick.value = true;
    remainingCells = ROWS*COLS;
    minePositions.value = []
    flaggedMines.value = 10;
    reset();
}


function clickCell(cell: MineSweeperCell, [row,col]: [number,number]) {
    face.value = 'surprised';
    resetToHappyFaceCoroutine = setTimeout(() => {
        face.value = 'happy';
    }, 250)
    if(!clickedFirstTime.value){
        clickedFirstTime.value = true;
        //exclude current pos
        placeMinesAndNumbers([row,col]);
    }
    if(cell.appearance !== 'open') cell.appearance = 'open';
    if(cell.value === 'mine') {
        //pass the losing mine
        loseGame([row,col])
    }
    else if (cell.value === 'nothing') floodOpen([row,col]);
    if(cell.value !== 'mine') remainingCells--;
    if(remainingCells === winTarget){
        winGame()
    }
}

function winGame() {
    clearTimeout(resetToHappyFaceCoroutine);
    canClick.value = false;
    face.value = 'sunglasses';
    flaggedMines.value = 0;
    remainingCells = ROWS*COLS;
    pause();
}

function loseGame([row,col]:[number,number]) {
    explodeMines([row,col]);
    clearTimeout(resetToHappyFaceCoroutine);
    canClick.value = false;
    face.value = 'dead';
    pause();
}

function wait(ms: number) {
  return new Promise((res) => {
    setTimeout(res, ms)
  })
}

async function explodeMines([row,col]:[number,number]){
    const imine = board.value[row]?.[col];
        if(imine && imine.value === 'mine') {
            imine.appearance = 'open'
            imine.value = 'mine_explode'
    }
    minePositions.value.filter(([r,c]) => r !== row && c !== col)
    for(const mine of minePositions.value) {
        await wait(150);
        const imine = board.value[mine[0]]?.[mine[1]];
        if(imine && imine.value === 'mine') {
            imine.appearance = 'open'
            imine.value = 'mine_explode'
        }
    }
}

function placeMinesAndNumbers([selectedR,selectedC] : [number,number]) {
    //Place mines
    for(let i = 0; i < 10; i++){
        const row = Math.floor(Math.random() * ROWS);
        const col = Math.floor(Math.random() * COLS);
        if(minePositions.value.some(([r, c]) => r === row && c === col) || selectedR === row && selectedC === col) i--;
        else {
            minePositions.value.push([row, col]);
            const cell = board.value[row]?.[col];
            if(cell) cell.value = 'mine';
        }
    }
    //Place numbers
    for(let i = 0; i < ROWS * COLS; i++){
        let mineCount = 0;
        let row = numberToPosition(i)[0]
        let col = numberToPosition(i)[1]
        if(checkIfMine([row,col])) continue;
        for(const neigh of getNeighbours([row,col])){
            const cell = board.value[neigh[0]]?.[neigh[1]]
            if(cell) if(cell.value === 'mine') mineCount++;
        }
        board.value[row]![col]!.value = mineCount === 0 ? 'nothing' : mineCount.toString() as CellRealValue
    }

}

function numberToPosition(num: number) : [number, number] {
    let row = Math.floor(num / 8);
    let col = num % 8;
    return [row,col]
}

function checkIfMine([row,col]: [number, number]) : boolean {
    let cell = board.value[row]?.[col]
    if(cell) {
        if(cell.value === 'mine') return true; else return false;
    }
    return false;
}

function flagCell([row, col] : [number, number]) {
    let cell = board.value[row]?.[col]
    if(cell) {
        if(cell.appearance === 'hidden'){
            if(flaggedMines.value === 0) return;
            cell.appearance = 'flag';
            flaggedMines.value -= 1;
        }
        else if(cell.appearance === 'flag'){
            cell.appearance = 'hidden'
            flaggedMines.value += 1;
        } 
    }
}

function getNeighbours([row,col] : [number, number]): [number, number][] {
    const res: [number, number][]= [];
    for(let irow = row-1; irow <= row+1; irow++) {
        for(let icol = col-1; icol <= col+1; icol++) {
            if(irow < 0 || irow > 7 || icol > 7) break;
            if(icol < 0) continue;
            if(irow === row && icol === col) continue;
            res.push([irow,icol]);
        }
    }
    return res
}

//All 8 neighbours are opened, and if there are empty neighbours they repeat the process
function floodOpen([row,col]: [number,number]) {
    let cellsToOpen:[number,number][] = [[row,col]];
    for(const remaining of cellsToOpen) {
        for(const neigh of getNeighbours(remaining)) {
            const cell = board.value[neigh[0]]?.[neigh[1]];
            if(cell) { 
                if(cell.value === 'nothing' && cell.appearance === 'hidden') {
                    cellsToOpen.push([neigh[0],neigh[1]]);
                }
                if(cell.appearance === 'hidden') {
                    cell.appearance = 'open';
                    remainingCells--;
                }
            }
        }
    }
}

</script>

<style scoped>
@import "tailwindcss";

h1 {
    @apply text-6xl
}

.minesweeper-skeleton {
    width: 360px;
    height: 444px;
    background-image: url('sprites/minesweeper/minesweeper_skeleton.png');
    background-size: 360px 444px;
    image-rendering: pixelated;
}

.cell {
    width: 40px;
    height: 40px;
    background-image: var(--cellPath);
    background-size: 40px 40px;
    image-rendering: pixelated;
}

.face {
    width: 56px;
    height: 52px;
    background-image: var(--facePath);
    background-size: 56px 52px;
    image-rendering: pixelated;
}


</style>