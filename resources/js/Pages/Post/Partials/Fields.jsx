import TextInput from '@/Components/TextInput.jsx'
import InputLabel from '@/Components/InputLabel.jsx'
import InputError from '@/Components/InputError.jsx'

export default function Fields({ data, setData, errors, tagList }) {
    return (
        <div className="flex flex-col gap-6">
            <div className="w-full">
                <div className="group relative">
                    <InputLabel htmlFor="col-title" required={true} className="mb-2">
                        Title
                    </InputLabel>
                    <TextInput
                        type="text"
                        value={data.title}
                        onChange={(e) => setData('title', e.target.value)}
                        id="col-title"
                        placeholder="Enter post title"
                        required={true}
                        isFocused={false}
                    />
                    <InputError className="mt-2" message={errors.title} />
                </div>
            </div>
            {data.slug && (
                <div className="w-full">
                    <div className="group relative">
                        <InputLabel htmlFor="col-slug" required={true} className="mb-2">
                            Slug
                        </InputLabel>
                        <TextInput
                            type="text"
                            value={data.slug}
                            onChange={(e) => setData('slug', e.target.value)}
                            id="col-slug"
                            placeholder="Enter post slug"
                            required={true}
                            isFocused={false}
                        />
                        <InputError className="mt-2" message={errors.slug} />
                    </div>
                </div>
            )}
            <div className="flex flex-wrap gap-6">
                <div className="w-full md:w-[calc(50%-12px)]">
                    <div className="group relative">
                        <InputLabel htmlFor="col-status" required={true} className="mb-2">
                            Status
                        </InputLabel>
                        <select
                            value={data.status}
                            onChange={(e) => setData('status', e.target.value)}
                            id="col-status"
                            required={true}
                            className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm transition-all duration-200 hover:border-gray-400 focus:border-primary focus:outline-none focus:ring focus:ring-primary/20"
                        >
                            <option value="">Select Status</option>
                            <option value="draft">Draft</option>
                            <option value="published">Published</option>
                        </select>
                        <InputError className="mt-2" message={errors.status} />
                    </div>
                </div>
                <div className="w-full md:w-[calc(50%-12px)]">
                    <div className="group relative">
                        <InputLabel htmlFor="col-featured_image" required={false} className="mb-2">
                            Featured Image
                        </InputLabel>
                        <TextInput
                            type="url"
                            value={data.featured_image}
                            onChange={(e) => setData('featured_image', e.target.value)}
                            id="col-featured_image"
                            placeholder="Enter image URL"
                            required={false}
                            isFocused={false}
                        />
                        <InputError className="mt-2" message={errors.featured_image} />
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div className="group relative">
                    <InputLabel htmlFor="col-excerpt" required={true} className="mb-2">
                        Excerpt
                    </InputLabel>
                    <textarea
                        value={data.excerpt}
                        onChange={(e) => setData('excerpt', e.target.value)}
                        id="col-excerpt"
                        placeholder="Enter post excerpt"
                        required={true}
                        className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm transition-all duration-200 hover:border-gray-400 focus:border-primary focus:outline-none focus:ring focus:ring-primary/20"
                    />
                    <InputError className="mt-2" message={errors.excerpt} />
                </div>
            </div>
            <div className="w-full">
                <div className="group relative">
                    <InputLabel htmlFor="col-tags" required={false} className="mb-2">
                        Tags
                    </InputLabel>
                    <TextInput
                        type="text"
                        list="tagList"
                        id="col-tags"
                        placeholder="Enter tags"
                        required={false}
                        isFocused={false}
                        onKeyUp={(e) => {
                            console.log('key', e.key)
                            if (e.key === ',') {
                                let tag = e.target.value.slice(0, -1)
                                setData('tags', [...data.tags, tag])
                                e.target.value = ''
                            }
                        }}
                    />
                    <InputError className="mt-2" message={errors.tags} />
                    <p className="mt-2 text-xs text-gray-500">Press comma to add a tag</p>
                </div>

                <datalist name="Tag" id="tagList">
                    {tagList.map((tag, index) => (
                        <option key={index}>{tag.name}</option>
                    ))}
                </datalist>
            </div>
            <div className="w-full">
                {data.tags.length > 0 && (
                    <>
                        <div className="mb-2 flex items-center gap-2">
                            {data.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="rounded-lg bg-gray-200 px-2 py-1 text-sm text-gray-900"
                                    onClick={() => {
                                        setData(
                                            'tags',
                                            data.tags.filter((t) => t !== tag),
                                        )
                                    }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <p className="mt-2 text-xs text-gray-500">Click the tag to remove</p>
                    </>
                )}
            </div>
            <div className="w-full">
                <div className="group relative">
                    <div id="editor" className="mt-1" />
                    <InputError className="mt-2" message={errors.content} />
                </div>
            </div>
        </div>
    )
}
