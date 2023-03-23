module.exports = {
    thebeat: {
        "Getting Started": ['thebeat/intro', 'thebeat/install'],
        "Navigation": ['thebeat/library', 'thebeat/playing', 'thebeat/playlists'],
        "CDs": ['thebeat/playing-cds', 'thebeat/importing-cds', 'thebeat/burning-cds']
    },
    thebranch: {
        "Getting Started": ['thebranch/intro', 'thebranch/install', 'thebranch/welcome'],
        "Repositories": [
            {
                type: "category",
                label: "Opening a repository",
                items: ['thebranch/repositories/opening/disk', 'thebranch/repositories/opening/clone']
            },
            {
                type: "category",
                label: "Tracking Changes",
                items: ['thebranch/repositories/tracking/overview', 'thebranch/repositories/tracking/commit']
            },
            {
                type: "category",
                label: "Sharing Changes",
                items: ['thebranch/repositories/sharing/overview', 'thebranch/repositories/sharing/add-remote', 'thebranch/repositories/sharing/push', 'thebranch/repositories/sharing/pull']
            }
        ]
    },
    thefrisbee: {
        "Getting Started": ['thefrisbee/intro', 'thefrisbee/install'],
        "Navigation": ['thefrisbee/mainwindow'],
        "Working with Storage Media": ["thefrisbee/copy", "thefrisbee/erasedisk", "thefrisbee/smart"],
        "Working with Disk Images": ["thefrisbee/imagedisk"]
    },
};
