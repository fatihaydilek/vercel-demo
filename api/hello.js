export default (req, res) => {
    console.log('env variables', JSON.stringify(process.env))
    console.log('process', JSON.stringify(process.argv))
    try {
        var pathToModule = require.resolve('@thundra/core');
        console.log("pathtomodule", pathToModule);
    } catch (e) {
        console.log(e)
    }


    const path = require('child_process');
    console.log("path.execSync upper ", path.execSync('ls -p ..').toString())
    console.log("path.execSync opt/ ", path.execSync('ls -la /opt').toString())


    /*console.log("path.execSync root ", path.execSync('ls -la').toString())*/
    /*console.log("now__bridge ", path.execSync('cat now__bridge.js').toString())*/
    /*console.log( path.execSync('sed -n 1,90p now__launcher.js').toString())*/
    /*console.log("now__launcher ", path.execSync('cat now__launcher.js').toString())*/
    res.status(200).json({ text: 'Hello' })
    
}