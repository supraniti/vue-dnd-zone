# vue-dnd-zone
## _Drag And Drop functionality for Vue.js - written in Vue.js_
vue-dnd-zone is a vue.js plugin for drag and drop functionality.
It is not a wrapper for an external js library, but a set of vue components managing the drag and drop event and data model state

### Examples, Demo, API:
https://supraniti.github.io/vue-dnd-zone/

### Features
- Smooth transitions
- Auto scroll while dragging
- Supports nested structures
- Lightweight (~4kb gzipped)
- Supports touch events


### Installation
```sh
npm install vue-dnd-zone
```
```sh
//main.js
import VueDndZone from 'vue-dnd-zone'
import 'vue-dnd-zone/vue-dnd-zone.css'
```

### Usage
```sh
  <dnd-zone>
    <dnd-container>
      <dnd-item>
        <!-- item markup goes here -->
      </dnd-item>
    </dnd-container>
  </dnd-zone>
```

### Development

vue-dnd-zone is currently in a POC (proof of concept) state,
Further development can and will be done, but it might take a while :-)
If you want to support its progress, star the repository on github

### License
MIT
