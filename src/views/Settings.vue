<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

const route = useRouter();

const name = ref("");
const email = ref("");
const myFile = ref(null);
const upSlide = ref(true);

const handleSubmit = () => {
  if (name.value.length < 3) {
    alert("Please enter a valid Slides name. It must be at least 3 characters long.");
    return;
  } 
  if (email.value === "") {
    alert("Please enter your email");
    return;
  }
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    alert("Please enter a valid email");
    return;
  } 

  if (!myFile.value.files[0]) {
    alert("Please select a PDF");
    return;
  }
  const formData = new FormData();
  formData.append("file", myFile.value.files[0]);
  formData.append("owner_email", email.value);
  formData.append("slides_name", name.value);
  
  upSlide.value = false;

  axios
    .post("https://pdf-2-slide-be.fly.dev/files/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "accept": "application/json",
      },
    })
    .then(res => {
      alert("Your SlideID is: "+res.data.id_task)
      alert('Your delete key is: '+res.data.SAVE_THIS_delete_key)
      route.push("/slides/" + res.data.id_task);
      isLoading.value = false;
    })
    .catch(err => {
      console.log(err);
    });
};
</script>

<template>
  <div class="pdf-container">
    <div class="left-container">
      <h1 style="color: white">
        <i class="fa-solid fa-eye"></i>
        PDF2Slide
      </h1>
      <div class="puppy">
        <img
          src="/icon-2.webp" />
      </div>
    </div>
    <div class="right-container">
      <header v-if="upSlide">
        <h1 style="font-family: 'Cormorant SC', serif; color: #0e1318">
          Setting up your slides
        </h1>
        <div class="set">
          <div class="slides-name">
            <label for="slides-name">Name</label>
            <input id="slides-name" placeholder="SLIDES NAME" type="text" v-model="name" required/>
          </div>
          <div class="slides-breed">
            <label for="slides-breed">Email</label>
            <input id="slides-breed" placeholder="YOUR EMAIL" type="text" v-model="email" required/>
          </div>
        </div>

        <div class="set">
          <div class="slides-photo">
            <input id="slides-upload" class="su" type="file" accept=".pdf" size="5000000" ref="myFile" required/>
            <label for="slides-upload" class="labelUp">Upload PDF <i class="fa-solid fa-file-arrow-up"></i></label>
          </div>
          <div class="slides-photo">
            <input id="slides-s" type="submit" value="SAVE" @click="handleSubmit" />
          </div>
        </div>
      </header>
      <header v-if="!upSlide">
        <h1 style="font-family: 'Cormorant SC', serif; color: #0e1318">
          Your slides are being processed... <br>
          <span style="text-transform:lowercase; font-family:serif; font-weight: 100; font-size: 12px;">
            We will send you an email when they are ready.
            </span>
            <p></p>
            <i class="fa-solid fa-spinner fa-spin"></i>
        </h1>
      </header>
      <footer>
        <div class="set">
          <a id="back" href="https://github.com/rooyca" target="_blank"><i class="fa-brands fa-github"></i></a>
          <a id="back" href="https://t.me/seiseiseis" target="_blank"><i class="fa-brands fa-telegram"></i></a>
          <a id="back" href="https://mas.to/@rooyca" target="_blank"><i class="fa-brands fa-mastodon"></i></a>
          <a id="back" href="https://ko-fi.com/rooyca" target="_blank"><i class="fa-solid fa-mug-saucer"></i></a>
        </div>
      </footer>
    </div>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Cormorant+SC:wght@300&family=Montserrat:ital,wght@1,100&display=swap");
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap");
$primary-bg-color: #62676d;
$secondary-bg-color: #363b40;
$font-color: rgba(0, 0, 0, 0.8);
$font-family: "Montserrat", sans-serif;
$form-border-color: rgba(0, 0, 0, 0.1);

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#slides-upload + label * {
	pointer-events: none;
}
input:hover {
  background-color: #0e1318 !important;
  color:white !important;
}
input:focus {
  border: 0;
  outline: 0;
}
body {
  align-items: center;
  background: #0e1318;
  color: $font-color;
  display: grid;
  font-family: $font-family;
  font-size: 14px;
  font-weight: 400;
  height: 100vh;
  justify-items: center;
  text-align: left;
}
.btn-slides{
  background: #0e1318;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  height: 50px;
  margin-top: 30px;
  padding: 0 20px;
  transition: all 0.3s ease-in-out;
  width: 100%;
}

