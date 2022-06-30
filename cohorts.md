---
layout: page
title: Internship Cohorts
description: The demand for well-trained Bioinformatics to support genomics research continues to rise. The Bioinformatics Incubation and Mentorship program at icipe seeks to attract five highly motivated graduates for a three-month internship and mentorship. The interns undergo intensive training within the first month, after which they will be attached to ongoing genomic initiatives for a mini-project. The mini-project will provide a hands-on experience and guarantee knowledge and skills retention. To instill continued self-learning, they will be assigned free online courses compiled to suit their training needs.
photo: /assets/img/people.svg
---

<div class="w-full m-auto px-8 py-16 md:px-16 bg-gray-100 dark:bg-gray-900">
  <h2 class="text-4xl text-blue-800 dark:text-blue-400">Cohorts</h2>
  <div class="mt-4 mb-8 h-[1px] w-1/3 bg-blue-800 dark:bg-blue-400"></div>

  <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8">
    {% for cohort in site.cohorts %}
      {% include cohort_card.html cohort=cohort %}
    {% endfor %}
  </div>
</div>
