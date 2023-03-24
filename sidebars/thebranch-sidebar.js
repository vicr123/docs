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
                link: {
                    type: "doc",
                    id: 'repositories/tracking/overview'
                },
                items: ['repositories/tracking/commit', 'repositories/tracking/checkout-old', 'repositories/tracking/undo']
            },
            {
                type: "category",
                label: "Sharing Changes",
                link: {
                    type: "doc",
                    id: 'repositories/sharing/overview'
                },
                items: ['repositories/sharing/add-remote', 'repositories/sharing/push', 'repositories/sharing/pull']
            },
            'repositories/conflicts'
        ]
    },
}