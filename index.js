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
        codeContent: String,
        editor: Object
    },

    render() {
        return h(
            `div`, 
            {
                id: this.componentId, 
                style: {width: this.width, height: this.height}
            })
    },

    data() {
        return {
            componentId: `vue3-code-editor-${Date.now()}`,
            _editor: null
        }
    },

    methods: {

    },

    watch: {
        codeContent() {
            /**
             * if set code in parent component instead typing code
             * set value for editor to sync with code value of parent component 
             * if remove if condition, whenever user typing on code editor -> change value in parent component -> set value for editor -> error
             */
            if(this.codeContent != this._editor.getValue())
            {
                this._editor.setValue(this.codeContent);
            }
            
        }
    },


    mounted() {
        /**
         * this._editor -> local editor for this component
         * this.editor -> for allow parrent component can use editor. Example: use this.editor.setFontSize(40) in parent component to set font size for code editor
         */

        this._editor = ace.edit(this.componentId);
        this._editor.$blockScrolling = Infinity;
        this._editor.setTheme(`ace/theme/${this.theme}`);
        this._editor.session.setMode(`ace/mode/${this.lang}`);
        this._editor.setOptions(this.options);
        this._editor.setFontSize(13);
        this._editor.insert(this.codeContent);
        
        // mirror local editor with global editor
        this.$emit("update:editor", this._editor);

        this._editor.on("change", () => {
            const content = this._editor.getValue();
            this.$emit('update:codeContent', content);
        })
    },
    

}