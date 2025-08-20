```dataviewjs
const parents = ["Probability Theory"];
const children = require(app.vault.adapter.basePath + "/scripts/dataview-bfs.js").dataviewBFS(parents, Link);

dv.table(["File", "Parents", "Status", "Created"],
    dv.pages('-"templates" AND -"meta" AND -[[Note Category]]')
    .where(p => children.has(p.file.name))
    // Additional conditions
    .where(p => p.state !== "done")
    .where(p => !p.sup.some(s => s instanceof Link && dv.page(s) && dv.page(s).file.name === "High Dimensional Probability"))
    .sort(p => -p.file.name)
    .map(p => [
        p.file.link, 
        p.sup,
        p.state,
        p.file.ctime.toFormat('yyyy-MM-dd')
        ])
)
```