import fs from "fs/promises";
import path from "path";

const textFilePath = path.join(import.meta.dirname, './homewrok.txt');
const textReading = async (path) =>{
    try{
        await fs.writeFile(path, 'Homewrok 01 in Basic Node ');
        await fs.appendFile(path, 'FINISHED!');
        const data = await fs.readFile (path , {encoding: "utf-8"});
        console.log(data)
    }
    catch(error){
        console.log('Something went wrong:', error)
    }
}

textReading(textFilePath);