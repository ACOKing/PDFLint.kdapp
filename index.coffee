class PdflintMainView extends KDView

  constructor:(options = {}, data)->
    options.cssClass = 'pdflint main-view'
    super options, data

  viewAppended:->
    @addSubView new KDView
      partial  : "Welcome to Pdflint app!"
      cssClass : "welcome-view"
    @addSubView new KDButtonView
      title:     ' Goto PDFLint'
      callback:  ->
       location.assign 'http://vm-0.archervmperidot.kd.io/PDFLint'

class PdflintController extends AppController

  constructor:(options = {}, data)->
    options.view    = new PdflintMainView
    options.appInfo =
      name : "Pdflint"
      type : "application"

    super options, data

do ->

  # In live mode you can add your App view to window's appView
  if appView?

    view = new PdflintMainView
    appView.addSubView view

  else

    KD.registerAppClass PdflintController,
      name     : "Pdflint"
      routes   :
        "/:name?/Pdflint" : null
        "/:name?/archervmperidot/Apps/Pdflint" : null
      dockPath : "/archervmperidot/Apps/Pdflint"
      behavior : "application"