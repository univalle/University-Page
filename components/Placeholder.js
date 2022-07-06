export function Placeholder () {
  return (
        <div className="border shadow rounded-md p-8 max-w-sm w-full mx-auto dark:bg-gray-800 dark:border-gray-700">
            <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-4 py-1">
                    <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded"></div>
                    <div className="h-4 bg-slate-200 dark:bg-slate-700 w-4/5 rounded"></div>
                    <div className="space-y-3 pt-2">
                        <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded"></div>
                        <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-3/6"></div>
                    </div>
                    <div className="pt-4">
                        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-5 gap-4">
                        <div className="h-5 bg-slate-200 dark:bg-slate-700 rounded col-span-1"></div>
                        <div className="h-5 bg-slate-200 dark:bg-slate-700 rounded col-span-1"></div>
                        <div className="h-5 bg-slate-200 dark:bg-slate-700 rounded col-span-1"></div>
                    </div>
                </div>
            </div>
        </div>
  )
}
