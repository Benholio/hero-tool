<template>
  <Container group-name="heroes" behaviour="drop-zone" @drop="onDrop">
    <v-card>
      <span v-if="isEmpty">Empty</span>
      <span v-if="!isEmpty">{{ hero.name }}</span>
    </v-card>
  </Container>
</template>

<script>
import { Container } from "vue-smooth-dnd";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TeamSlot",
  data: () => ({}),
  components: { Container },
  props: {
    id: { type: Number, required: true }
  },
  computed: {
    ...mapGetters(["slotNames", "slotContents", "heroes"]),
    name() {
      return this.slotNames[this.id];
    },
    contents() {
      return this.slotContents[this.id];
    },
    isEmpty() {
      return this.contents === null;
    },
    hero() {
      return this.isEmpty ? null : this.heroes[this.contents];
    }
  },
  methods: {
    ...mapActions(["equipHeroInSlot"]),
    onDrop(dropResult) {
      window.console.log(
        `You dropped onto slot ${this.id} with data: ${JSON.stringify(
          dropResult
        )}`
      );

      if (dropResult.addedIndex === null) return;

      const slotIndex = this.id;
      const heroId = dropResult.payload;
      this.equipHeroInSlot({ slotIndex, heroId });
    }
  }
};
</script>

<style></style>
