import React, { useState } from 'react'

// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
// import FilePondPluginImagePreview from "filepond-plugin-image-preview"
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import { routes } from '@/Utils/routes/index.js'

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation)

export default function Media({ getMedia }) {
    const [files, setFiles] = useState([])

    return (
        <div className={'mt-5'}>
            <FilePond
                files={files}
                onupdatefiles={setFiles}
                allowMultiple={true}
                maxFiles={1}
                fileSizeBase={1000}
                server={{
                    url: routes.media.store,
                    process: {
                        headers: {
                            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf"]').getAttribute('content'),
                        },
                        onload: (response) => {
                            getMedia()
                        },
                    },
                }}
                name="files" /* sets the file input name, it's filepond by default */
                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
            />
        </div>
    )
}
