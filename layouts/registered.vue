<script setup lang="ts">

</script>

<template>
    <div class="flex flex-col min-h-screen">
        <LayoutRegisteredHeader />
        <div class="flex-1">
            <slot />
        </div>
        <LayoutRegisteredFooter />
    </div>
</template>