<template>
  <header
    class="sticky top-0 z-50 flex justify-between items-center space-x-1 border-b bg-white p-4 shadow-md"
  >
    <NuxtLink class="text-4xl font-mono" to="/">cartrader</NuxtLink>
    <div v-if="user" class="flex">
      <NuxtLink class="text-2xl font-mono mr-10" to="/profile/listings"
        >Profile</NuxtLink
      >
      <p class="cursor-pointer text-2xl font-mono mr-5" @click="logout">
        Logout
      </p>
    </div>

    <NuxtLink v-else class="text-2xl font-mono mr-10" to="/login"
      >Login</NuxtLink
    >
  </header>
</template>

<script setup>
const user = useSupabaseUser();
const supabase = useSupabaseClient();
const logout = async () => {
  // make user.value = null
  // remove JWT from cookie browser
  const { error } = supabase.auth.signOut();

  try {
    await $fetch("/api/_supabase/session", {
      method: "POST",
      body: { event: "SIGNED_OUT", session: null },
    });
  } catch (error) {
    return console.log(error);
  }

  user.value = null;
  // navigate to homepage
  navigateTo("/");
};
</script>
