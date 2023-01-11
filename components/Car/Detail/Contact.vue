<script setup>
const route = useRoute();
const message = ref({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const errorMessage = ref("");
const successMessage = ref("");

const disableButton = computed(() => {
  for (let key in message.value) {
    if (!message.value[key]) return true;
  }
  return false;
});

const onSubmit = async () => {
  try {
    const response = await $fetch(
      `/api/car/listings/${route.params.id}/message`,
      {
        method: "POST",
        body: message.value,
      }
    );
    message.value = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };
    successMessage.value = "Message sent!";
    errorMessage.value = "";
  } catch (err) {
    errorMessage.value = err.statusMessage;
    successMessage.value = "";
  }
};
</script>

<template>
  <div class="mt-10">
    <div class="flex w-[600px] justify-between">
      <input
        type="text"
        class="border p-1"
        placeholder="Name"
        v-model="message.name"
      />
      <input
        type="text"
        class="border p-1"
        placeholder="Email"
        v-model="message.email"
      />
      <input
        type="text"
        class="border p-1"
        placeholder="Phone"
        v-model="message.phone"
      />
    </div>
    <div class="flex mt-4 w-[600px]">
      <textarea
        class="border p-1 w-full"
        placeholder="Message"
        v-model="message.message"
      ></textarea>
    </div>
    <button
      :disabled="disableButton"
      class="bg-blue-400 text-white px-10 py-3 rounded mt-4"
      @click="onSubmit"
    >
      Submit
    </button>
    <p class="mt-3 text-red-400" v-if="errorMessage">{{ errorMessage }}</p>
    <p class="mt-3 text-green-400" v-if="successMessage">{{ successMessage }}</p>
  </div>
</template>
