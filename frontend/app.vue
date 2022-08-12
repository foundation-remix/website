<template>
  <div class="off-canvas-wrapper">
    <div class="off-canvas position-left" id="off-canvas" data-off-canvas></div>
    <div id="canvas-content" class="off-canvas-content in-canvas-for-small" data-off-canvas-content>
      <header class="grid-y">
        <div class="cell auto shrink">
          <div class="grid-container text-center">
            <h1>Foundation for Sites (Remix Edition)</h1>
          </div>
        </div>
        <div class="cell auto shrink">
          <div class="grid-container" data-sticky-container>
            <div class="top-bar-container">
              <div class="sticky" data-sticky data-options="anchor: main; marginTop: 0;">
                <TopBarComponent />
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <router-view></router-view>
      </main>
      <footer class="grid-container">
        <div class="cell auto shrink">
          <p>Source code at <a href="https://github.com/foundation-remix">https://github.com/foundation-remix</a></p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  mounted() {
    $(document).foundation();
  },
};
</script>

<style lang="scss">

body {
  display: table;
  width: 100%;

  .off-canvas-content {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  main {
    flex: 1;
  }

}
</style>
