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
            <v-icon left>mdi-drag</v-icon>
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
                          <v-card-actions class="pb-0">
                            <v-icon class="handle">mdi-drag</v-icon>
                            <p class="title my-2" v-text="item.title"></p>
                            <v-spacer></v-spacer>
                          </v-card-actions>
                          <v-card-text class="body-1 pt-0" style="opacity:1">
                            <p class="my-2" v-for="(p,i) in item.text" :key="i" v-text="p"></p>
                            <div v-for="(p,i) in item.html" :key="i" v-html="p"></div>
                            <div v-if="item.custom">
                              <pre>
  <code style="display: block;white-space: pre-wrap">
    &lt;dnd-zone>
      &lt;dnd-container>
        &lt;dnd-item>
          &lt;!-- item markup goes here -->
        &lt;/dnd-item>
      &lt;/dnd-container>
    &lt;/dnd-zone>

  </code>
                              </pre>
                              <v-btn text small>Examples</v-btn>
                            </div>
                          </v-card-text>
                        </v-card>
                      </v-col>
                    </dnd-item>
                  </template>
                </dnd-container>
              </v-card-text>
            </dnd-zone>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <Examples/>
        </v-tab-item>
      </v-tabs-items>
    </v-main>
  </v-app>
</template>
<script>
import Examples from './components/Examples';

export default {
  name: 'App',
  components: {
    Examples,
  },

  data: () => ({
    drawer:true,
    tab:0,
    about:{
      children:[
        {
          id:0,
          color:'grey darken-3',
          dark:true,
          cols:5,
          title:'About',
          text:['vue-dnd-zone is a vue.js plugin for drag and drop functionality.',
          'It is not a wrapper for an external js library, but a set of vue components managing the drag and drop event and data model state.']
        },
        {
          id:1,
          color:'grey darken-3',
          dark:true,
          cols:5,
          title:'Features',
          text:['- Smooth transitions',' - Auto scroll while dragging', '- Supports nested structures','- Lightweight (~4kb gzipped)','- Supports touch events']
        },
        {
          id:2,
          color:'grey lighten-5',
          dark:false,
          cols:4,
          title:'Installation',
          html:[`<kbd>npm install vue-dnd-zone</kbd><br/><br/><code style="display: block;white-space: pre-wrap">//main.js<br/>import VueDndZone from 'vue-dnd-zone'<br/>import 'vue-dnd-zone/vue-dnd-zone.css'</code>`]
        },
        {
          id:3,
          color:'grey lighten-5',
          dark:false,
          cols:4,
          title:'Usage',
          custom:true
        },
        {
          id:4,
          color:'deep-purple darken-3',
          dark:true,
          cols:4,
          title:'Project Status',
          html:['vue-dnd-zone is currently in a POC (proof of concept) state.','If you want to support its progress, star the <a href="https://github.com/supraniti/vue-dnd-zone" target="_blank" class="white--text">repository</a> on github.']
        },
      ]
    }
    //
  }),
};
</script>
