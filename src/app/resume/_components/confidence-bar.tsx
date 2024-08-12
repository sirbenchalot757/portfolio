

export default function ConfidenceBar({ stats }: { stats: { name: string, value: string, unit?: string }[] }) {
    return (
        <div className="text-zinc-800 mt-4 rounded-lg border">
            <div className="mx-auto max-w-3/4">
                <div className="flex justify-between">
                    {stats.map((stat) => (
                        <div key={stat.name} className="px-1 py-1 sm:px-2 lg:px-1">
                            <p className="text font-medium leading-6">{stat.name}</p>
                            <p className="text-sm mt-1 flex items-baseline gap-x-2 text-zinc-400">
                                <span className="font-semibold tracking-tight">{stat.value}</span>

                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
