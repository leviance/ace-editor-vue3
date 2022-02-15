# ace-editor-vue3

A package of [ace](https://ace.c9.io) support for vue3.

## Installation

Installation is done using the npm install command:

```bash
npm i ace-editor-vue3
```

## Example

```vue
<template>
  <AceEditor
    v-model:codeContent="value" 
    v-model:editor="editor"
    :options="options"
    :theme="theme"
    :lang="lang"
    width="100%" 
    height="300px" 
  />
  <button @click="setValue">set value</button>
  <button @click="getValue">get value</button>
  <button @click="setSize">set size</button>
</template>

<script>
import AceEditor from "ace-editor-vue3";
import "brace/mode/javascript";
import "brace/theme/monokai";

export default {
  components: {
    AceEditor
  },

  data() {
    return {
      editor: null,
      value: `console.log("hello ok.")`,
      options: {"showPrintMargin": false},
      lang: "javascript",
      theme: "monokai", 
    }
  },

  methods: {
    setValue() {
      this.value = `const a = 100;`;
    },

    getValue() {
      console.log(this.value);
    },

    setSize() {
      this.editor.setFontSize(32);
    }
  },

  watch: {
    value() {
      console.log("use typing code:");
      console.log(this.value);
    }
  },
}
</script>

<style>

</style>
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)