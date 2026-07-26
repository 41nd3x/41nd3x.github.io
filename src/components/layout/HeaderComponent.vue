<script setup></script>

<template>
    <nav class="bg-custom-accent flex items-center justify-between p-4">
        <!-- Logo -->
        <img src="@/assets/logo_41nd3x.webp" alt="Logo" class="h-12 ml-4" />

        <!-- Navigation Links -->
        <div class="flex space-x-8">
            <a href="#" class="text-[11px] hover:text-custom-primary uppercase">Operative</a>
            <a href="#" class="text-[11px] hover:text-custom-primary uppercase">Logic</a>
            <a href="#" class="text-[11px] hover:text-custom-primary uppercase">Strategy</a>
        </div>

        <!-- Chips -->
        <div class="flex items-center gap-8">
            <p class="text-[11px] text-custom-primary">[ STATUS: ONLINE ]</p>
            <p class="text-[11px]">[ EXECUTE ]</p>
        </div>
    </nav>
</template>