//config file for bae
if(sumeru.BAE_VERSION){
  sumeru.config.database({
    dbname : 'XqFbPBtJpxXxGJmfSiYG',
    user: 'Te9PTccuFbyPYmPRHTrq7sNV',//bae 3.0 required
    password: 'nERdAvmTE2phT3pd8eA4Wjzd9lrvH8O8',//bae 3.0 required
  }); 
  sumeru.config({
    site_url : 'http://century.duapp.com/', //with tailing slash
    // site_url : '127.0.0.1/', //with tailing slash
  });
  sumeru.config.cluster({
      enable : false,
      dbname : 'rYByQnBTvxhhlAmlSkDX',
      user: 'Te9PTccuFbyPYmPRHTrq7sNV',
      password: 'nERdAvmTE2phT3pd8eA4Wjzd9lrvH8O8',
  });
}