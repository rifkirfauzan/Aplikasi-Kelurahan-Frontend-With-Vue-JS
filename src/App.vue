<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link :to="{name: 'dashboard'}" class="navbar-brand">APLIKASI ADMIN KELURAHAN</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link :to="{name: 'register'}" class="nav-link" href="">REGISTER</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name: 'login'}" class="nav-link" href="#">LOGIN</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <router-view />
</template>

<script>

export default {
}
</script>

<style>
  body {
    background: rgb(22, 70, 201)!important;
  }
</style>