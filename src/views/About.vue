<template>
  <div class="about">
    <h1>This is an about page</h1>
   <div class="wrapper">
     <div class="box header">Header</div>
  <div class="box haha">lalal</div>
  <div class="box sidebar">Sidebar</div>
  <div class="box content">Content</div>
   </div>
  </div>
</template>
<style scoped>
.wrapper {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 120px  120px  120px ;
  grid-template-rows: repeat(3,100px);
  grid-template-areas:
    "sidebar header  content " 
    "lala lala  content";  
  background-color: #999;
  color: #444;
}
.sidebar {
  grid-area: sidebar;
}
.haha{
  grid-area: lala;
  background: yellow;
}
.content {
  grid-area: content;
}

.header {
  grid-area: header;
  background: red;
}

</style>