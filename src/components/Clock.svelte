<script lang="ts">
  import {fade} from "svelte/transition"

  let thisYear = $state(true)

  export class Time {
    static currentDate = new Date();
    static initialDate = new Date("2025-1-1")
    static timeLeftThisYear = new Date("2025-10-5")
    static fullTimeLeft = new Date("2029-10-5")

    static differenceOfMilisecondsToFinalTest =
      this.fullTimeLeft.getTime() - this.currentDate.getTime();
    static differenceOfMilisecondsThisYearTest = 
      this.timeLeftThisYear.getTime() - this.currentDate.getTime();

    static getYearsLeft() {
      const differenceInYears =
        this.fullTimeLeft.getFullYear() - this.currentDate.getFullYear();
      return differenceInYears;
    }

    static getMonthsLeft() {
      const differenceInMonths =
        this.differenceOfMilisecondsToFinalTest / (30 * 24 * 60 * 60 * 1000);
      return Math.floor(differenceInMonths);
    }

    static getWeeksLeft() {
      const differenceInWeeks = 
        this.differenceOfMilisecondsToFinalTest / (7 * 24 * 60 * 60 * 1000);
      return Math.floor(differenceInWeeks);
    }

    static getDaysLeft() {
      const differenceOfDays =
        this.differenceOfMilisecondsToFinalTest / (24 * 60 * 60 * 1000);
      return Math.floor(differenceOfDays);
    }

    static getHoursLeft() {
      const differenceOfHours = this.differenceOfMilisecondsToFinalTest / (60 * 60 * 1000);
      return Math.floor(differenceOfHours);
    }
    
    static getRemainingTimeThisYearInYears() {
      const differenceInYears = 
        this.timeLeftThisYear.getFullYear() - this.currentDate.getFullYear();
      return differenceInYears;
    }

    static getRemainingTimeThisYearInMonths() {
      const differenceInMonths = 
        this.differenceOfMilisecondsThisYearTest / (30 * 24 * 60 * 60 * 1000);
      return Math.floor(differenceInMonths);
    }
    
    static getRemainingTimeThisYearInWeeks() {
      const differenceInWeeks = 
        this.differenceOfMilisecondsThisYearTest / (7 * 24 * 60 * 60 * 1000);
      return Math.floor(differenceInWeeks);
    }

    static getRemainingTimeThisYearInDays() {
      const differenceInDays = 
        this.differenceOfMilisecondsThisYearTest / (24 * 60 * 60 * 1000);
      return Math.floor(differenceInDays)
    }

    static getRemainingTimeThisYearInHours() {
      const differenceInHours = 
        this.differenceOfMilisecondsThisYearTest / (60 * 60 * 1000)
      return Math.floor(differenceInHours)
    }

    static calculatePercent() {
      const tempoQuePassou = this.currentDate.getTime() - this.initialDate.getTime()
      const tempoTotalAteAProva = this.timeLeftThisYear.getTime() - this.initialDate.getTime()
      return (tempoQuePassou / tempoTotalAteAProva) * 100
    }
  }  
  
  function setThisYear() { 
    if (thisYear) thisYear = false;
    else thisYear = true    
  }

</script>
<div class="transition-all">
  {#if !thisYear}
    <div transition:fade={{ delay: 250, duration: 150 }} class="mt-10 md:mt-40">
      <div class="flex flex-col gap-5 lg:justify-center md:flex-row dark:text-white">
        {#if Time.getYearsLeft() !== 0}
          <div class="rounded-md p-10 flex justify-center">
            <h1 class="text-3xl font-extrabold">
              {Time.getYearsLeft()} anos
            </h1>
          </div>
        {/if}
        <div class="rounded-md p-10 flex justify-center">
          <h1 class="text-3xl font-extrabold">
            {Time.getMonthsLeft()} meses
          </h1>
        </div>
        <div class="rounded-md p-10 flex justify-center">
          <h1 class="text-3xl font-extrabold">
            {Time.getWeeksLeft()} semanas
          </h1>
        </div>
        <div class="rounded-md p-10 flex justify-center">
          <h1 class="text-3xl font-extrabold">
            {Time.getDaysLeft()} dias
          </h1>
        </div>
        <div class="rounded-md p-10 flex justify-center">
          <h1 class="text-3xl font-extrabold">
            {Time.getHoursLeft()} horas
          </h1>
        </div>
      </div>
      <div class="flex justify-center">
        <h4 class="text-slate-500 dark:text-neutral-600 mt-5">
          Este é o tempo em anos, meses, dias e horas até minha ultima tentativa na
          prova do ita
        </h4>
      </div>
    </div>
  {/if}

  {#if thisYear}
    <div transition:fade={{ delay: 250, duration: 150 }} class="mt-10 md:mt-40">
      <div class="flex flex-col gap-5 justify-center md:flex-row dark:text-white">
        {#if Time.getRemainingTimeThisYearInYears() !== 0}
          <div class="rounded-md p-10 flex justify-center">
            <h1 class="text-3xl font-extrabold">
              {Time.getRemainingTimeThisYearInYears()} anos
            </h1>
          </div>
        {/if}
        <div class="rounded-md p-10 flex justify-center">
          <h1 class="text-3xl font-extrabold">
            {Time.getRemainingTimeThisYearInMonths()} meses
          </h1>
        </div>
        <div class="rounded-md p-10 flex justify-center">
          <h1 class="text-3xl font-extrabold">
            {Time.getRemainingTimeThisYearInWeeks()} semanas
          </h1>
        </div>
        <div class="rounded-md p-10 flex justify-center">
          <h1 class="text-3xl font-extrabold">
            {Time.getRemainingTimeThisYearInDays()} dias
          </h1>
        </div>
        <div class="rounded-md p-10 flex justify-center">
          <h1 class="text-3xl font-extrabold">
            {Time.getRemainingTimeThisYearInHours()} horas
          </h1>
        </div>
      </div>
      <!-- --progress-bar -->
      <div class="flex justify-center my-10">
        <div class="flex flex-col items-center gap-5">
          <div class="w-[50vw] max-w-xl h-[3vh] border-[1px] border-white/50 p-[2px] rounded-sm overflow-hidden">
            <div
              class="bg-white h-full transition-all duration-500"
              style="width: {Time.calculatePercent()}%;"
            ></div>
        </div>
        <span class="dark:text-white">{`${Time.calculatePercent().toFixed(2)}%`}</span>
        </div>
      </div>
      <!-- ------------- -->
      <div class="flex justify-center">
        <h4 class="text-slate-500 dark:text-neutral-600 mt-5">
          Este é o tempo em anos, meses, dias e horas até minha prova do ita desse ano
        </h4>
      </div>
    </div>
    {/if}

   <div class="flex justify-center items-center py-10">
    <button onclick={setThisYear} class="text-neutral-900 px-3 py-1 rounded-sm bg-neutral-400">
      {thisYear ? "Ultimo ano" : "Esse ano"}
    </button>
   </div>
</div>

<style>
  :root {
    --shadow: rgb(204, 219, 232, 0.2) 1px 4px 20px 5px inset,
      rgba(255, 255, 255, 1) -3px -3px 6px 1px inset;
  }

</style>
