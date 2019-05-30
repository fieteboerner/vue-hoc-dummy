<template>
  <div>
    <h1>Progress Components</h1>
    <h2>Vertical Steps</h2>
    <div class="steps">
      <VerticalSteps :steps="steps" v-model="currentStepIndex" />
      <el-button @click="nextStep">{{ currentStepIndex }}</el-button>
    </div>

    <h2>ProgressBar</h2>
    <ProgressBar :target="target" :value="value" />
    <ProgressBar show-label :target="target" :value="value" />
    <ProgressBar show-label :target="target" :value="value">
      <div slot="label" slot-scope="{label}">
        {{label.value}} / {{label.target}}
      </div>
    </ProgressBar>

    <h2>ElementProgressBar</h2>
    <ElementProgressBar :target="target" :value="value" />
    <ElementProgressBar show-label :target="target" :value="value" />
    <ElementProgressBar show-label :target="target" :value="value">
      <div slot="label" slot-scope="{label}">
        {{label.value}} / {{label.target}}
      </div>
    </ElementProgressBar>

    <h2>HOC ProgressBar</h2>
    <StoreProgressBar />
    <StoreProgressBar show-label />
    <StoreProgressBar show-label>
      <div slot="label" slot-scope="{label}">
        {{label.value}} / {{label.target}}
      </div>
    </StoreProgressBar>

    <ElButton @click="updateProgress(0)">0</ElButton>
    <ElButton @click="updateProgress(10)">10</ElButton>
    <ElButton @click="updateProgress(50)">50</ElButton>
    <ElButton @click="updateProgress(75)">75</ElButton>
    <ElButton @click="updateProgress(100)">100</ElButton>
  </div>
</template>
<script>
import {mapMutations} from 'vuex';
import { Button as ElButton } from "element-ui";
import ProgressBar from "@/components/Progress/ProgressBar";
import ElementProgressBar from "@/components/Progress/ElementProgressBar";
import createStoreProgressBar from '@/components/Progress/StoreProgressBar';
import VerticalSteps from '@/components/Progress/VerticalSteps.vue';

export default {
  components: {
    ElButton,
    ElementProgressBar,
    ProgressBar,
    StoreProgressBar: createStoreProgressBar('scope1'),
    VerticalSteps,
  },
  data() {
    return {
      target: 400,
      value: 100,
      currentStepIndex: 0,
    };
  },
  computed: {
    steps() {
      return [
        { label: 'Step 1' },
        { label: 'Step 2' },
        { label: 'Step 3' },
        { label: 'Step 4' },
      ];
    },
  },
  mounted() {
    window.addEventListener('storage', (event) => {
      if(event.getKey === 'progress', event.newValue) {
        this.updateProgress(parseInt(event.newValue, 10));
      }
    });
    const intervalId = setInterval(() => {
      if(this.value < this.target) {
        this.value += 50;
      } else {
        this.value = 0
      }
    }, 2000);

    this.$once('hook:destroyed', () => {
      clearInterval(intervalId);
    })
  },
  methods: {
    ...mapMutations('scope1', ['updateProgress']),
    nextStep() {
      if((this.currentStepIndex + 1) < this.steps.length) {
        this.currentStepIndex++;
      } else {
        this.currentStepIndex = 0;
      }
    },
  },

};
</script>
