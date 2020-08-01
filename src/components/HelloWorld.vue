<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <p>Team Slots Here</p>
        <v-row justify="center">
          <TeamSlot :id="0" />
          <TeamSlot :id="1" />
          <TeamSlot :id="2" />
          <TeamSlot :id="3" />
          <TeamSlot :id="4" />
        </v-row>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col cols="12">
        <Container
          group-name="heroes"
          behaviour="copy"
          :get-child-payload="getChildPayload"
        >
          <Draggable v-for="hero in heroes" :key="hero.id">
            <v-card>
              {{ hero.name }}
            </v-card>
          </Draggable>
        </Container>
      </v-col>
    </v-row>

    <!-- 
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Vuetify
        </h1>

        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br />please join our online
          <a href="https://community.vuetifyjs.com" target="_blank"
            >Discord Community</a
          >
        </p>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          What's next?
        </h2>

        <v-row justify="center">
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          Important Links
        </h2>

        <v-row justify="center">
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          Ecosystem
        </h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>
    </v-row> -->
  </v-container>
</template>

<script>
import TeamSlot from "@/components/TeamSlot";
import { Container, Draggable } from "vue-smooth-dnd";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "HelloWorld",
  components: { TeamSlot, Container, Draggable },
  data: () => ({
    //
  }),
  computed: {
    ...mapGetters(["slotContents", "heroes"])
  },
  created() {
    const equipHero = (slotIndex, heroId) => {
      this.equipHeroInSlot({ slotIndex, heroId });
    };
    window.equipHeroInSlot = (slotIndex, heroId) => {
      equipHero(slotIndex, heroId);
    };
  },
  methods: {
    ...mapActions(["equipHeroInSlot"]),
    getChildPayload(index) {
      return this.heroes[index].id;
    }
  }
};
</script>
