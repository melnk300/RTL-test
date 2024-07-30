<script setup lang="ts">
</script>

<template>
  <div class="page">
    <aside>
      <img src="https://www.mmppicture.co.in/wp-content/uploads/2020/07/Blur-Background-64.jpg" alt="">
      <div class="item-detail">
        <p class="item-name skeleton"></p>
        <div class="item-desc">
          <p class="skeleton"></p>
          <p class="skeleton"></p>
          <p class="skeleton"></p>
          <p class="skeleton"></p>
          <p class="skeleton"></p>
        </div>
      </div>
      <div class="item-meta">
        <p class="skeleton"></p>
      </div>
    </aside>
    <main>
      <div class="item">
        <div class="item-content"></div>
        <div class="item-count">2</div>
      </div>
      <div class="item">
        <div class="item-content"></div>
        <div class="item-count">2</div>
      </div>
      <div class="item">
        <div class="item-content"></div>
        <div class="item-count">2</div>
      </div>
    </main>
    <footer>
      <p class="skeleton"></p>
    </footer>
  </div>
</template>

<style scoped>
aside {
  grid-area: aside;
}

main {
  grid-area: main;
}

footer {
  grid-area: footer;
}

.page {
  min-height: 100vh;
  padding: 2rem;

  background-color: #1d1d1d;

  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-areas:
    "aside main"
    "footer footer"
  ;
  gap: 1.5rem;
  width: 100%;
}



aside, main, footer {
  background: #262626;
  border: 1px solid #4d4d4d;
  border-radius: .8em;
}

aside {
  padding: 0.87rem;
}

aside > img {
  width: 100%;
  object-fit: cover;
  border-radius: .5rem;
  margin-bottom: 1.25rem;
}

.item-detail, .item-desc, .item-meta {
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
}

.item-detail > p, .item-desc > p, .item-meta > p {
  padding: 10px;

  border-radius: .5em;
}

.skeleton {
  content: " ";
  background: linear-gradient(90deg, #333333 25%, #636363 50%, #333333 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

.item-name {
  width: 70%;
  height: 2em;
  margin-bottom: 1.5rem;
}

.item-desc > p:not(:last-child) {
  margin-bottom: 1rem;
  width: 100%;
}

.item-desc > p:last-child {
  margin-bottom: 1.5rem;
  width: 100%;
}

.item-desc > p:nth-child(1) {
  width: 75%;
}

.item-desc > p:nth-child(2) {
  width: 90%;
}

.item-desc > p:nth-child(3) {
  width: 80%;
}

.item-desc > p:nth-child(4) {
  width: 78%;
}

.item-desc > p:nth-child(5) {
  width: 75%;
}

.item-meta > p {
  width: 50%;
  margin-bottom: .6rem;
}



main {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
}

.item {
  position: relative;
  padding: 3.5em;
  border: 1px solid #4d4d4d;
}

.item-content {
  position: relative;
  content: " ";
  background-color: rgba(51, 255, 233, 1);
  width: 100%;
  height: 100%;
}

.item-content:after {
  position: absolute;
  content: " ";
  background-color: rgba(1, 188, 169, 0.6);
  width: 100%;
  height: 100%;
  bottom: 10px;
  left: 10px;
  backdrop-filter: blur(5px);
}

.item-count {
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 10px 15px;
  border-radius: 10px 0 0 0;
  color: #f6f6f6;
  border-top: 1px solid #f6f6f6;
  border-left: 1px solid #f6f6f6;
}







footer {
  display: flex;
  align-items: center;
  padding: 1.125rem;
}

footer > p {
  width: 100%;
  height: 2.25rem;
  border-radius: .75rem;
}
</style>
