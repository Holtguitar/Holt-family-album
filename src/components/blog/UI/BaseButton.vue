<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  font: inherit;
  border: 1px solid #636263;
  border-radius: 10px;
  background-color: #636263;
  color: white;
  padding: 0.5rem 2rem;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #444344;
  border-color: #444344;
  box-shadow: 2px 2px 2px grey;
}
</style>
