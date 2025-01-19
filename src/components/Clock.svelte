<script lang="ts">
  let thisYear = $state(false)

  class Time {
    static currentDate = new Date();
    static timeLeftThisYear = new Date("2025-10-13")
    static fullTimeLeft = new Date("2029-10-13");

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
  }  
  
  function setThisYear() { 
    if (thisYear) thisYear = false;
    else thisYear = true    
  }
  
</script>
<div class="transition-all">
  {#if !thisYear}
    <div class=" mt-10 md:mt-40">
      <div class="flex flex-col gap-5 lg:justify-center md:flex-row dark:text-neutral-400">
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
    <div class="mt-10 md:mt-40">
      <div class="flex flex-col gap-5 justify-center md:flex-row dark:text-neutral-400">
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
            {Time.getRemainingTimeThisYearInDays()} dias
          </h1>
        </div>
        <div class="rounded-md p-10 flex justify-center">
          <h1 class="text-3xl font-extrabold">
            {Time.getRemainingTimeThisYearInHours()} horas
          </h1>
        </div>
      </div>
      <div class="flex justify-center">
        <h4 class="text-slate-500 dark:text-neutral-600 mt-5">
          Este é o tempo em anos, meses, dias e horas até minha prova do ita desse ano
        </h4>
      </div>
    </div>
    {/if}

   <div class="flex justify-center items-center py-10">
    <button onclick={setThisYear} class="text-neutral-900 px-2 py-1 rounded-md bg-neutral-400">
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
