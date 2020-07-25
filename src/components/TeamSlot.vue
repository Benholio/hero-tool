<template>
  <span>{{ name }}</span>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TeamSlot",
  data: () => ({}),
  props: {
    id: { type: Number, required: true }
  },
  computed: {
    ...mapGetters(["slotNames"]),
    name() {
      return this.slotNames[this.id];
    }
  }
};
</script>

<style></style>
