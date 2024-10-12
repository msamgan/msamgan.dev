import TextInput from '@/Components/TextInput.jsx'
import InputLabel from '@/Components/InputLabel.jsx'
import InputError from '@/Components/InputError.jsx'

export default function Fields({ data, setData, errors }) {
    return (
        <>
            <div className="col-12 col-md-12">
                <div className="form-floating form-floating-outline">
                    <TextInput
                        type="text"
                        value={data.title}
                        onChange={(e) => setData('title', e.target.value)}
                        id="col-title"
                        placeholder="Title"
                        required={true}
                        isFocused={false}
                    />
                    <InputLabel htmlFor="col-title" required={true}>
                        Title
                    </InputLabel>
                    <InputError className="mt-2" message={errors.title} />
                </div>
            </div>
            {data.slug && (
                <div className="col-12 col-md-12">
                    <div className="form-floating form-floating-outline">
                        <TextInput
                            type="text"
                            value={data.slug}
                            onChange={(e) => setData('slug', e.target.value)}
                            id="col-slug"
                            placeholder="Slug"
                            required={true}
                            isFocused={false}
                        />
                        <InputLabel htmlFor="col-slug" required={true}>
                            Slug
                        </InputLabel>
                        <InputError className="mt-2" message={errors.slug} />
                    </div>
                </div>
            )}
            <div className="col-6 col-md-6">
                <div className="form-floating form-floating-outline">
                    <select
                        value={data.status}
                        onChange={(e) => setData('status', e.target.value)}
                        id="col-status"
                        required={true}
                        className="form-select rounded-md pb-2"
                    >
                        <option value="">Select Status</option>
                        <option value="draft">Draft</option>
                        <option value="published">Published</option>
                    </select>
                    <InputLabel htmlFor="col-status" required={true}>
                        Status
                    </InputLabel>
                    <InputError className="mt-2" message={errors.status} />
                </div>
            </div>
            <div className="col-6 col-md-6">
                <div className="form-floating form-floating-outline">
                    <TextInput
                        type="url"
                        value={data.featured_image}
                        onChange={(e) => setData('featured_image', e.target.value)}
                        id="col-featured_image"
                        placeholder="Featured Image"
                        required={false}
                        isFocused={false}
                    />
                    <InputLabel htmlFor="col-featured_image" required={false}>
                        Featured Image
                    </InputLabel>
                    <InputError className="mt-2" message={errors.featured_image} />
                </div>
            </div>
            <div className="col-12 col-md-12">
                <div className="form-floating form-floating-outline">
                    <textarea
                        value={data.excerpt}
                        onChange={(e) => setData('excerpt', e.target.value)}
                        id="col-excerpt"
                        placeholder="Excerpt"
                        required={true}
                        className={'form-control'}
                    />
                    <InputLabel htmlFor="col-excerpt" required={true}>
                        Excerpt
                    </InputLabel>
                    <InputError className="mt-2" message={errors.excerpt} />
                </div>
            </div>
            <div className="col-12 col-md-12">
                <div className="">
                    <div id="editor" className="mt-4" />
                    <InputError className="mt-2" message={errors.content} />
                </div>
            </div>
        </>
    )
}
