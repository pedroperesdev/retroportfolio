<template>
  <div class="flex flex-col w-full h-full overflow-auto gap-[24px]">
    <div class="flex justify-center">
        <NuxtImg src="/images/legau/logo.png" loading="lazy" class="max-w-full" />
    </div>
    <div class="flex flex-col">
        <h1 class="font-pixel bg-gray-400">Skills used:</h1>
        <h2 class="font-pixel bg-gray-300">Nuxt, Vue.js, TypeScript, Tailwind CSS, Laravel, PHP, MySQL, Docker, REST APIs, Git, Scrum</h2>
    </div>
    <div class="flex flex-col">
        <h1 class="font-pixel bg-gray-400">Description:</h1>
        <h2 class="font-pixel bg-gray-300">
            The Legau Client Portal is a web administration console I built
            during my internship at Legau, a Portuguese startup that makes
            an AI-powered legal drafting platform for law firms. Until then,
            client organizations had no way to manage their own accounts,
            so the portal gives each tenant's administrators a place to
            manage users and groups, control permissions, and follow how
            their team uses the platform.
        </h2>
        <h2 class="font-pixel bg-gray-300">
            I worked across the full stack: a Nuxt/Vue frontend built from
            reusable design-system components, and a Laravel REST API
            organized into controllers, services and Eloquent models. I
            implemented authentication, user management (listing with
            search, filters and pagination, creating, editing and
            deactivating users), group management with member assignment,
            a password reset flow with localized emails, and usage analytics
            pages. The work was done remotely in a small team using Scrum,
            ClickUp and Bitbucket, with feature branches and code review
            for every pull request.
        </h2>
    </div>
    <div class="flex flex-col">
        <h1 class="font-pixel bg-gray-400">Screenshots:</h1>
        <NuxtImg src="/images/legau/legau4.png" loading="lazy" class="max-w-full legau-image" />
        <NuxtImg src="/images/legau/legau1.png" loading="lazy" class="max-w-full legau-image" />
        <NuxtImg src="/images/legau/legau2.png" loading="lazy" class="max-w-full legau-image" />
        <NuxtImg src="/images/legau/legau3.png" loading="lazy" class="max-w-full legau-image" />
    </div>



  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
@reference "tailwindcss";

h1 {
    @apply text-2xl font-bold
}

h2 {
    @apply text-xl
}

a {
    @apply text-blue-600 bg-gray-300 hover:bg-blue-200
}

.legau-image {
    image-rendering: auto;
}

</style>
