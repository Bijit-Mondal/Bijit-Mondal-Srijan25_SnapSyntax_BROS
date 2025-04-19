# Contact

> Tumse milne ko ji karta hain...

<script setup>
import { VsCol, VsRow, VsInput, VsButton } from 'vuesax-alpha'
import Vuesax from 'vuesax-alpha'
import 'vuesax-alpha/theme-chalk/index.css'
import 'vuesax-alpha/theme-chalk/dark/css-vars.css'


</script>

<style>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

input, textarea {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background-color: #8B70CD;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  opacity: 0.8;
}
</style>

<div class="grid">
    <vs-row>
      <vs-col>
      <vs-input v-model="value" type="text" color="#8B70CD" placeholder="Name" />
      </vs-col>
      <vs-col>
      <vs-input v-model="value" type="email" color="#8B70CD" placeholder="Email" />
      </vs-col>
    </vs-row>
    <vs-col>
      <textarea v-model="value" color="#8B70CD" placeholder="Message" rows="5"></textarea>
    </vs-col>
    <vs-button color="#8B70CD" size="small">Send</vs-button>
</div>