<template>
  <nav>
    <ul>
      <li><router-link to="/pop">Pop</router-link></li>
      <li><router-link to="/rap">Rap</router-link></li>
      <li><router-link to="/rock">Rock</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 20px;
  justify-content: center;
}

nav ul li {
  font-size: 18px;
}

nav ul li a {
  text-decoration: none;
  color: #a5a5ff;
  font-weight: bold;
}

nav ul li a:hover {
  color: #fff;
  text-decoration: underline;
}
</style>
