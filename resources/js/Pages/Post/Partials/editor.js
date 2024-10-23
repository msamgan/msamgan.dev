import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import Paragraph from '@editorjs/paragraph'
import CodeTool from '@editorjs/code'
import List from '@editorjs/list'
import InlineCode from '@editorjs/inline-code'
import Quote from '@editorjs/quote'
import Delimiter from '@editorjs/delimiter'
import InlineImage from 'editorjs-inline-image'
import YoutubeEmbed from 'editorjs-youtube-embed'
import RawTool from '@editorjs/raw'
import Table from '@editorjs/table'

import './editor.css'

export const initEditor = (data, setContent) => {
    return new EditorJS({
        holder: 'editor',
        placeholder: 'Let`s write an awesome story!',
        tools: {
            paragraph: {
                class: Paragraph,
                inlineToolbar: true,
            },
            header: Header,
            code: CodeTool,
            list: {
                class: List,
                inlineToolbar: true,
                config: {
                    defaultStyle: 'unordered',
                },
            },
            inlineCode: {
                class: InlineCode,
                shortcut: 'CMD+SHIFT+M',
            },
            quote: Quote,
            image: {
                class: InlineImage,
                inlineToolbar: true,
                config: {
                    embed: {
                        display: true,
                    },
                    unsplash: {
                        appName: 'CodeBySamgan',
                        apiUrl: 'https://msamgan.dev',
                        maxResults: 30,
                    },
                },
            },
            youtubeEmbed: YoutubeEmbed,
            raw: RawTool,
            table: Table,
            delimiter: Delimiter,
        },
        onReady: async (api) => {
            // console.log("Editor.js is ready to work!")
        },
        onChange: async (api, event) => {
            // console.log(await api.saver.save())
            setContent(await api.saver.save())
        },
        data: data,
    })
}
