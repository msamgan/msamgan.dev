import StatsCard from '@/Components/StatsCard.jsx'

const PostStats = ({ publishedPosts, draftPosts }) => {
    return (
        <section className="my-6 text-gray-800">
            <header className="mb-2 flex items-center justify-between">
                <h2 className="text-xl font-semibold">Posts</h2>
            </header>
            <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
                <StatsCard
                    icon={<i className="ri-article-line text-4xl text-gray-100"></i>}
                    title="Published"
                    value={publishedPosts}
                />
                <StatsCard
                    icon={<i className="ri-draft-line text-4xl text-gray-100"></i>}
                    title="Draft"
                    value={draftPosts}
                />
            </div>
        </section>
    )
}

export default PostStats
