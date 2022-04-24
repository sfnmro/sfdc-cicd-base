module.exports = async ({ environment, log }, helpers) => {
  helpers.xmlTransformer('connectedApps/*', async (filename, fJson) => {
    delete fJson['oauthConfig']
    log('ConnectedApps fix complete')
  })
}