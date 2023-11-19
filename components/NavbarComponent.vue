<script lang="ts" setup>
</script>

<template>
  <div>
    <UContainer>
      <div class="flex justify-between items-center mb-6">
        <div class="flex items-center gap-6">
          <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 6H23V8.44444H1V6ZM1 14.5556H15.6667V17H1V14.5556Z" fill="#8789A3" />
            </svg>
          </div>
          <NuxtLink to="/">
            <h3 class="font-bold text-xl text-colorPrimary">Islampedia</h3>
          </NuxtLink>
        </div>
        <div>
          <SearchComponent />
        </div>
      </div>
    </UContainer>
  </div>
</template>

<style scoped></style>
