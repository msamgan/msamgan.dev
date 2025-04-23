import StatsCard from '@/Components/StatsCard.jsx'

const PostStats = ({ publishedPosts, draftPosts }) => {
    return (
        <section className="my-6 text-gray-800">
            <header className="mb-2 flex items-center justify-between">
                <h2 className="text-xl font-semibold">Posts</h2>
            </header>
            <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
                <StatsCard
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            fill="currentColor"
                            className="h-9 w-9 text-gray-100"
                        >
                            <path d="M464,64H48A16,16,0,0,0,32,80V432a16,16,0,0,0,16,16H464a16,16,0,0,0,16-16V80A16,16,0,0,0,464,64ZM256,96a32,32,0,1,1-32,32A32,32,0,0,1,256,96Zm96,320H160V352H352Zm0-96H160V256H352Zm0-96H160V160H352Z"></path>
                        </svg>
                    }
                    title="Published"
                    value={publishedPosts}
                />
                <StatsCard
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            fill="currentColor"
                            className="h-9 w-9 text-gray-100"
                        >
                            <path d="M464,64H48A16,16,0,0,0,32,80V432a16,16,0,0,0,16,16H464a16,16,0,0,0,16-16V80A16,16,0,0,0,464,64ZM256,96a32,32,0,1,1-32,32A32,32,0,0,1,256,96Zm96,320H160V352H352Zm0-96H160V256H352Zm0-96H160V160H352Z"></path>
                        </svg>
                    }
                    title="Draft"
                    value={draftPosts}
                />
            </div>
        </section>
    )
}

export default PostStats
