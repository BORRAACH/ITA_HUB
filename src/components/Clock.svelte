<script lang="ts">
  class Time {
    static currentDate = new Date();
    static finalDate = new Date("2029-10-13");
    static differenceOfMiliseconds =
      this.finalDate.getTime() - this.currentDate.getTime();

    static getYearsLeft() {
      const differenceInYears =
        this.finalDate.getFullYear() - this.currentDate.getFullYear();
      return differenceInYears;
    }

    static getMonthsLeft() {
      const differenceInMonths =
        this.differenceOfMiliseconds / (30 * 24 * 60 * 60 * 1000);
      return Math.floor(differenceInMonths);
    }

    static getDaysLeft() {
      const differenceOfDays =
        this.differenceOfMiliseconds / (24 * 60 * 60 * 1000);
      return Math.floor(differenceOfDays);
    }

    static getHoursLeft() {
      const differenceOfHours = this.differenceOfMiliseconds / (60 * 60 * 1000);
      return Math.floor(differenceOfHours);
    }
  }
</script>

<div class="mt-40">
  <div class="flex gap-5 justify-center dark:text-neutral-400">
    <div class="backdrop-blur-sm rounded-md p-10 flex justify-center">
      <h1 class="text-3xl font-extrabold">
        {Time.getYearsLeft()} anos
      </h1>
    </div>
    <div class="backdrop-blur-sm rounded-md p-10 flex justify-center">
      <h1 class="text-3xl font-extrabold">
        {Time.getMonthsLeft()} meses
      </h1>
    </div>
    <div class="backdrop-blur-sm rounded-md p-10 flex justify-center">
      <h1 class="text-3xl font-extrabold">
        {Time.getDaysLeft()} dias
      </h1>
    </div>
    <div class="backdrop-blur-sm rounded-md p-10 flex justify-center">
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

<style>
  :root {
    --shadow: rgb(204, 219, 232, 0.2) 1px 4px 20px 5px inset,
      rgba(255, 255, 255, 1) -3px -3px 6px 1px inset;
  }

  .intern-shadow {
    box-shadow: var(--shadow);
  }
</style>
