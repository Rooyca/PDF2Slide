<script setup>
import { ref, reactive, onMounted } from "vue";
import { useRoute } from 'vue-router';
import axios from 'axios';
import floatBtn from '../components/floatBtn.vue';

const route = useRoute();
const listaImagenes = reactive({images:[]});
const paginaActual = ref(1);
const styleBTN = reactive({ display: "none" });
const styleBtnR = reactive({ display: "block" });
const isLoaded = ref(false);

const progressNumber = reactive({
  'width': "3%",
});

onMounted(() => {
  axios
  .get('https://pdf-be.fly.dev/files/' + route.params.id)
  .then(res => {
    listaImagenes.images =  res.data.result;
    isLoaded.value = true;
    progressNumber.width = (paginaActual.value / listaImagenes.images.length) * 100 + "%";
    if (listaImagenes.images.length === 1) {
      styleBtnR.display = "none";
    }
  })
  .catch(err => {
    console.log(err);
  });
});

const anteriorPag = () => {
  paginaActual.value--;
  if (paginaActual.value === 1) {
    styleBTN.display = "none";
  }
  if (paginaActual.value < listaImagenes.images.length) {
    styleBtnR.display = "block";
  }
  progressNumber.width = (paginaActual.value / listaImagenes.images.length) * 100 + "%";
};

const siguientePag = () => {
  paginaActual.value++;
  if (paginaActual.value > 1) {
    styleBTN.display = "block";
  }
  if (paginaActual.value === listaImagenes.images.length) {
    styleBtnR.display = "none";
  }
  progressNumber.width = (paginaActual.value / listaImagenes.images.length) * 100 + "%";
};

const progress = reactive({
  'width': "69vh",
  "background-color": "rgb(50 54 58)",
  'position': "absolute",
  'left': "50%",
  'transform': "translateX(-50%)",
  "margin-top": "0.5vh",
});
</script>

<template>
  <button :style="styleBTN" class="btnNavegacion btnLeft" @click="anteriorPag">
    <i class="fa-solid fa-chevron-left"></i>
  </button>
  <img v-if="isLoaded" :src="listaImagenes.images[paginaActual-1]" alt="Image" class="cardImage" />
  <button :style="styleBtnR" class="btnNavegacion btnRight" @click="siguientePag">
    <i class="fa-solid fa-chevron-right"></i>
  </button>
  <div class="progress" :style="progress">
    <div class="progress-bar" role="progressbar" :style="progressNumber" aria-valuenow="0" aria-valuemin="0"
      aria-valuemax="100"></div>
  </div>
  <float-btn />
</template>

<style>
.cardImage {
  height: 94vh;
}

.btnNavegacion {
  background-color: #252627;
  position: fixed;
  top: 50vh;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: none;
}

.btnLeft {
  left: 5%;
}

.btnRight {
  right: 5%;
}

.btnNavegacion i {
  color: #fff;
}

@media screen and (max-width: 970px) {
  .cardImage {
    width: 90vh;
    height: auto;
    margin-top: 12vh;
  }

  .progress {
    width: 70vh !important;
  }
}

@media screen and (max-width: 750px) {
  .cardImage {
    width: 100vh;
    height: auto;
    margin-top: 12vh;
  }

  .progress {
    width: 95vh !important;
    margin-left: 6.5vh;

  }
}

@media screen and (max-width: 600px) {
  .cardImage {
    width: 47vh;
    height: auto;
    margin-top: 1vh;
  }

  .progress {
    width: 47vh !important;
    margin: 0;
  }

  .btnNavegacion {
    width: 50px;
    height: 50px;
    top: 60vh;
    opacity: 0.2;
  }

  .btnLeft {
    left: 3%;
    top: 45%;
  }

  .btnRight {
    right: 3%;
    top: 45%;
  }
}
</style>