.secret-check {
  width: 14px !important;
  height: 14px !important;
  border: 1px solid #fff;
}

.txt-secret {
  text-transform: capitalize;
  margin-left: 5px;
}

.pdf-container {
  display: grid;
  grid-template-areas: "left right";
  max-width: 900px;
}

.left-container {
  background: $secondary-bg-color;
  overflow: hidden;
  padding: 40px 0 0 0;
  position: relative;
  text-align: center;
  width: 300px;

  & h1 {
    color: $font-color;
    display: inline-block;
    font-size: 24px;

    & i {
      background: $primary-bg-color;
      border-radius: 50%;
      color: $secondary-bg-color;
      font-size: 24px;
      margin-right: 5px;
      padding: 10px;
      transform: rotate(-45deg);
    }
  }

  .puppy {
    bottom: 10%;
    left: 6.8vh;
    position: absolute;
    text-align: center;
    background: rgb(255 255 255);
    border-radius: 50%;
    padding: 10px;
    width: 150px;
    height: 150px;

    &:before {
      background: $secondary-bg-color;
      height: 100%;
      left: 0;
      opacity: 0.4;
      position: absolute;
      width: 100%;
      z-index: 1;
    }
  }

  img {
    filter: contrast(0.8) grayscale(100%);
    width: 100%;
  }
}

@media screen and (max-width: 600px) {
  .left-container {
    display: none;
  }
  
}

.right-container {
  background: lighten($primary-bg-color, 5%);
  display: grid;
  grid-template-areas: "."".";
  width: 500px;
  text-transform: uppercase;

  & h1:nth-of-type(1) {
    color: $font-color;
    font-size: 28px;
    font-weight: 600;
  }

  & .set {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
  }

  & input {
    border: 1px solid $form-border-color;
    border-radius: 4px;
    height: 38px;
    line-height: 38px;
    padding-left: 5px;
  }

  & input,
  label {
    color: $font-color;
  }

  & header {
    padding: 40px;
  }

  & label,
  input,
  .slides-photo {
    width: 176px;
    border-radius: 4px;
  }

  & .slides-photo {
    align-items: center;
    display: grid;
    grid-template-areas: ". .";
    margin-top: 20px;

    & button {
      border: none;
      border-radius: 50%;
      height: 38px;
      margin-right: 10px;
      outline: none;
      width: 38px;
      background: #f0f2f5;
    }

    & button i {
      color: $font-color;
      font-size: 16px;
    }
  }

  .slides .radio-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  footer {
    align-items: left;
    background: #fff;
    display: flex;
    padding: 5px 40px;

    & a {
      border: 1px solid rgba(0, 0, 0, 0.2);
      height: 38px;
      line-height: 38px;
      width: 38px;
      border-radius: 50%;
      margin: 3px;
    }

    & i {
      padding-left: 30%;
    }

    & #back {
      background: #fff;
      transition: 0.2s all ease-in-out;
      color: #171a2b;

      &:hover {
        background: #171a2b;
        color: white;
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .right-container {
    width: 100%;
  }
  .set {
    flex-direction: column;
    margin: 10px 0;
  }
  footer {
    .set{
      display: flex !important;
      flex-direction: row !important;
    }

  }
  
}

.slides-name,
.slides-breed,
.slides-spayed-neutered {
  & label {
    display: block;
    margin-bottom: 5px;
  }
}

@media screen and (max-width: 600px){
  .slides-name,
  .slides-breed,
  .slides-spayed-neutered {
    & input {
        width: 100%;  
    }
    & label {
        margin-top: 10px;
    }
    
  }
}

.radio-container {
  background: #f0f2f5;
  border: 1px solid $form-border-color;
  border-radius: 4px;
  display: inline-block;
  padding: 5px;
}

.radio-container label {
  background: transparent;
  border: 1px solid transparent;
  border-radius: 2px;
  display: inline-block;
  height: 26px;
  line-height: 26px;
  margin: 0;
  padding: 0;
  text-align: center;
  transition: 0.2s all ease-in-out;
  width: 80px;
}

.radio-container input[type="radio"] {
  display: none;
}

.radio-container input[type="radio"]:checked+label {
  background: $primary-bg-color;
  border: 1px solid $form-border-color;
}

input {
  background: #f0f2f5;
}

#slides-upload {
  display: none;
}

#slides-upload,
i {
  cursor: pointer;
}

.labelUp {
  cursor: pointer;
  padding: 8px;
  font-size: 17px;
  color: #f0f2f5;
  background: #f0f2f5;
  text-align: center;
}
</style>
