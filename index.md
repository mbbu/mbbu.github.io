---
layout: default
title: Home
---

<div
  class="flex flex-1 flex-wrap flex-col md:flex-row  items-center justify-between w-full m-auto p-8 md:px-16 dark:bg-gray-800">
  <div class="flex flex-col py-16 text-center md:text-start">
    <h2 class="mb-4 font-semibold text-8xl text-blue-800 dark:text-blue-400">
      {{ site.title }}
    </h2>
    <p class="mb-4 text-xl text-gray-500 dark:text-gray-400">
      Molecular Biology & Bioinformatics Unit
    </p>
    <a href="/#cohorts" class="w-1/2 mx-auto md:mx-0 py-2 px-4 rounded bg-blue-800 dark:bg-blue-400 text-white dark:text-gray-800 hover:bg-transparent hover:border hover:border-blue-800 hover:text-gray-500 hover:dark:border-blue-400 hover:dark:text-white text-center uppercase">
      Cohorts
    </a>
  </div>
  <div class="flex flex-col items-center justify-center w-2/5">
    <img src="/assets/img/dna.svg" alt="illustration" class="w-full dna-img">
  </div>
</div>

<div id="cohorts" class="w-full m-auto px-8 py-16 md:px-16 bg-gray-100 dark:bg-gray-900">
  <h2 class="text-4xl text-blue-800 dark:text-blue-400">Cohorts</h2>
  <div class="mt-4 mb-8 h-[1px] w-1/3 bg-blue-800 dark:bg-blue-400"></div>

  <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8">
    {% for cohort in site.cohorts %}
      {% capture timeline %}{{ cohort.start_date | date: "%B %Y" }} - {{ cohort.end_date | date: "%B %Y"}}{% endcapture %}
      {% include project_card.html name=cohort.name link=cohort.url photo=cohort.photo description=timeline %}
    {% endfor %}
  </div>
</div>
