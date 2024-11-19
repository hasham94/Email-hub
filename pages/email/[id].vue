<script lang="ts" setup>
import type { Template } from '~/types/template';


definePageMeta({
    layout: 'registered'
})

const supabase: any = useSupabaseClient()
const route = useRoute()
const templateContent = ref('')
const templateName = ref('')
const loading = ref<boolean>(false)
const templateId = route.params?.id || 'new'

const editor = useEditor({
    content: "",
    extensions: [TiptapStarterKit],
});

onBeforeUnmount(() => {
    unref(editor)?.destroy();
});
const createNewTemplate = async () => {
    const htmlContent = editor?.value?.getHTML() || ''
    const { data, error } = await supabase
  .from('templates')
  .insert([
    { content: htmlContent, name: templateName.value },
  ])
  .select()
  loading.value = false
  
  if(data && data?.[0]) {
    navigateTo(`/email/${data?.[0]?.id}`)
  }

  if(error) {
    console.log('error', error)
    return
  }
}

const saveContentHandler = async () => {
    loading.value = true
    if(templateId === 'new') {
        createNewTemplate()
        return
    }

    const htmlContent = editor?.value?.getHTML() || ''
    const { error } = await supabase
        .from('templates')
        .update({ content: htmlContent, name: templateName.value })
        .eq('id', templateId)
        .select()

    loading.value = false

    if (error) {
        console.log('error', error)
    }
}

onMounted(async () => {
    if (templateId === 'new') return
    const { data, error } = await supabase
        .from('templates')
        .select('*')
        .eq('id', templateId)

    if (data && !error) {
        const template: Template = data?.[0]
        templateContent.value = template?.content
        if (!!unref(editor)) {
            unref(editor)?.commands?.setContent(
                template?.content,
            );
        }
        templateName.value = template?.name
    }
})

</script>

<template>
    <div>
        <div v-if="editor" class="bg-white border-y border-text-tient py-2 ">
            <div class="container flex flex-row gap-3 px-0">
                <button @click="editor.chain().focus().toggleBold().run()"
                    :disabled="!editor.can().chain().focus().toggleBold().run()"
                    :class="{ 'is-active': editor.isActive('bold') }">
                    bold
                </button>
                <button @click="editor.chain().focus().toggleItalic().run()"
                    :disabled="!editor.can().chain().focus().toggleItalic().run()"
                    :class="{ 'is-active': editor.isActive('italic') }">
                    italic
                </button>
                <button @click="editor.chain().focus().toggleStrike().run()"
                    :disabled="!editor.can().chain().focus().toggleStrike().run()"
                    :class="{ 'is-active': editor.isActive('strike') }">
                    strike
                </button>
                <button @click="editor.chain().focus().toggleCode().run()"
                    :disabled="!editor.can().chain().focus().toggleCode().run()"
                    :class="{ 'is-active': editor.isActive('code') }">
                    code
                </button>
                <button @click="editor.chain().focus().unsetAllMarks().run()">
                    clear marks
                </button>
                <button @click="editor.chain().focus().clearNodes().run()">
                    clear nodes
                </button>
                <button @click="editor.chain().focus().setParagraph().run()"
                    :class="{ 'is-active': editor.isActive('paragraph') }">
                    paragraph
                </button>
                <button @click="editor.chain().focus().setHorizontalRule().run()">
                    horizontal rule
                </button>
                <button @click="editor.chain().focus().setHardBreak().run()">
                    hard break
                </button>
                <button @click="editor.chain().focus().undo().run()" :disabled="!editor.can().chain().focus().undo().run()">
                    undo
                </button>
                <button @click="editor.chain().focus().redo().run()" :disabled="!editor.can().chain().focus().redo().run()">
                    redo
                </button>
            </div>
        </div>
        <div class="container my-4 p-0">
            <Input class="w-full" v-model="templateName" />
        </div>
        <div class="container bg-white p-8 rounded-md mt-6 min-h-96">
            <TiptapEditorContent :editor="editor" />
        </div>
        <div class="container p-0 my-4">
            <Button @click="saveContentHandler" :disabled="loading">Save</Button>
        </div>
    </div>
</template>