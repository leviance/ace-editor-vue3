import {h} from 'vue';
import ace from "brace";

export default {
    props: {
        width: {
            type: String,
            default: "100%"
        },
        height: {
            type: String,
            default: "300px"
        },
        theme: {
            type: String,
            default: "monokai"
        },
        lang: {
            type: String,
            default: "javascript"
        },
        options: Object,
        codeEditorContent: String,
        defaultCode: String
    },

    render() {
        return h(
            `div`, 
            {
                id: this.componentId, 
                style: {width: this.width, height: this.height},
                innerHTML: this.defaultCode
            })
    },

    data() {
        return {
            componentId: `vue3-code-editor-${Date.now()}`,
            editor: null
        }
    },

    methods: {
    },


    mounted() {
        this.editor = ace.edit(this.componentId);
        this.editor.setTheme(`ace/theme/${this.theme}`);
        this.editor.session.setMode(`ace/mode/${this.lang}`);
        this.editor.setOptions(this.options);

        this.editor.on("change", () => {
            const content = this.editor.getValue();
            this.$emit('update:modelValue', content);
        })
    },

}