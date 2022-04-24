module.exports = async ({ environment, log }, helpers) => {
    log('ENV: ' + environment)
    helpers.xmlTransformer('namedCredentials/*', async (filename, fJson) => {
      /*log(`Patching ${filename}...`)    
      if(filename === 'idontwanttochangethis.NamedCredential') return
  
      switch(environment) {
        case 'uat':
          fJson.endpoint = 'https://uat-endpoint.com/restservice'
          break
        case 'prod':
          fJson.endpoint = 'https://prod-endpoint.com/restservice'
          break
        default:
          fJson.endpoint = 'https://test-endpoint.com/restservice'
          break
        
        log('Done')    
      }*/
      log('Endpoints fix complete')
    })
  }