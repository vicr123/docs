module.exports = {
    thebranch: {
        "Getting Started": ['intro', 'install', 'welcome'],
        "Repositories": [
            {
                type: "category",
                label: "Opening a repository",
                items: ['repositories/opening/disk', 'repositories/opening/clone']
            },
            {
                type: "category",
                label: "Tracking Changes",
                items: ['repositories/tracking/overview', 'repositories/tracking/commit', 'repositories/tracking/checkout-old', 'repositories/tracking/undo']
            },
            {
                type: "category",
                label: "Sharing Changes",
                items: ['repositories/sharing/overview', 'repositories/sharing/add-remote', 'repositories/sharing/push', 'repositories/sharing/pull']
            }
        ]
    },
}