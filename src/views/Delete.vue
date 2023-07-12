<script setup>
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import { ref } from 'vue';
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

const $toast = useToast();

const route = useRoute();
const router = useRouter();
const loading = ref(false);

const handleDelete = () => {
    loading.value = true;
    axios
    .delete('https://pdf-2-slide-be.fly.dev/files/' + route.params.id + '?dk=' + route.params.key)
    .then(res => {
      console.log(res.data.result);
      $toast.success("Slide deleted!")
      router.push('/');
    })
    .catch(err => {
      console.log(err);
      $toast.error("Something went wrong. Please try it again.");
      router.push('/');
    });
}

const handleCancel = () => {
  router.push('/');
}

</script>

<template>
 <div> 
    <h1 v-if="!loading">Are you sure you want to delete this file?</h1>
    <p v-if="!loading"> ⚠️ This action cannot be undone ⚠️ </p>
    <div v-if="!loading">
      <button type="button" id="btnDel" @click="handleDelete">Delete</button>
      <button type="button" @click="handleCancel">Cancel</button>
    </div>
    <div v-else>
      <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
</div>
</template>

<style scoped>
      * {
        background-color: #222;
        color: #fff;
        font-family: sans-serif;
        font-size: 18px;
        line-height: 1.4;
        padding: 10px;
      }

      h1 {
        font-size: 28px;
        margin-top: 0;
      }

      p {
        text-transform: uppercase;
      }

      button {
        background-color: #444;
        color: #fff;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        margin-right: 10px;
        left: 100%;
      }

      button:hover {
        background-color: #666;
      }
      #btnDel:hover {
        background-color: indianred;
      }
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #fff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}

</style>