import{u as g,S as m,P as f,U as k,E as b}from"./index-B2AE4MHR.js";import{T as v}from"./index-HGlPX9Yk.js";import{V as n}from"./VChip-C72F9fhC.js";import{V as C}from"./VDivider-CIpTZ8Ni.js";import{c,o as d,k as y,b as t,l as o,e as r,s as a,r as V,aU as x,f as A}from"./main-7JdyGFby.js";import{_ as B}from"./AppCardCode-CUjMQLDl.js";import{_ as w}from"./TiptapEditor-3moFviqF.js";import{V as E,a as h}from"./VRow-GpmvwSSA.js";import"./VSlideGroup-B-2l8qWb.js";import"./VAvatar-sg7CZdU7.js";import"./VImg-Bk3huQTU.js";import"./vue3-perfect-scrollbar-BTKqCwUF.js";import"./VCard-D0LXqtBI.js";import"./VCardText-DYTBPo8J.js";/* empty css              */const H={class:"border pa-2 rounded custom-editor"},$={key:0,class:"d-flex flex-wrap gap-x-4 gap-y-2 mb-2"},I={__name:"DemoEditorCustomEditor",setup(p){const e=g({content:`
        <h2>
          Hi there,
        </h2>
        <p>
          this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you'd probably expect from a text editor. But wait until you see the lists:
        </p>
        <ul>
          <li>
            That's a bullet list with one …
          </li>
          <li>
            … or two list items.
          </li>
        </ul>
        <p>
          Isn't that great? And all of that is editable. But wait, there's more. Let's try a code block:
        </p>
        <pre><code class="language-css">body {
  display: none;
}</code></pre>
        <p>
          I know, I know, this is impressive. It's only the tip of the iceberg though. Give it a try and click a little bit around. Don't forget to check the other examples too.
        </p>
        <blockquote>
          Wow, that's amazing. Good work, boy! 👏
          <br />
          — Mom
        </blockquote>
      `,extensions:[m,v.configure({types:["heading","paragraph"]}),f.configure({placeholder:"Write something here..."}),k]});return(u,i)=>(d(),c("div",H,[o(e)?(d(),c("div",$,[t(n,{disabled:!o(e).can().chain().focus().toggleBold().run(),color:o(e).isActive("bold")?"primary":"",onClick:i[0]||(i[0]=l=>o(e).chain().focus().toggleBold().run())},{default:r(()=>i[21]||(i[21]=[a(" bold ")])),_:1,__:[21]},8,["disabled","color"]),t(n,{disabled:!o(e).can().chain().focus().toggleItalic().run(),color:o(e).isActive("italic")?"primary":"",onClick:i[1]||(i[1]=l=>o(e).chain().focus().toggleItalic().run())},{default:r(()=>i[22]||(i[22]=[a(" italic ")])),_:1,__:[22]},8,["disabled","color"]),t(n,{disabled:!o(e).can().chain().focus().toggleStrike().run(),color:o(e).isActive("strike")?"primary":"",onClick:i[2]||(i[2]=l=>o(e).chain().focus().toggleStrike().run())},{default:r(()=>i[23]||(i[23]=[a(" strike ")])),_:1,__:[23]},8,["disabled","color"]),t(n,{disabled:!o(e).can().chain().focus().toggleCode().run(),color:o(e).isActive("code")?"primary":"",onClick:i[3]||(i[3]=l=>o(e).chain().focus().toggleCode().run())},{default:r(()=>i[24]||(i[24]=[a(" code ")])),_:1,__:[24]},8,["disabled","color"]),t(n,{onClick:i[4]||(i[4]=l=>o(e).chain().focus().unsetAllMarks().run())},{default:r(()=>i[25]||(i[25]=[a(" clear marks ")])),_:1,__:[25]}),t(n,{onClick:i[5]||(i[5]=l=>o(e).chain().focus().clearNodes().run())},{default:r(()=>i[26]||(i[26]=[a(" clear nodes ")])),_:1,__:[26]}),t(n,{color:o(e).isActive("paragraph")?"primary":"",onClick:i[6]||(i[6]=l=>o(e).chain().focus().setParagraph().run())},{default:r(()=>i[27]||(i[27]=[a(" paragraph ")])),_:1,__:[27]},8,["color"]),t(n,{color:o(e).isActive("heading",{level:1})?"primary":"",onClick:i[7]||(i[7]=l=>o(e).chain().focus().toggleHeading({level:1}).run())},{default:r(()=>i[28]||(i[28]=[a(" h1 ")])),_:1,__:[28]},8,["color"]),t(n,{color:o(e).isActive("heading",{level:2})?"primary":"",onClick:i[8]||(i[8]=l=>o(e).chain().focus().toggleHeading({level:2}).run())},{default:r(()=>i[29]||(i[29]=[a(" h2 ")])),_:1,__:[29]},8,["color"]),t(n,{color:o(e).isActive("heading",{level:3})?"primary":"",onClick:i[9]||(i[9]=l=>o(e).chain().focus().toggleHeading({level:3}).run())},{default:r(()=>i[30]||(i[30]=[a(" h3 ")])),_:1,__:[30]},8,["color"]),t(n,{color:o(e).isActive("heading",{level:4})?"primary":"",onClick:i[10]||(i[10]=l=>o(e).chain().focus().toggleHeading({level:4}).run())},{default:r(()=>i[31]||(i[31]=[a(" h4 ")])),_:1,__:[31]},8,["color"]),t(n,{color:o(e).isActive("heading",{level:5})?"primary":"",onClick:i[11]||(i[11]=l=>o(e).chain().focus().toggleHeading({level:5}).run())},{default:r(()=>i[32]||(i[32]=[a(" h5 ")])),_:1,__:[32]},8,["color"]),t(n,{color:o(e).isActive("heading",{level:6})?"primary":"",onClick:i[12]||(i[12]=l=>o(e).chain().focus().toggleHeading({level:6}).run())},{default:r(()=>i[33]||(i[33]=[a(" h6 ")])),_:1,__:[33]},8,["color"]),t(n,{color:o(e).isActive("bulletList")?"primary":"",onClick:i[13]||(i[13]=l=>o(e).chain().focus().toggleBulletList().run())},{default:r(()=>i[34]||(i[34]=[a(" bullet list ")])),_:1,__:[34]},8,["color"]),t(n,{color:o(e).isActive("orderedList")?"primary":"",onClick:i[14]||(i[14]=l=>o(e).chain().focus().toggleOrderedList().run())},{default:r(()=>i[35]||(i[35]=[a(" ordered list ")])),_:1,__:[35]},8,["color"]),t(n,{color:o(e).isActive("codeBlock")?"primary":"",onClick:i[15]||(i[15]=l=>o(e).chain().focus().toggleCodeBlock().run())},{default:r(()=>i[36]||(i[36]=[a(" code block ")])),_:1,__:[36]},8,["color"]),t(n,{color:o(e).isActive("blockquote")?"primary":"",onClick:i[16]||(i[16]=l=>o(e).chain().focus().toggleBlockquote().run())},{default:r(()=>i[37]||(i[37]=[a(" blockquote ")])),_:1,__:[37]},8,["color"]),t(n,{onClick:i[17]||(i[17]=l=>o(e).chain().focus().setHorizontalRule().run())},{default:r(()=>i[38]||(i[38]=[a(" horizontal rule ")])),_:1,__:[38]}),t(n,{onClick:i[18]||(i[18]=l=>o(e).chain().focus().setHardBreak().run())},{default:r(()=>i[39]||(i[39]=[a(" hard break ")])),_:1,__:[39]}),t(n,{disabled:!o(e).can().chain().focus().undo().run(),onClick:i[19]||(i[19]=l=>o(e).chain().focus().undo().run())},{default:r(()=>i[40]||(i[40]=[a(" undo ")])),_:1,__:[40]},8,["disabled"]),t(n,{disabled:!o(e).can().chain().focus().redo().run(),onClick:i[20]||(i[20]=l=>o(e).chain().focus().redo().run())},{default:r(()=>i[41]||(i[41]=[a(" redo ")])),_:1,__:[41]},8,["disabled"])])):y("",!0),t(C,{class:"my-4"}),t(o(b),{editor:o(e)},null,8,["editor"])]))}},_={__name:"DemoEditorBasicEditor",setup(p){const e=V(`
<p>
  This is a radically reduced version of tiptap. It has support for a document, with paragraphs and text. That's it. It's probably too much for real minimalists though.
</p>
<p>
  The paragraph extension is not really required, but you need at least one node. Sure, that node can be something different.  
</p>
`);return(u,i)=>{const l=w;return d(),c("div",null,[t(l,{modelValue:o(e),"onUpdate:modelValue":i[0]||(i[0]=s=>x(e)?e.value=s:null),class:"border rounded basic-editor"},null,8,["modelValue"])])}}},T={ts:`<script setup lang="ts">
const basicEditorContent = ref(\`
<p>
  This is a radically reduced version of tiptap. It has support for a document, with paragraphs and text. That's it. It's probably too much for real minimalists though.
</p>
<p>
  The paragraph extension is not really required, but you need at least one node. Sure, that node can be something different.  
</p>
\`)
<\/script>

<template>
  <div>
    <TiptapEditor
      v-model="basicEditorContent"
      class="border rounded basic-editor"
    />
  </div>
</template>

<style lang="scss">
.basic-editor {
  .ProseMirror {
    block-size: 200px;
    outline: none;
    overflow-y: auto;
    padding-inline: 0.5rem;
  }
}
</style>
`,js:`<script setup>
const basicEditorContent = ref(\`
<p>
  This is a radically reduced version of tiptap. It has support for a document, with paragraphs and text. That's it. It's probably too much for real minimalists though.
</p>
<p>
  The paragraph extension is not really required, but you need at least one node. Sure, that node can be something different.  
</p>
\`)
<\/script>

<template>
  <div>
    <TiptapEditor
      v-model="basicEditorContent"
      class="border rounded basic-editor"
    />
  </div>
</template>

<style lang="scss">
.basic-editor {
  .ProseMirror {
    block-size: 200px;
    outline: none;
    overflow-y: auto;
    padding-inline: 0.5rem;
  }
}
</style>
`},q={ts:`<script setup lang="ts">
import { Placeholder } from '@tiptap/extension-placeholder'
import { TextAlign } from '@tiptap/extension-text-align'
import { Underline } from '@tiptap/extension-underline'
import { StarterKit } from '@tiptap/starter-kit'
import { EditorContent, useEditor } from '@tiptap/vue-3'

const editor = useEditor({
  content: \`
        <h2>
          Hi there,
        </h2>
        <p>
          this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you'd probably expect from a text editor. But wait until you see the lists:
        </p>
        <ul>
          <li>
            That's a bullet list with one …
          </li>
          <li>
            … or two list items.
          </li>
        </ul>
        <p>
          Isn't that great? And all of that is editable. But wait, there's more. Let's try a code block:
        </p>
        <pre><code class="language-css">body {
  display: none;
}</code></pre>
        <p>
          I know, I know, this is impressive. It's only the tip of the iceberg though. Give it a try and click a little bit around. Don't forget to check the other examples too.
        </p>
        <blockquote>
          Wow, that's amazing. Good work, boy! 👏
          <br />
          — Mom
        </blockquote>
      \`,
  extensions: [
    StarterKit,
    TextAlign.configure({
      types: ['heading', 'paragraph'],
    }),
    Placeholder.configure({
      placeholder: 'Write something here...',
    }),
    Underline,
  ],
})
<\/script>

<template>
  <div class="border pa-2 rounded custom-editor">
    <div
      v-if="editor"
      class="d-flex flex-wrap gap-x-4 gap-y-2 mb-2"
    >
      <VChip
        :disabled="!editor.can().chain().focus().toggleBold().run()"
        :color="editor.isActive('bold') ? 'primary' : ''"
        @click="editor.chain().focus().toggleBold().run()"
      >
        bold
      </VChip>

      <VChip
        :disabled="!editor.can().chain().focus().toggleItalic().run()"
        :color="editor.isActive('italic') ? 'primary' : ''"
        @click="editor.chain().focus().toggleItalic().run()"
      >
        italic
      </VChip>

      <VChip
        :disabled="!editor.can().chain().focus().toggleStrike().run()"
        :color="editor.isActive('strike') ? 'primary' : ''"
        @click="editor.chain().focus().toggleStrike().run()"
      >
        strike
      </VChip>

      <VChip
        :disabled="!editor.can().chain().focus().toggleCode().run()"
        :color="editor.isActive('code') ? 'primary' : ''"
        @click="editor.chain().focus().toggleCode().run()"
      >
        code
      </VChip>

      <VChip @click="editor.chain().focus().unsetAllMarks().run()">
        clear marks
      </VChip>

      <VChip @click="editor.chain().focus().clearNodes().run()">
        clear nodes
      </VChip>

      <VChip
        :color="editor.isActive('paragraph') ? 'primary' : ''"
        @click="editor.chain().focus().setParagraph().run()"
      >
        paragraph
      </VChip>

      <VChip
        :color="editor.isActive('heading', { level: 1 }) ? 'primary' : ''"
        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
      >
        h1
      </VChip>

      <VChip
        :color="editor.isActive('heading', { level: 2 }) ? 'primary' : ''"
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
      >
        h2
      </VChip>

      <VChip
        :color="editor.isActive('heading', { level: 3 }) ? 'primary' : ''"
        @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
      >
        h3
      </VChip>

      <VChip
        :color="editor.isActive('heading', { level: 4 }) ? 'primary' : ''"
        @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
      >
        h4
      </VChip>

      <VChip
        :color="editor.isActive('heading', { level: 5 }) ? 'primary' : ''"
        @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
      >
        h5
      </VChip>

      <VChip
        :color="editor.isActive('heading', { level: 6 }) ? 'primary' : ''"
        @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
      >
        h6
      </VChip>

      <VChip
        :color="editor.isActive('bulletList') ? 'primary' : ''"
        @click="editor.chain().focus().toggleBulletList().run()"
      >
        bullet list
      </VChip>

      <VChip
        :color="editor.isActive('orderedList') ? 'primary' : ''"
        @click="editor.chain().focus().toggleOrderedList().run()"
      >
        ordered list
      </VChip>

      <VChip
        :color="editor.isActive('codeBlock') ? 'primary' : ''"
        @click="editor.chain().focus().toggleCodeBlock().run()"
      >
        code block
      </VChip>

      <VChip
        :color="editor.isActive('blockquote') ? 'primary' : ''"
        @click="editor.chain().focus().toggleBlockquote().run()"
      >
        blockquote
      </VChip>

      <VChip @click="editor.chain().focus().setHorizontalRule().run()">
        horizontal rule
      </VChip>

      <VChip @click="editor.chain().focus().setHardBreak().run()">
        hard break
      </VChip>

      <VChip
        :disabled="!editor.can().chain().focus().undo().run()"
        @click="editor.chain().focus().undo().run()"
      >
        undo
      </VChip>

      <VChip
        :disabled="!editor.can().chain().focus().redo().run()"
        @click="editor.chain().focus().redo().run()"
      >
        redo
      </VChip>
    </div>
    <VDivider class="my-4" />
    <EditorContent :editor="editor" />
  </div>
</template>

<style lang="scss">
/* Basic editor styles */

.custom-editor {
  .ProseMirror {
    > * + * {
      margin-block-start: 0.75em;
    }

    outline: none;
    overflow-y: auto;
    padding-inline: 0.5rem;

    ul,
    ol {
      padding-block: 0;
      padding-inline: 1rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: 1.1;
    }

    code {
      background-color: rgba(#616161, 0.1);
      color: #616161;
    }

    pre {
      border-radius: 0.5rem;
      background: #0d0d0d;
      color: #fff;
      font-family: JetBrainsMono, monospace;
      padding-block: 0.75rem;
      padding-inline: 1rem;

      code {
        padding: 0;
        background: none;
        color: inherit;
        font-size: 0.8rem;
      }
    }

    img {
      block-size: auto;
      max-inline-size: 100%;
    }

    blockquote {
      border-inline-start: 2px solid rgba(#0d0d0d, 0.1);
      padding-inline-start: 1rem;
    }

    hr {
      border: none;
      border-block-start: 2px solid rgba(#0d0d0d, 0.1);
      margin-block: 2rem;
      margin-inline: 0;
    }
  }
}
</style>
`,js:`<script setup>
import { Placeholder } from '@tiptap/extension-placeholder'
import { TextAlign } from '@tiptap/extension-text-align'
import { Underline } from '@tiptap/extension-underline'
import { StarterKit } from '@tiptap/starter-kit'
import {
  EditorContent,
  useEditor,
} from '@tiptap/vue-3'

const editor = useEditor({
  content: \`
        <h2>
          Hi there,
        </h2>
        <p>
          this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you'd probably expect from a text editor. But wait until you see the lists:
        </p>
        <ul>
          <li>
            That's a bullet list with one …
          </li>
          <li>
            … or two list items.
          </li>
        </ul>
        <p>
          Isn't that great? And all of that is editable. But wait, there's more. Let's try a code block:
        </p>
        <pre><code class="language-css">body {
  display: none;
}</code></pre>
        <p>
          I know, I know, this is impressive. It's only the tip of the iceberg though. Give it a try and click a little bit around. Don't forget to check the other examples too.
        </p>
        <blockquote>
          Wow, that's amazing. Good work, boy! 👏
          <br />
          — Mom
        </blockquote>
      \`,
  extensions: [
    StarterKit,
    TextAlign.configure({
      types: [
        'heading',
        'paragraph',
      ],
    }),
    Placeholder.configure({ placeholder: 'Write something here...' }),
    Underline,
  ],
})
<\/script>

<template>
  <div class="border pa-2 rounded custom-editor">
    <div
      v-if="editor"
      class="d-flex flex-wrap gap-x-4 gap-y-2 mb-2"
    >
      <VChip
        :disabled="!editor.can().chain().focus().toggleBold().run()"
        :color="editor.isActive('bold') ? 'primary' : ''"
        @click="editor.chain().focus().toggleBold().run()"
      >
        bold
      </VChip>

      <VChip
        :disabled="!editor.can().chain().focus().toggleItalic().run()"
        :color="editor.isActive('italic') ? 'primary' : ''"
        @click="editor.chain().focus().toggleItalic().run()"
      >
        italic
      </VChip>

      <VChip
        :disabled="!editor.can().chain().focus().toggleStrike().run()"
        :color="editor.isActive('strike') ? 'primary' : ''"
        @click="editor.chain().focus().toggleStrike().run()"
      >
        strike
      </VChip>

      <VChip
        :disabled="!editor.can().chain().focus().toggleCode().run()"
        :color="editor.isActive('code') ? 'primary' : ''"
        @click="editor.chain().focus().toggleCode().run()"
      >
        code
      </VChip>

      <VChip @click="editor.chain().focus().unsetAllMarks().run()">
        clear marks
      </VChip>

      <VChip @click="editor.chain().focus().clearNodes().run()">
        clear nodes
      </VChip>

      <VChip
        :color="editor.isActive('paragraph') ? 'primary' : ''"
        @click="editor.chain().focus().setParagraph().run()"
      >
        paragraph
      </VChip>

      <VChip
        :color="editor.isActive('heading', { level: 1 }) ? 'primary' : ''"
        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
      >
        h1
      </VChip>

      <VChip
        :color="editor.isActive('heading', { level: 2 }) ? 'primary' : ''"
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
      >
        h2
      </VChip>

      <VChip
        :color="editor.isActive('heading', { level: 3 }) ? 'primary' : ''"
        @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
      >
        h3
      </VChip>

      <VChip
        :color="editor.isActive('heading', { level: 4 }) ? 'primary' : ''"
        @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
      >
        h4
      </VChip>

      <VChip
        :color="editor.isActive('heading', { level: 5 }) ? 'primary' : ''"
        @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
      >
        h5
      </VChip>

      <VChip
        :color="editor.isActive('heading', { level: 6 }) ? 'primary' : ''"
        @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
      >
        h6
      </VChip>

      <VChip
        :color="editor.isActive('bulletList') ? 'primary' : ''"
        @click="editor.chain().focus().toggleBulletList().run()"
      >
        bullet list
      </VChip>

      <VChip
        :color="editor.isActive('orderedList') ? 'primary' : ''"
        @click="editor.chain().focus().toggleOrderedList().run()"
      >
        ordered list
      </VChip>

      <VChip
        :color="editor.isActive('codeBlock') ? 'primary' : ''"
        @click="editor.chain().focus().toggleCodeBlock().run()"
      >
        code block
      </VChip>

      <VChip
        :color="editor.isActive('blockquote') ? 'primary' : ''"
        @click="editor.chain().focus().toggleBlockquote().run()"
      >
        blockquote
      </VChip>

      <VChip @click="editor.chain().focus().setHorizontalRule().run()">
        horizontal rule
      </VChip>

      <VChip @click="editor.chain().focus().setHardBreak().run()">
        hard break
      </VChip>

      <VChip
        :disabled="!editor.can().chain().focus().undo().run()"
        @click="editor.chain().focus().undo().run()"
      >
        undo
      </VChip>

      <VChip
        :disabled="!editor.can().chain().focus().redo().run()"
        @click="editor.chain().focus().redo().run()"
      >
        redo
      </VChip>
    </div>
    <VDivider class="my-4" />
    <EditorContent :editor="editor" />
  </div>
</template>

<style lang="scss">
/* Basic editor styles */

.custom-editor {
  .ProseMirror {
    > * + * {
      margin-block-start: 0.75em;
    }

    outline: none;
    overflow-y: auto;
    padding-inline: 0.5rem;

    ul,
    ol {
      padding-block: 0;
      padding-inline: 1rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: 1.1;
    }

    code {
      background-color: rgba(#616161, 0.1);
      color: #616161;
    }

    pre {
      border-radius: 0.5rem;
      background: #0d0d0d;
      color: #fff;
      font-family: JetBrainsMono, monospace;
      padding-block: 0.75rem;
      padding-inline: 1rem;

      code {
        padding: 0;
        background: none;
        color: inherit;
        font-size: 0.8rem;
      }
    }

    img {
      block-size: auto;
      max-inline-size: 100%;
    }

    blockquote {
      border-inline-start: 2px solid rgba(#0d0d0d, 0.1);
      padding-inline-start: 1rem;
    }

    hr {
      border: none;
      border-block-start: 2px solid rgba(#0d0d0d, 0.1);
      margin-block: 2rem;
      margin-inline: 0;
    }
  }
}
</style>
`},F={__name:"editors",setup(p){return(e,u)=>{const i=_,l=B,s=I;return d(),A(E,null,{default:r(()=>[t(h,{cols:"12"},{default:r(()=>[t(l,{title:"Basic Editor",code:o(T)},{default:r(()=>[t(i)]),_:1},8,["code"])]),_:1}),t(h,{cols:"12"},{default:r(()=>[t(l,{title:"Custom Editor",code:o(q)},{default:r(()=>[t(s)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{F as default};
