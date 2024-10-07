const parseEnv = () => {
    /* 
    read process.env
    parse when start prefix RSS_
    log to console
    */


const rssEnvVars = Object.keys(process.env)
.filter(key => key.startsWith('RSS_'))
.map(key => {
  const name = key.slice(4); 
  const value = process.env[key];
  return `RSS_${name}=${value}`;
});


console.log(rssEnvVars.join('; '));};

parseEnv();