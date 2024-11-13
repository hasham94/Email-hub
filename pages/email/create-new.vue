<script setup lang="ts">
import BulletList from '@tiptap/extension-bullet-list'
import ListItem from '@tiptap/extension-list-item'

definePageMeta({
  layout: 'registered'
})
const editor = useEditor({
  content: "<p>I'm running Tiptap with Vue.js. 🎉</p>",
  extensions: [TiptapStarterKit, BulletList, ListItem],
});

onBeforeUnmount(() => {
    unref(editor)?.destroy();
});
</script>

<template>
    <div>
      <div v-if="editor" class="bg-white border-y border-text-tient py-2 ">
        <div class="container flex flex-row gap-3 px-0">
            <button
          @click="editor.chain().focus().toggleBold().run()"
          :disabled="!editor.can().chain().focus().toggleBold().run()"
          :class="{ 'is-active': editor.isActive('bold') }"
        >
          bold
        </button>
        <button
          @click="editor.chain().focus().toggleItalic().run()"
          :disabled="!editor.can().chain().focus().toggleItalic().run()"
          :class="{ 'is-active': editor.isActive('italic') }"
        >
          italic
        </button>
        <button
          @click="editor.chain().focus().toggleStrike().run()"
          :disabled="!editor.can().chain().focus().toggleStrike().run()"
          :class="{ 'is-active': editor.isActive('strike') }"
        >
          strike
        </button>
        <button
          @click="editor.chain().focus().toggleCode().run()"
          :disabled="!editor.can().chain().focus().toggleCode().run()"
          :class="{ 'is-active': editor.isActive('code') }"
        >
          code
        </button>
        <button @click="editor.chain().focus().unsetAllMarks().run()">
          clear marks
        </button>
        <button @click="editor.chain().focus().clearNodes().run()">
          clear nodes
        </button>
        <button
          @click="editor.chain().focus().setParagraph().run()"
          :class="{ 'is-active': editor.isActive('paragraph') }"
        >
          paragraph
        </button>
        <button @click="editor.chain().focus().setHorizontalRule().run()">
          horizontal rule
        </button>
        <button @click="editor.chain().focus().setHardBreak().run()">
          hard break
        </button>
        <button
          @click="editor.chain().focus().undo().run()"
          :disabled="!editor.can().chain().focus().undo().run()"
        >
          undo
        </button>
        <button
          @click="editor.chain().focus().redo().run()"
          :disabled="!editor.can().chain().focus().redo().run()"
        >
          redo
        </button>
        </div>
      </div>
      <div class="container bg-white p-8 rounded-md mt-6 min-h-96">
        <TiptapEditorContent :editor="editor" />
      </div>
    </div>
  </template>

  <style scoped>
  </style>
  