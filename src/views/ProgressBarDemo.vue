<template>
  <div>
    <h1>ProgressBar</h1>
    <ProgressBar :target="target" :value="value" />
    <ProgressBar show-label :target="target" :value="value" />
    <ProgressBar show-label :target="target" :value="value">
      <div slot="label" slot-scope="{label}">
        {{label.value}} / {{label.target}}
      </div>
    </ProgressBar>

    <h1>ElementProgressBar</h1>
    <ElementProgressBar :target="target" :value="value" />
    <ElementProgressBar show-label :target="target" :value="value" />
    <ElementProgressBar show-label :target="target" :value="value">
      <div slot="label" slot-scope="{label}">
        {{label.value}} / {{label.target}}
      </div>
    </ElementProgressBar>

    <h1>HOC ProgressBar</h1>
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
import ProgressBar from "@/components/ProgressBar";
import ElementProgressBar from "@/components/ElementProgressBar";
import createStoreProgressBar from '@/components/StoreProgressBar';

export default {
  components: {
    ElButton,
    ElementProgressBar,
    ProgressBar,
    StoreProgressBar: createStoreProgressBar('scope1')
  },
  data() {
    return {
      target: 400,
      value: 100,
    };
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
    ...mapMutations('scope1', ['updateProgress'])
  },

};
</script>
