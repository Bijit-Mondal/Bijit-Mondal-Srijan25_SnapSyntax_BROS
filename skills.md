---
sidebar: false
---

# Skills

> Aayein!! Wo Kya cheez hain?

<script setup lang="ts">
import { ref } from 'vue'
import { VsRate, VsCol, VsRow } from 'vuesax-alpha'
import Vuesax from 'vuesax-alpha'
import 'vuesax-alpha/theme-chalk/index.css'
// dark mode
import 'vuesax-alpha/theme-chalk/dark/css-vars.css'

const v1 = ref(3)
const v2 = ref(4)
const v3 = ref(5)
const v0 = ref(2)
</script>

Hi, all my skills are here.

<div class="grid">
<vs-row justify="space-around" align="middle">
<vs-col>
<vs-rate
      v-model="v1"
      disabled
      show-score
      score-template="Vue JS"
      :colors="['#8B70CD', '#8B70CD', '#8B70CD']"
    />
</vs-col>
<vs-col>
<vs-rate
      v-model="v2"
      disabled
      show-score
      score-template="React JS"
      :colors="['#8B70CD', '#8B70CD', '#8B70CD']"
    />
</vs-col>
<vs-col>
<vs-rate
      v-model="v3"
      disabled
      show-score
      score-template="Kotlin"
      :colors="['#8B70CD', '#8B70CD', '#8B70CD']"
    />
</vs-col>


<vs-col>
<vs-rate
      v-model="v3"
      disabled
      show-score
      score-template="Express JS"
      :colors="['#8B70CD', '#8B70CD', '#8B70CD']"
    />
</vs-col>
<vs-col>
<vs-rate
      v-model="v1"
      disabled
      show-score
      score-template="Nest JS"
      :colors="['#8B70CD', '#8B70CD', '#8B70CD']"
    />
</vs-col>
<vs-col>
<vs-rate
      v-model="v0"
      disabled
      show-score
      score-template="Kubernetes"
      :colors="['#8B70CD', '#8B70CD', '#8B70CD']"
    />
</vs-col>

</vs-row>


</div>