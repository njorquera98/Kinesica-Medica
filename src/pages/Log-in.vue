<template>
  <q-page>
    <div class="fixed-center">
      <div class="q-gutter-y-md column" style="max-width: 300px">
        <q-input v-model="text" label="Usuario">
          <template v-slot:prepend>
            <q-icon name="person" />
          </template>
        </q-input>
      </div>
      <div class="q-gutter-y-md column" style="max-width: 300px">
        <q-input v-model="password" label="Contraseña">
          <template v-slot:prepend>
            <q-icon name="lock" />
          </template>
        </q-input>
      </div>
      <q-btn class="center" color="primary" label="Primary" to="/"/>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  //  name: 'Index'
})
</script>
