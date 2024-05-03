
const env:any = Object.create(null);

export function assignEnv (){
    for (const key  in process.env) {
        env[key] = process.env[key];
    }
}


export default env;
