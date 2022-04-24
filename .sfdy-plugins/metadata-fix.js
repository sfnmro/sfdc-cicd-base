module.exports = async ({ environment, log }, helpers) => {
  log('Metadata Fix for ENV: ' + environment)
  helpers.xmlTransformer('connectedApps/*', async (filename, fJson) => {
    delete fJson['oauthConfig']
    log('ConnectedApps fix complete')
  })
}