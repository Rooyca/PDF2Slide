<script setup>
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const router = useRouter();

const handleDelete = () => {
    axios
    .delete('https://pdf-2-slide-be.fly.dev/files/' + route.params.id + '?dk=' + route.params.key)
    .then(res => {
      console.log(res.data.result);
      alert("Slide deleted!")
      router.push('/');
    })
    .catch(err => {
      console.log(err);
      alert("Something went wrong!")
      router.push('/');
    });

}

const handleCancel = () => {
  router.push('/');
}

</script>

<template>
 <div> 
    <h1>Are you sure you want to delete this file?</h1>
    <p> ⚠️ This action cannot be undone ⚠️ </p>
    <div >
      <button type="button" id="btnDel" @click="handleDelete">Delete</button>
      <button type="button" @click="handleCancel">Cancel</button>
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
</style>