<template>
    <div class="flex flex-col gap-4 h-full">
        <div class="flex justify-end border-[4px] border-blue-800 overflow-hidden px-2">
            <h1 class="font-pixel">{{buffer}}</h1>
        </div>
        <div class="flex flex-col justify-between flex-1">
            <div class="flex gap-4 justify-between">
                <CalculatorButton 
                    v-for="sym in allSymbols[0]"
                    :key="sym"
                    :symbol="sym"
                    @clicked="(symbol: CalcSymbol) => checkButton(symbol)"
                />
            </div>
            <div class="flex gap-4 justify-between">
                <CalculatorButton 
                    v-for="sym in allSymbols[1]"
                    :key="sym"
                    :symbol="sym"
                    @clicked="(symbol: CalcSymbol) => checkButton(symbol)"
                />
            </div>
            <div class="flex gap-4 justify-between">
                <CalculatorButton 
                    v-for="sym in allSymbols[2]"
                    :key="sym"
                    :symbol="sym"
                    @clicked="(symbol: CalcSymbol) => checkButton(symbol)"
                />
            </div>
            <div class="flex gap-4 justify-between">
                <CalculatorButton 
                    v-for="sym in allSymbols[3]"
                    :key="sym"
                    :symbol="sym"
                    @clicked="(symbol: CalcSymbol) => checkButton(symbol)"
                />
            </div>
            <div class="flex gap-4 justify-between">
                <CalculatorButton 
                    v-for="sym in allSymbols[4]"
                    :key="sym"
                    :symbol="sym"
                    @clicked="(symbol: CalcSymbol) => checkButton(symbol)"
                />
            </div>
        </div>

    </div>
</template>

<script lang="ts" setup>
import CalculatorButton from './design/calculator-button.vue';
import type { CalcSymbol, Digit, Operator, ImmediateOp, Action } from '~/types/computer.ts';
const allSymbols = ref<CalcSymbol[][]>([['Bck', 'C'], ['7', '8', '9', '/', 'sqr'], ['4', '5', '6', '*', '%'], ['1', '2', '3', '-', '1/x'], ['0', '+/-', '.', '+', '=']])

const digits:Digit[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const operators:Operator[] = ['/', '*', '%', '-', '+']
const immediateOps:ImmediateOp[] = ['sqr', '1/x', '+/-']
const actions:Action[] = ['Bck', 'C', '=']


const buffer = ref('0')


function checkButton(symbol: CalcSymbol) {
    if((digits as CalcSymbol[]).includes(symbol)) {
        addDigit(symbol as Digit)
    }
    
    if((operators as CalcSymbol[]).includes(symbol)) {
        addOperator(symbol as Operator)
    }

    if((immediateOps as CalcSymbol[]).includes(symbol)) {
        doImmediate(symbol as ImmediateOp)
    }

    if((actions as CalcSymbol[]).includes(symbol)) {
        doAction(symbol as Action)
    }
}

function addDigit(symbol: Digit) {
    if(buffer.value == '0') {
        buffer.value = symbol;
    }
    else buffer.value += symbol;
}

function addOperator(symbol: Operator) {
    buffer.value += symbol;
}

function doImmediate(symbol: ImmediateOp) {
    if(symbol === 'sqr') {
        buffer.value = Math.sqrt(eval(buffer.value)).toString();
    }
    else if(symbol === '1/x') {
        buffer.value = (1/eval(buffer.value)).toString();
    }
    else if (symbol === '+/-') {
        buffer.value = (-eval(buffer.value)).toString();
    }
}

function doAction(symbol: Action) {
    if(symbol === '=') {
        let temp = eval(buffer.value).toString();
        if(temp.includes('.')) {
            if(temp.slice(temp.indexOf('.')).length >= 15) buffer.value = eval(temp).toFixed(2).toString();
            else buffer.value = temp;
        } 
        else buffer.value = temp;
    }
    else if(symbol === 'Bck') {
        if(buffer.value.length !== 1)
            buffer.value = buffer.value.slice(0, -1)
        else 
            buffer.value = '0'
    }
    else if(symbol === 'C') {
        buffer.value = '0'
    }
}






</script>

<style scoped>
@import "tailwindcss";

h1 {
    @apply text-4xl
}


</style>