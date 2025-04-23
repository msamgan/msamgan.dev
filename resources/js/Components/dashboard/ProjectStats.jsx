import StatsCard from '@/Components/StatsCard.jsx'

const ProjectStats = ({ projects }) => {
    return (
        <section className="my-6 text-gray-800">
            <header className="mb-2 flex items-center justify-between">
                <h2 className="text-xl font-semibold">Projects</h2>
            </header>
            {projects && (
                <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
                    <StatsCard
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                fill="currentColor"
                                className="h-9 w-9 text-gray-100"
                            >
                                <polygon points="160 96.039 160 128.039 464 128.039 464 191.384 428.5 304.039 149.932 304.039 109.932 16 16 16 16 48 82.068 48 122.068 336.039 451.968 336.039 496 196.306 496 96.039 160 96.039"></polygon>
                                <path d="M176.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,176.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,176.984,464.344Z"></path>
                                <path d="M400.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,400.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,400.984,464.344Z"></path>
                            </svg>
                        }
                        title="Leads"
                        value={projects.lead ? projects.lead.length : 0}
                    />
                    <StatsCard
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                fill="currentColor"
                                className="h-9 w-9 text-gray-100"
                            >
                                <path d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"></path>
                                <path d="M256,384A104,104,0,0,0,360,280H152A104,104,0,0,0,256,384Z"></path>
                                <polygon points="205.757 228.292 226.243 203.708 168 155.173 109.757 203.708 130.243 228.292 168 196.827 205.757 228.292"></polygon>
                                <polygon points="285.757 203.708 306.243 228.292 344 196.827 381.757 228.292 402.243 203.708 344 155.173 285.757 203.708"></polygon>
                            </svg>
                        }
                        title="Active"
                        value={projects.active ? projects.active.length : 0}
                    />
                    <StatsCard
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                fill="currentColor"
                                className="h-9 w-9 text-gray-100"
                            >
                                <path d="M425.706,142.294A240,240,0,0,0,16,312v88H160V368H48V312c0-114.691,93.309-208,208-208s208,93.309,208,208v56H352v32H496V312A238.432,238.432,0,0,0,425.706,142.294Z"></path>
                                <rect width="32" height="32" x="80" y="264"></rect>
                                <rect width="32" height="32" x="240" y="128"></rect>
                                <rect width="32" height="32" x="136" y="168"></rect>
                                <rect width="32" height="32" x="400" y="264"></rect>
                                <path d="M297.222,335.1l69.2-144.173-28.85-13.848L268.389,321.214A64.141,64.141,0,1,0,297.222,335.1ZM256,416a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,416Z"></path>
                            </svg>
                        }
                        title="Complete"
                        value={projects.completed ? projects.completed.length : 0}
                    />
                </div>
            )}
        </section>
    )
}

export default ProjectStats
