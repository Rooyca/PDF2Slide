<script setup>
import { useRoute } from 'vue-router';
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

const $toast = useToast();

const route = useRoute();

 const copyToClipboard = async () => {
   await navigator.clipboard.writeText(route.path);
   $toast.success('URL copied to clipboard', {'position': 'bottom-left'});
 }
</script>


<template>
<div id="container-floating">
  <div class="nd4 nds" data-toggle="tooltip" data-placement="left" data-original-title="questions">
    <a href="https://github.com/Rooyca/PDF-Vision" target="_target"><i class="fa-solid fa-circle-question iconobtn q"></i></a>
  </div>
  <div class="nd3 nds" data-toggle="tooltip" data-placement="left" data-original-title="copy" @click="copyToClipboard">
	<i class="fa-solid fa-clipboard iconobtn"></i>
  </div>
  <div class="nd1 nds" data-toggle="tooltip" data-placement="left" data-original-title="upload">
    <router-link to="/"><i class="fa-solid fa-file-arrow-up iconobtn"></i></router-link>
  </div>

  <div id="floating-button" data-toggle="tooltip" data-placement="left" data-original-title="plus" >
    <p class="plus">+</p>
    <i class="fa-solid fa-gear edit"></i>
  </div>
</div>

</template>

<style scoped lang="scss">
.iconobtn{
  font-size: 19px;
  color: #ffffff;
  margin-left: 32%;
  margin-top: 25%;
}
.q{
  margin-left: 27%;
}

#floating-button{
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: rgb(44, 44, 44);
  position: fixed;
  bottom: 30px;
  right: 30px;
  cursor: pointer;
}

.plus{
  color: white;
  position: absolute;
  top: 0;
  display: block;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  padding: 0;
  margin: 0;
  line-height: 55px;
  font-size: 38px;
  font-family: 'Roboto';
  font-weight: 300;
  animation: plus-out 0.3s;
  transition: all 0.3s;
}

#container-floating{
  position: fixed;
  width: 70px;
  height: 70px;
  bottom: 30px;
  right: 30px;
  z-index: 50px;
}

#container-floating:hover{
  height: 400px;
  width: 90px;
  padding: 30px;
}

#container-floating:hover .plus{
  animation: plus-in 0.15s linear;
  animation-fill-mode: forwards;
}

.edit{
  opacity: 0;
  width: 100%;
  font-size: 21px;
  margin-top: 30%;
  margin-left: 30%;
  transform: rotateZ(-70deg);
  transition: all 0.3s;
  animation: edit-out 0.3s;
  color: white;
}

#container-floating:hover .edit{
  animation: edit-in 0.2s;
   animation-delay: 0.1s;
  animation-fill-mode: forwards;
}

@keyframes edit-in{
    from {opacity: 0; transform: rotateZ(-70deg);}
    to {opacity: 1; transform: rotateZ(0deg);}
}

@keyframes edit-out{
    from {opacity: 1; transform: rotateZ(0deg);}
    to {opacity: 0; transform: rotateZ(-70deg);}
}

@keyframes plus-in{
    from {opacity: 1; transform: rotateZ(0deg);}
    to {opacity: 0; transform: rotateZ(180deg);}
}

@keyframes plus-out{
    from {opacity: 0; transform: rotateZ(180deg);}
    to {opacity: 1; transform: rotateZ(0deg);}
}

.nds{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: fixed;
  z-index: 300;
  transform:  scale(0);
  cursor: pointer;
}

.nd1{
  background: #ac404a;
  right: 40px;
  bottom: 110px;
  animation-delay: 0.2s;
    animation: bounce-out-nds 0.3s linear;
  animation-fill-mode:  forwards;
  
}

.nd3{
  background: #007718;
  right: 40px;
  bottom: 170px;
  animation-delay: 0.15s;
    animation: bounce-out-nds 0.15s linear;
  animation-fill-mode:  forwards;
}

.nd4{
  background: #0070D2;
  right: 40px;
  bottom: 230px;
  animation-delay: 0.1s;
    animation: bounce-out-nds 0.1s linear;
  animation-fill-mode:  forwards;
}

@keyframes bounce-nds{
    from {opacity: 0;}
    to {opacity: 1; transform: scale(1);}
}

@keyframes bounce-out-nds{
    from {opacity: 1; transform: scale(1);}
    to {opacity: 0; transform: scale(0);}
}

#container-floating:hover .nds{
  
  animation: bounce-nds 0.1s linear;
  animation-fill-mode:  forwards;
}

#container-floating:hover .nd3{
  animation-delay: 0.08s;
}
#container-floating:hover .nd4{
  animation-delay: 0.15s;
}
#container-floating:hover .nd5{
  animation-delay: 0.2s;
}
</style>

