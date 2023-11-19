<script lang="ts" setup>
const router = useRouter()
const isOpen = ref<boolean>(false)
const searchQuery = ref<string>('')

const { result, search } = useAlgoliaSearch('surah')

watchEffect(async () => {
  await search({ query: searchQuery.value })
})

onMounted(() => {
  // Tambahkan event listener untuk menanggapi peristiwa keyboard
  window.addEventListener('keydown', handleKeyDown)
})

// Definisikan fungsi untuk menanggapi event keyboard
function handleKeyDown(event: KeyboardEvent) {
  // Pastikan CTRL + / ditekan dan cek bahwa kita di rute yang benar
  if (event.ctrlKey && event.key === '/') {
    isOpen.value = true;
  }
}

// Pastikan untuk membersihkan event listener saat komponen diunmount
onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<template>
  <div>
    <UTooltip text="CTRL + /">
      <button type="button" @click="isOpen = true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1102_1014)">
            <path
              d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z"
              fill="#8789A3" />
          </g>
          <defs>
            <clipPath id="clip0_1102_1014">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
    </UTooltip>

    <UModal v-model="isOpen" class="modal-custom">
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <div>
          <UInput v-model="searchQuery" icon="i-heroicons-magnifying-glass-20-solid" color="indigo" :trailing="false"
            size="xl" variant="outline" placeholder="Cari sesuatu . . .">
            <template #trailing>
              <span class="text-gray-500 dark:text-gray-400 text-xs">ESC</span>
            </template>
          </UInput>
        </div>

        <div class="mt-4 max-h-[70vh] overflow-y-scroll">
          <div v-if="!searchQuery?.length">
            <!-- banttuan -->
            <div class="mb-6 mr-2">
              <h5 class="text-colorSecondary text-sm font-medium mb-2">Bantuan</h5>
              <div class="flex justify-between items-center">
                <UButton icon="i-heroicons-arrows-right-left-20-solid" size="sm" variant="ghost" disabled
                  label="Ganti Tema" :trailing="false"
                  class="text-colorSecondary hover:text-black hover:bg-slate-100 disabled:text-colorSecondary hover:normal-case" />
                <div>
                  <UBadge color="sky" variant="solid" :ui="{ rounded: 'rounded-full' }"
                    class="bg-colorSecondary text-[10px] py-1.5 px-4">Light</UBadge>
                </div>
              </div>
            </div>

            <!-- navigasi -->
            <div class="mr-2">
              <h5 class="text-colorSecondary text-sm font-medium mb-2">Navigasi</h5>
              <div class="grid">
                <NuxtLink to="/quran">
                  <UButton icon="i-heroicons-book-open" size="sm" variant="ghost" label="Al - Qur'an" :trailing="false"
                    class="text-colorSecondary hover:text-black hover:bg-slate-100" />
                </NuxtLink>
                <UButton icon="i-heroicons-book-open" size="sm" variant="ghost" disabled label="Kumpulan Do'a"
                  :trailing="false"
                  class="text-colorSecondary hover:text-black hover:bg-slate-100 disabled:text-colorSecondary" />
                <UButton icon="i-heroicons-book-open" size="sm" variant="ghost" disabled label="Juz Amma"
                  :trailing="false"
                  class="text-colorSecondary hover:text-black hover:bg-slate-100 disabled:text-colorSecondary" />
                <UButton icon="i-heroicons-book-open" size="sm" variant="ghost" disabled label="Ayat Favoritku"
                  :trailing="false"
                  class="text-colorSecondary hover:text-black hover:bg-slate-100 disabled:text-colorSecondary" />
              </div>
            </div>
          </div>
          <div v-else-if="searchQuery?.length && result?.hits?.length === 0">
            <p class="text-center text-sm text-colorTertiary">Pencarian untuk "{{ searchQuery }}" tidak ditemukan
            </p>
          </div>
          <div v-else class="mr-2">
            <!-- result search -->
            <div v-for="(surah, index) in result.hits" :key="index">
              <NuxtLink :to="`/quran/${surah.nomor}`">
                <div class="flex justify-between items-center border-b py-4">
                  <div class="flex items-center gap-4">
                    <div>
                      <h5 class="text-colorSecondary font-semibold">
                        {{ surah?.nama_latin }}
                      </h5>
                      <p class="text-colorTertiary text-sm">
                        {{ surah.arti }}
                      </p>
                    </div>
                  </div>
                  <div class="capitalize text-xs text-colorTertiary text-end">
                    <p>{{ surah.tempat_turun }}</p>
                    <p>{{ surah.jumlah_ayat }} Ayat</p>
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </UCard>
    </UModal>
  </div>
</template>

<style>
.modal-custom .min-h-full {
  align-items: baseline !important;
  min-height: 100% !important;
}
</style>
