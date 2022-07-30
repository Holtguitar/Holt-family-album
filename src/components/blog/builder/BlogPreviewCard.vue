<template>
  <li>
    <h1>
      <div class="title">{{ title }}</div>
      <div class="date">{{ date }}</div>
    </h1>
    <p>
      <br />
      <span class="body">{{ body.slice(0, 175) }}</span>
      <span class="body-last">{{ body.slice(175, 265) }}</span>
    </p>
    <br />
    <div class="read-more">Read More</div>
  </li>
</template>

<script>
export default {
  props: ['title', 'date', 'body'],
};
</script>

<style scoped>
h1 {
  display: flex;
  margin: 1rem;
  justify-content: space-between;
}

.title {
  font-weight: 700;
  font-size: 1.5rem;
}

.date {
  font-weight: 600;
  font-size: 1rem;
}

.read-more {
  margin-left: 80%;
}
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 2px 2px 2px 2px grey;
}

p {
  font-size: 1rem;
  margin: 0.5rem 0;
}

.body-last {
  opacity: 55%;
}
</style>
