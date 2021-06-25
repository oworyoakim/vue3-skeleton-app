<template>
<div class="navigation">
  <nav class="navbar navbar-light navbar-container">
    <div class="container-fluid">
      <div class="navbar-brand-content">
        <a class="navbar-brand" href="/">
          <img class="brand-logo" src="/logo.png" alt="VueApp">
        </a>
        <a href="javascript:void(0);" @click="toggleSidebar()" class="sidebar-toggle-btn">
          <span class="fas fa-bars"></span>
        </a>
      </div>
    </div>
  </nav>
  <nav class="sidebar" v-if="sidebar">
    <div class="menu-close-btn" @click="toggleSidebar()">
      <span class="fas fa-times"></span>
    </div>
    <ul class="menu-items" @click="toggleSidebar()">
      <li v-for="route in routes" class="menu-item">
        <router-link :to="route.path" tag="a" class="menu-item" active-class="active">
          <span :class="`${route.icon} menu-item-icon`"></span>
          <span class="menu-item-text">{{route.text}}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: "Navigation",
  setup(){
    const sidebar = ref(false);
    const routes = [
      {
        text: "Dashboard",
        path: "/dashboard",
        icon: "fas fa-tachometer-alt",
      },
      {
        text: "Products",
        path: "/products",
        icon: "fas fa-shopping-cart",
      },
      {
        text: "Reports",
        path: "/reports",
        icon: "fas fa-chart-bar",
      },
    ];

    const toggleSidebar = () => {
      sidebar.value = !sidebar.value;
    }

    return {
      sidebar,
      routes,
      toggleSidebar,
    }
  }
});
</script>

<style scoped>
  .navbar-container {
    width: 100%;
    background-color: #6c757d;
    color: #f5f5f5;
  }
  .navbar-brand-content {
    display: flex;
    align-content: flex-start;
  }
  @media screen and (max-width: 599px) {
    .navbar-brand-content {
      display: flex;
      align-content: space-between;
      width: 100%;
    }
  }
  .navbar-brand-content a {
    text-decoration: none;
    color: #f5f5f5;
  }
.brand-logo {
  width: auto;
  height: 32px;
}
  .sidebar-toggle-btn {
    margin-left: 2rem;
    font-size: 2rem;
    background: none;
  }

  .sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: #6c757d;
    color: #f5f5f5;
    top: 0;
    bottom: 0;
    width: 250px;
    height: 100vh;
    position: fixed;
    transition: 850ms;
    overflow-y: scroll;
  }

  .menu-close-btn {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 80px;
    font-size: 2rem;
    color: #f5f5f5;
    cursor: pointer;
  }

  .menu-items {
    list-style: none;
    width: 100%;
  }

  .menu-item {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 8px 0 8px 8px;
  }

  .menu-item a {
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;
  }
  .menu-item a:hover {
    background-color: #0dcaf0;
  }

  .menu-item .active {
    background-color: #0dcaf0;
  }

  .menu-item-icon {
    background: none;
    color: #f5f5f5;
  }
  .menu-item-text {
    margin-left: 16px;
  }
</style>