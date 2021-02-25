<template>
  <v-app>
    <v-app-bar
      app
      color="black"
      dark
    >
      <v-app-bar-nav-icon  @click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title>vue-dnd-zone</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/supraniti/vue-dnd-zone"
        target="_blank"
        large
        icon
      >
        <v-icon large>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <v-icon>mdi-selection-drag</v-icon>
            DATA DRIVEN DND
          </v-list-item-title>
          <v-list-item-subtitle>
            BUILT FOR VUE
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-tabs vertical v-model="tab" color="black">
        <v-tab class="justify-start">
          About
        </v-tab>
        <v-tab class="justify-start">
          Examples
        </v-tab>
        <v-tab class="justify-start">
          API
        </v-tab>
      </v-tabs>
    </v-navigation-drawer>
    <v-main>
      <v-tabs-items v-model="tab">
        <v-tab-item>
          <v-card class="elevation-5">
            <dnd-zone handle-class="handle" :native-scroll="false">
              <v-card-text>
                <dnd-container :dnd-model="about.children" dnd-id="about" class="row" :vertical-search="$vuetify.breakpoint.xs">
                  <template v-for="item in about.children">
                    <dnd-item :key="item.id" :dnd-id="item.id" :dnd-model="item">
                      <v-col cols="12" :sm="item.cols" class="">
                        <v-card :dark="item.dark" :color="item.color">
                          <v-card-actions>
                            <v-icon class="handle">mdi-drag</v-icon>
                            <v-spacer></v-spacer>
                          </v-card-actions>
                          <v-card-text class="body-1 pt-0" style="opacity:1">
                            <p class="title my-2" v-text="item.title"></p>
                            <p class="my-2" v-for="(p,i) in item.text" :key="i" v-text="p"></p>
                            <div v-for="(p,i) in item.html" :key="i" v-html="p"></div>
                          </v-card-text>
                        </v-card>
                      </v-col>
                    </dnd-item>
                  </template>
                </dnd-container>
              </v-card-text>
            </dnd-zone>
            <v-card-actions>
              Next
            </v-card-actions>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <HelloWorld/>
        </v-tab-item>
      </v-tabs-items>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    drawer:true,
    tab:0,
    about:{
      children:[
        {
          id:0,
          color:'black',
          dark:true,
          cols:4,
          title:'vue-dnd-zone',
          text:['vue-dnd-zone is a vue.js plugin for drag and drop functionality.',
          'Unlike most plugins, it is not a wrapper for an external js library, but a set of three vue components managing the drag and drop event.']
        },
        {
          id:1,
          color:'white',
          dark:false,
          cols:4,
          title:'Motivation',
          text:['Having the drag and drop functionality within vue, makes it possible to utilize vue core features such as computed properties & transition groups for the event and animation management for better performance, and exposing a developer friendly API (component props)']
        },
        {
          id:2,
          color:'black',
          dark:true,
          cols:4,
          title:'Main Features',
          text:['- Supports nested structures','- Smooth transitions','- Scroll while dragging','- Lightweight (~4kb gzipped) With no dependencies']
        },
        {
          id:3,
          color:'white',
          dark:false,
          cols:4,
          title:'Installation',
          html:[`<kbd>npm install vue-dnd-zone</kbd><p class="mt-2 mb-0 caption">main.js</p><code>import VueDndZone from 'vue-dnd-zone'` + `<br/>` +  `import 'vue-dnd-zone/vue-dnd-zone.css'</code>`]
        },
        {
          id:4,
          color:'white',
          dark:false,
          cols:4,
          title:'Installation',
          html:[`<kbd>npm install vue-dnd-zone</kbd><p class="mt-2 mb-0 caption">main.js</p><code>import VueDndZone from 'vue-dnd-zone'` + `<br/>` +  `import 'vue-dnd-zone/vue-dnd-zone.css'</code>`]
        },
        {
          id:5,
          color:'white',
          dark:false,
          cols:4,
          title:'Installation',
          html:[`<kbd>npm install vue-dnd-zone</kbd><p class="mt-2 mb-0 caption">main.js</p><code>import VueDndZone from 'vue-dnd-zone'` + `<br/>` +  `import 'vue-dnd-zone/vue-dnd-zone.css'</code>`]
        }
      ]
    }
    //
  }),
};
</script>
